import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersOverviewComponent } from './users-overview/users-overview.component';



const routes: Routes = [{
    path: '',
    component: UsersComponent,
    children: [{
      path: 'users',
      component: UsersOverviewComponent,
    }],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class UsersRoutingModule { }
  
  export const routedComponents = [
    UsersComponent,
    UsersOverviewComponent,
  ];