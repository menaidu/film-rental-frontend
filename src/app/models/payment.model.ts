export interface Payment {   
    paymentId: number;   
    customerId: number;   
    rentalId: number;   
    staffId: number;   
    amount: number;   
    paymentDate: Date;   
    lastUpdate: Date; 
}