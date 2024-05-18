import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./generated-routes.js";
import { ThemeProvider } from "./context/theme.js";
import { ApolloClientProvider } from "./context/apollo.js";
import { RouterProvider, createRouter } from "@tanstack/react-router";

const router = createRouter({ routeTree });

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <ApolloClientProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-[100svh] grid bg-background text-foreground">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </ApolloClientProvider>
  </StrictMode>,
);