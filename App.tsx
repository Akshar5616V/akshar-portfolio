import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import About from "./components/About";
import Tech from "./components/Tech";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-300">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <WhyChoose />
        <Process />
        <About />
        <Tech />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
