import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  InputProps,
} from "@chakra-ui/react";
import eyeOff from "@assets/svgs/eye-off.svg";
import eye from "@assets/svgs/eye.svg";
import { useState } from "react";

interface InputPasswordProps extends InputProps {
  classNameInputGroup?: string;
}

export const InputPassword = ({
  classNameInputGroup,
  ...restProps
}: InputPasswordProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleToogleShowPassword = () => setIsShowPassword((prev) => !prev);

  return (
    <InputGroup className={classNameInputGroup}>
      <Input
        {...restProps}
        type={isShowPassword ? "text" : "password"}
        variant="flushed"
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
