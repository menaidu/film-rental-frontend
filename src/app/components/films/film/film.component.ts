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
  films:any;
  allfilms:any
  page:number = 1;
  count : number =0;
  tableSize:number = 7;
  tableSizes : any = [5, 7, 10, 15];
  id:number=0;
  title:any
  constructor(private film: FilmService,private router: Router){

  }

  ngOnInit(): void {
    this.getFilm()
  }
  onTableDataChange(event: any){
    this.page = event;
    this.allfilms;
  }
  getFilm(){
    this.film.getFilm().subscribe((data:Film[])=>{
      console.log(data);
      this.allfilms =data;
    })
  }
  onTableSizeChange(event : any) : void{
    this.tableSize = event.target.value;
    this.page =1;
    this.allfilms;
  }
  getByStatus(){
    console.log(this.id);
    this.getfilmsbyid(this.id);
  }
  private getfilmsbyid(id:number){
    this.film.filmById(id).subscribe((data:Film)=>{
      console.log(data);
      this.allfilms=data;
    })
  }
  invokeUpdate(id:number){
    this.router.navigate(['films/update',id]);

  }

  getFilmByTitle(){
    this.film.getFilmByTitle(this.title).subscribe(data=>{
      console.log(data);
      this.allfilms=data;
    })
  }
}
