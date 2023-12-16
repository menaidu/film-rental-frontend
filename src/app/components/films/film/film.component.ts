import { Component } from '@angular/core';
import { Film } from '../../../models/film.model';
import { FilmService } from '../../../services/film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {
  allfilms:Film[] = [];

  constructor(private film: FilmService,private router: Router){}

  ngOnInit(): void {
    this.getAllFilm()
  }

  getAllFilm(){
    this.film.getAllFilm().subscribe((data:Film[])=>{
      console.log(data);
      this.allfilms =data;
    })
  }

  invokeUpdate(id:number){
    this.router.navigate([`film/update`,id]);
  }

}
