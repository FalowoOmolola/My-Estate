import React from "react";
import { useScrollAnimation } from "../Hooks/UseScrollAnimation";

export default function Contact() {
  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();

  return (
    <div className="pt-10 pb-20">
      <section ref={ref1} className="opacity-0 max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0a2640]">Contact <span className="text-[#f5b400]">Us</span></h1>
        <p className="mt-4 text-[#0a2640]/80 max-w-2xl mx-auto">
          We’d love to hear from you. Reach out to Dauntless Estates today — let’s help you find or list your dream property.
        </p>
      </section>

      <section ref={ref2} className="opacity-0 max-w-6xl mx-auto px-4 mt-12 grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#0a2640]">Get In Touch</h2>
          <p className="text-[#0a2640]/80">
            Contact us directly using the information below. Our agents are available to assist you 24/7.
          </p>
          <ul className="space-y-3 text-[#0a2640]/80 text-sm">
            <li>📍 25 Admiralty Way, Lekki Phase 1, Lagos</li>
            <li>📞 +234 800 000 0000</li>
            <li>✉️ hello@dauntlessestates.com</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
