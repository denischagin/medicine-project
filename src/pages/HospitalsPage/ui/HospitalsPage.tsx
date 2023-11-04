import { useDebounce } from "@/shared/libs/hooks";

import { ChangeEvent, useState } from "react";
import { InputSearch } from "@/shared/ui/input";
import css from "./HospitalsPage.module.scss";
import { MainContainer } from "@/shared/ui/container";
import { HospitalsList } from "@/widgets/HospitalsList";

export const HospitalsPage = () => {
    const [search, setSearch] = useState("");
    const debounceSearch = useDebounce(search, 300);

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className={css.hospitals}>
            <MainContainer className={css.hospitals__container}>
                <InputSearch
                    inputProps={{
                        onChange: handleChangeSearch
                    }}
                    inputGroupProps={{
                        className: css.hospitals__search
                    }}
                />

                <HospitalsList search={debounceSearch} />
            </MainContainer>
        </div>
    );
};
