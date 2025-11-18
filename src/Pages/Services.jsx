import React from "react";
import { useScrollAnimation } from "../Hooks/UseScrollAnimation";

export default function Services() {
  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();

  const services = [
    {
      title: "Property Sales",
      desc: "Buy or sell with confidence. We handle luxury homes, apartments, and land with expert valuation and market visibility.",
      icon: "🏡",
    },
    {
      title: "Property Management",
      desc: "From rent collection to maintenance, our professional managers ensure your investment stays profitable and stress-free.",
      icon: "🛠️",
    },
    {
      title: "Real Estate Consulting",
      desc: "We provide professional guidance on property investment strategies, pricing, and ROI analysis for individuals and companies.",
      icon: "📈",
    },
    {
      title: "Leasing & Rentals",
      desc: "Find short-term or long-term rental options across prime locations in Nigeria, tailored to your budget and taste.",
      icon: "🔑",
    },
  ];

  return (
    <div className="pt-10 pb-20">
      <section ref={ref1} className="opacity-0 max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0a2640]">Our <span className="text-[#f5b400]">Services</span></h1>
        <p className="mt-4 text-[#0a2640]/80 max-w-2xl mx-auto">
          Whether you're buying, selling, or investing, Dauntless Estates offers comprehensive real estate services designed to help you make confident decisions.
        </p>
      </section>

      <section ref={ref2} className="opacity-0 max-w-7xl mx-auto px-4 mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="opacity-0 fade-up-strong card-pop bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            style={{ animationDelay: `${150 * i}ms` }}
          >
            <div className="text-4xl">{s.icon}</div>
            <h3 className="mt-4 text-lg font-semibold text-[#0a2640]">{s.title}</h3>
            <p className="mt-2 text-sm text-[#0a2640]/70">{s.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
