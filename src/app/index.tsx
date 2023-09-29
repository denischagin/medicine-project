import { Providers } from "./providers";
import "./styles/base.scss";
import { Routing } from "@/pages";

export const App = () => {
  return (
    <Providers>
      <Routing />
    </Providers>
  );
};
