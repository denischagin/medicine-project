export type AvatarHospitalSizes = "large" | "small"
export type AvatarHospitalVariants = "filled" | "outlined"

export interface AvatarHospitalProps {
    size?: AvatarHospitalSizes
    variant?: AvatarHospitalVariants
}