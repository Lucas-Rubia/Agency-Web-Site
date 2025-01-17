import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="Agency-WebSite-theme">
      <div className="p-4 pt-10 min-[1440px]:p-10 min-[1440px]:pt-7 min-[1920px]:p-12">
        <Header />
        <HeroSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
