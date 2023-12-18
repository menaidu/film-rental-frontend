import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { StoreService } from '../../../services/stores.service';

 
 
@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrl: './store-add.component.css'
})
export class StoreAddComponent {
 
  serialId: number = 0;
  constructor(private storeService: StoreService) {
 
  }
 
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
    lastUpdate: new Date()
  };
 
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;
      console.log(formData);
      this.storeService.addStore(this.newStore).subscribe((response) => {
        console.log(response);
      })
    } else {
      console.log('Form is invalid');
    }
  }
 
}