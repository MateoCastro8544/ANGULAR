import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  //rutas protegidas
  {path:'', component: PagesComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'product', component: ProductComponent},
  ]
}

  //{path: '', redirectTo: '/dashboard', pathMatch:'full'},
  // {path: '**', component: NotFoundComponent},
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    
  ]
})
export class PagesRoutingModule { }
