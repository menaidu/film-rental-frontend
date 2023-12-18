import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../../../services/film.service';
import { Film } from '../../../models/film.model';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css'
})
export class FilmListComponent {
  // films: Film[] = [] ;
  films: any;

  title: string = '';

  year: string = '';

  category: string = '';

  language: string = '';

  constructor(
    private filmService: FilmService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadAllProducts();
  }

  loadAllProducts(): void {
    this.filmService.getAllFilm().subscribe((response) => {
      this.films = response;
    });
  }

  searchFilmByTitle(): void{
    this.filmService.getFilmByTitle(this.title).subscribe((response)=>{
      this.films = response;
    });
  }

  searchFilmByYear(): void{
    this.filmService.getFilmByReleaseYear(this.year).subscribe((response)=>{
      this.films = response;
    });
  }

  searchFilmByCategory(): void{
    this.filmService.getFilmByCategory(this.category).subscribe((response)=>{
      this.films = response;
    });
  }

  searchFilmByLanguage(): void{
    this.filmService.getFilmByLanguage(this.language).subscribe((response)=>{
      this.films = response;
    });
  }

  invokeView(id:number){
    this.router.navigate([`film/details`,id]);
  }

  selectedSearchType: string  = '';

 

  performSearch(){

  }

}
