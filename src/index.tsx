import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";
import App from "./App";
import theme from "./theme";
import "@fontsource/josefin-sans";
import "./index.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
