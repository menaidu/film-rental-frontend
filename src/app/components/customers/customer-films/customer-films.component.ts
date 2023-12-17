import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../../../models/film.model';
import { CustomerFilmsService } from '../../../services/customer-films.service';

@Component({
  selector: 'app-customer-films',
  templateUrl: './customer-films.component.html',
  styleUrl: './customer-films.component.css'
})
export class CustomerFilmsComponent implements OnInit {
  filmId:any;

  page:number = 1;

  count : number =0;

  tableSize:number = 7;

  tableSizes : any = [5, 7, 10, 15,24];

  id:number=0;

  constructor(private customerfilm: CustomerFilmsService,private router: Router){




  }

  

  ngOnInit(): void {

    this.getFilm()

  }

  onTableDataChange(event: any){

    this.page = event;

    this.filmId;

  }

  getFilm(){

    this.customerfilm.getFilm().subscribe((data:Film[])=>{

      console.log(data);

      this.filmId =data;

    })

  }

  onTableSizeChange(event : any) : void{

    this.tableSize = event.target.value;

    this.page =1;

    this.filmId;

  }

  getByStatus(){

    console.log(this.id);

    this.getfilmsbyid(this.id);

  }

  private getfilmsbyid(id:number){

    this.customerfilm.filmById(id).subscribe((data:Film)=>{

      console.log(data);

      this.filmId=data;

    })




  }

}
