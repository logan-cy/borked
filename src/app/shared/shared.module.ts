import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../layouts/default-layout/default-layout.component';
import { HeaderComponent } from '../components/header/header.component';



@NgModule({
  declarations: [DefaultLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    DefaultLayoutComponent
  ]
})
export class SharedModule { }
