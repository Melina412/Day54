import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../App.scss";

const Home = () => {
  return (
    <section className="home-page">
      <div className="home-bg">
        <Header />
      </div>

      <div className="home-content">
        <div>
          <h1>Welcome to my simple Blog</h1>
          <Link to="/blog-articles">Go to articles</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
