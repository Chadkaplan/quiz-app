// import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Create from "./components/Create";
import Play from "./components/Play";
import Navbar from "./components/Navbar/Navbar";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/create" element={<Create />} />
      {/* Add dynamic routing to quizzes :id */}
      <Route path="/play" element={<Play />} />
    </Routes>
  </BrowserRouter>
);

export default App;
