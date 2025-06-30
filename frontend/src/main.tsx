import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DEFAULT_THEME, MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <MantineProvider theme={DEFAULT_THEME} defaultColorScheme="light">
        <BrowserRouter>
          <Navbar />
          <App />
        </BrowserRouter>
      </MantineProvider>
    </ClerkProvider>
  </StrictMode>,
);
