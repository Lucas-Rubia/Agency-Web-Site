import { images } from "@/utils/images";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";


export function Header () {
  return (
    <header className="flex items-center justify-between rounded-lg bg-[#1a1a1a] p-3.5 min-[1440px]:p-5 min-[1920px]:p-6">
      <img className="w-[86px] min-[1440px]:w-24 min-[1920px]:w-32" src={images.Logo} alt="NexGen" />
      <Button className="min-[900px]:hidden" size="icon">
        <Menu />
      </Button>

      <div className="items-center gap-3.5 hidden min-[900px]:flex ">
        <Button>
          Home
        </Button>
        <Button>
          Services
        </Button>
        <Button>
          Projects
        </Button>
        <Button>
          About
        </Button>
        <Button>
          Careers
        </Button>
        <Button>
          Blogs
        </Button>
        <Button>
          Contact Us
        </Button>
      </div>
    </header>
  )
}