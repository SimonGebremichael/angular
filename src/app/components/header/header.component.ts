import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<header>'+
    '<div id="user_cont"></div>'+
    '<div id="page_title"></div>'+
    '<div id="options_item"></div></header>',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  title = 'Angular Todo List';

  constructor() { }

  ngOnInit(): void {
  }

}
