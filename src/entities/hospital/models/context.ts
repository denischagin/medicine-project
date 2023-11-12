import { createContext } from "react";

export interface ICity {
    cityId: number;
    cityName: string;
}

export interface IRegion {
    regionId: number
    regionName: string
    cities: ICity[]
}

export interface IDistrict {
    districtId: number
    districtName: string
    regions: IRegion[]
}


export interface IHospitalsListFilterContext {
    currentCity: ICity | null;
    setCurrentCity: (value: ICity) => void;

    hospitalName: string | null;
    setHospitalName: (value: string) => void;
}

export const HospitalsListFilterContext = createContext<IHospitalsListFilterContext>({
    currentCity: null,
    hospitalName: null,
    setCurrentCity: () => {
    },
    setHospitalName: () => {
    }
});