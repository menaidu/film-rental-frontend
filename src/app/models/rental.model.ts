import { Customer } from "./customer.model";
import { Inventory } from "./inventory.model";
import { Payment } from "./payment.model";
import { Staff } from "./staff.model";

export interface Rental {   
    rentalId: number;   
    rentalDate: Date;  
    inventory: Inventory;
    customer: Customer; 
    returnDate: Date;  
    staff: Staff;
    payments: Payment[];   
    lastUpdate: Date; 
}