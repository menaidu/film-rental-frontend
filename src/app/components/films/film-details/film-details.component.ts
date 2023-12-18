import { Component } from '@angular/core';
import { FilmService } from '../../../services/film.service';
import { Film } from '../../../models/film.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css',
})
export class FilmDetailsComponent {
  film: Film = {
    filmId: 0,
    title: '',
    url:'',
    description: '',
    releaseYear: '',
    language: {
      languageId: 0,
      name: '',
      lastUpdate: new Date(),
    },
    originalLanguage: {
      languageId: 0,
      name: '',
      lastUpdate: new Date(),
    },
    rentalDuration: 0,
    rentalRate: 0,
    replacementCost: 0,
    rating: '',
    specialFeatures: '',
    length: 0,
    allActors:[],
    allCategories:[],
    lastUpdate: new Date(),
  };

  id: number = 1;

  // constructor(private filmService: FilmService, private router: Router) {}
  constructor(private filmService: FilmService, private router: Router, private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.getFilmById();
  }

  getFilmById() {
    this.filmService.getFilmById(this.id).subscribe((data) => {
      console.log(data);
      this.film = data;
    });
  }
}
