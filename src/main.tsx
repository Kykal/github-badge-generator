import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { createRoot } from "react-dom/client";

import { createTheme } from "@mantine/core";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { StrictMode } from "react";
import App from "./App.tsx";

const rootElement = document.getElementById("root")!;
const theme = createTheme({});

createRoot(rootElement).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Notifications position="top-center" />
      <App />
    </MantineProvider>
  </StrictMode>,
);
