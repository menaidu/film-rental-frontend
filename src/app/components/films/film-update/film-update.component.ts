import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../../../services/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { Language } from '../../../models/language.model';
import { Film } from '../../../models/film.model';

@Component({
  selector: 'app-film-update',
  templateUrl: './film-update.component.html',
  styleUrl: './film-update.component.css',
})
export class FilmUpdateComponent {
  newFilm: Film = {
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

  language: Language[] = [];
  constructor(
    private filmService: FilmService,
    private languageService: LanguageService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  id: number = 0;

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.params['id'];

    this.languageService.getLanguages().subscribe((response) => {
      this.language = response;
    });

    this.getFimData();
  }

  getFimData(): void{
    this.filmService.getFilmById(this.id).subscribe((response)=>{
      this.newFilm = response;
    });
  }

  updateFilmTitle(): void{
    this.filmService.updateFilmTitle(this.newFilm, this.id).subscribe((response) => {
      console.log(response);
    });
  }

  updateFilmReleaseYear(): void{
    this.filmService.updateFilmReleaseYear(this.newFilm, this.id).subscribe((response)=>{
      console.log(response);
    });
  }

  updateFilmRentalDurtion(): void{
    this.filmService.updateFilmRentalDurtion(this.newFilm, this.id).subscribe((response)=>{
      console.log(response);
    });
  }

  updateFilmRentalRate(): void{
    this.filmService.updateFilmRentalRate(this.newFilm, this.id).subscribe((response)=>{
      console.log(response);
    });
  }

  updateFilmRating(): void{
    this.filmService.updateFilmRating(this.newFilm, this.id).subscribe((response)=>{
      console.log(response);
    });
  }

  updateFilmLanguage(): void{
    this.filmService.updateFilmLanguage(this.newFilm, this.id).subscribe((response)=>{
      console.log(response);
    });
  }

  updateFilmCategory(): void{
    this.filmService.updateFilmCategory(this.newFilm, this.id).subscribe((response)=>{
      console.log(response);
    });
  }

  goBack(){
    
  }
}
