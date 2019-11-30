import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandGeneratorComponent } from './command-generator/command-generator.component';
import { CommandHandleComponent } from './command-handle/command-handle.component';

const commandRoutes: Routes = [
    {
      path: 'commandgenerator',
      component: CommandGeneratorComponent
    },
    {
      path: 'commandhandle',
      component: CommandHandleComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(commandRoutes)],
    exports: [RouterModule]
  })
  export class CommandRoutingModule { }
