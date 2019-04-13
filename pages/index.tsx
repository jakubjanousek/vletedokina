import HTMLHead from "../components/HTMLHead";
import PageHeader from "../components/PageHeader";
import NextMovies from "../components/NextMovies";

import "../styles/style.scss";

const Home = () => {
  return (
    <div className="main">
      <HTMLHead /> {/* gets imported out of flow by next.js */}
      <PageHeader />
      <NextMovies />
    </div>
  );
};

export default Home;
