import { Component } from '@angular/core';
import { Address } from '../../../models/address.model';
import { StoreService } from '../../../services/stores.service';

 
@Component({
  selector: 'app-store-update',
  templateUrl: './store-update.component.html',
  styleUrl: './store-update.component.css'
})
export class StoreUpdateComponent {
 
  constructor(private storesService: StoreService){}
 
  newStore: any = {
    customerId: 0,  
    firstName: '',
    lastName: '',  
    email: '',
    active: '',
    createDate: new Date(),  
    address: {
 
      addressId: 0,
    streetAddress: '',
    address2: '',
    district: '',  
    postalCode: '',  
    phone: '',        
    lastUpdate: new Date(),      
    city: {
      cityName: '',
      country:{
        countryName: ''
      }
    },
 
    },
    store: {
       storeId: ''
    },
    lastUpdate: new Date()
  };
 
  address: Address[]=[];
 
  id:number=1;
 
  selectedAddressId: number | null = null;
 
  ngOnInit() {
  }
 
  updatephone():void{
    this.storesService.updatePhone(this.newStore, this.id).subscribe((Response: any)=>{
      alert("updated your phone");
      console.log(Response);
    });
   
  }
  updateaddress():void{
    this.storesService.updateAddress(this.newStore, this.id).subscribe((Response: any)=>{
      alert("updated your address");
      console.log(Response);
    });
   
  }
}