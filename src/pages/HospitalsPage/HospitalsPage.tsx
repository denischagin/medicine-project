import {HospitalsList} from "@/widgets/HospitalsList/HospitalsList"
import {Input} from "@chakra-ui/react"
import {ChangeEvent, useState} from "react";

export const HospitalsPage = () => {
    const [search, setSearch] = useState("");

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <Input
                onChange={handleChangeSearch}
                value={search}/>
            <HospitalsList/>
        </div>
    )
}
