import cinemas from "../data/cinemas.json";
import shows from "../data/shows.json";

export type ShowType = typeof shows[0];
export type CinemasType = typeof cinemas;

export { cinemas, shows };
