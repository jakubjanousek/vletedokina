import Show from "./Show";
import { ShowType, cinemas } from "./Store";

type Props = {
  shows: Array<ShowType>;
};

const emptyMessages = [
  "V tento den se bohužel nic nepromítá",
  "O ničem tady nevíme"
];

export default ({ shows }: Props) => (
  <>
    {shows.length ? (
      shows.map(show => (
        <Show
          title={show.title}
          date={show.date}
          time={show.time}
          url={show.url}
          cinema={cinemas[show.cinema]}
          key={show.date + show.time + show.title}
        />
      ))
    ) : (
      <div>
        {emptyMessages[Math.floor(Math.random() * emptyMessages.length)]}
      </div>
    )}
  </>
);
