import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { OurServices } from "./components/our-services-section";
import { OurWorks } from "./components/our-works";
import { ReasonsJourney } from "./components/reasons-journey-section";
import { Testimonials } from "./components/testimonials";


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="Agency-WebSite-theme">
      <main className="p-4 pt-10 min-[1440px]:p-10 min-[1440px]:pt-7 min-[1920px]:p-12">
        <Header />
        <div className="space-y-12 min-[1440px]:space-y-20 min-[1920px]:space-y-[120px]">
          <HeroSection />
          <ReasonsJourney />
          <OurServices />
          <OurWorks />
          <Testimonials />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
