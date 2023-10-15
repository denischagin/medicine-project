import { AuthCard } from "@/entities/auth";

import { LoginWithEsia } from "@/features/LoginWithEsia";
import { LoginForm } from "@/widgets/LoginForm";
import { Heading, VStack } from "@chakra-ui/react";

export const LoginPage = () => {
  return (
    <VStack pt={["3", "10"]} pb="5" w="100%" alignItems="center">
      <Heading
        fontSize={["30px", "50px"]}
        mb={["10px", "15px"]}
        color="blackAlpha.800"
      >
        ВХОД
      </Heading>

      <AuthCard>
        <LoginForm />
      </AuthCard>

      <LoginWithEsia />
    </VStack>
  );
};
