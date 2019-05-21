import dayjs from "dayjs";
import { CinemaType } from "./Store";

type Props = {
  title: string;
  date: string;
  time: string;
  url?: string;
  cinema?: CinemaType;
};

const defaultProps = {
  url: null,
  cinema: null
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

export default (props: Props) => (
  <div>
    <strong>{dayjs(props.date).format("DD.MM")}</strong> - {props.time} -{" "}
    {renderTitle(props.title, props.url)}
    {props.cinema && renderCinema(props.cinema)}
  </div>
);
