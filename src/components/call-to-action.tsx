import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export function CallToAction() {
  return (
    <section className="bg-[#ce7d63] flex flex-wrap justify-between items-center gap-4 rounded-[14px] p-[30px] min-[1440px]:p-[60px] min-[1920px]:p-20 min-[1024px]:items-end">
      <div className="min-[768px]:w-2/3 min-[1440px]:w-3/4">
        <h3 className="uppercase text-[28px] font-medium text-[#0f0f0f] min-[1440px]:text-[42px] min-[1920px]:text-[58px]">Ready to Transform Your Digital Presence?</h3>
        <p className="text-sm text-[#262626] min-[1440px]:text-base min-[1920px]:text-2xl">
          Take the first step towards digital success with NexGen by your side.
          Our team of experts is eager to craft tailored solutions that drive
          growth for your business.
        </p>
      </div>
      <Button variant="secondary" className="text-[#f3dfd8] bg-black rounded-xl min-[1440px]:h-[50px] min-[1920px]:h-[64px] min-[1920px]:text-lg">
        Get In Touch
        <ArrowUpRight className="!size-[22px] min-[1920px]:!size-7" />
      </Button>
    </section>
  );
}
