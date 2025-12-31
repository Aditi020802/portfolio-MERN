import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { initCanvasBG } from "../src/components/CanvasBG";

// initCanvasBG(); // 🔥 START CANVAS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
