import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContex";
const EditPost = () => {
  const {
    searchResults: posts,
    handleEdit,
    editBody,
    setEditBody,
    editTitle,
    setEditTitle,
  } = useContext(DataContext);

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main>
      {editTitle && (
        <>
          <h2 className="text-3xl">Edit Post</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="">Title</label>
            <input
              type="text"
              id="postTitle"
              className="block w-[500px] py-3 border-2 border-purple-600"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="">Body</label>
            <textarea
              className="w-[500px] h-[200px] outline-none border-2 border-black mt-5 block"
              name=""
              id=""
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            ></textarea>
            <button
              onClick={() => handleEdit(post.id)}
              className="w-[500px] py-2 bg-gray-400 border border-black mt-5"
              type="submit"
            >
              {" "}
              Submit{" "}
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h1>Post Not Found</h1>
          <Link to="/"> Visit Home</Link>
        </>
      )}
    </main>
  );
};

export default EditPost;
