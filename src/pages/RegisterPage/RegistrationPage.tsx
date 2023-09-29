import css from "./RegistrationPage.module.scss";

import { LoginWithEsia } from "@/features/LoginWithEsia";
import { RegistrationForm } from "@/widgets/RegistrationForm";
import { AuthCard } from "@/entities/auth";

export const RegistrationPage = () => {
  return (
    <div className={css.registration}>
      <h1>РЕГИСТРАЦИЯ</h1>

      <AuthCard>
        <RegistrationForm />
      </AuthCard>

      <LoginWithEsia />
    </div>
  );
};
