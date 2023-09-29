import { LoginPage } from "./LoginPage";
import { RegistrationPage } from "./RegisterPage";
import { Route, Routes } from "react-router";
import { paths } from "@/shared/constants";
import { Layout } from "@/app/layout/ui/Layout";
import { HospitalsPage } from "./HospitalsPage/HospitalsPage";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={paths.login} element={<LoginPage />} />
        <Route path={paths.register} element={<RegistrationPage />} />
        <Route path={paths.hospital} element={<HospitalsPage />} />
      </Route>
    </Routes>
  );
};
