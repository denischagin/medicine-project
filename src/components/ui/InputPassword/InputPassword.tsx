import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import css from "./InputPassword.module.scss";
import eyeOff from "@assets/svgs/eye-off.svg";
import eye from "@assets/svgs/eye.svg";
import { useState } from "react";

interface InputPasswordProps {
  classNameInputGroup?: string;
  placeholder?: string;
}

export const InputPassword = ({
  classNameInputGroup,
  placeholder = "",
}: InputPasswordProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleToogleShowPassword = () => setIsShowPassword((prev) => !prev);

  return (
    <InputGroup className={classNameInputGroup}>
      <Input
        type={isShowPassword ? "text" : "password"}
        variant="flushed"
        placeholder={placeholder}
        size="md"
        width="100%"
        required
      />

      <InputRightElement onClick={handleToogleShowPassword}>
        <IconButton aria-label="toggle-password" variant="ghost" isRound>
          <Image src={isShowPassword ? eyeOff : eye} />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
};
