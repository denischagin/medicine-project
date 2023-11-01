import { HospitalRatingCard } from "@/entities/hospital/ui/HospitalRatingCard";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { HospitalsListProps } from "./HospitalsList.interface";
import css from "./HospitalsList.module.scss";
import { ProgressLoader } from "@/shared/ui/loader";
import { useGetAllHospitalsQuery } from "@/entities/hospital";

export const HospitalsList = ({ search }: HospitalsListProps) => {
  const {
    isLoading,
    isError,
    isSuccess,
    data: hospitals,
  } = useGetAllHospitalsQuery({ name: search });

  const isHospitalsEmpty = hospitals?.length === 0;
  const hospitalsListBG = useColorModeValue("white", "blackAlpha.400");

  return (
    <>
      <Flex
        bgColor={hospitalsListBG}
        boxShadow="dark-lg"
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
