import getShowsForCinema from "./getShowsForCinema";

const testShows = [
  { title: "tst", date: "2019-05-15", cinema: "cinema1", time: "", url: "" }
];

test("returns empty array if the cinema doesn't exist", () => {
  const actual = getShowsForCinema("nonExist", testShows);
  expect(actual).toEqual([]);
});
