import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.scss";
import lapis from "./assets/lapis.png";
import Home from "./views/Home/Home.jsx";
import Edit from "./views/Edit/Edit";
import Delete from "./views/Delete/Delete";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Edit",
    element: <Edit />,
  },
  {
    path: "/Delete",
    element: <Delete />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
