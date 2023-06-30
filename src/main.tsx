import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import type { ThemeConfig } from "antd";
import { ConfigProvider } from "antd";
const config: ThemeConfig = {
  token: {
    colorPrimary: "#2879C7",
    colorBgElevated: "#FFFFFF",
    colorBgBase: "#F7F7F8",
    colorBgContainer: "#FFFFFF",
    colorBorder: "#D9D9D9",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={config}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
