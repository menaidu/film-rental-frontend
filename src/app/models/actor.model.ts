import { FilmActor } from "./filmActor.model";

export interface Actor {
    actorId:number,
    url:string,
    firstName: string;
    lastName: string;
    filmActors: FilmActor[];
    lastUpdate: Date;
}