import { z } from "zod";

export const registerUserSchema = z
  .object({
    name: z.string().nonempty("Campo obrigatório"),
    email: z.string().email("Email inválido").nonempty("Campo obrigatório"),
    phone: z.string().nonempty("Campo obrigatório"),
    password: z
      .string()
      .nonempty("Campo obrigatório")
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]+$/,
        "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
      ),
    confirmPassword: z.string().nonempty("Confirme sua senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type RegisterUserData = z.infer<typeof registerUserSchema>;

export const userLoginSchema = z.object({
  email: z.string().nonempty("Campo obrigatório"),
  password: z.string().nonempty("Campo é obrigatório"),
});

export type UserLogin = z.infer<typeof userLoginSchema>;

export const updateUserSchema = z.object({
  name: z.string().nonempty("Campo obrigatório"),
  email: z.string().email("Email inválido").nonempty("Campo obrigatório"),
  phone: z.string().nonempty("Campo obrigatório"),
});

export type UpdateUserRequest = z.infer<typeof updateUserSchema>;
