import {HospitalRatingCard} from "@/entities/hospital/ui/HospitalRatingCard";
import {useGetAllHospitalsQuery} from "@/entities/hospital/utils";
import {Text} from "@chakra-ui/react";

export const HospitalsList = () => {
    const {data: hospitals, isFetching, isSuccess} = useGetAllHospitalsQuery()

    return (
        <div>
            {isFetching && <Text>Загрузка...</Text>}

            {isSuccess && hospitals.map({} => (
                <HospitalRatingCard
                    description="привет как дела"
                    name="dfadf"
                    rating={3}
                />
            ))}
        </div>
    );
};
