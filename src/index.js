import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
    <ToastContainer
      position="bottom-center"
      className="text-[13px] text-black font-medium"
    />
  </BrowserRouter>
);
