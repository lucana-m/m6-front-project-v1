import { FormBox } from "../RegisterPage/styles";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useForm } from "react-hook-form";
import { UserLogin, userLoginSchema } from "../../schemas/userSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    resolver: zodResolver(userLoginSchema),
  });

  return (
    <FormBox>
      <div className="bgBox">
        <div className="topBox">
          <h2>MyNoteBook</h2>
          <p>Login</p>
        </div>
        <form onSubmit={handleSubmit(login)}>
          <div className="inputBox">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register("email")} />
            {errors.email?.message && <p>{errors.email.message}</p>}
          </div>
          <div className="inputBox">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" {...register("password")} />
            {errors.password?.message && <p>{errors.password.message}</p>}
          </div>

          <button className="buttonRegister" type="submit">
            Entrar
          </button>
          <button type="button">
            <Link to="/">Voltar</Link>
          </button>
        </form>
      </div>
    </FormBox>
  );
};
