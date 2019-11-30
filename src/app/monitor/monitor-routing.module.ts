import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggerScreenComponent } from './logger-screen/logger-screen.component';
import { MonitorScreenComponent } from './monitor-screen/monitor-screen.component';

const monitorRoutes: Routes = [
    {
      path: 'loggerscreen',
      component: LoggerScreenComponent
    },
    {
      path: 'monitorscreen',
      component: MonitorScreenComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(monitorRoutes)],
    exports: [RouterModule]
  })
  export class MonitorRoutingModule { }
  