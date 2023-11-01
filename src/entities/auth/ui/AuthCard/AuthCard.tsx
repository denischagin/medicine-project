import doctorImg from "@/shared/assets/img/doctor-img.png";
import { AspectRatio, Box, Image, useColorModeValue } from "@chakra-ui/react";
import { AuthCardProps } from "./AuthCard.interface";

export const AuthCard = ({ children }: AuthCardProps) => {
  const authCardBg = useColorModeValue("white", "blackAlpha.500");

  return (
    <Box
      my={0}
      mx="auto"
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      bg={authCardBg}
      maxW="467px"
      overflow="hidden"
      w="100%"
      borderRadius="lg"
    >
      <AspectRatio maxW="467px" ratio={10 / 6}>
        <Image src={doctorImg} alt="doctor" objectFit="cover" />
      </AspectRatio>

      {children}
    </Box>
  );
};
