import Header from "../components/Header";
import blogData from "../assets/data";
import blogPages from "../assets/pages";
import {
  BlogCard_0,
  BlogCard_1,
  BlogCard_2,
  BlogCard_3,
  BlogCard_4,
  BlogCard_5,
} from "../components/BlogCard";
import "../App.scss";

console.log({ blogData });
console.log({ blogPages });

const BlogArticles = () => {
  return (
    <>
      <Header />
      <section className="blog-articles-page">
        <div className="gallery">
          <BlogCard_0 />
          <BlogCard_1 />
          <BlogCard_2 />
          <BlogCard_3 />
          <BlogCard_4 />
          <BlogCard_5 />
        </div>
      </section>
    </>
  );
};

export default BlogArticles;
