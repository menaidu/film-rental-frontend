import { Actor } from "./actor.model";
import { Category } from "./category.model";
import { Language } from "./language.model";

export interface Film{
    filmId: number;
    title: string;
    url:string;
    description: string;
    releaseYear: string;
    language: Language;
    originalLanguage: Language;
    rentalDuration: Number;
    rentalRate: number;
    length: number;
    replacementCost: number;
    rating: string;
    specialFeatures: string;
    allActors: Actor[];
    allCategories: Category[];
    // allStores: Stores[];
    lastUpdate: Date;
}