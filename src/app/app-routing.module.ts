import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { CreateWebinarComponent } from './webinars/create/create.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },

  { path: "webinars/create", component: CreateWebinarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
