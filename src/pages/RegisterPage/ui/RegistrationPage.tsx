import { LoginWithEsia } from "@/features/LoginWithEsia";
import { AuthCard } from "@/entities/auth";
import { Heading, VStack } from "@chakra-ui/react";
import { RegistrationForm } from "@/widgets/RegistrationForm";

export const RegistrationPage = () => {
  return (
    <VStack pt={["3", "10"]} pb="5" w="100%" alignItems="center">
      <Heading
        fontSize={["30px", "50px"]}
        mb={["10px", "15px"]}
        color="blackAlpha.800"
      >
        РЕГИСТРАЦИЯ
      </Heading>

      <AuthCard>
        <RegistrationForm />
      </AuthCard>

      <LoginWithEsia />
    </VStack>
  );
};
