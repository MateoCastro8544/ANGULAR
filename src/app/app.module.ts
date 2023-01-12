import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
      AppComponent,
      PagesComponent,
      NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      PagesModule,
      AuthModule,
      HttpClientModule,
  ]
})
export class AppModule { }
