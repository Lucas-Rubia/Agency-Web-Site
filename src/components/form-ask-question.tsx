import { toast } from "@/hooks/use-toast";
import { askQuestionSchema } from "@/schemas/ask-question-schema";
import { AskQuestionType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function FormAskQuestion() {
  const form = useForm<AskQuestionType>({
    resolver: zodResolver(askQuestionSchema),
    defaultValues: {
      email: "",
      name: "",
      question: "",
    },
  });

  const sendQuestionSummit = (data: AskQuestionType) => {
    toast({
      title: "Mensagem enviada!",
      description: `${data.name}, em breve entraremos em contato.`,
    });

    form.reset();
  };


  return (
    <Form {...form}>
      <form
        className="space-y-3.5 min-[1440px]:space-y-4 min-[1920px]:space-y-5"
        onSubmit={form.handleSubmit(sendQuestionSummit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase font-medium text-[#f3dfd8] min-[1920px]:text-lg">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  className="h-14 min-[1440px]:h-16 min-[1920px]:h-[75px] rounded-xl border-none"
                  placeholder="Enter your name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase font-medium text-[#f3dfd8] min-[1920px]:text-lg">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="h-14 min-[1440px]:h-16 min-[1920px]:h-[75px] rounded-xl border-none"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase font-medium text-[#f3dfd8] min-[1920px]:text-lg">
                Your Question
              </FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none rounded-xl border-none pt-5"
                  rows={4}
                  placeholder="Enter your Question here ......."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-[#ce7d63] w-full">Send Your Message</Button>
      </form>
    </Form>
  );
}
