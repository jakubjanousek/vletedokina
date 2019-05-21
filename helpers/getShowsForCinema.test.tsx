import getShowsForCinema from "./getShowsForCinema";
import dayjs from "dayjs";

const todayDate = "2019-05-15";

test("returns empty array if there are no movies at all", () => {
  const actual = getShowsForCinema("nonExist", [], dayjs(todayDate));
  expect(actual).toEqual([]);
});

test("returns empty array if there are no movies for the cinema", () => {
  const shows = [
    { title: "tst", date: "2020-05-15", cinema: "cinema1", time: "", url: "" }
  ];
  const actual = getShowsForCinema("nonExist", shows, dayjs(todayDate));
  expect(actual).toEqual([]);
});

test("return only movies that are any time today or in the future", () => {
  const shows = [
    {
      title: "tst",
      date: "2010-05-15",
      cinema: "cinema1",
      time: "19:00",
      url: ""
    },
    {
      title: "tst",
      date: todayDate,
      cinema: "cinema1",
      time: "08:00",
      url: ""
    },
    {
      title: "tst",
      date: todayDate,
      cinema: "cinema1",
      time: "19:00",
      url: ""
    },
    {
      title: "tst",
      date: todayDate,
      cinema: "differentCinema",
      time: "19:00",
      url: ""
    },
    {
      title: "tst",
      date: dayjs(todayDate)
        .add(7, "day")
        .format("YYYY-MM-DD"),
      cinema: "cinema1",
      time: "19:00",
      url: ""
    }
  ];

  const actual = getShowsForCinema(
    "cinema1",
    shows,
    dayjs(todayDate + " 15:00")
  );
  const expected = [
    {
      title: "tst",
      date: todayDate,
      cinema: "cinema1",
      time: "08:00",
      url: ""
    },
    {
      title: "tst",
      date: todayDate,
      cinema: "cinema1",
      time: "19:00",
      url: ""
    },
    {
      title: "tst",
      date: dayjs(todayDate)
        .add(7, "day")
        .format("YYYY-MM-DD"),
      cinema: "cinema1",
      time: "19:00",
      url: ""
    }
  ];
  expect(actual).toEqual(expected);
});
