// Aufgabe React-router_simple-blog-Level-2_2
//
// Heute wollen wir eine simple Blog Website erstellen.
// Browser Router
// Nutze react-router-dom, um ein Routing zu erstellen.
// Das Array mit den Daten ist vorgegeben (siehe Code-Snippet)
// BITTE konzentriere Dich auf die Funktionalität, das Design kann man immer noch machen, wenn Du mit allem fertig bist!!!
// Denk daran den React-Router zu installieren

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import BlogArticles from "./pages/BlogArticles";
import blogData from "./assets/data";
import MyPets from "./pages/MyPets";
import MyPlants from "./pages/MyPlants";
import MyWork from "./pages/MyWork";
import MyHobbies from "./pages/MyHobbies";
import SocialMedia from "./pages/SocialMedia";
import CodingLife from "./pages/CodingLife";
console.log(blogData[0]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-articles" element={<BlogArticles />} />
        <Route path="/blog/my-pets" element={<MyPets data={blogData[0]} />} />
        <Route
          path="/blog/my-plants"
          element={<MyPlants data={blogData[1]} />}
        />
        <Route path="/blog/my-work" element={<MyWork data={blogData[2]} />} />
        <Route
          path="/blog/my-hobbies"
          element={<MyHobbies data={blogData[3]} />}
        />
        <Route
          path="/blog/social-media"
          element={<SocialMedia data={blogData[4]} />}
        />
        <Route
          path="/blog/coding-life"
          element={<CodingLife data={blogData[5]} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
