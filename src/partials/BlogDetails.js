import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("https://dsite.one/api/fetchId.php");
  const history = useHistory();

  // Delets Blog on Button Press
  const handleClick = () => {
    fetch("https://dsite.one/api/deleteData.php").then(() => {
      history.push("/");
    });
  };

  let title = "";
  let body = "";
  let author = "";

  if (typeof blog === "object" && blog !== null) {
    title = blog[0].title;
    body = blog[0].body;
    author = blog[0].author;
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{title}</h2>
          <div>{body}</div>
          <p>Written by {author}</p>
          <button onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
