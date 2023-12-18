import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../../models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  // customers: any;


  customers: any = {
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


  // customers: Customer[]=[];
  id: number=0;
  lastName:string ='';
  firstName:string = '';
  email:string = '';
  phone:string = '';

  selectedSearchType: any;

  constructor(private customer: CustomerService,private router: Router){
  }

  ngOnInit(): void {
    this.getCustomer()
  }

  getCustomer(){
    this.customer.getCustomer().subscribe((data:Customer[])=>{
      this.customers = data;
    })
  }

getCustomerByLastName() {
  this.customer.getCustomerByLastName(this.lastName).subscribe(data => {
    this.customers = data;
    console.log(this.customers);
  });
}

getCustomerByFirstName() {
  this.customer.getCustomerByFirstName(this.firstName).subscribe(data => {
    this.customers = data;
    console.log(this.customers);
  });
}

getCustomerByEmail() {
  this.customer.getCustomerByEmail(this.email).subscribe(data => {
    this.customers = data;
    console.log(this.customers);
  });
}

getCustomerByPhone() {
  this.customer.getCustomerByPhone(this.phone).subscribe(data => {
    console.log(data);
    this.customers = data;
  });
}

findByActive():void{
  this.customer.findByActive(this.customers).subscribe((Response)=>{
    console.log(Response);
  })
}

findByInActive():void{
  this.customer.findByInActive(this.customers).subscribe((Response)=>{
    console.log(Response);
  })
}

}


