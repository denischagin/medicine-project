import {
    Button, Grid, GridItem, Heading,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger, Stack
} from "@chakra-ui/react";
import { ChooseCityItem } from "@/widgets/HospitalsFilterSection/ui/ChooseCityItem";
import { useHospitalListFilter } from "@/entities/hospital";
import { useGreen } from "@/shared/libs/hooks";

export const ChooseCityPopover = () => {
    const heading = ["Округ", "Регион", "Город"];

    const { cityId, setCityId } = useHospitalListFilter();
    const headingBG = useGreen(200, 600);

    return (
        <Popover>
            <PopoverTrigger>
                <Button>
                    г.{" "}
                    { cityId === 0 && "Кострома"}
                    { cityId === 1 && "Буй"}
                </Button>
            </PopoverTrigger>

            <PopoverContent w="600px">
                <PopoverArrow />
                <PopoverCloseButton />

                <PopoverBody p={0}>
                    <Grid
                        templateColumns="repeat(3, 200px)"
                        h="100px"
                        borderBottom="1px solid black"
                        bg={headingBG}
                    >
                        {heading.map((title, index) => (
                            <GridItem
                                display="flex"
                                alignItems="end"
                                borderRight={index !== 2 ? "1px solid black" : "none"}
                                p="10px"
                            >
                                <Heading fontSize="36px">{title}</Heading>
                            </GridItem>
                        ))}
                    </Grid>

                    <Grid
                        templateColumns="repeat(3, 200px)"
                        h="500px"
                    >
                        <GridItem
                            borderRight="1px solid black"
                        >
                            <Stack spacing={1}>
                                <ChooseCityItem isActive>Центральный округ</ChooseCityItem>
                            </Stack>
                        </GridItem>

                        <GridItem
                            borderRight="1px solid black"
                        >
                            <Stack spacing={1}>
                                <ChooseCityItem isActive>Костромская область</ChooseCityItem>
                            </Stack>

                        </GridItem>

                        <GridItem>
                            <Stack spacing={1}>
                                <ChooseCityItem
                                    isActive={cityId === 0}
                                    onClick={() => setCityId(0)}
                                >
                                    Кострома
                                </ChooseCityItem>

                                <ChooseCityItem
                                    isActive={cityId === 1}
                                    onClick={() => setCityId(1)}
                                >
                                    Буй
                                </ChooseCityItem>
                            </Stack>

                        </GridItem>
                    </Grid>
                </PopoverBody>
            </PopoverContent>
        </Popover>

    );
};
