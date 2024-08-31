import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Guest from "@/components/Guest";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Gallery from "@/components/Gallery";
import { navItem } from "@/data/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex items-center flex-col overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItem}></FloatingNav>
        <Hero />
        <About />
        <Guest/>
        <Projects />
        <Experiences />
        <Gallery/>
        <Footer />
      </div>
    </main>
  );
}
