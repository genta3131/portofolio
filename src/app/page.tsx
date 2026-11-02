import { Navbar } from "../components/Navbar";
import { ScrollProgress } from "../components/ScrollProgress";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ScrollReveal } from "../components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8">
        <Hero />
        <ScrollReveal>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </ScrollReveal>
      </main>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
}
