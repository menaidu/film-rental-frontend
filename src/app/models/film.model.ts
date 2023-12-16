import { Actor } from "./actor.model";
import { Category } from "./category.model";
import { Language } from "./language.model";
import { Store } from "./store.model";

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
    allActors: Actor[];
    allCategories: Category[];
    allStores: Store[];
    lastUpdate: Date;
}