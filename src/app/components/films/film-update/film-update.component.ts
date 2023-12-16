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
  // id: any;
  // filmIdDetails: any;
  // dataForm: FormGroup;
  // test: any;
  // language: any[] = [];
  // constructor(
  //   private filmService: FilmService,
  //   private route: ActivatedRoute,
  //   private formBuilder: FormBuilder,
  //   private languageservice: LanguageService
  // ) {
  //   this.dataForm = this.formBuilder.group({
  //     filmId: ['', Validators.required],
  //     title: ['', Validators.required],
  //     description: ['', Validators.required],
  //     releaseYear: ['', Validators.required],
  //     languageId: ['', Validators.required],
  //     originalLanguage: ['', Validators.required],
  //     rentalDuration: ['', Validators.required],
  //     rentalRate: ['', Validators.required],
  //     length: ['', Validators.required],
  //     replacementCost: ['', Validators.required],
  //     rating: ['', Validators.required],
  //     specialFeatures: ['', Validators.required],
  //     lastUpdate: ['', Validators.required],
  //   });
  // }
  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];
  //   console.log("helloo "+ this.id);

  //   this.patchValues();
  //   this.languageservice.getLanguages().subscribe((response) => {
  //     this.language = response;
  //   });
  // }
  // patchValues(): void {
  //   this.filmService.filmById(this.id).subscribe((response) => {
  //     this.filmIdDetails = response;
  //     this.setvalues();
  //   });
  // }
  // setvalues(): void {
  //   if (this.filmIdDetails) {
  //     this.dataForm.patchValue({
  //       filmId: this.filmIdDetails.at(0).filmId,
  //       title: this.filmIdDetails.at(0).title,
  //       description: this.filmIdDetails.at(0).description,
  //       releaseYear: this.filmIdDetails.at(0).releaseYear,
  //       languageId: this.filmIdDetails.at(0).language.languageId,
  //       originalLanguage: this.filmIdDetails.at(0).originalLanguage,
  //       rentalDuration: this.filmIdDetails.at(0).rentalDuration,
  //       rentalRate: this.filmIdDetails.at(0).rentalRate,
  //       length: this.filmIdDetails.at(0).length,
  //       replacementCost: this.filmIdDetails.at(0).replacementCost,
  //       rating: this.filmIdDetails.at(0).rating,
  //       specialFeatures: this.filmIdDetails.at(0).specialFeatures,
  //       lastUpdate: this.filmIdDetails.at(0).lastUpdate,
  //     });
  //   }
  // }
  // onSubmit() {
  //   const formData = this.dataForm.value;
  //   const Id = formData.languageId;
  //   const data = this.language.find((dirt) => dirt.Id === Id); //find by id
  //   const response = {
  //     filmId: formData.filmId,
  //     title: formData.title,
  //     description: formData.description,
  //     releaseYear: formData.releaseYear,
  //     language: data,
  //     originalLanguage: '',
  //     rentalDuration: formData.rentalDuration,
  //     rentalRate: formData.rentalRate,
  //     length: formData.length,
  //     replacementCost: formData.replacementCost,
  //     rating: formData.rating,
  //     specialFeatures: formData.specialFeatures,
  //     lastUpdate: formData.lastUpdate,
  //   };
  //   console.log(response);
  //   this.filmService.updateFilm(response, this.id).subscribe({});
  // }

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
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  id: number = 0;

  ngOnInit() {
    // this.authorHttpService.getAllAuthors().subscribe((response)=>{
    //   console.log(response);
    //   this.allAuthors = response;
    // });

    this.id = this.activatedRouter.snapshot.params['id'];
    console.log("helloo "+ this.id);

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
}
