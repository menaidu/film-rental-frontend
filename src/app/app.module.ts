import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './components/films/film/film.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilmAddComponent } from './components/films/film-add/film-add.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FilmUpdateComponent } from './components/films/film-update/film-update.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomerAddComponent } from './components/customers/customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmAddComponent,
    HomepageComponent,
    FilmUpdateComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    HeaderComponent,
    CustomerComponent,
    CustomerAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    // NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
