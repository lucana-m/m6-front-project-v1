import { StyledForm } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useForm } from "react-hook-form";
import { UpdateUserRequest, updateUserSchema } from "../../schemas/userSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

export const EditUser = () => {
  const { updateUser, user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserRequest>({
    mode: "all",
    resolver: zodResolver(updateUserSchema),
  });

  return (
    <StyledForm>
      <form onSubmit={handleSubmit(updateUser)}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          defaultValue={user?.name}
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          defaultValue={user?.email}
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          id="phone"
          pattern="[0-9]{2}[0-9]{9}"
          defaultValue={user?.phone}
          {...register("phone")}
        />
        {errors.phone?.message && <p>{errors.phone.message}</p>}
        <div className="buttonBox">
          <button type="submit">Salvar alterações</button>
        </div>
      </form>
    </StyledForm>
  );
};
