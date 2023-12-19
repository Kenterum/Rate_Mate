import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./jsx/App";
import BlogCard from "./jsx/BlogCard";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from "./jsx/AboutUs";
import Team from "./jsx/Team";

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
