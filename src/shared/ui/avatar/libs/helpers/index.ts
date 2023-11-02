import { AvatarHospitalSizes } from "@/shared/ui/avatar/ui/AvatarHospital/AvatarHospital.interface.ts";
import defaultHospitalSvgLarge from "@/shared/ui/avatar/assets/svg/camera-large.svg";
import defaultHospitalSvgSmall from "@/shared/ui/avatar/assets/svg/camera-small.svg";

export const getAvatarBySize = (size: AvatarHospitalSizes) => {
  switch (size) {
    case "large":
      return defaultHospitalSvgLarge
    case "small":
      return  defaultHospitalSvgSmall
  }
}
