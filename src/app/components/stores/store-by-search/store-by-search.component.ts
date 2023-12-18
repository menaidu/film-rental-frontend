import { Component } from '@angular/core';
import { StoreService } from '../../../services/stores.service';
 
@Component({
  selector: 'app-store-by-search',
  templateUrl: './store-by-search.component.html',
  styleUrl: './store-by-search.component.css'
})
export class StoreBySearchComponent {
  getStoreId : any;
   
    getCountry : string = "";
 
    constructor(private storeService : StoreService) {}
 
    viewAll() {
        this.getStoresByStoreId();
    }
 
    store:any ;
    getStoresByStoreId() {
        this.storeService.getStoresByStoreId(this.getStoreId).subscribe((response)=>{
          this.store = response;
          console.log(this.store);
        });
    }
 
}
