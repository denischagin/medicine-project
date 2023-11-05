import { HospitalsListFilterContext } from "@/entities/hospital/models";
import { ReactNode, useState } from "react";

export const HospitalsListFilterProvider = (props: { children: ReactNode }) => {
    const [hospitalName, setHospitalName] = useState<string | null>("");
    const [cityId, setCityId] = useState<number | null>(0);
    return (
        <HospitalsListFilterContext.Provider
            value={{
                setHospitalName,
                hospitalName,
                cityId,
                setCityId
            }}
            {...props}
        />);

};