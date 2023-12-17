import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../../App";
import BlogCard from "./BlogCard";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from "./AboutUs";
import Team from "./Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "blog",
        element: <BlogCard />,
      },
      {
        path: "about",
        element: <AboutUs/>
      },
      {
        path: "team",
        element: <Team/>
      }
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
);
