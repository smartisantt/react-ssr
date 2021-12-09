import React from 'react'
import Home from "@/pages/Home";
import News from "@/pages/News";
import About from "@/pages/About";

export default [
  {
    key: "home",
    path: "/",
    exact: true,
    element: <Home/>
  },
  {
    key: "news",
    path: "news",
    exact: true,
    element: <News/>
  },
  {
    key: "about",
    path: "about",
    exact: true,
    element: <About/>
  }
];