import { Address } from "./address.model";
import { Payment } from "./payment.model";
import { Rental } from "./rental.model";
import { Store } from "./store.model";

export interface Customer{
    customerId: number;   
    firstName: string;   
    lastName: string;   
    email: string;   
    active: string;   
    createDate: Date;   
    allRentals: Rental[];   
    allPayments: Payment[];   
    address: Address;   
    store: Store;   
    lastUpdate: Date;
}