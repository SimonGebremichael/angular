import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { nav } from '../nav_list';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css',]
})
export class NavigationComponent implements OnInit {

  view: any = nav;

  constructor(private route: ActivatedRoute) { 
    this.view.selected = this.route.snapshot.url.join('');
    if(this.view.selected == "/" || this.view.selected == "") this.view.selected = "transactions";
  }

  ngOnInit(): void {}
}
