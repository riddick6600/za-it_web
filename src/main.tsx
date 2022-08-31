import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "@public/css/bootstrap.min.css";
import "animate.css";
import "@public/css/boxicons.min.css";
import "@public/css/flaticon.css";
import "@public/css/slick.css";
// import "react-accessible-accordion/dist/fancy-example.css";
import "@public/css/style.css";
import "@public/css/responsive.css";
import "@public/css/rtl.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
