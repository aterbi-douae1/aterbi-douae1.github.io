import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Sathtern from "@/components/Sathtern";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <Providers>
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Sathtern />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </Providers>
  );
}
