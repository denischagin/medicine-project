import css from "./HospitalsPage.module.scss";
import { HospitalsList } from "@/widgets/HospitalsList";
import { HospitalsFilterSection } from "@/widgets/HospitalsFilterSection";
import { Container } from "@chakra-ui/react";

export const HospitalsPage = () => {
    return (
        <div className={css.hospitals}>
            <Container className={css.hospitals__container}>
                <HospitalsFilterSection />
                <HospitalsList />
            </Container>
        </div>
    );
};
