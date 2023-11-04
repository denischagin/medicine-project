import { Image } from "@chakra-ui/react";
import css from "./AvatarHospital.module.scss";
import classNames from "classnames";
import { AvatarHospitalProps, AvatarHospitalSizes } from "./AvatarHospital.interface.ts";
import defaultHospitalSvgLarge from "@/shared/ui/avatar/assets/svg/camera-large.svg";
import defaultHospitalSvgSmall from "@/shared/ui/avatar/assets/svg/camera-small.svg";

export const AvatarHospital = ({
    size = "large",
    variant = "outlined"
}: AvatarHospitalProps) => {
    const avatarHospitalClassname = classNames(
        css.avatar_hospital,
        css["size__" + size],
        css["variant__" + variant]
    );

    const avatarSrcBySize: Record<AvatarHospitalSizes, string> = {
        large: defaultHospitalSvgLarge,
        small: defaultHospitalSvgSmall
    };

    return (
        <div className={avatarHospitalClassname}>
            <Image
                src={avatarSrcBySize[size]}
                className={css.avatar_hospital__img}
            />
        </div>
    );
};
