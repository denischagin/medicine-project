import { HospitalRatingCard } from "@/entities/hospital/ui/HospitalRatingCard";

export const HospitalsList = () => {
  return (
    <div>
      <HospitalRatingCard
        description="привет как дела"
        name="dfadf"
        rating={3}
      />
    </div>
  );
};
