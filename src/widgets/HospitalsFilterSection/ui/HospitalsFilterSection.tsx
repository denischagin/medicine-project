import { Grid, Select } from "@chakra-ui/react";
import { InputSearch } from "@/shared/ui/input";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useGetAllHospitalsQuery, useHospitalListFilter } from "@/entities/hospital";
import { useDebounce } from "@/shared/libs/hooks";

export const HospitalsFilterSection = () => {
    const [searchHospitalName, setSearchHospitalName] = useState("");

    const { setCityId, setHospitalName, cityId, hospitalName } = useHospitalListFilter();

    const { isFetching } = useGetAllHospitalsQuery({
        name: hospitalName ?? "", cityId: cityId ?? 0
    });

    const debounceSearch = useDebounce(searchHospitalName, 300);

    const handleChangeCity: ChangeEventHandler<HTMLSelectElement> = (e) => {
        const currentValue = e.target.value;
        setCityId(Number(currentValue));
    };

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchHospitalName(e.target.value);
    };

    useEffect(() => {
        setHospitalName(debounceSearch);
    }, [debounceSearch]);

    return (
        <Grid
            templateColumns={[null, "1fr", "1fr 3fr 1fr"]}
            w="100%"
            gap="20px"
            justifyContent="center"
            alignItems="center"
            mt={["20px", "30px"]}
        >
            <Select maxW={["100%", "200px"]} onChange={handleChangeCity}>
                <option value={0}>Кострома</option>
                <option value={1}>Буй</option>
            </Select>

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