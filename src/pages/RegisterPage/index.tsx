import { FormBox } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserData } from "../../schemas/userSchema";
import { userSchema } from "../../schemas/userSchema";

export const RegisterPage = () => {
  const { registerSubmit } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(userSchema),
  });

  return (
    <FormBox>
      <div className="bgBox">
        <div className="topBox">
          <h2>MyNoteBook</h2>
          <p>Cadastro</p>
        </div>
        <form onSubmit={handleSubmit(registerSubmit)}>
          <div className="inputBox">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" {...register("name")} />
          </div>
          <div className="inputBox">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register("email")} />
            {errors.email && <span>{errors.email?.message}</span>}
          </div>
          <div className="inputBox">
            <label htmlFor="phone">Telefone:</label>
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{2}[0-9]{9}"
              {...register("phone")}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" {...register("password")} />
          </div>
          <div className="inputBox">
            <label htmlFor="confirmPassword">Confirmar senha:</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
          </div>
          <button className="buttonRegister" type="submit">
            Cadastrar
          </button>
          <button type="button">Voltar</button>
        </form>
      </div>
    </FormBox>
  );
};
