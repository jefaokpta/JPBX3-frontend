import { LoginComponent } from './login/login.component';
import { JloginComponent } from './jlogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [{
    path: '',
    component: JloginComponent,
    children: [{
      path: 'login',
      component: LoginComponent,
    }],
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class JloginRoutingModule { }

  export const routedComponents = [
    JloginComponent,
    LoginComponent,
  ];
