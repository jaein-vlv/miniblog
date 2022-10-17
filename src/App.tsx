import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/page/MainPage";
import PostWritePage from "./components/page/PostWritePage";
import PostViewPage from "./components/page/PostViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
