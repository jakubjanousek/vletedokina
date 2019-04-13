import { ShowType, shows } from "./Store";

type Props = {
  show: ShowType;
};

export default ({ show }: Props) => (
  <div>
    {show.date} {show.time} - {show.title}
  </div>
);
