import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandHandleComponent } from './command-handle/command-handle.component';
import { CommandGeneratorComponent } from './command-generator/command-generator.component';



@NgModule({
  declarations: [CommandHandleComponent, CommandGeneratorComponent],
  imports: [
    CommonModule
  ]
})
export class CommandModule {}
