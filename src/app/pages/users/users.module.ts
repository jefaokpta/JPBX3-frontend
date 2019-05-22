import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UsersRoutingModule, routedComponents } from './users-routing.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    ThemeModule,
    UsersRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
    EditComponent
  ],
})
export class UsersModule { }
