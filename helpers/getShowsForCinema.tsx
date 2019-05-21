import { ShowType } from "../components/Store";
import dayjs, { Dayjs } from "dayjs";

export default (cinemaId: String, shows: Array<ShowType>, fromDate: Dayjs) => {
  return shows.filter(
    show =>
      show.cinema === cinemaId && !dayjs(show.date).isBefore(fromDate, "day")
  );
};
