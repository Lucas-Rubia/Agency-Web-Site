import { z } from "zod";

export const askQuestionSchema = z.object({
  name: z
    .string()
    .min(1, "Campo Obrigatório")
    .max(25, "Número de caracteres excedido"),
  email: z.string().email("E-mail inválido"),
  question: z
    .string()
    .min(1, "Campo Obrigatório")
    .max(100, "Número de caracteres excedido"),
});
