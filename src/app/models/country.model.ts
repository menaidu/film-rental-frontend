import { City } from "./city.model";

export interface Country{
    countryId: number;    
    countryName: string;    
    lastUpdate: Date;    
    allCities: City[];    
}