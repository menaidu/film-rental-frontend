import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActorsAddService } from '../../services/actors-add.service';

 
@Component({
  selector: 'app-actor-search',
  templateUrl: './actor-search.component.html',
  styleUrl: './actor-search.component.css'
})
export class ActorSearchComponent {
  firstName: any;
  lastName: any;
  actors:any;
   constructor(private actorAddService: ActorsAddService, private router: Router) { }
 
 
 
ngOnInit(){
  this.getAllActors();
}
 
 
  getAllActors():void{
    this.actorAddService.getAllActors().subscribe((response)=>{
      console.log(response);
      this.actors = response;
    })
  }
 
  searchActorByFirstName(): void {
    console.log(this.firstName)
    this.actorAddService.getActorsByFirstName(this.firstName).subscribe(data => {
      console.log(this.firstName);
      console.log(data);
        this.actors = data;
    });
  }
 
  searchActorByLastName() {
    this.actorAddService.getActorsByLastName(this.lastName).subscribe(data => {
      console.log(data);
      this.actors = data;
    });
  }
}
