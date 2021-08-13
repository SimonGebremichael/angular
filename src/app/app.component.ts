import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = [
    {
      title: "get eggs",
      type: "personal",
      level: "low",
    },
    {
      title: "buy lamps",
      type: "home",
      level: "medium",
    },
    {
      title: "Meet with jane tomorrow",
      type: "work",
      level: "medium",
    }
  ];

  remove(){
    alert("no done yet");
  }

}
