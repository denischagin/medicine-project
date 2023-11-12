import {
    Button, Grid, GridItem, Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger, Stack
} from "@chakra-ui/react";
import { ChooseCityItem } from "@/widgets/HospitalsFilterSection/ui/ChooseCityItem";
import { DISTRICTS_MOCK, useHospitalListFilter } from "@/entities/hospital";
import { useState } from "react";
import {
    ChooseCityPopoverHeading
} from "@/widgets/HospitalsFilterSection/ui/ChooseCityPopoverHeading/ChooseCityPopoverHeading.tsx";

export const ChooseCityPopover = () => {
    const { currentCity, setCurrentCity } = useHospitalListFilter();

    const [currentDistrict, setCurrentDistrict] =
        useState(DISTRICTS_MOCK[0]);

    const [currentRegion, setCurrentRegion] =
        useState(currentDistrict.regions[0]);

    return (
        <Popover>
            <PopoverTrigger>
                <Button>
                    г. {currentCity?.cityName}
                </Button>
            </PopoverTrigger>

            <PopoverContent w="600px">
                <PopoverArrow />
                <PopoverCloseButton />

                <PopoverBody p={0}>
                    <ChooseCityPopoverHeading />

                    <Grid
                        templateColumns="repeat(3, 200px)"
                        h="500px"
                    >
                        <GridItem
                            borderRight="1px solid black"
                        >
                            <Stack spacing={1}>
                                {DISTRICTS_MOCK.map((district) => (
                                    <ChooseCityItem
                                        isActive={district.districtId === currentDistrict?.districtId}
                                        onClick={() => {
                                            const region = district.regions[0];

                                            setCurrentDistrict({ ...district });
                                            setCurrentRegion({ ...region });
                                            setCurrentCity({ ...region.cities[0] });
                                        }}
                                    >
                                        {district.districtName}
                                    </ChooseCityItem>
                                ))}
                            </Stack>
                        </GridItem>

                        <GridItem
                            borderRight="1px solid black"
                        >
                            <Stack spacing={1}>
                                {currentDistrict.regions.map((region) => (
                                    <ChooseCityItem
                                        isActive={region.regionId === currentRegion?.regionId}
                                        onClick={() => {
                                            setCurrentRegion({ ...region });
                                            setCurrentCity({ ...region.cities[0] });
                                        }}
                                    >
                                        {region.regionName}
                                    </ChooseCityItem>
                                ))}
                            </Stack>

                        </GridItem>

                        <GridItem>
                            <Stack spacing={1}>
                                {currentRegion.cities.map((city) => (
                                    <ChooseCityItem
                                        isActive={city.cityId === currentCity?.cityId}
                                        onClick={() => setCurrentCity({ ...city })}
                                    >
                                        {city.cityName}
                                    </ChooseCityItem>
                                ))}
                            </Stack>
                        </GridItem>
                    </Grid>
                </PopoverBody>
            </PopoverContent>
        </Popover>

    );
};
