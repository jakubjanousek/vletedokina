import dynamic from "next/dynamic";

import HTMLHead from "../components/HTMLHead";
import PageHeader from "../components/PageHeader";
import CinemaList from "../components/CinemaList";
import Divider from "../components/Divider";

import "../styles/style.scss";

const NextMovies = dynamic(import("../components/NextMovies"), {
  ssr: false,
  loading: () => (
    <>
      <p>Hledáme pro vás nejbližší filmy...</p>
    </>
  )
});

const Home = () => {
  return (
    <div className="main">
      <HTMLHead /> {/* gets imported out of flow by next.js */}
      <PageHeader />
      <NextMovies />
      <Divider />
      <CinemaList />
    </div>
  );
};

export default Home;
