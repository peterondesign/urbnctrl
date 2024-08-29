import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { configure } from "axios-hooks";
import axiosInstance from "./config/axioxConfig.js";

window.React = React;
configure({ axios: axiosInstance });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  </StrictMode>
);
