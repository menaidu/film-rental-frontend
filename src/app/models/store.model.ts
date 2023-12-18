import { Address } from "./address.model";
import { Customer } from "./customer.model";
import { Staff } from "./staff.model";

export interface Store{
    storeId: number;
    phone: string;
    lastUpdate: Date;
    allCustomers: Customer[];
    allStaff: Staff[];
    address: Address,
    manager:string;
}