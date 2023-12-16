import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../../../services/film.service';
import { Router } from '@angular/router';
import { Language } from '../../../models/language.model';
import { LanguageService } from '../../../services/language.service';
import { Film } from '../../../models/film.model';

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrl: './film-add.component.css',
})
export class FilmAddComponent {
  newFilm: Film = {
    filmId: 0,
    title: '',
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
    lastUpdate: new Date(),
  };

  language: Language[] = [];
  constructor(
    private filmService: FilmService,
    private languageService: LanguageService,
    // private authorHttpService: AuthorHttpService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('in ngOnInit');
    // this.authorHttpService.getAllAuthors().subscribe((response)=>{
    //   console.log(response);
    //   this.allAuthors = response;
    // });

    this.languageService.getLanguages().subscribe((response) => {
      this.language = response;
    });
  }

  addFilm() {
    this.filmService.addFilm(this.newFilm).subscribe((response) => {
      console.log(response);
    });
  }
}
