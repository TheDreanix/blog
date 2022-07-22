import { useHistory, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, IsPending } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    // Delets Blog on Button Press
    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        }).then(() => {
            history.push("/");
        })
    }

    return ( 
        <div className="blog-details">
            { IsPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleClick }>Delete Blog</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;