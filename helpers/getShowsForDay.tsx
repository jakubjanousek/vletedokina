import { ShowType } from "../components/Store";
import dayjs, { Dayjs } from "dayjs";

export default (shows: Array<ShowType>, requestedDay: Dayjs) =>
  shows
    .filter(show => requestedDay.isSame(dayjs(show.date, "day")))
    .sort((a, b) => (a.time < b.time ? -1 : 1));
