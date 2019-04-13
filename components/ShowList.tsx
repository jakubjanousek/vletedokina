import Show from "./Show";
import { ShowType } from "./Store";

type Props = {
  shows: Array<ShowType>;
};

export default ({ shows }: Props) => (
  <>
    {shows.length ? (
      shows.map(show => (
        <Show
          title={show.title}
          date={show.date}
          time={show.time}
          key={show.date + show.time + show.title}
        />
      ))
    ) : (
      <div>There are now shows for this day</div>
    )}
  </>
);
