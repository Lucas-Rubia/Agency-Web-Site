import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export function ReasonsJourney() {
  return (
    <section className="border-2 border-[#1f1f1f] rounded-2xl p-2.5 min-[1920px]:p-5">
      <h2 className="uppercase mb-2.5 min-[1920px]:mb-5 rounded-2xl font-semibold text-[28px] text-[#f9efec] bg-[#1a1a1a] p-6 min-[1440px]:text-[38px] min-[1920px]:text-5xl min-[1440px]:p-10 min-[1920px]:p-[50px]">
        Reasons to Choose NexGen for Your Digital Journey
      </h2>
      <div className="flex flex-wrap items-stretch gap-2.5 min-[1920px]:gap-5">
        <Card className="flex flex-col p-6 min-[1440px]:p-[30px] min-[1920px]:p-10 bg-[#1a1a1a] rounded-xl flex-1 min-[390px]:min-w-[300px] min-[1440px]:min-w-[328px] min-[1920px]:min-w-[430px]">
          <CardHeader className="p-0 flex-1">
            <CardTitle className="text-[#f9efec] font-medium text-xl min-[1440px]:text-[22px] min-[1920px]:text-3xl uppercase">
              Expertise in Cutting-Edge Technologies
            </CardTitle>
            <CardDescription className="text-[#b3b3b2] min-[1440px]:text-base min-[1920px]:text-lg !mt-2 !mb-6 min-[1440px]:!mt-2.5 min-[1440px]:!mb-[30px] min-[1920px]:!mt-3 min-[1920px]:!mb-10 line-clamp-3 min-[1920px]:line-clamp-4">
              NexGen ensures your projects are powered by state-of-the-art
              technologies, guaranteeing...
            </CardDescription>
          </CardHeader>
          <CardFooter className="p-0">
            <Button
              variant="ghost"
              className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg capitalize p-0"
            >
              <span className="size-[52px] rounded-full bg-[#0f0f0f] text-[#e7beb1] flex items-center justify-center shrink-0 min-[1920px]:size-[68px] border border-[#262626]">
                <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-9" />
              </span>
              Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col p-6 min-[1440px]:p-[30px] min-[1920px]:p-10 bg-[#1a1a1a] rounded-xl flex-1 min-[390px]:min-w-[300px] min-[1440px]:min-w-[328px] min-[1920px]:min-w-[430px]">
          <CardHeader className="p-0 flex-1">
            <CardTitle className="text-[#f9efec] font-medium text-xl min-[1440px]:text-[22px] min-[1920px]:text-3xl uppercase">
              Proven Track Record of Success
            </CardTitle>
            <CardDescription className="text-[#b3b3b2] min-[1440px]:text-base min-[1920px]:text-lg !mt-2 !mb-6 min-[1440px]:!mt-2.5 min-[1440px]:!mb-[30px] min-[1920px]:!mt-3 min-[1920px]:!mb-10 line-clamp-3 min-[1920px]:line-clamp-4">
              NexGen demonstrates a consistent ability to meet and exceed client
              expectations, providing reliable and effective web solutions
              tailored to diverse needs.
            </CardDescription>
          </CardHeader>
          <CardFooter className="p-0">
            <Button
              variant="ghost"
              className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg capitalize p-0"
            >
              <span className="size-[52px] rounded-full bg-[#0f0f0f] text-[#e7beb1] flex items-center justify-center shrink-0 min-[1920px]:size-[68px] border border-[#262626]">
                <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-9" />
              </span>
              Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col p-6 min-[1440px]:p-[30px] min-[1920px]:p-10 bg-[#1a1a1a] rounded-xl flex-1 min-[390px]:min-w-[300px] min-[1440px]:min-w-[328px] min-[1920px]:min-w-[430px]">
          <CardHeader className="p-0 flex-1">
            <CardTitle className="text-[#f9efec] font-medium text-xl min-[1440px]:text-[22px] min-[1920px]:text-3xl uppercase">
              Client-Centric Approach
            </CardTitle>
            <CardDescription className="text-[#b3b3b2] min-[1440px]:text-base min-[1920px]:text-lg !mt-2 !mb-6 min-[1440px]:!mt-2.5 min-[1440px]:!mb-[30px] min-[1920px]:!mt-3 min-[1920px]:!mb-10 line-clamp-3 min-[1920px]:line-clamp-4">
              At NexGen, we prioritize understanding our clients' unique
              requirements, fostering transparent communication throughout the
              development process.
            </CardDescription>
          </CardHeader>
          <CardFooter className="p-0">
            <Button
              variant="ghost"
              className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg capitalize p-0"
            >
              <span className="size-[52px] rounded-full bg-[#0f0f0f] text-[#e7beb1] flex items-center justify-center shrink-0 min-[1920px]:size-[68px] border border-[#262626]">
                <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-9" />
              </span>
              Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col p-6 min-[1440px]:p-[30px] min-[1920px]:p-10 bg-[#1a1a1a] rounded-xl flex-1 min-[390px]:min-w-[300px] min-[1440px]:min-w-[328px] min-[1920px]:min-w-[430px]">
          <CardHeader className="p-0 flex-1">
            <CardTitle className="text-[#f9efec] font-medium text-xl min-[1440px]:text-[22px] min-[1920px]:text-3xl uppercase">
              Dedicated Team of Professionals
            </CardTitle>
            <CardDescription className="text-[#b3b3b2] min-[1440px]:text-base min-[1920px]:text-lg !mt-2 !mb-6 min-[1440px]:!mt-2.5 min-[1440px]:!mb-[30px] min-[1920px]:!mt-3 min-[1920px]:!mb-10 line-clamp-3 min-[1920px]:line-clamp-4">
              Our professionals bring a wealth of expertise to the table,
              ensuring the delivery of top-notch, scalable, and secure web
              solutions for your business.
            </CardDescription>
          </CardHeader>
          <CardFooter className="p-0">
            <Button
              variant="ghost"
              className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg capitalize p-0"
            >
              <span className="size-[52px] rounded-full bg-[#0f0f0f] text-[#e7beb1] flex items-center justify-center shrink-0 min-[1920px]:size-[68px] border border-[#262626]">
                <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-9" />
              </span>
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
