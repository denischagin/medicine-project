import { Header } from "@/widgets/Header";
import css from "./Layout.module.scss";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
