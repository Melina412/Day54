import { useState } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <nav>
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/speisekarte">Speisekarte</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
        <NavLink to="/oeffnungszeiten">Öffnungszeiten</NavLink>
        <NavLink to="/galerie">Galerie</NavLink>
      </nav>
      <div className="headline">
        <h1>{props.headline}</h1>
      </div>
    </header>
  );
};

export default Header;
