import { FilmActor } from "./filmActor.model";

export interface Actor {
    firstName: string;
    lastName: string;
    filmActors: FilmActor[];
    lastUpdate: Date;
}