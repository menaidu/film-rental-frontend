import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Language } from '../../../models/language.model';
import { Address } from '../../../models/address.model';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrl: './customer-update.component.css'
})
export class CustomerUpdateComponent {

  constructor(private customerService: CustomerService){}

  newCustomer: any = {
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

  updateLastName():void{
    this.customerService.updateLastName(this.newCustomer, this.id).subscribe((Response)=>{
      console.log(Response);
    });
    
  }

  updateFirstName():void{
    this.customerService.updateFirstName(this.newCustomer,this.id).subscribe((Response)=>{
      console.log(Response);
    });
  }

  updateEmail():void{
    this.customerService.updateEmail(this.newCustomer,this.id).subscribe((Response)=>{
      console.log(Response);
    });
  }

  updatePhone():void{
    this.customerService.updatePhone(this.newCustomer,this.id).subscribe((Response)=>{
      console.log(Response);
    });
  }

  // updateAddress():void{
  //   this.customerService.updateAddress(this.newCustomer, this.id).subscribe((Response)=>{
  //     console.log(Response);
  //   })
  // }

  updateAddress(): void {
    if (this.selectedAddressId !== null) {
      this.newCustomer.address.addressId = this.selectedAddressId;
      this.customerService.updateAddress(this.newCustomer, this.newCustomer.address.addressId).subscribe((response) => {
        console.log(response);
      });
    } else {
      console.log('Please select an address.');
    }
  }




}
