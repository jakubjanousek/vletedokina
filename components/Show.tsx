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

const renderDate = (date: Props["date"]) => (
  <>
    <strong>{dayjs(date).format("DD.MM")}</strong>
    &nbsp;-&nbsp;
  </>
);

const renderTime = (time: Props["time"]) => time && time + " - ";

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

export default (props: Props) => (
  <p>
    {props.date && renderDate(props.date)}
    {props.time && renderTime(props.time)}
    {renderTitle(props.title, props.url)}
    {props.cinema && renderCinema(props.cinema)}
  </p>
);
