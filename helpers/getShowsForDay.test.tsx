import dayjs from "dayjs";
import getShowsForDay from "./getShowsForDay";

test("returns empty array if there are no shows", () => {
  const actual = getShowsForDay([], dayjs());
  expect(actual).toEqual([]);
});

test("returns empty array if there are no movies for the day", () => {
  const actual = getShowsForDay(
    [{ title: "tst", date: "2019-05-15", cinema: "", time: "", url: "" }],
    dayjs("2019-05-14")
  );
  expect(actual).toEqual([]);
});

test("returns all movies for the day sorted by time", () => {
  const shows = [
    {
      title: "tst1",
      date: "2019-05-15",
      cinema: "",
      time: "21:30",
      url: ""
    },
    {
      title: "tst2",
      date: "2019-05-15",
      cinema: "",
      time: "19:00",
      url: ""
    },
    {
      title: "tst3",
      date: "2019-05-16",
      cinema: "",
      time: "",
      url: ""
    }
  ];

  const expected = [
    {
      title: "tst2",
      date: "2019-05-15",
      cinema: "",
      time: "19:00",
      url: ""
    },
    {
      title: "tst1",
      date: "2019-05-15",
      cinema: "",
      time: "21:30",
      url: ""
    }
  ];

  const actual = getShowsForDay(shows, dayjs("2019-05-15"));
  expect(actual).toEqual(expected);
});

test("returns movies without time first", () => {
  const shows = [
    {
      title: "tst1",
      date: "2019-05-15",
      cinema: "",
      time: "21:30",
      url: ""
    },
    {
      title: "tst2",
      date: "2019-05-15",
      cinema: "",
      time: "",
      url: ""
    }
  ];

  const expected = [
    {
      title: "tst2",
      date: "2019-05-15",
      cinema: "",
      time: "",
      url: ""
    },
    {
      title: "tst1",
      date: "2019-05-15",
      cinema: "",
      time: "21:30",
      url: ""
    }
  ];

  const actual = getShowsForDay(shows, dayjs("2019-05-15"));
  expect(actual).toEqual(expected);
});
