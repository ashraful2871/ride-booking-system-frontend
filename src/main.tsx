import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { router } from "./components/routes/Routes.tsx";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./components/redux/store.ts";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster richColors></Toaster>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
