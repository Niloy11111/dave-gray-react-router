import { useContext } from "react";

import Feed from "./Feed";
import DataContext from "./context/DataContex";

const Home = () => {
  const {
    searchResults: posts,
    fetchError,
    isLoading,
  } = useContext(DataContext);
  return (
    <main>
      {isLoading && <p> Loading Posts... </p>}

      {!isLoading && fetchError && (
        <p className="text-red-400"> {fetchError} </p>
      )}

      {!isLoading && !fetchError && posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p>No Posts Availabe</p>
      )}
    </main>
  );
};

export default Home;
