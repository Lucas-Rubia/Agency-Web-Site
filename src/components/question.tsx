import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { frequentlyAskedQuestionsData } from "@/constants/frequently-asked-questions-data";
import { Separator } from "./ui/separator";

export function Questions() {
  return (
    <Accordion
      type="single"
      collapsible
      className="space-y-2.5 min-[1920px]:space-y-5 flex-1 flex flex-col justify-between w-full"
    >
      {frequentlyAskedQuestionsData.map((item, index) => (
        <AccordionItem
          className="bg-[#1a1a1a] rounded-[14px] border-none px-[30px] py-6 min-[1440px]:px-10 min-[1440px]:py-[30px] min-[1920px]:px-[60px] min-[1920px]:py-10"
          value={index.toString()}
          key={index}
        >
          <AccordionTrigger className="text-lg text-[#f9efec] text-start flex-col gap-5 min-[390px]:flex-row min-[390px]:gap-0 min-[1440px]:text-xl min-[1920px]:text-[22px]">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-[#b3b3b2] min-[1440px]:text-base min-[1920px]:text-lg">
            <Separator className="my-5 min-[1440px]:my-6 min-[1920px]:my-[30px]" />
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
