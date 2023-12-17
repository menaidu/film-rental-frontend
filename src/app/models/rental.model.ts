import { Payment } from "./payment.model";

export interface Rental {   
    rentalId: number;   
    rentalDate: Date;   
    returnDate: Date;  
    payments: Payment[];   
    lastUpdate: Date; 
}