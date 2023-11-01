import ReactDOM from "react-dom/client";
import { App } from "./index.tsx";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./config/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  </>
);
