import dayjs from "dayjs";

import { shows, CinemaType, ShowType } from "./Store";
import Divider from "./Divider";
import CinemaList from "./CinemaList";
import getShowsForCinema from "../helpers/getShowsForCinema";
import Show from "./Show";

type Props = {
  cinema: CinemaType;
  id: String;
};

export default ({ cinema, id }: Props) => (
  <>
    <h2>{cinema.name}</h2>
    {cinema.url && (
      <a className="link program" href={cinema.url}>
        {cinema.url}
      </a>
    )}
    {getShowsForCinema(id, shows, dayjs()).map(show => (
      <Show
        title={show.title}
        date={show.date}
        time={show.time}
        url={show.url}
      />
    ))}
    <Divider />
  </>
);
