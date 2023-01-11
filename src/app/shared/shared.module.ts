import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    NavLeftComponent,
    SharedComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    NavLeftComponent,
    SharedComponent
  ]
})
export class SharedModule { }
