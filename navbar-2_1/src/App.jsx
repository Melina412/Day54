// Aufgabe React-router_state_navbar-Level-2_1
//
// Du bist auf der Suche nach einem Job, um Geld für einen neuen Computer zu verdienen.
// Du findest ein Restaurant, das eine neue Website braucht.
// Erstelle mit Hilfe von React zunächst die Navigation für die Website.
// Nutze react-router-dom um die Links zu erstellen.
// Nutze useState und den Ternary Operator, um die Farben zu ändern.

import "./App.scss";
import Home from "./pages/Home";
import Speisekarte from "./pages/Speisekarte";
import Kontakt from "./pages/Kontakt";
import Oeffnungszeiten from "./pages/Oeffnungszeiten";
import Galerie from "./pages/Galerie";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speisekarte" element={<Speisekarte />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/oeffnungszeiten" element={<Oeffnungszeiten />} />
        <Route path="/galerie" element={<Galerie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
