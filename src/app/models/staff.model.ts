import { Payment } from "./payment.model";
import { Rental } from "./rental.model";

export interface Staff {   
    staffId: number;   
    firstName: string;   
    lastName: string;   
    picture: string;   
    email: string;   
    active: number;   
    username: string;   
    password: string;   
    allPayments: Payment[];   
    rentals: Rental[];   
    lastUpdate: Date; 
}