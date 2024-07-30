import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import EditPost from "./EditPost.jsx";
import Home from "./Home.jsx";
import "./index.css";
import NewPost from "./NewPost.jsx";
import PostPage from "./PostPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/post",
        element: <NewPost />,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
      {
        path: "/edit/:id",
        element: <EditPost />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
