import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule, routedComponents } from './start-routing.module';
import { StartComponent } from './start.component';
import { NbLayoutModule, NbCardModule } from '@nebular/theme';
import { ControllerComponent } from './controller/controller.component';

@NgModule({
  declarations: [StartComponent, ControllerComponent, routedComponents],
  imports: [
    CommonModule,
    StartRoutingModule,
    NbLayoutModule,
    NbCardModule
  ]
})
export class StartModule { }
