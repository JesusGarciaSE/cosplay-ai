import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ENV } from "./config/env";

localStorage.setItem("vite_app_name", ENV.appName);

envDebugLog();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

function envDebugLog() {
  if (import.meta.env.DEV) {
    console.info("ENV:", ENV);
  }
}
