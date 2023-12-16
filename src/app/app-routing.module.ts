import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './components/films/film/film.component';
import { FilmUpdateComponent } from './components/films/film-update/film-update.component';
import { FilmAddComponent } from './components/films/film-add/film-add.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmDetailsComponent } from './components/films/film-details/film-details.component';
import { FilmListComponent } from './components/films/film-list/film-list.component';

const routes: Routes = [
  {
    path: '',
    component:HomepageComponent
  },
  {
    path: 'customer/login',
    component: CustomerLoginComponent
  },
  {
    path:'admin/login',
    component: AdminLoginComponent
  },
  {
    component:FilmComponent,
    path:'header/films'
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'film/update/:id',
    component: FilmUpdateComponent
  },
  {
    path: 'film/add',
    component: FilmAddComponent
  },
  {
    path: 'header/film-list',
    component: FilmListComponent
  },
  {
    path: 'header/film/details',
    component: FilmDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
