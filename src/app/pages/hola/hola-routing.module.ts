import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HolaComponent } from './hola.component';


const routes: Routes = [
{
  path: 'hola', //se pone el nombre de la rruta 
  component:HolaComponent // se pone la clase componete  de hola
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolaRoutingModule { }
