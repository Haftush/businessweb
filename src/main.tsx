import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

// Create the React app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Register the service worker (outside the render)
registerSW({
  onNeedRefresh() {
    console.log("New content available — please refresh.");
  },
  onOfflineReady() {
    console.log("App is ready to work offline!");
  },
});
