import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-handle',
  templateUrl: './command-handle.component.html',
  styleUrls: ['./command-handle.component.scss']
})
export class CommandHandleComponent implements OnInit {
commandListScreen = [
  {
    statusList: 1
  },
  {
    statusList: 2
  },
  {
    statusList: 3
  },
  {
    statusList: 4
  }
]
  constructor() { }

  ngOnInit() {
  }

}
