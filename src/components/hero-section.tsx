import { images } from "@/utils/images";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="mt-5">
      <div className="flex items-stretch gap-5">
        <div className="bg-[#1a1a1a] rounded-xl flex flex-col flex-1">
          <div className="pt-7 px-6 min-[1440px]:pt-20 min-[1440px]:px-[60px] min-[1920px]:px-20 min-[1920px]:pt-24 min-[1920px]:pb-[90px] flex-1">
            <div className="min-[1440px]:flex min-[1440px]:items-start ">
              <h1 className="text-[28px] font-semibold text-[#F9EFEC] uppercase min-[1440px]:text-[58px] min-[1920px]:text-[78px] leading-[1.5] min-[968px]:max-w-[540px] min-[1920px]:max-w-[704px]">
                Digital Solutions That Drive Success
              </h1>
              <Button
                variant="ghost"
                className="my-5 text-[#CE7D63] text-xl min-[1920px]:text-2xl min-[1920px]:mt-10 font-medium p-0 hover:bg-[#1a1a1a]"
              >
                <span className="size-10 min-[1920px]:size-[52px] rounded-full outline outline-2 outline-[#CE7D63] bg-[#CE7D63] outline-offset-8 p-2 flex items-center justify-center">
                  <ArrowRight className="text-[#0f0f0f] !size-7 stroke-[1px]" />
                </span>
                <span className="bg-[#1a1a1a] -ml-2 h-10 flex items-center pl-4">
                  Start a Project
                </span>
              </Button>
            </div>
            <p className="text-sm text-[#676665] min-[1440px]:text-base min-[1920px]:text-lg  min-[968px]:max-w-[690px] min-[1920px]:max-w-[928px]">
              At NexGen, we believe in the transformative power of digital
              solutions. Our team of experts is dedicated to helping businesses
              like yours thrive in the fast-paced digital landscape.
            </p>
          </div>
          <div className="bg-[#0f0f0f] text-sm text-[#676665] uppercase rounded-lg h-12 flex items-center m-4 mt-7 min-[1920px]:m-5">
            WebSite Design
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl hidden min-[968px]:block max-w-[342px] min-[1440px]:max-w-[452px] min-[1920px]:max-w-[592px]">
          <div className="relative overflow-hidden">
            <img src={images.RealEstate} alt="RealEstate" />
            <Button
              size="icon"
              className="absolute -top-10 -right-10 size-44 rounded-full bg-[#0f0f0f]"
            >
              <span className="size-[88px] rounded-full outline outline-2 outline-[#CE7D63] bg-[#CE7D63] outline-offset-[26px] p-2 flex items-center justify-center -rotate-45">
                <ArrowRight className="text-[#0f0f0f] !size-16 stroke-[1px]" />
              </span>
            </Button>
          </div>
          <div className="bg-[#1F1F1F] p-6 min-[1920px]:p-7">
            <h4 className="text-xl font-medium text-[#F9EFEC] uppercase min-[1440px]:text-xl min-[1920px]:text-2xl ">
              Estatein Real Estate
            </h4>
            <p className="text-[#B3B3B2] min-[1440px]:text-base min-[1920px]:text-lg">
              Web Development.{" "}
            </p>
          </div>
        </div>
      </div>

      <section className="mt-4 min-[1920px]:mt-5 border-2 border-[#1f1f1f] rounded-2xl flex flex-wrap gap-2.5 min-[1920px]:gap-5 p-2.5 min-[1920px]:p-5 [&>div]:bg-[#1a1a1a] [&>div]:rounded-xl [&>div]:uppercase [&>div>h4]:text-[#b3b3b2] [&>div>p]:text-[#da9e8b] [&>div]:py-4 [&>div]:px-3.5 [&>div>h4]:text-sm [&>div>h4]:font-medium [&>div>p]:text-[40px] [&>div>p]:font-semibold [&>div]:min-w-[162px] [&>div]:text-center [&>div]:flex-1 min-[1920px]:[&>div>h4]:text-lg min-[1920px]:[&>div>p]:text-6xl min-[1440px]:[&>div>]:py-5 min-[1440px]:[&>div]:px-4 min-[1920px]:[&>div]:py-[30px] min-[1920px]:[&>div]:px-5 [&>div>h4]:mb-2.5 min-[1440px]:[&>div>h4]:mb-3 min-[1920px]:[&>div>h4]:mb-5">
        <div> 
          <h4>Clients</h4>
          <p>200+</p>
        </div>
        <div>
          <h4>Projects</h4>
          <p>280+</p>
        </div>
        <div>
          <h4>Happy Clients</h4>
          <p>100%</p>
        </div>
        <div>
          <h4>Follower</h4>
          <p>420k</p>
        </div>
        <div>
          <h4>Years of Experience</h4>
          <p>10+</p>
        </div>
        <div className="flex items-center justify-center">
          <Button variant="ghost" className="text-[#b3b3b2] hover:bg-transparent text-wrap  min-[1440px]:text-nowrap min-[1440px]:text-base min-[1920px]:text-xl">
            <span className="size-12 rounded-full bg-[#0f0f0f] text-[#e7beb1] flex items-center justify-center shrink-0 min-[1920px]:size-[68px]">
              <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-9" />
            </span>
            Know More
          </Button>
        </div>
      </section>
    </section>
  );
}
