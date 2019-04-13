import cinemas from "../data/cinemas.json";
import shows from "../data/shows.json";

// TODO: add proper json validation if we continue using it
export type ShowType = typeof shows[0];
export type CinemaType = typeof cinemas["regina"];

export { cinemas, shows };
