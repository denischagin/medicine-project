import { Image } from "@chakra-ui/react";
import defaultHospital from "../../assets/img/default-hospital.png";
import css from "./AvatarHospital.module.scss";
import classNames from "classnames";
import { AvatarHospitalProps } from "./AvatarHospital.interface.ts";
import { getAvatarBySize } from "@/shared/ui/avatar/libs";

export const AvatarHospital =
  ({
     size = "large",
     variant = "outlined"
   }: AvatarHospitalProps) => {
    const avatarHospitalClassname = classNames(
      css.avatar_hospital,
      css["size__" + size],
      css["variant__" + variant]
    );

    return (
      <div className={avatarHospitalClassname}>
        <Image
          src={defaultHospital}
          className={classNames(css.avatar_hospital__img, css.avatar_hospital__img_background)}
        />

        <Image
          src={getAvatarBySize(size)}
          className={css.avatar_hospital__img}
        />
      </div>
    );
  };
