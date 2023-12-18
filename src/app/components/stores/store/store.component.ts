import { Component, OnInit } from '@angular/core';
import { Store } from '../../../models/store.model';
import { StoreService } from '../../../services/stores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit{

  stores: any;
  id:number = 0;
  phone:any;
  constructor(private store: StoreService, private router:Router) {
 
  }
  ngOnInit(): void {
    this.getStore()
  }
 
  getStore(){
    this.store.getStore().subscribe((data:Store[])=>{
      this.stores = data;
    })
  }
}
