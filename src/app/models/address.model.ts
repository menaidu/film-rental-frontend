import { City } from "./city.model";
import { Customer } from "./customer.model";
import { Staff } from "./staff.model";
import { Store } from "./store.model";

export interface Address{
    addressId: number;
    streetAddress: string;
    address2: string;    
    district: string;    
    postalCode: string;    
    phone: string;    
    customers: Customer[];    
    staffList: Staff[];    
    lastUpdate: Date;    
    allStores: Store[];    
    city: City;
}