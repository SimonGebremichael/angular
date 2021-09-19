import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { 
  faExclamationCircle as errIcon, 
  faFolderOpen as emptyIcon, 
  faSpinner as  loadingIcon, 
  faCalendarAlt as calIcon, 
  faSearch as searchIcon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  query: any;
  atm_list: any = [];
  aid_list: any = [];
  transactions: any;
  transactions2: any;
  icon: any;

  constructor(){
    this.transactions = [];
    this.query = {
      aidId: null,
      atmId: null,
      date0: 20201105,
      date1: 20201105,
      pan: null,
      txnSerial: null,
    }
    this.icon = {
      error:  errIcon,
      empty:  emptyIcon,
      loading: loadingIcon,
      calendar: calIcon,
      search: searchIcon,
    }
  }

  ngOnInit() {
    this.API("atmlist", true);
    this.API("aidlist", false);
    this.getTransactions(this.query);
  }

  API(url: String, type: boolean) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dev.cjpf4.net/um/api/jr/txn/" + url + "/v1");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4)
        type 
        ? (this.atm_list = JSON.parse(xhr.responseText))
        : (this.aid_list = JSON.parse(xhr.responseText).filter((e:any) => e.name != null))
    };
    xhr.send(); 
  }

  getTransactions(filter: object) {
    (<HTMLDivElement>document.getElementById("printLoading")).style.display = "block";
    (<HTMLDivElement>document.getElementById("prnt_empty")).style.display = "none";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://dev.cjpf4.net/um/api/jr/txn/v1");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        this.transactions = JSON.parse(xhr.responseText);
        this.transactions2 = JSON.parse(xhr.responseText);
        (<HTMLDivElement>document.getElementById("printLoading")).style.display = "none";
        if (this.transactions.length <= 0) (<HTMLDivElement>document.getElementById("prnt_empty")).style.display = "block";
        else (<HTMLDivElement>document.getElementById("prnt_empty")).style.display = "none";
      }
    };
    xhr.send(JSON.stringify(filter)); 
  }

  transactionsSearch() {
    this.transactions = [];

    var d0 = (<HTMLInputElement>document.getElementById("date0")).value;
    var d1 = (<HTMLInputElement>document.getElementById("date1")).value;
    var atm = (<HTMLInputElement>document.getElementById("atm_val")).value;
    var pan = (<HTMLInputElement>document.getElementById("pan")).value;
    var aid = (<HTMLInputElement>document.getElementById("aid_val")).value;
    var tsn = (<HTMLInputElement>document.getElementById("tsn")).value.replace(/\D/g, "");

    var filter = {
      date0: this.formate_date(d0, true, ""),
      date1: this.formate_date(d1, true, ""),
      atmId: this.checkIfNull(atm),
      pan: this.checkIfNull(pan),
      aidId: this.checkIfNull(aid),
      txnSerial: this.checkIfNull(tsn)
    };

    this.query = filter;
    this.getTransactions(filter);
  }

  filterSearch(): void {
    var text: String = (<HTMLInputElement>document.getElementById("search_t_results")).value;
    var dispaly_Arr: any = [];
    this.transactions2.forEach((e: any) => {
      var match = [
        e.pan,
        e.atmName,
        this.formate_date(e.devTime.toString().substring(0, 8), false, "/")
      ];

      e.lines.forEach((l: any) => {
        if (l.descr != undefined) match.push(l.descr);
        if (l.code != undefined) match.push(l.code);
      });

      for(var i=0;i<match.length; i++) {
        if(match[i].toLowerCase().search(text.toLowerCase().toString()) >= 0) {
          dispaly_Arr.push(e);
          i = match.length;
        }
      }
    });

    this.transactions = dispaly_Arr;
    if (this.transactions.length <= 0) (<HTMLDivElement>document.getElementById("prnt_empty")).style.display = "block";
    else (<HTMLDivElement>document.getElementById("prnt_empty")).style.display = "none";
  }

  printPage() {
    this.clearForPrintingPage(true);
    window.print();
    this.clearForPrintingPage(false);
  }

  export2Excel() {
    alert("Not Implemented");
  }

  clearForPrintingPage(view: boolean) {
    if(view) {
      (<HTMLTableElement>document.getElementsByTagName("table")[0]).style.fontSize = "10px";
      (<HTMLHeadElement>document.getElementsByTagName("header")[0]).style.display = "none";
      (<HTMLDivElement>document.getElementById("t_controls")).style.display = "none";
      (<HTMLDivElement>document.getElementById("t_header")).style.display = "none";
      (<HTMLDivElement>document.getElementById("navigation")).style.display = "none";
      (<HTMLDivElement>document.getElementById("main")).style.display = "block";
    } else{
      (<HTMLTableElement>document.getElementsByTagName("table")[0]).style.fontSize = "18px";
      (<HTMLHeadElement>document.getElementsByTagName("header")[0]).style.display = "flex";
      (<HTMLDivElement>document.getElementById("t_controls")).style.display = "grid";
      (<HTMLDivElement>document.getElementById("t_header")).style.display = "flex";
      (<HTMLDivElement>document.getElementById("navigation")).style.display = "block";
      (<HTMLDivElement>document.getElementById("main")).style.display = "grid";
    }
  }

  formate_date(d: any, sendable_type: any, seperate: any) {
    if (sendable_type) return d.split("-").join("");
    else {
      var y = d.toString().substring(0, 4);
      var m = d.toString().substring(4, 6);
      var d = d.toString().substring(6, 8);
  
      if (seperate == "-") return y + seperate + m + seperate + d;
      else return m + seperate + d + seperate + y;
    }
  }

  checkIfNull(value: String) {
    if(value == "0" || value == "") return null
    else return value
  }
}
