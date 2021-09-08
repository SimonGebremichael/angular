import { Component, OnInit } from '@angular/core';
import { faRandom, faSlidersH, faUsers, faCloud, faUser  } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css',]
})
export class NavigationComponent implements OnInit {

  view: any = {
    selected: "transactions",
    nav: [{
      name: "Transactions",
      value: "transactions",
      icon: faRandom,
    },
    {
      name: "Settings",
      value: "settings",
      icon: faSlidersH,
    },
    {
      name: "User management",
      value: "user",
      icon: faUsers,
    },
    {
      name: "ATM management",
      value: "atm",
      icon: faCloud,
    },
    {
      name: "My account",
      value: "account",
      icon: faUser,
    }],
  };

  constructor(private route: ActivatedRoute) { 
    this.view.selected = this.route.snapshot.url.join('');
    if(this.view.selected == "/" || this.view.selected == "") this.view.selected = "transactions";
  }

  ngOnInit(): void {}
}
