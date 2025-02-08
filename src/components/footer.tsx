import { menuLinks } from "@/constants/menu-links";
import { images } from "@/utils/images";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <section>
      <div className="bg-[#1a1a1a] text-sm text-[#676665] uppercase rounded-xl h-12 flex items-center my-2.5 min-[1920px]:my-5">
        WebSite Design
      </div>
      <footer className="flex flex-wrap gap-2.5 min-[1920px]:gap-5">
        <div className="flex items-stretch flex-wrap gap-2.5 min-[1920px]:gap-5">
          <div className="bg-[#1a1a1a] rounded-xl p-[30px] space-y-[60px] flex-1 min-[390px]:min-w-[300px] min-[1440px]:min-w-[328px] min-[1920px]:min-w-[430px]">
            <div className="flex items-center justify-between">
              <span className="size-[52px] min-[1440px]:size-14 min-[1920px]:size-[66px] rounded-lg border border-[#33333] flex items-center justify-center bg-[#1f1f1f]">
                <img
                  className="size-6 min-[1440px]:size-7 min-[1920px]:size-[34px]"
                  src={images.Instagram}
                  alt="Instagram"
                />
              </span>
              <Button variant="ghost" className="hover:bg-transparent">
                <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                  <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
                </span>
              </Button>
            </div>
            <div>
              <h4 className="uppercase font-medium text-[#f9efec] text-[22px] mb-2.5">
                Instagram
              </h4>
              <p className="text-[#b3b3b2]">
                Share visually appealing snippets of our latest web projects.
              </p>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-[30px] space-y-[60px] flex-1 min-[390px]:min-w-[300px] min-[1440px]:min-w-[328px] min-[1920px]:min-w-[430px]">
            <div className="flex items-center justify-between">
              <span className="size-[52px] min-[1440px]:size-14 min-[1920px]:size-[66px] rounded-lg border border-[#33333] flex items-center justify-center bg-[#1f1f1f]">
                <img
                  className="size-6 min-[1440px]:size-7 min-[1920px]:size-[34px]"
                  src={images.Twitter}
                  alt="Twitter"
                />
              </span>
              <Button variant="ghost" className="hover:bg-transparent">
                <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                  <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
                </span>
              </Button>
            </div>
            <div>
              <h4 className="uppercase font-medium text-[#f9efec] text-[22px] mb-2.5">
                Twitter
              </h4>
              <p className="text-[#b3b3b2]">
                Tweet about interesting coding challenges you've overcome.
              </p>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-[30px] space-y-[60px] flex-1 min-[390px]:min-w-[300px] min-[1440px]:min-w-[328px] min-[1920px]:min-w-[430px]">
            <div className="flex items-center justify-between">
              <span className="size-[52px] min-[1440px]:size-14 min-[1920px]:size-[66px] rounded-lg border border-[#33333] flex items-center justify-center bg-[#1f1f1f]">
                <img
                  className="size-6 min-[1440px]:size-7 min-[1920px]:size-[34px]"
                  src={images.Dribble}
                  alt="Dribble"
                />
              </span>
              <Button variant="ghost" className="hover:bg-transparent">
                <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                  <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
                </span>
              </Button>
            </div>
            <div>
              <h4 className="uppercase font-medium text-[#f9efec] text-[22px] mb-2.5">
                Dribble
              </h4>
              <p className="text-[#b3b3b2]">
                Showcase design elements of our web projects.
              </p>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-[30px] space-y-[60px] flex-1 min-[390px]:min-w-[300px] min-[1440px]:min-w-[328px] min-[1920px]:min-w-[430px]">
            <div className="flex items-center justify-between">
              <span className="size-[52px] min-[1440px]:size-14 min-[1920px]:size-[66px] rounded-lg border border-[#33333] flex items-center justify-center bg-[#1f1f1f]">
                <img
                  className="size-6 min-[1440px]:size-7 min-[1920px]:size-[34px]"
                  src={images.Behance}
                  alt="Behance"
                />
              </span>
              <Button variant="ghost" className="hover:bg-transparent">
                <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                  <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
                </span>
              </Button>
            </div>
            <div>
              <h4 className="uppercase font-medium text-[#f9efec] text-[22px] mb-2.5">
                Behance
              </h4>
              <p className="text-[#b3b3b2]">
                Create detailed presentations for our projects.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full p-6 rounded-xl bg-[#1a1a1a] min-[1440px]:p-10 min-[1920px]:p-[60px]">
          <span className="uppercase text-sm text-[#676665] min-[1440px]:text-base min-[1920px]:text-lg">
            NEWSLETTER
          </span>
          <h4 className="uppercase text-[#f9efec] font-medium text-xl mb-4 mt-1 min-[1440px]:text-2xl min-[1440px]:mt-2 min-[1920px]:text-3xl min-[1920px]:mt-2.5">
            Subscribe To our Newsletter
          </h4>
          <div className="flex items-center gap-5">
            <Input
              className="bg-transparent border-t-transparent focus-visible:ring-offset-0 focus-visible:ring-transparent border-x-transparent rounded-none border-b border-b-[#333333]"
              placeholder="Enter your email"
            />
            <Button variant="ghost" className="hover:bg-transparent">
              <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
                <ArrowUpRight className="!size-7 stroke-[1px] min-[1920px]:!size-8" />
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full p-6 rounded-xl bg-[#1a1a1a] min-[1440px]:p-10 min-[1920px]:p-[60px] grid grid-cols-2 min-[600px]:grid-cols-4 gap-[30px] min-[1440px]:gap-10 min-[1920px]:gap-[60px]">
          {menuLinks.map((item, index) => (
            <div key={index}>
              <h5 className="font-bold text-lg text-[#f3dfd8] mb-4 min-[1440px]:text-[22px] min-[1440px]:mb-5 min-[1920px]:mb-[30px]">
                {item.title}
              </h5>
              <ul className="space-y-2.5 min-[1440px]:space-y-3.5 min-[1920px]:space-y-[18px]">
                {item.links.map((row, indexRow) => (
                  <li
                    key={indexRow}
                    className="text-sm text-[#81807e] min-[1440px]:text-base min-[1920px]:text-lg "
                  >
                    <a href={row.link}>{row.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center flex-wrap justify-center p-6 gap-5 rounded-xl text-center font-robotoMono text-[#b3b3b2] text-sm bg-[#1a1a1a] min-[1440px]:p-10 min-[1920px]:p-[60px] min-[1920px]:text-lg md:justify-between">
          <p className="">&copy; 2024 NextGen. All rights reserved.</p>
          <p className="flex items-center flex-wrap justify-center text-center">
            Terms & Conditions{" "}
            <span className="text-white/30 block mx-2">|</span>Privacy Policy
          </p>
        </div>
      </footer>
    </section>
  );
}
