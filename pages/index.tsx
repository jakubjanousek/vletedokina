import HTMLHead from "../components/HTMLHead";
import PageHeader from "../components/PageHeader";
import NextMovies from "../components/NextMovies";
import CinemaList from "../components/CinemaList";
import Divider from "../components/Divider";

import "../styles/style.scss";

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
