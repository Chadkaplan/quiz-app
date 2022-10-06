import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Main />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
