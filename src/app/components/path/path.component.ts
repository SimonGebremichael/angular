import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: []
})
export class PathComponent implements OnInit {
  ngOnInit(): void {}

  PageName: any = null;
  constructor(private route: ActivatedRoute) {
    this.PageName = this.route.snapshot.url.join('');

    if(this.PageName == "/" || this.PageName == "") this.PageName = "transactions";
    else if(this.PageName != "transactions") this.PageName = "maintainance";
  }
}
