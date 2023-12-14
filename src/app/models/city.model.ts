import { Address } from "./address.model";
import { Country } from "./country.model";

export interface City{
    cityId: number;    
    cityName: string;    
    allAddresses: Address[];    
    country: Country;    
    lastUpdate: Date;
}