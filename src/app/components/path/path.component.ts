import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { nav } from '../nav_list';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: []
})
export class PathComponent implements OnInit {
  ngOnInit(): void {}

  PageName: any = null;
  view: any = nav;

  constructor(private route: ActivatedRoute) {
    this.PageName = this.route.snapshot.url.join('');

    //check if 404
    if(this.view.nav.filter((e: any) => e.value == this.PageName).length <= 0) 
      this.PageName = "404"
  }

}
