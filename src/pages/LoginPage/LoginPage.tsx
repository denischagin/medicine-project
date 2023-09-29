import { AuthCard } from "@/entities/auth";
import css from "./LoginPage.module.scss";

import { LoginWithEsia } from "@/features/LoginWithEsia";
import { LoginForm } from "@/widgets/LoginForm";

export const LoginPage = () => {
  return (
    <div className={css.login}>
      <h1>ВХОД</h1>

      <AuthCard>
        <LoginForm />  
      </AuthCard> 

      <LoginWithEsia />
    </div>
  );
};
