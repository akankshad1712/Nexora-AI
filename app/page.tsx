import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Stats from "@/components/landing/Stats";
import Pricing from "@/components/landing/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <Stats />
      <Pricing />
    </>
  );
}