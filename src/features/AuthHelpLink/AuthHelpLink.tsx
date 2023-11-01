import { Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AuthHelpLinkProps } from "./AuthHelpLink.interface";

export const AuthHelpLink = ({ text, to }: AuthHelpLinkProps) => {
  const linkColor = useColorModeValue("blue.600", "blue.500");

  return (
    <Text color={linkColor} fontSize="xl" alignSelf="flex-end" mt={["4", "7"]}>
      <NavLink to={to}>{text}</NavLink>
    </Text>
  );
};
