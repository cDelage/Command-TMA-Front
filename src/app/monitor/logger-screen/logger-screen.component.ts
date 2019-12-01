import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger-screen',
  templateUrl: './logger-screen.component.html',
  styleUrls: ['./logger-screen.component.scss']
})
export class LoggerScreenComponent implements OnInit {

  constructor() { }

  logList = [
    "2019-12-01 18:40:15.0 [DELETE] ADMIN Clear all order",
    "2019-12-01 18:39:53.0 [DELETE] ADMIN Clear status 4 order",
    "2019-12-01 17:32:57.0 [ERROR] ENTREPOT 1 ERROR order 30 to status 1 Demandé",
    "2019-12-01 17:31:37.0 [UPDATE] ENTREPOT 1 UPDATE order 80 to status 2 En préparation",
    "2019-12-01 17:30:44.0 [CREATE] Magasin_3 CREATE order 82 to status 1 Demandé",
    "2019-12-01 17:30:44.0 [CREATE] Magasin_3 CREATE order 81 to status 1 Demandé",
    "2019-12-01 17:30:44.0 [CREATE] Magasin_3 CREATE order 80 to status 1 Demandé",
    "2019-12-01 17:30:44.0 [CREATE] Magasin_3 CREATE order 79 to status 1 Demandé",
    "2019-12-01 17:30:44.0 [CREATE] Magasin_3 CREATE order 78 to status 1 Demandé",
    "2019-12-01 17:30:44.0 [CREATE] Magasin_3 CREATE order 77 to status 1 Demandé",
    "2019-12-01 17:30:44.0 [CREATE] Magasin_3 CREATE order 76 to status 1 Demandé",
    "2019-12-01 17:30:44.0 [CREATE] Magasin_3 CREATE order 75 to status 1 Demandé",
    "2019-12-01 17:30:44.0 [CREATE] Magasin_3 CREATE order 74 to status 1 Demandé",
    "2019-12-01 17:30:44.0 [CREATE] Magasin_3 CREATE order 73 to status 1 Demandé"
    ]
    
  ngOnInit() {
    console.log("LOGGER COMPONENT INIT");
  }

}
