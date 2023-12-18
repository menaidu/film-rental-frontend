import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActorsAddService } from '../../services/actors-add.service';
import { Actor } from '../../models/actor.model';

 
@Component({
  selector: 'actor',
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent  {
allActors: Actor[]=[];
selectedActor:Actor[]| null=null;
actorId!:number;
firstName!:string;
lastName!:string;
 
searchResultsTable:any[]=[]
searchResults: any[] = []; // assuming it's an array of search results
displayResultsInTable = false;
 
 
constructor(private actorAddService: ActorsAddService, private router: Router) { }
 
ngOnInit(){
  this.getAllactors();
}
back() {
  this.selectedActor=null;
  }
 
 getAllactors(){
  this.actorAddService.getAllActors().subscribe((response:Actor[])=>{
    this.allActors=response;
  });
 }
 
 updateActor(actorId:number,firstName:string,lastName:string,){
  console.log(firstName,lastName);
 
  this.router.navigate(['actor/update'],{queryParams:{actorId,firstName,lastName}});
 }
 
 searchActorByFirstName(){
  this.actorAddService.getActorsByFirstName(this.firstName).subscribe((response:Actor[])=>{
    this.selectedActor=response;
  })
 }
 
 searchActorByLastName(){
  this.actorAddService.getActorsByLastName(this.lastName).subscribe((response:Actor[])=>{
    this.selectedActor=response;
  })
 }
 
 getTopTenActorsByFilmCount(){
  this.actorAddService.getTopTenActorsByFilmCount().subscribe((response:any[])=>{
    this.selectedActor=response;    
  })
 }
 
 assignFilmToActor(actorId:number){
  this.router.navigate(['actor-assignfilm'],{queryParams:{actorId}})
 }
 
 
 
// getActorById() {
// this.actorAddService(getActorById).subscribe((Response:ActorModel)=>{
//   this.selectedActor=response;
// });
// }
 
// addNewActor(actorId:number, actorName:string){
//   this.router.navigate(['edit-actor'],{queryParams:{actorId,actorName}});
// }
}
