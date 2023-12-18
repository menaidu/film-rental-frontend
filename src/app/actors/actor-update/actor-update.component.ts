import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorsAddService } from '../../services/actors-add.service';

 
@Component({
  selector: 'actor-update',
  templateUrl: './actor-update.component.html',
  styleUrl: './actor-update.component.css'
})
export class ActorUpdateComponent {
  constructor(private actorAddService: ActorsAddService, private router: Router,private activatedRoute:ActivatedRoute) { }
  newActor: any = {
    actorId: 0,
    firstName: '',
    lastName: '',
    lastUpdate: new Date(),
 
  }
 
 
  id: number = 1;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.newActor.actorId = params['actorId'];
      console.log(this.newActor.actorId);
      this.newActor.firstName = params['firstName'];
      this.newActor.lastName = params['lastName'];
        })
 
    // this.id = this.activatedRoute.snapshot.params['id'];
 
    // this.getActorData();
   
  }
 
  // getActorData(){
  //   this.actorAddService.getActorById(this.id).subscribe((res)=>{
  //     this.newActor = res;
  //   })
  // }
  updateLastName(): void {
    this.actorAddService.updateLastName(this.newActor, this.newActor.actorId).subscribe((Response) => {
      console.log(Response);
      // this.router.navigate(['actor']);
    });
  }
  updateFirstName(): void {
    console.log(this.newActor.firstName);
    this.actorAddService.updateFirstName(this.newActor, this.newActor.actorId).subscribe((Response) => {
      console.log(Response);
      // this.router.navigate(['actor']);
    });
  }
 
 
}
