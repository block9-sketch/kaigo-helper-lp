/* =============================================================
   Home — やすらぎ訪問介護サービス LP
   Design: 「大地の温もり」 Biophilic × Earthy Modern
   Sections: Hero → Reasons → Services → Flow → Staff → Pricing → FAQ → Contact
   ============================================================= */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ReasonsSection from "@/components/ReasonsSection";
import ServicesSection from "@/components/ServicesSection";
import FlowSection from "@/components/FlowSection";
import StaffSection from "@/components/StaffSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  // Initialize scroll animations
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.015 85)" }}>
      <Navbar />
      <main>
        <HeroSection />
        <ReasonsSection />
        <ServicesSection />
        <FlowSection />
        <StaffSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
