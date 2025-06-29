import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="light">
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
