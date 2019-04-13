// TODO: quick script. Consider refactoring & creating tests if going live
// TODO: check caching & why is there delay

const request = require("superagent");
const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");
const dayjs = require("dayjs");

const dirName = "data";

const removePastShows = shows => {
  const today = dayjs();
  return shows.filter(show => {
    console.log(show.date);
    return !dayjs(show.date).isBefore(today, "day");
  });
};

const useSlugAsKey = entries => {
  const keyedEntries = {};
  entries.map(entry => {
    keyedEntries[entry.slug] = entry;
    delete keyedEntries[entry.slug].slug;
  });
  return keyedEntries;
};

if (!fs.existsSync(dirName)) {
  fs.mkdirSync(dirName);
}

console.log("Downloading shows");
request
  .get(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRWMbCxxIaLwUO_HDAWqX6oF87SnMuhwQBxNVUVNCB7nApFr2XYg2P8aWsKQSbrhhaBidKINyD22zm1/pub?output=csv"
  )
  .end((err, res) => {
    csv()
      .fromString(res.text)
      .then(removePastShows)
      .then(shows => {
        fs.writeFileSync(
          path.join(__dirname, "../data", "shows.json"),
          JSON.stringify(shows)
        );
        console.log("Downloaded " + shows.length + " shows");
      });
  });

console.log("Downloading cinemas");
request
  .get(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRWMbCxxIaLwUO_HDAWqX6oF87SnMuhwQBxNVUVNCB7nApFr2XYg2P8aWsKQSbrhhaBidKINyD22zm1/pub?gid=1522630003&single=true&output=csv"
  )
  .end((err, res) => {
    csv()
      .fromString(res.text)
      .then(useSlugAsKey)
      .then(cinemas => {
        fs.writeFileSync(
          path.join(__dirname, "../data", "cinemas.json"),
          JSON.stringify(cinemas)
        );
        console.log("Downloaded " + Object.keys(cinemas).length + " cinemas");
      });
  });
