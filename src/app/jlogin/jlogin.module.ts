import { LoginComponent } from './login/login.component';

import { JloginRoutingModule, routedComponents } from './jlogin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule } from '@nebular/theme';
import { FormsModule } from '../pages/forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    JloginRoutingModule,
    NbLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...routedComponents,
    LoginComponent,
  ],
})
export class JloginModule { }


