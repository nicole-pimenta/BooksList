import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3, "A descrição é obrigatória"),
  author: z.string().min(3, "O autor é obrigatório"),
  description: z.string().min(3, "A descrição é obrigatória"),
});
