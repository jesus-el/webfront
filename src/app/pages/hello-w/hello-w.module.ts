import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloWRoutingModule } from './hello-w-routing.module';
import { HelloWComponent } from './hello-w.component';


@NgModule({
  declarations: [HelloWComponent],
  imports: [
    CommonModule,
    HelloWRoutingModule
  ]
})
export class HelloWModule { }
