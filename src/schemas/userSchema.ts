import { z } from "zod";

export const userSchema = z
  .object({
    name: z.string().nonempty("Campo obrigatório"),
    email: z.string().email("Email inválido").nonempty("Campo obrigatório"),
    phone: z
      .string()
      .min(8, { message: "Número de telefone inválido" })
      .max(11, { message: "Número de telefone inválido" })
      .nonempty("Campo obrigatório"),
    password: z
      .string()
      .min(6, { message: "Mínimo de  6 caracteres" })
      .nonempty("Campo obrigatório"),
    confirmPassword: z
      .string()
      .min(6, { message: "Mínimo de  6 caracteres" })
      .nonempty("Campo obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não correspondem",
  });

export type UserData = z.infer<typeof userSchema>;
