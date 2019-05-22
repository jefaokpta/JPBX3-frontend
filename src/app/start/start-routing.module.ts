import { ControllerComponent } from './controller/controller.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { patch } from '@nebular/theme';
import { StartComponent } from './start.component';

const routes: Routes = [{
  path: '', component: StartComponent,
  children: [{
    path: '', component: ControllerComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }

export const routedComponents = [
  ControllerComponent
]
