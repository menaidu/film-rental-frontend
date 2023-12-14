import { Language } from "./language.model";

export interface Film{
    filmId: number;
    title: string;
    description: string;
    releaseYear: string;
    language: Language;
    originalLanguage: Language;
    rentalDuration: Number;
    rentalRate: number;
    length: number;
    replacementCost: number;
    rating: string;
    specialFeature: string;
    // allActors: Actor[];
    // allCategories: Category[];
    // allStores: Stores[];
    lastUpdate: Date;
}