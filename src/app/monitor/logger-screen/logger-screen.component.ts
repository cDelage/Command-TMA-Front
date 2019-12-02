import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logger-screen',
  templateUrl: './logger-screen.component.html',
  styleUrls: ['./logger-screen.component.scss']
})
export class LoggerScreenComponent implements OnInit {

  private ws_url = 'http://127.0.0.1:8080/tma/api/orderlog/read' ;

  constructor(private http: HttpClient) { }

  private logList = [];

  ngOnInit() {
   this.getLogList().subscribe(data => 
    this.logList=data.LOGS
    );
    }

  getLogList(): Observable<any>{
    return this.http.get(this.ws_url);
  }

}
