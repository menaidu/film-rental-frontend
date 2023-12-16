import { Category } from "./category.model";
import { Film } from "./film.model";

export interface FilmCategory{
    filmCategoryId: FilmCategory;
    category: Category;
    film: Film;
    lastUpdate: Date;
}