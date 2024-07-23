import FAQs from "@/sections/FAQs";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import Insight from "@/sections/Insight";
import PricingSection from "@/sections/PricingSection";
import Solutions from "@/sections/Solutions";
import Testimonial from "@/sections/Testimonial";
import WhyMediaBear from "@/sections/WhyMediaBear";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Hero />
      <WhyMediaBear />
      <Solutions />
      <HowItWorks />
      <Insight />
      <PricingSection />
      <Testimonial />
      <FAQs />
    </section>
  );
}
