import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, WeeklyPage } from "./pages";
import { Navbar } from "./layouts";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxWidth={false}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weekly" element={<WeeklyPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
