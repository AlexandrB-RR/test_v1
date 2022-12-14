import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";
import PostIdPage from "./PostIdPage";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts/carousel" element={<About />}></Route>
      <Route exact path="/posts" element={<Posts />}></Route>
      <Route exact path="/posts/:id" element={<PostIdPage />}></Route>
      <Route path="/error" element={<ErrorPage />}></Route>
      <Route path="*" element={<Navigate to ="/posts" />}/>
    </Routes>
  );
};

export default AppRouter;
