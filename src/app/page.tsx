import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppButton from "@/components/WhatsAppButton";

// Layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sections
import Hero from "@/components/sections/Hero";
import TrustedBrands from "@/components/sections/TrustedBrands";
import WhyCustomBottles from "@/components/sections/WhyCustomBottles";
import IndustryShowcase from "@/components/sections/IndustryShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import BottleOptions from "@/components/sections/BottleOptions";
import TransformationJourney from "@/components/sections/TransformationJourney";
import Gallery from "@/components/gallery/GallerySection";
import Standards from "@/components/sections/Standards";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <TrustedBrands />
        <WhyCustomBottles />
        <IndustryShowcase />
        <HowItWorks />
        <BottleOptions />
        <TransformationJourney />
        <Gallery />
        <Standards />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
