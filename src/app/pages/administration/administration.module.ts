import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [RolesComponent,UsersComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
