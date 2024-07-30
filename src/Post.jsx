import { Link } from "react-router-dom";
const Post = ({ post }) => {
  return (
    <article>
      <Link to={`/post/${post.id}`}>
        <h2 className="text-3xl font-semibold text-blue-500">{post.title}</h2>
        <p className="my-6"> {post.datetime} </p>
      </Link>
      <p>
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Post;
