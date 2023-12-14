import { Actor } from "./actor.model";
import { Film } from "./film.model";

export interface FilmActor {
    filmActorId: FilmActor;
    actor: Actor;
    film: Film;
    lastUpdate: Date;
}