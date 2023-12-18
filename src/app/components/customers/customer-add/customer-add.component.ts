import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent {

  serialId: number = 0;
  constructor(private customerService: CustomerService) {

  }

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

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;
      // Here you can handle the form data submission or call your service
      console.log(formData); // Check the form data in the console
      this.customerService.addCustomer(this.newCustomer).subscribe((response) => {
        console.log(response);
      })
    } else {
      // Handle form validation errors if needed
      console.log('Form is invalid');
    }
  }

}


