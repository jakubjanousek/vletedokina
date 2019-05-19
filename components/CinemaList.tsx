import { cinemas } from "./Store";

export default () => (
  <>
    {Object.keys(cinemas).map(id => (
      <div key={id}>{cinemas[id].name}</div>
    ))}
  </>
);
