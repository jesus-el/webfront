import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWComponent } from './hello-w.component';


const routes: Routes = [
{
  path: 'hello-w',
  component: HelloWComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloWRoutingModule { }
