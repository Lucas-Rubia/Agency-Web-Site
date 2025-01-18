import { images } from "@/utils/images";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export function OurServices() {
  return (
    <section className="border-2 border-[#1f1f1f] rounded-2xl p-2.5 min-[1920px]:p-5">
      <h2 className="uppercase mb-2.5 min-[1920px]:mb-5 rounded-2xl font-semibold text-[28px] text-[#f9efec] bg-[#1a1a1a] p-6 min-[1440px]:text-[38px] min-[1920px]:text-5xl min-[1440px]:p-10 min-[1920px]:p-[50px]">
        Our Services
      </h2>

      <div className="flex flex-wrap items-stretch gap-2.5 min-[1920px]:gap-5">
        <div className="flex flex-col bg-[#1a1a1a] p-6 min-[1440px]:p-[60px] min-[1920px]:p-16 rounded-[14px] space-y-5 min-[1440px]:space-y-10 min-[1920px]:space-y-[50px] min-[1440px]:min-w-[600px] min-[1920px]:min-w-[800px] min-[390px]:min-w-[300px] flex-1">
          <div className="flex items-center justify-between">
            <div className="flex gap-3.5 items-center">
              <span className="size-[52px] min-[1440px]:size-14 min-[1920px]:size-[66px] rounded-lg border border-[#33333] flex items-center justify-center bg-[#1f1f1f]">
                <img
                  className="size-6 min-[1440px]:size-7 min-[1920px]:size-[34px]"
                  src={images.WebDesignLogo}
                  alt="WebDesign"
                />
              </span>
              <h4 className="uppercase text-xl font-medium min-[1440px]:text-[22px] min-[1920px]:text-3xl">
                Web Design
              </h4>
            </div>
            <Button
              variant="ghost"
              className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg p-0 hidden min-[1440px]:flex-start min-[1440px]:flex"
            >
              <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
              </span>
              Book A Call
            </Button>
          </div>
          <div className="flex flex-col flex-1 gap-y-1.5 min-[1440px]:gap-y-4 min-[1920px]:gap-y-5 min-[1440px]:flex-col-reverse">
            <h5 className="uppercase font-medium text-lg text-[#f9efec] min-[1440px]:text-[22px] min-[1920px]:text-3xl min-[1440px]:text-end">
              Starts From $1,500
            </h5>
            <p className="text-[#b3b3b2] text-sm min-[1440px]:text-base min-[1920px]:text-lg line-clamp-3">
              Our Web Design service is all about creating visually stunning and
              user-friendly websites that leave a lasting.
            </p>
          </div>
          <Button className="w-full bg-[#ce7d63] min-[1440px]:hidden">
            Book A Call
          </Button>
        </div>

        <div className="bg-[#1a1a1a] p-6 min-[1440px]:p-[60px] min-[1920px]:p-16 rounded-[14px] space-y-5 min-[1440px]:space-y-10 min-[1920px]:space-y-[50px] min-[1440px]:min-w-[600px] min-[1920px]:min-w-[800px] min-[390px]:min-w-[300px] flex-1">
          <div className="flex items-center justify-between">
            <div className="flex gap-3.5 items-center">
              <span className="size-[52px] min-[1440px]:size-14 min-[1920px]:size-[66px] rounded-lg border border-[#33333] flex items-center justify-center bg-[#1f1f1f]">
                <img
                  className="size-6 min-[1440px]:size-7 min-[1920px]:size-[34px]"
                  src={images.MobileAppDevelopment}
                  alt="MobileAppDevelopment"
                />
              </span>
              <h4 className="uppercase text-xl font-medium min-[1440px]:text-[22px] min-[1920px]:text-3xl">
                Mobile App Development
              </h4>
            </div>
            <Button
              variant="ghost"
              className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg p-0 hidden min-[1440px]:flex-start min-[1440px]:flex"
            >
              <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
              </span>
              Book A Call
            </Button>
          </div>
          <div className="flex flex-col flex-1 gap-y-1.5 min-[1440px]:gap-y-4 min-[1920px]:gap-y-5 min-[1440px]:flex-col-reverse">
            <h5 className="uppercase font-medium text-lg text-[#f9efec] min-[1440px]:text-[22px] min-[1920px]:text-3xl min-[1440px]:text-end">
              Starts From $2,500
            </h5>
            <p className="text-[#b3b3b2] text-sm min-[1440px]:text-base min-[1920px]:text-lg line-clamp-3">
              With our Mobile App Development service, we harness the power of
              mobile technology to create cutting-edge applications .
            </p>
          </div>
          <Button className="w-full bg-[#ce7d63] min-[1440px]:hidden">
            Book A Call
          </Button>
        </div>

        <div className="bg-[#1a1a1a] p-6 min-[1440px]:p-[60px] min-[1920px]:p-16 rounded-[14px] space-y-5 min-[1440px]:space-y-10 min-[1920px]:space-y-[50px] min-[1440px]:min-w-[600px] min-[1920px]:min-w-[800px] min-[390px]:min-w-[300px] flex-1">
          <div className="flex items-center justify-between">
            <div className="flex gap-3.5 items-center">
              <span className="size-[52px] min-[1440px]:size-14 min-[1920px]:size-[66px] rounded-lg border border-[#33333] flex items-center justify-center bg-[#1f1f1f]">
                <img
                  className="size-6 min-[1440px]:size-7 min-[1920px]:size-[34px]"
                  src={images.WebDevelopment}
                  alt="WebDevelopment"
                />
              </span>
              <h4 className="uppercase text-xl font-medium min-[1440px]:text-[22px] min-[1920px]:text-3xl">
                Web Development
              </h4>
            </div>
            <Button
              variant="ghost"
              className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg p-0 hidden min-[1440px]:flex-start min-[1440px]:flex"
            >
              <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
              </span>
              Book A Call
            </Button>
          </div>
          <div className="flex flex-col flex-1 gap-y-1.5 min-[1440px]:gap-y-4 min-[1920px]:gap-y-5 min-[1440px]:flex-col-reverse">
            <h5 className="uppercase font-medium text-lg text-[#f9efec] min-[1440px]:text-[22px] min-[1920px]:text-3xl min-[1440px]:text-end">
              Starts From $1,800
            </h5>
            <p className="text-[#b3b3b2] text-sm min-[1440px]:text-base min-[1920px]:text-lg line-clamp-3">
              Our Web Development service is focused on turning your website
              into a powerful digital asset. We utilize the latest technologies
              and industry best practices to build websites.
            </p>
          </div>
          <Button className="w-full bg-[#ce7d63] min-[1440px]:hidden">
            Book A Call
          </Button>
        </div>

        <div className="bg-[#1a1a1a] p-6 min-[1440px]:p-[60px] min-[1920px]:p-16 rounded-[14px] space-y-5 min-[1440px]:space-y-10 min-[1920px]:space-y-[50px] min-[1440px]:min-w-[600px] min-[1920px]:min-w-[800px] min-[390px]:min-w-[300px] flex-1">
          <div className="flex items-center justify-between">
            <div className="flex gap-3.5 items-center">
              <span className="size-[52px] min-[1440px]:size-14 min-[1920px]:size-[66px] rounded-lg border border-[#33333] flex items-center justify-center bg-[#1f1f1f]">
                <img
                  className="size-6 min-[1440px]:size-7 min-[1920px]:size-[34px]"
                  src={images.DigitalMarketing}
                  alt="DigitalMarketing"
                />
              </span>
              <h4 className="uppercase text-xl font-medium min-[1440px]:text-[22px] min-[1920px]:text-3xl">
                Digital Marketing
              </h4>
            </div>
            <Button
              variant="ghost"
              className="text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg p-0 hidden min-[1440px]:flex-start min-[1440px]:flex"
            >
              <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
              </span>
              Book A Call
            </Button>
          </div>
          <div className="flex flex-col flex-1 gap-y-1.5 min-[1440px]:gap-y-4 min-[1920px]:gap-y-5 min-[1440px]:flex-col-reverse">
            <h5 className="uppercase font-medium text-lg text-[#f9efec] min-[1440px]:text-[22px] min-[1920px]:text-3xl min-[1440px]:text-end">
              Starts From $1,200
            </h5>
            <p className="text-[#b3b3b2] text-sm min-[1440px]:text-base min-[1920px]:text-lg line-clamp-3">
              In the digital age, marketing is a critical aspect of your
              business's success. Our Digital Marketing service employs
              data-driven strategies to enhance your brand's visibility
            </p>
          </div>
          <Button className="w-full bg-[#ce7d63] min-[1440px]:hidden">
            Book A Call
          </Button>
        </div>
      </div>
    </section>
  );
}
