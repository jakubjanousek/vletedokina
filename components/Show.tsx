type Props = {
  title: string;
  date: string;
  time: string;
};

export default (props: Props) => (
  <div>
    {props.date} {props.time} - {props.title}
  </div>
);
