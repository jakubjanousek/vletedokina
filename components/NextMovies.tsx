import dayjs from "dayjs";

import ShowList from "./ShowList";
import getShowsForDay from "../helpers/getShowsForDay";

import { shows } from "./Store";

export default () => (
  <div>
    <h2>Dnes:</h2>
    <ShowList shows={getShowsForDay(shows, dayjs())} />
    <br />
    <br />

    <h2>Zítra:</h2>
    <ShowList shows={getShowsForDay(shows, dayjs().add(1, "day"))} />
    <br />
    <br />

    <h2>Pozítří:</h2>
    <ShowList shows={getShowsForDay(shows, dayjs().add(2, "day"))} />
  </div>
);
