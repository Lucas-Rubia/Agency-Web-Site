import { images } from "@/utils/images";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function OurWorks() {
  return (
    <section className="border-2 border-[#1f1f1f] rounded-2xl p-2.5 min-[1920px]:p-5">
      <h2 className="uppercase mb-2.5 min-[1920px]:mb-5 rounded-2xl font-semibold text-[28px] text-[#f9efec] bg-[#1a1a1a] p-6 min-[1440px]:text-[38px] min-[1920px]:text-5xl min-[1440px]:p-10 min-[1920px]:p-[50px]">
        Our Works
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-12 gap-2.5 min-[1920px]:gap-5">
          <div className="flex flex-col min-[840px]:flex-row-reverse min-[840px]:gap-2.5 min-[1920px]:gap-5 col-span-12 min-[1200px]:col-span-8">
            <img
              className="min-[840px]:w-1/2"
              src={images.Product01}
              alt="Product01"
            />
            <div className="min-[840px]:w-1/2 bg-[#1a1a1a] mt-2.5 rounded-lg p-6 space-y-5 min-[1440px]:space-y-[30px] min-[1920px]:space-y-10 min-[840px]:mt-0">
              <div className="flex gap-3.5 items-center">
                <span className="size-[52px] min-[1440px]:size-14 min-[1920px]:size-[66px] rounded-lg border border-[#33333] flex items-center justify-center bg-[#1f1f1f]">
                  <img
                    className="size-6 min-[1440px]:size-7 min-[1920px]:size-[34px]"
                    src={images.ZenithFitness}
                    alt="ZenithFitness"
                  />
                </span>
                <h4 className="uppercase font-medium min-[1440px]:text-lg min-[1920px]:text-2xl">
                  Zenith Fitness App
                </h4>
              </div>
              <div className="space-y-2 min-[1440px]:space-y-2.5 min-[1920px]:space-y-3 inline-flex flex-col items-start">
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] font-medium text-nowrap min-[1440px]:text-sm min-[1920px]:text-lg">
                  <span className="font-normal text-[#B3B3B2] after:size-1 after:bg-[#ce7d63] min-[390px]:after:inline-block after:rounded-full after:mx-1 after:mb-0.5">
                    Category
                  </span>
                  Mobile App Development
                </Badge>
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] font-medium min-[1440px]:text-sm min-[1920px]:text-lg">
                  <span className="font-normal text-[#B3B3B2] after:size-1 after:bg-[#ce7d63] min-[390px]:after:inline-block after:rounded-full after:mx-1 after:mb-0.5">
                    Time Taken
                  </span>
                  6 months
                </Badge>
              </div>
              <p className="text-sm text-[#B3B3B2] min-[1440px]:text-base min-[1920px]:text-lg">
                An all-in-one health and wellness app that offers personalized
                fitness plans, nutrition guidance, and virtual workout classes.
              </p>

              <Button
                variant="ghost"
                className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg p-0 min-[1440px]:hidden"
              >
                <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                  <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
                </span>
                Details
              </Button>
            </div>
          </div>
          <div className="hidden min-[1200px]:flex flex-col space-y-2.5 min-[1920px]:space-y-5 col-span-4">
            <div className="bg-[#1a1a1a] p-[30px] min-[1920px]:p-10 rounded-lg flex-1">
              <h4 className="font-medium uppercase mb-4 min-[1920px]:text-lg min-[1920px]:mb-5">
                Technologies Used
              </h4>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] text-sm min-[1920px]:text-base font-robotoMono font-normal">
                  React Native
                </Badge>
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] text-sm min-[1920px]:text-base font-robotoMono font-normal">
                  Firebase
                </Badge>
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] text-sm min-[1920px]:text-base font-robotoMono font-normal">
                  Redux
                </Badge>
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] text-sm min-[1920px]:text-base font-robotoMono font-normal">
                  REST API
                </Badge>
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] text-sm min-[1920px]:text-base font-robotoMono font-normal">
                  MongoDB
                </Badge>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-[30px] min-[1920px]:gap-10 bg-[#1a1a1a] py-4 px-5 min-[1920px]:py-5 min-[1920px]:px-10 flex-1">
              <h4 className="font-medium uppercase min-[1920px]:text-lg">
                Team Members
              </h4>
              <div className="flex items-center gap-2.5">
                <img
                  className="size-10 min-[1920px]:size-[50px]"
                  src={images.Avatar1}
                  alt="Avatar1"
                />
                <img
                  className="size-10 min-[1920px]:size-[50px]"
                  src={images.Avatar2}
                  alt="Avatar2"
                />
                <img
                  className="size-10 min-[1920px]:size-[50px]"
                  src={images.Avatar3}
                  alt="Avatar3"
                />
                <img
                  className="size-10 min-[1920px]:size-[50px]"
                  src={images.Avatar4}
                  alt="Avatar4"
                />
                <img
                  className="size-10 min-[1920px]:size-[50px]"
                  src={images.Avatar5}
                  alt="Avatar5"
                />
              </div>
            </div>
            <Button className="bg-[#ce7d63] w-full">Book A Call</Button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2.5 min-[1920px]:gap-5">
          <div className="flex flex-col min-[840px]:flex-row-reverse min-[840px]:gap-2.5 min-[1920px]:gap-5 col-span-12 min-[1200px]:col-span-8">
            <img
              className="min-[840px]:w-1/2"
              src={images.Product02}
              alt="Product02"
            />
            <div className="min-[840px]:w-1/2 bg-[#1a1a1a] mt-2.5 rounded-lg p-6 space-y-5 min-[1440px]:space-y-[30px] min-[1920px]:space-y-10 min-[840px]:mt-0">
              <div className="flex gap-3.5 items-center">
                <span className="size-[52px] min-[1440px]:size-14 min-[1920px]:size-[66px] rounded-lg border border-[#33333] flex items-center justify-center bg-[#1f1f1f]">
                  <img
                    className="size-6 min-[1440px]:size-7 min-[1920px]:size-[34px]"
                    src={images.AuraEcommerce}
                    alt="AuraEcommerce"
                  />
                </span>
                <h4 className="uppercase font-medium min-[1440px]:text-lg min-[1920px]:text-2xl">
                A-Aura Ecommerce
                </h4>
              </div>
              <div className="space-y-2 min-[1440px]:space-y-2.5 min-[1920px]:space-y-3 inline-flex flex-col items-start">
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] font-medium text-nowrap min-[1440px]:text-sm min-[1920px]:text-lg">
                  <span className="font-normal text-[#B3B3B2] after:size-1 after:bg-[#ce7d63] min-[390px]:after:inline-block after:rounded-full after:mx-1 after:mb-0.5">
                    Category
                  </span>
                  Web Design & Development
                </Badge>
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] font-medium min-[1440px]:text-sm min-[1920px]:text-lg">
                  <span className="font-normal text-[#B3B3B2] after:size-1 after:bg-[#ce7d63] min-[390px]:after:inline-block after:rounded-full after:mx-1 after:mb-0.5">
                    Time Taken
                  </span>
                  3 months
                </Badge>
              </div>
              <p className="text-sm text-[#B3B3B2] min-[1440px]:text-base min-[1920px]:text-lg">
              A complete overhaul of a corporate website to enhance its brand identity and user experience.
              </p>

              <Button
                variant="ghost"
                className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg p-0 min-[1440px]:hidden"
              >
                <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                  <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
                </span>
                Details
              </Button>
            </div>
          </div>
          <div className="hidden min-[1200px]:flex flex-col space-y-2.5 min-[1920px]:space-y-5 col-span-4">
            <div className="bg-[#1a1a1a] p-[30px] min-[1920px]:p-10 rounded-lg flex-1">
              <h4 className="font-medium uppercase mb-4 min-[1920px]:text-lg min-[1920px]:mb-5">
                Technologies Used
              </h4>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] text-sm min-[1920px]:text-base font-robotoMono font-normal">
                  WordPress
                </Badge>
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] text-sm min-[1920px]:text-base font-robotoMono font-normal">
                  PHP
                </Badge>
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] text-sm min-[1920px]:text-base font-robotoMono font-normal">
                  HTML 5
                </Badge>
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] text-sm min-[1920px]:text-base font-robotoMono font-normal">
                  CSS 3
                </Badge>
                <Badge className="bg-[#1f1f1f] text-[#e6e6e6] text-sm min-[1920px]:text-base font-robotoMono font-normal">
                  JavaScript
                </Badge>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-[30px] min-[1920px]:gap-10 bg-[#1a1a1a] py-4 px-5 min-[1920px]:py-5 min-[1920px]:px-10 flex-1">
              <h4 className="font-medium uppercase min-[1920px]:text-lg">
                Team Members
              </h4>
              <div className="flex items-center gap-2.5">
                <img
                  className="size-10 min-[1920px]:size-[50px]"
                  src={images.Avatar1}
                  alt="Avatar1"
                />
                <img
                  className="size-10 min-[1920px]:size-[50px]"
                  src={images.Avatar2}
                  alt="Avatar2"
                />
                <img
                  className="size-10 min-[1920px]:size-[50px]"
                  src={images.Avatar3}
                  alt="Avatar3"
                />
                <img
                  className="size-10 min-[1920px]:size-[50px]"
                  src={images.Avatar4}
                  alt="Avatar4"
                />
                <img
                  className="size-10 min-[1920px]:size-[50px]"
                  src={images.Avatar5}
                  alt="Avatar5"
                />
              </div>
            </div>
            <Button className="bg-[#ce7d63] w-full">Book A Call</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
