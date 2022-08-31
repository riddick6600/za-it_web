import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://7b3beb4564e149d3a2817aa5bd199d2d@o1386496.ingest.sentry.io/6706861",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

import "@public/css/bootstrap.min.css";
// import "animate.css";
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
