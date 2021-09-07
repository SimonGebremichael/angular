import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-maintainance',
  templateUrl: './maintainance.component.html',
  styleUrls: []
})
export class MaintainanceComponent implements OnInit {
  PageName: any = null;
  constructor(
    private route: ActivatedRoute,
  ) {
    this.PageName = this.route.snapshot.url.join('');
  }

  ngOnInit() {
  }
}
