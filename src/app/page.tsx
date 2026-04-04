import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Standards from "@/components/Standards";
import Testimonials from "@/components/Testimonials";
import Plans from "@/components/Plans";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <About />
        <Industries />
        <Services />
        <HowItWorks />
        <Standards />
        <Testimonials />
        <Plans />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
