import { Film } from "./film.model";
import { Store } from "./store.model";

export interface Inventory {   
    inventoryId: number;   
    film: Film;   
    store: Store; 
}