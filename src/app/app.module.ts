

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FilmComponent } from "./components/films/film/film.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { FilmAddComponent } from "./components/films/film-add/film-add.component";
import { FilmUpdateComponent } from "./components/films/film-update/film-update.component";
import { HeaderComponent } from "./components/header/header.component";
import { FilmListComponent } from "./components/films/film-list/film-list.component";
import { AdminLoginComponent } from "./components/admin-login/admin-login.component";
import { FilmDetailsComponent } from "./components/films/film-details/film-details.component";
import { CustomerLoginComponent } from "./components/customer-login/customer-login.component";
import { CustomerAddComponent } from "./components/customers/customer-add/customer-add.component";
import { CustomerUpdateComponent } from "./components/customers/customer-update/customer-update.component";
import { CustomerPaymentComponent } from "./components/customers/customer-payment/customer-payment.component";
import { CustomerFilmsComponent } from "./components/customers/customer-films/customer-films.component";
import { CustomerComponent } from "./components/customers/customer/customer.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";






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

    FilmListComponent,
    FilmDetailsComponent,

    CustomerComponent,
    CustomerAddComponent,
    CustomerFilmsComponent,
    CustomerPaymentComponent,
    CustomerUpdateComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
