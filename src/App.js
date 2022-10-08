import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Create from "./components/Create";
import Play from "./components/Play";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/create" element={<Create />} />
      <Route path="/play/:id" element={<Play />} />
    </Routes>
  </BrowserRouter>
);

export default App;
