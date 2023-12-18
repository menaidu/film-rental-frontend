import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActorsAddService } from '../../services/actors-add.service';

 
 
@Component({
  selector: 'app-actor-add',
  templateUrl: './actor-add.component.html',
  styleUrl: './actor-add.component.css'
})
 
export class ActorAddComponent {
 
 
  constructor(private actorAddService:ActorsAddService, private router:Router){}
  newActor= {
    actorId:0,
    firstName:'',
    lastName:'',
    filmActors:[],
    lastUpdate: new Date()
  }
 
addActor() {
this.actorAddService.addActor(this.newActor).subscribe((response: string)=>console.log(response));
// this.router.navigate(['actor']);
}
}
