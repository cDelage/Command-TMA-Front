import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerScreenComponent } from './logger-screen/logger-screen.component';
import { LogEntryComponent } from './logger-screen/log-entry/log-entry.component';
import { MonitorScreenComponent } from './monitor-screen/monitor-screen.component';



@NgModule({
  declarations: [LoggerScreenComponent, LogEntryComponent, MonitorScreenComponent],
  imports: [
    CommonModule
  ]
})
export class MonitorModule { }
