export type HospitalRatingSizes = "large" | "small"

export interface HospitalRatingProps {
  rating: number;
  size?: HospitalRatingSizes;
}
