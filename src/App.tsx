import "./styles/base.scss"
import { Layout } from "./components/layout/Layout";
import { Route, Routes } from "react-router";
import { paths } from "@/utlis/constants";
import { LoginPage } from "@/pages/LoginPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={paths.login} element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
