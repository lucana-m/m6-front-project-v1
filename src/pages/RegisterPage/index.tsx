import { FormBox } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useForm } from "react-hook-form";
import {
  RegisterUserData,
  registerUserSchema,
} from "../../schemas/userSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserData>({
    mode: "all",
    resolver: zodResolver(registerUserSchema),
  });

  return (
    <FormBox>
      <div className="bgBox">
        <div className="topBox">
          <h2>MyNoteBook</h2>
          <p>Cadastro</p>
        </div>
        <form onSubmit={handleSubmit(createUser)}>
          <div className="inputBox">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" {...register("name")} />
            {errors.name?.message && <p>{errors.name.message}</p>}
          </div>
          <div className="inputBox">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register("email")} />
            {errors.email?.message && <p>{errors.email.message}</p>}
          </div>
          <div className="inputBox">
            <label htmlFor="phone">Telefone:</label>
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{2}[0-9]{9}"
              {...register("phone")}
            />
            {errors.phone?.message && <p>{errors.phone.message}</p>}
          </div>
          <div className="inputBox">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" {...register("password")} />
            {errors.password?.message && <p>{errors.password.message}</p>}
          </div>
          <div className="inputBox">
            <label htmlFor="confirmPassword">Confirmar senha:</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message && (
              <p>{errors.confirmPassword.message}</p>
            )}
          </div>
          <button className="buttonRegister" type="submit">
            Cadastrar
          </button>
          <button type="button">
            <Link to="/">Voltar</Link>
          </button>
        </form>
      </div>
    </FormBox>
  );
};
