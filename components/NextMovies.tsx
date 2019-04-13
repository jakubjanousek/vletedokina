import dayjs from "dayjs";

import ShowList from "./ShowList";
import getShowsForDay from "../helpers/getShowsForDay";

import { shows } from "./Store";

export default () => (
  <div>
    <h2>Today:</h2>
    <ShowList shows={getShowsForDay(shows, dayjs())} />
  </div>
);
