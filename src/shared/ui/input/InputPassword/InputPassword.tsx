import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  InputProps,
} from "@chakra-ui/react";
import { forwardRef, useState } from "react";

import eye from './svgs/eye.svg'
import eyeOff from './svgs/eye-off.svg'

interface InputPasswordProps extends InputProps {
  classNameInputGroup?: string;
}

export const InputPassword = forwardRef(({
  classNameInputGroup,
  ...restProps
}: InputPasswordProps, ref) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleToogleShowPassword = () => setIsShowPassword((prev) => !prev);

  return (
    <InputGroup className={classNameInputGroup}>
      <Input
        type={isShowPassword ? "text" : "password"}
        ref={ref}
        {...restProps}
      />

      <InputRightElement onClick={handleToogleShowPassword}>
        <IconButton aria-label="toggle-password" variant="ghost" isRound>
          <Image src={isShowPassword ? eyeOff : eye} />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
});
