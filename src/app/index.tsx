import { Providers } from "./libs/providers";
import "./styles/base.scss";
import { Routing } from "@/pages";

export const App = () => {
  return (
    <Providers>
      <Routing />
    </Providers>
  );
};
