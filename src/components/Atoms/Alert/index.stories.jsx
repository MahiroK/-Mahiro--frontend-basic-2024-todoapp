import Alert from "./index";
import { AlertHandlerProvider } from "../../contexts/alert_handler";
import React from "react";

export default {
  title: "Components/Alert",
  component: Alert,
};

export const Default = () => (
  <AlertHandlerProvider>
    <Alert />
  </AlertHandlerProvider>
);
