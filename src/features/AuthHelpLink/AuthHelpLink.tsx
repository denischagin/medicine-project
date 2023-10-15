import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AuthHelpLinkProps } from "./AuthHelpLink.interface";

export const AuthHelpLink = ({ text, to }: AuthHelpLinkProps) => {
  return (
    <Text
      color="blue.600"
      fontSize="xl"
      alignSelf="flex-end"
      mt={["4", "7"]}
    >
      <NavLink to={to}>{text}</NavLink>
    </Text>
  );
};
