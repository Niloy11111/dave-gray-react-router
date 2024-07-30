import { format } from "date-fns";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api/posts";
import DataContext from "./context/DataContex";
const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const navigate = useNavigate();

  const { searchResults: posts, setPosts } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <main>
      <h2 className="text-3xl">New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          id="postTitle"
          className="block w-[500px] py-3 border-2 border-purple-600"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="">Body</label>
        <textarea
          className="w-[500px] h-[200px] outline-none border-2 border-black mt-5 block"
          name=""
          id=""
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <button
          className="w-[500px] py-2 bg-gray-400 border border-black mt-5"
          type="submit"
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </main>
  );
};

export default NewPost;
