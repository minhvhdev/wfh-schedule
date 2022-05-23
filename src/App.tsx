import React from "react";

import { Container } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, WeeklyPage } from "./pages";
import { Navbar } from "./layouts";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weekly" element={<WeeklyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
