import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent,
    CategoryComponent,
    ProductComponent
  ]
})
export class PagesModule { }
