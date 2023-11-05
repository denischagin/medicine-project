import { Flex, Text } from "@chakra-ui/react";
import css from "./HospitalsList.module.scss";
import { ProgressLoader } from "@/shared/ui/loader";
import { useGetAllHospitalsQuery, useHospitalListFilter } from "@/entities/hospital";
import { HospitalRatingCard } from "@/entities/hospital/ui";
import { useWhiteBlack } from "@/shared/libs/hooks";

export const HospitalsList = () => {
    const { cityId, hospitalName } = useHospitalListFilter();

    const {
        isLoading,
        isError,
        isSuccess,
        data: hospitals
    } = useGetAllHospitalsQuery({
        name: hospitalName ?? "", cityId: cityId ?? 0
    });

    const isHospitalsEmpty = hospitals?.length === 0;
    const hospitalsListBG = useWhiteBlack(400);

    return (
        <>
            <Flex
                bgColor={hospitalsListBG}
                boxShadow="lg"
                className={css.hospitals_list}
            >
                <Flex className={css.hospitals_list__wrapper}>
                    {isSuccess &&
                        (isHospitalsEmpty ? (
                            <Text>Список больниц пустой</Text>
                        ) : (
                            hospitals.map(({ id, name, address, rating }) => (
                                <HospitalRatingCard
                                    key={id}
                                    id={id}
                                    address={address}
                                    name={name}
                                    rating={rating}
                                />
                            ))
                        ))}

                    {isLoading && <ProgressLoader />}

                    {isError && (
                        <Text fontSize="3xl" variant="error">
                            Возникла ошибка при загрузке больниц
                        </Text>
                    )}
                </Flex>
            </Flex>
        </>
    );
};
