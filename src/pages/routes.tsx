import { paths } from "@/shared/constants";
import { RegistrationPage } from "@/pages/RegisterPage";
import { HospitalsPage } from "@/pages/HospitalsPage";
import { HospitalCardPage } from "@/pages/HospitalCardPage";
import { ReactElement } from "react";
import { LoginPage } from "@/pages/LoginPage";

interface IRoute {
    path: string,
    element: ReactElement,
}

export const routes: IRoute[] = [
    { path: paths.login, element: <LoginPage /> },
    { path: paths.register, element: <RegistrationPage /> },
    { path: paths.hospitals, element: <HospitalsPage /> },
    { path: paths.hospitalCard, element: <HospitalCardPage /> }
];

