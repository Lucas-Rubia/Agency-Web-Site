import { askQuestionSchema } from "@/schemas/ask-question-schema";
import { z } from "zod";

export type AskQuestionType = z.infer<typeof askQuestionSchema>
