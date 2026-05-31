import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Portfolio from "@/components/Portfolio";
import Media from "@/components/Media";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Portfolio />
      <Media />
      <Capabilities />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
