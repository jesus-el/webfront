import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolaRoutingModule } from './hola-routing.module';
import { HolaComponent } from './hola.component';// esto es automatico


@NgModule({
  declarations: [HolaComponent], // se inporta el componetete de hola 
  imports: [
    CommonModule,
    HolaRoutingModule
  ]
})
export class HolaModule { }
