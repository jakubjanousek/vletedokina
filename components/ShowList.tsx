import Show from "./Show";
import { ShowType } from "./Store";

type Props = {
  shows: Array<ShowType>;
};

export default ({ shows }: Props) => (
  <>
    {shows.length ? (
      shows.map(show => (
        <Show show={show} key={show.date + show.time + show.title} />
      ))
    ) : (
      <div>There are now shows for this day</div>
    )}
  </>
);
