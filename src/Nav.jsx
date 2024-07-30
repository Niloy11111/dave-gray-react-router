import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContex";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        {/* <label htmlFor="">Search Posts</label> */}
        <input
          className="border-2 border-amber-500 outline-none py-3 w-[500px]"
          type="text"
          id="search"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul className="flex gap-5 text-xl font-semibold">
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/post">Post</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
        </ul>
      </form>
    </nav>
  );
};

export default Nav;
