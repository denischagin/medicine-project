import { useDebounce } from "@/shared/libs/hooks";

import { ChangeEvent, useState } from "react";
import { InputSearch } from "@/shared/ui/input";
import css from "./HospitalsPage.module.scss";
import { MainContainer } from "@/shared/ui/container";
import { HospitalsList } from "@/widgets/HospitalsList";

export const HospitalsPage = () => {
    const [searchHospitalName, setSearchHospitalName] = useState("");

    const debounceSearch = useDebounce(searchHospitalName, 300);

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchHospitalName(e.target.value);
    };

    return (
        <div className={css.hospitals}>
            <MainContainer className={css.hospitals__container}>
                <InputSearch
                    inputProps={{
                        onChange: handleChangeSearch,
                        value: searchHospitalName
                    }}
                    inputGroupProps={{
                        className: css.hospitals__search
                    }}
                />

                <HospitalsList searchHospital={debounceSearch} />
            </MainContainer>
        </div>
    );
};
