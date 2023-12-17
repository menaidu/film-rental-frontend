import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './components/films/film/film.component';
import { FilmUpdateComponent } from './components/films/film-update/film-update.component';
import { FilmAddComponent } from './components/films/film-add/film-add.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmDetailsComponent } from './components/films/film-details/film-details.component';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { RouteGaurdService } from './services/route-gaurd.service';

const routes: Routes = [
  {
    path: '',
    component:HomepageComponent
  },
  {
    path: 'login',
    component: CustomerLoginComponent
  },
  {
    component:FilmComponent,
    path:'header/films',
    canActivate: [RouteGaurdService]
  },
  {
    path: 'header',
    component: HeaderComponent,
    canActivate: [RouteGaurdService]
  },
  {
    path: 'film/update/:id',
    component: FilmUpdateComponent,
    canActivate: [RouteGaurdService]
  },
  {
    path: 'film/add',
    component: FilmAddComponent,
    canActivate: [RouteGaurdService]
  },
  {
    path: 'header/film-list',
    component: FilmListComponent,
    canActivate: [RouteGaurdService]
  },
  {
    path: 'header/film/details',
    component: FilmDetailsComponent,
    canActivate: [RouteGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
