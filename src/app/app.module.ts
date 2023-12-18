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
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { FilmDetailsComponent } from './components/films/film-details/film-details.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CustomerAddComponent } from './components/customers/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './components/customers/customer-update/customer-update.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomerPaymentComponent } from './components/customers/customer-payment/customer-payment.component';
import { CustomerFilmsComponent } from './components/customers/customer-films/customer-films.component';
import { ActorComponent } from './actors/actor/actor.component';
import { ActorAddComponent } from './actors/actor-add/actor-add.component';
import { ActorSearchComponent } from './actors/actor-search/actor-search.component';
import { ActorUpdateComponent } from './actors/actor-update/actor-update.component';
import { StoreComponent } from './components/stores/store/store.component';
import { StoreAddComponent } from './components/stores/store-add/store-add.component';
import { StoreBySearchComponent } from './components/stores/store-by-search/store-by-search.component';
import { StoreUpdateComponent } from './components/stores/store-update/store-update.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmAddComponent,
    HomepageComponent,
    FilmUpdateComponent,
    CustomerLoginComponent,
    HeaderComponent,
    FilmListComponent,
    FilmDetailsComponent,
    LogoutComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    CustomerComponent,
    CustomerPaymentComponent,
    CustomerFilmsComponent,
    ActorComponent,
    ActorAddComponent,
    ActorSearchComponent,
    ActorUpdateComponent,
    StoreComponent,
    StoreAddComponent,
    StoreBySearchComponent,
    StoreUpdateComponent
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
