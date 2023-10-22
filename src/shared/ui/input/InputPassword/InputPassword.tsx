import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  InputProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { forwardRef, useState } from "react";

import eye from './svgs/eye.svg'
import eyeOff from './svgs/eye-off.svg'

import eyeWhite from './svgs/eye-white.svg'
import eyeOffWhite from './svgs/eye-off-white.svg'

interface InputPasswordProps extends InputProps {
  classNameInputGroup?: string;
}

export const InputPassword = forwardRef(({
  classNameInputGroup,
  ...restProps
}: InputPasswordProps, ref) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const eyeIcon = useColorModeValue(eye, eyeWhite)
  const eyeOffIcon = useColorModeValue(eyeOff, eyeOffWhite)

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
          <Image src={isShowPassword ? eyeOffIcon : eyeIcon} />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
});
