import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";
import { paths } from "@/utlis/constants";

export const Header = () => {
  return (
    <header className={css.header}>
      <h2>D-Pro</h2>

      <nav className={css.nav}>
        <ul className={css.menu}>
          <li>
            <NavLink to={paths.login}>Вход</NavLink>
          </li>

          <li>
            <NavLink to={paths.register}>Регистрация</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
