// konnte keine lösung finden um den page link mit einem loop einzufügen oder
// props aus zwei verschiedenen datensätzen zu übergeben :(
// deswegen hat jetzt jeder blog eben eine eigene karte

// man hätte auch den bestehenden datansatz um jeweils den page link erweitern können,
// aber war nicht sicher ob das manipulieren der datenquelle eine gute mehtode ist

import "../App.scss";
import { Link } from "react-router-dom";
import blogData from "../assets/data";
import blogPages from "../assets/pages";
console.log({ blogData });
console.log({ blogPages });

export const BlogCard_0 = () => {
  return (
    <article className="blog-card">
      <div>
        <img src={blogData[0].img_url} alt="blog title img" />
        <h2>{blogData[0].title}</h2>
        <Link to={blogPages[0].page_url}>Read more</Link>
      </div>
    </article>
  );
};

export const BlogCard_1 = () => {
  return (
    <article className="blog-card">
      <div>
        <img src={blogData[1].img_url} alt="blog title img" />
        <h2>{blogData[1].title}</h2>
        <Link to={blogPages[1].page_url}>Read more</Link>
      </div>
    </article>
  );
};

export const BlogCard_2 = () => {
  return (
    <article className="blog-card">
      <div>
        <img src={blogData[2].img_url} alt="blog title img" />
        <h2>{blogData[2].title}</h2>
        <Link to={blogPages[2].page_url}>Read more</Link>
      </div>
    </article>
  );
};

export const BlogCard_3 = () => {
  return (
    <article className="blog-card">
      <div>
        <img src={blogData[3].img_url} alt="blog title img" />
        <h2>{blogData[3].title}</h2>
        <Link to={blogPages[3].page_url}>Read more</Link>
      </div>
    </article>
  );
};

export const BlogCard_4 = () => {
  return (
    <article className="blog-card">
      <div>
        <img src={blogData[4].img_url} alt="blog title img" />
        <h2>{blogData[4].title}</h2>
        <Link to={blogPages[4].page_url}>Read more</Link>
      </div>
    </article>
  );
};
export const BlogCard_5 = () => {
  return (
    <article className="blog-card">
      <div>
        <img src={blogData[5].img_url} alt="blog title img" />
        <h2>{blogData[5].title}</h2>
        <Link to={blogPages[5].page_url}>Read more</Link>
      </div>
    </article>
  );
};
