import {
    Grid
} from "@chakra-ui/react";
import { InputSearch } from "@/shared/ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import { useGetAllHospitalsQuery, useHospitalListFilter } from "@/entities/hospital";
import { useDebounce } from "@/shared/libs/hooks";
import { ChooseCityPopover } from "@/widgets/HospitalsFilterSection";

export const HospitalsFilterSection = () => {
    const [searchHospitalName, setSearchHospitalName] = useState("");

    const { setHospitalName, cityId, hospitalName } = useHospitalListFilter();

    const { isFetching } = useGetAllHospitalsQuery({
        name: hospitalName ?? "", cityId: cityId ?? 0
    });

    const debounceSearch = useDebounce(searchHospitalName, 300);


    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchHospitalName(e.target.value);
    };

    useEffect(() => {
        setHospitalName(debounceSearch);
    }, [debounceSearch, setHospitalName]);

    return (
        <Grid
            templateColumns={[null, "1fr", "1fr 3fr 1fr"]}
            w="100%"
            gap="20px"
            justifyContent="center"
            alignItems="center"
            mt={["20px", "30px"]}
        >
            <ChooseCityPopover />

            <InputSearch
                isLoading={isFetching}
                inputProps={{
                    onChange: handleChangeSearch,
                    value: searchHospitalName
                }}
            />
        </Grid>
    );
};