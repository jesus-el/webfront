import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HijoComponent } from './hijo/hijo.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'hijo',
    component: HijoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
