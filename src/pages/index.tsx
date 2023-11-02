import { LoginPage } from "./LoginPage";
import { RegistrationPage } from "./RegisterPage";
import { Route, Routes } from "react-router";
import { paths } from "@/shared/constants";
import { Layout } from "./Layout";
import { HospitalsPage } from "./HospitalsPage";
import { HospitalCardPage } from "./HospitalCardPage";

export const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          path={paths.login}
          element={<LoginPage />}
        />
        <Route
          path={paths.register}
          element={<RegistrationPage />}
        />
        <Route
          path={paths.hospitals}
          element={<HospitalsPage />}
        />
        <Route
          path={paths.hospitalCard()}
          element={<HospitalCardPage />}
        />
      </Route>
    </Routes>
  );
};
