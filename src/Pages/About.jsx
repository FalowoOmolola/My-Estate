import React from "react";
import { useScrollAnimation } from "../Hooks/UseScrollAnimation";

export default function About() {
  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();
  const ref4 = useScrollAnimation();

  const team = [
    {
      name: "Ademola Smith",
      role: "Chief Executive Officer",
      img: "/team1.jpg",
    },
    {
      name: "Chioma Okeke",
      role: "Head of Sales",
      img: "/team2.jpg",
    },
    {
      name: "Tunde Bello",
      role: "Property Consultant",
      img: "/team3.jpg",
    },
    {
      name: "Grace Adeyemi",
      role: "Marketing Manager",
      img: "/team4.jpg",
    },
  ];

  const testimonials = [
    {
      quote:
        "Dauntless Estates helped me find my dream home in Lekki with zero stress. Their professionalism is unmatched.",
      author: "— Mrs. Abiola Adesanya",
    },
    {
      quote:
        "Working with Dauntless was the best decision I made. Their transparency and attention to detail are top-notch.",
      author: "— Daniel Okoro",
    },
    {
      quote:
        "From property viewing to final purchase, the process was seamless. Highly recommended for anyone buying property.",
      author: "— Linda Oyenuga",
    },
  ];

  return (
    <div className="pt-10 pb-24">
      {/* About Intro */}
      <section ref={ref1} className="opacity-0 max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0a2640]">
          About <span className="text-[#f5b400]">Dauntless Estates</span>
        </h1>
        <p className="mt-4 text-[#0a2640]/80 max-w-3xl mx-auto">
          Dauntless Estates is a premier real estate agency that connects people to luxurious homes,
          modern apartments, and commercial spaces across Nigeria. We are committed to integrity,
          excellence, and a seamless property experience for all our clients.
        </p>
      </section>

      {/* Mission & Vision */}
      <section ref={ref2} className="opacity-0 max-w-6xl mx-auto px-4 mt-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/prop2-2.jpg"
            alt="About us"
            className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#0a2640]">Our Mission</h2>
          <p className="mt-3 text-[#0a2640]/80 leading-relaxed">
            To redefine the real estate experience through innovation, transparency, and a personalized
            approach that ensures every client finds not just a property — but a home.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-[#0a2640]">Our Vision</h3>
          <p className="mt-2 text-[#0a2640]/80 leading-relaxed">
            We envision a world where property transactions are effortless and empowering, bridging trust
            between clients and the Nigerian real estate market.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section ref={ref3} className="opacity-0 mt-20 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#0a2640]">
          Meet Our <span className="text-[#f5b400]">Team</span>
        </h2>
        <p className="mt-3 text-[#0a2640]/80 max-w-2xl mx-auto">
          Our team of professionals ensures every transaction is transparent, smooth, and rewarding.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#0a2640]">{member.name}</h3>
                <p className="text-sm text-[#0a2640]/70">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={ref4} className="opacity-0 mt-24 bg-[#0a2640] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="mt-3 text-[#f5b400] font-medium">Real stories from happy homeowners</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white text-[#0a2640] rounded-xl shadow-lg p-6 hover:-translate-y-2 transition-transform duration-500"
              >
                <p className="italic text-sm leading-relaxed">“{t.quote}”</p>
                <p className="mt-4 font-semibold text-[#f5b400]">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
