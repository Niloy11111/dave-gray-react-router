import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DataContext from "./context/DataContex";
const PostPage = () => {
  const {
    searchResults: posts,
    setPosts,
    handleDelete,
  } = useContext(DataContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <div>
      <article>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="bg-blue-500 text-white py-3 w-[200px]">
                Edit Post
              </button>{" "}
            </Link>{" "}
            <button
              className="bg-red-500 text-white py-3 w-[200px]"
              onClick={() => handleDelete(post.id)}
            >
              {" "}
              Delete Post{" "}
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post not Found</h2>
            <p>
              {" "}
              <Link to="/">Go Home</Link>{" "}
            </p>
          </>
        )}
      </article>
    </div>
  );
};

export default PostPage;
