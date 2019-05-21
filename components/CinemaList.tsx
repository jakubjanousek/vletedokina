import { cinemas } from "./Store";
import Cinema from "./Cinema";

export default () => (
  <>
    {Object.keys(cinemas).map(id => (
      <Cinema cinema={cinemas[id]} id={id} key={id} />
    ))}
  </>
);
