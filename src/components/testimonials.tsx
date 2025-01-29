import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { images } from "@/utils/images";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Testimonials() {
  return (
    <section className="border-2 border-[#1f1f1f] rounded-2xl p-2.5 min-[1920px]:p-5">
      <h2 className="uppercase mb-2.5 min-[1920px]:mb-5 rounded-2xl font-semibold text-[28px] text-[#f9efec] bg-[#1a1a1a] p-6 min-[1440px]:text-[38px] min-[1920px]:text-5xl min-[1440px]:p-10 min-[1920px]:p-[50px]">
        Testimonials
      </h2>
      <div className="flex flex-wrap items-stretch gap-2.5 min-[1920px]:gap-5">
        <Card className="flex flex-col bg-[#1a1a1a] rounded-xl flex-1 min-[390px]:min-w-[300px] min-[1440px]:min-w-[328px] min-[1920px]:min-w-[430px]">
          <CardHeader className="p-6 !pb-0 min-[1440px]:p-[30px] min-[1920px]:p-10 flex-1">
            <CardTitle className="text-[#f9efec] font-medium text-xl min-[1440px]:text-[22px] min-[1920px]:text-3xl uppercase">
              NexGen turned our business around!
            </CardTitle>
            <CardDescription className="text-[#b3b3b2] min-[1440px]:text-base min-[1920px]:text-lg !mt-2 !mb-6 min-[1440px]:!mt-2.5 min-[1440px]:!mb-[30px] min-[1920px]:!mt-3 min-[1920px]:!mb-10 line-clamp-3 min-[1920px]:line-clamp-4">
              Their digital marketing strategies helped us reach new customers
              and increase our revenue by 30% within just a few months. Highly
              recommended!.
            </CardDescription>
          </CardHeader>
          <CardFooter className="bg-[#1f1f1f] rounded-b-xl justify-between py-4 px-5">
            <div className="flex items-center gap-2">
              <img className="size-10 min-[1440px]:size-[50px] min-[1920px]:size-[60px]" src={images.Person4} alt="Person4" />
              <div>
                <h5 className="font-medium text-[#f3dfd8] min-[1440px]:text-lg min-[1920px]:text-xl">Sarah Thompson</h5>
                <p className="text-sm text-[#81807e] min-[1440px]:text-base min-[1920px]:text-lg">CEO of BlueBloom</p>
              </div>
            </div>
              <Button
                variant="ghost"
                className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg p-0"
              >
                <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                  <ArrowRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
                </span>
              </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col bg-[#1a1a1a] rounded-xl flex-1 min-[390px]:min-w-[300px] min-[1440px]:min-w-[328px] min-[1920px]:min-w-[430px]">
          <CardHeader className="p-6 !pb-0 min-[1440px]:p-[30px] min-[1920px]:p-10 flex-1">
            <CardTitle className="text-[#f9efec] font-medium text-xl min-[1440px]:text-[22px] min-[1920px]:text-3xl uppercase">
              NexGen turned our business around!
            </CardTitle>
            <CardDescription className="text-[#b3b3b2] min-[1440px]:text-base min-[1920px]:text-lg !mt-2 !mb-6 min-[1440px]:!mt-2.5 min-[1440px]:!mb-[30px] min-[1920px]:!mt-3 min-[1920px]:!mb-10 line-clamp-3 min-[1920px]:line-clamp-4">
              Their digital marketing strategies helped us reach new customers
              and increase our revenue by 30% within just a few months. Highly
              recommended!.
            </CardDescription>
          </CardHeader>
          <CardFooter className="bg-[#1f1f1f] rounded-b-xl justify-between py-4 px-5">
            <div className="flex items-center gap-2">
              <img className="size-10 min-[1440px]:size-[50px] min-[1920px]:size-[60px]" src={images.Person1} alt="Person1" />
              <div>
                <h5 className="font-medium text-[#f3dfd8] min-[1440px]:text-lg min-[1920px]:text-xl">Wade Warren</h5>
                <p className="text-sm text-[#81807e] min-[1440px]:text-base min-[1920px]:text-lg">Art Director</p>
              </div>
            </div>
              <Button
                variant="ghost"
                className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg p-0"
              >
                <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                  <ArrowRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
                </span>
              </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col bg-[#1a1a1a] rounded-xl flex-1 min-[390px]:min-w-[300px] min-[1440px]:min-w-[328px] min-[1920px]:min-w-[430px]">
          <CardHeader className="p-6 !pb-0 min-[1440px]:p-[30px] min-[1920px]:p-10 flex-1">
            <CardTitle className="text-[#f9efec] font-medium text-xl min-[1440px]:text-[22px] min-[1920px]:text-3xl uppercase">
              Working with NexGen was a pleasure.
            </CardTitle>
            <CardDescription className="text-[#b3b3b2] min-[1440px]:text-base min-[1920px]:text-lg !mt-2 !mb-6 min-[1440px]:!mt-2.5 min-[1440px]:!mb-[30px] min-[1920px]:!mt-3 min-[1920px]:!mb-10 line-clamp-3 min-[1920px]:line-clamp-4">
              Their web design team created a stunning website that perfectly
              captured our brand's essence. The feedback from our customers has
              been overwhelmingly positive.
            </CardDescription>
          </CardHeader>
          <CardFooter className="bg-[#1f1f1f] rounded-b-xl justify-between py-4 px-5">
            <div className="flex items-center gap-2">
              <img className="size-10 min-[1440px]:size-[50px] min-[1920px]:size-[60px]" src={images.Person2} alt="Person2" />
              <div>
                <h5 className="font-medium text-[#f3dfd8] min-[1440px]:text-lg min-[1920px]:text-xl">Lisa Williams</h5>
                <p className="text-sm text-[#81807e] min-[1440px]:text-base min-[1920px]:text-lg">CEO Of HealthTech</p>
              </div>
            </div>
              <Button
                variant="ghost"
                className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg p-0"
              >
                <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                  <ArrowRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
                </span>
              </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col bg-[#1a1a1a] rounded-xl flex-1 min-[390px]:min-w-[300px] min-[1440px]:min-w-[328px] min-[1920px]:min-w-[430px]">
          <CardHeader className="p-6 !pb-0 min-[1440px]:p-[30px] min-[1920px]:p-10 flex-1">
            <CardTitle className="text-[#f9efec] font-medium text-xl min-[1440px]:text-[22px] min-[1920px]:text-3xl uppercase">
              NexGen's web design team brought our vision to life.
            </CardTitle>
            <CardDescription className="text-[#b3b3b2] min-[1440px]:text-base min-[1920px]:text-lg !mt-2 !mb-6 min-[1440px]:!mt-2.5 min-[1440px]:!mb-[30px] min-[1920px]:!mt-3 min-[1920px]:!mb-10 line-clamp-3 min-[1920px]:line-clamp-4">
              Their responsive design ensures our website looks stunning on all
              devices, contributing to increased user engagement.
            </CardDescription>
          </CardHeader>
          <CardFooter className="bg-[#1f1f1f] rounded-b-xl justify-between py-4 px-5">
            <div className="flex items-center gap-2">
              <img className="size-10 min-[1440px]:size-[50px] min-[1920px]:size-[60px]" src={images.Person3} alt="Person3" />
              <div>
                <h5 className="font-medium text-[#f3dfd8] min-[1440px]:text-lg min-[1920px]:text-xl">Jennifer Lee</h5>
                <p className="text-sm text-[#81807e] min-[1440px]:text-base min-[1920px]:text-lg">COO of Foodie Haven</p>
              </div>
            </div>
              <Button
                variant="ghost"
                className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg p-0"
              >
                <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                  <ArrowRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
                </span>
              </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
