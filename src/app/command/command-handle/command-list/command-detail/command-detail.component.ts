import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-command-detail',
  templateUrl: './command-detail.component.html',
  styleUrls: ['./command-detail.component.scss']
})
export class CommandDetailComponent implements OnInit {

  @Input() idCommande : number;
  @Input() idMag : number;
  @Input() idEnt : number;

  constructor() { }

  ngOnInit() {
    console.log("init detail");
  }

}
