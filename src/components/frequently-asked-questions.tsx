import { FormAskQuestion } from "./form-ask-question";
import { Questions } from "./question";
import { Separator } from "./ui/separator";

export function FrequentlyAskedQuestions() {
  return (
    <section className="border-2 border-[#1f1f1f] rounded-2xl p-2.5 min-[1920px]:p-5">
      <h2 className="uppercase mb-2.5 min-[1920px]:mb-5 rounded-2xl font-semibold text-[28px] text-[#f9efec] bg-[#1a1a1a] p-6 min-[1440px]:text-[38px] min-[1920px]:text-5xl min-[1440px]:p-10 min-[1920px]:p-[50px]">
        Frequently Asked Questions
      </h2>
      <div className="flex items-stretch flex-col flex-wrap min-[940px]:flex-row gap-2.5 min-[1920px]:gap-5">
        <Questions />
        <div className="bg-[#1a1a1a] rounded-[14px] p-[30px] flex-1 min-[1440px]:max-w-[560px] min-[1920px]:max-w-[746px] min-[1440px]:p-[50px] min-[1920px]:p-[60px] ">
          <h3 className="uppercase text-lg font-medium min-[1440px]:text-xl min-[1920px]:text-2xl">
            Ask Your Question
          </h3>
          <Separator
            className="my-5 min-[1440px]:my-[30px] min-[1920px]:my-[50px]"
          />

          <FormAskQuestion />
        </div>
      </div>
    </section>
  );
}
