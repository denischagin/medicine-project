import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { useGreen } from "@/shared/libs/hooks";

export const ChooseCityPopoverHeading = () => {
    const heading = ["Округ", "Регион", "Город"];
    const headingBG = useGreen(200, 600);

    return (
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
    )
}