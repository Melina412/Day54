import Header from "../components/Header";
import "../App.scss";

const MyWork = (props) => {
  console.log(props.data.title);
  return (
    <>
      <Header />
      <section className="blog-page">
        <img src={props.data.img_url} alt="blog image" />
        <div>
          <h1>{props.data.title}</h1>
          <p>{props.data.published_date}</p>
        </div>
        <p>{props.data.description}</p>
        <p>{props.data.author}</p>
      </section>
    </>
  );
};

export default MyWork;
