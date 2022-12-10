import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch("https://dsite.one/api/uploadData.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new Blog added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Create a new React Component</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          name="title"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          name="body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select
          value={author}
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option default disabled value="">
            Choose_Author
          </option>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending ? (
          <button>Schick Los</button>
        ) : (
          <button>Is Am Senden</button>
        )}
      </form>
    </div>
  );
};

export default Create;
