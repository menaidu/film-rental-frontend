import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../../models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{

  customers: any;
  id: number=0;
  lastName:any;
  firstName:any;
  email:any;
  phone:any;

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

}