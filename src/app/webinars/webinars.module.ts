import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWebinarComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [CreateWebinarComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardModule
  ]
})
export class WebinarsModule { }
