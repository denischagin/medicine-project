import { useContext } from "react";
import { HospitalsListFilterContext } from "@/entities/hospital";

export const useHospitalListFilter = () => useContext(HospitalsListFilterContext)