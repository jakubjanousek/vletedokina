import dayjs from "dayjs";
import { CinemaType } from "./Store";

type Props = {
  title: string;
  date: string;
  time?: string;
  url?: string;
  cinema?: CinemaType;
};

const defaultProps = {
  url: null,
  cinema: null,
  time: null
};

const renderTitle = (title: Props["title"], url: Props["url"]) =>
  url ? (
    <a href={url} target="_blank">
      {title}
    </a>
  ) : (
    title
  );

const renderCinema = (cinema: Props["cinema"]) => (
  <>
    &nbsp;@&nbsp;
    {cinema.url ? (
      <a href={cinema.url} target="_blank">
        {cinema.name}
      </a>
    ) : (
      <strong>{cinema.name}</strong>
    )}
  </>
);

const renderDateTime = (date: Props["date"], time: Props["time"]) => (
  <>
    <strong>{dayjs(date).format("DD.MM")}</strong> - {time && time + " - "}
  </>
);

export default (props: Props) => (
  <p>
    {renderDateTime(props.date, props.time)}
    {renderTitle(props.title, props.url)}
    {props.cinema && renderCinema(props.cinema)}
  </p>
);
