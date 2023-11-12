import { DISTRICTS_MOCK, HospitalsListFilterContext, ICity } from "@/entities/hospital/models";
import { ReactNode, useState } from "react";

export const HospitalsListFilterProvider = (props: { children: ReactNode }) => {
    const [hospitalName, setHospitalName] = useState<string | null>("");
    const [currentCity, setCurrentCity] = useState<ICity | null>(DISTRICTS_MOCK[0].regions[0].cities[0]);

    return (
        <HospitalsListFilterContext.Provider
            value={{
                setHospitalName,
                hospitalName,
                currentCity,
                setCurrentCity
            }}
            {...props}
        />);

};