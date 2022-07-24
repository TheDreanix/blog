import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://dsite.one/api/fetchId.php");
  console.log(blogs);
  const history = useHistory();

  // Delets Blog on Button Press
  const handleClick = () => {
    fetch("http://dsite.one/api/fetch.php/uploadData" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written by {blogs.author}</p>
          <div>{blogs.body}</div>
          <div> {id} </div>
          <button onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
