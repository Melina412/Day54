import { NavLink } from "react-router-dom";
import "../App.scss";

const Header = () => {
  return (
    <header>
      <p>My Life</p>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog-articles">Blog</NavLink>
      </nav>
    </header>
  );
};

export default Header;
