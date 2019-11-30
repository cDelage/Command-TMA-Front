import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger-screen',
  templateUrl: './logger-screen.component.html',
  styleUrls: ['./logger-screen.component.scss']
})
export class LoggerScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("LOGGER COMPONENT INIT");
  }

}
