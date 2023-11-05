import { createContext } from "react";

export interface IHospitalsListFilterContext {
    cityId: number | null;
    setCityId: (value: number) => void;

    hospitalName: string | null;
    setHospitalName: (value: string) => void;
}

export const HospitalsListFilterContext = createContext<IHospitalsListFilterContext>({
    cityId: null,
    hospitalName: null,
    setCityId: () => {},
    setHospitalName: () => {},
});