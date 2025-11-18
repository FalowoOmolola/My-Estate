import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../Hooks/UseScrollAnimation";
import hero from "../assets/hero.jpg";
import prop1 from "../assets/prop1.jpg";
import prop2 from "../assets/prop2.jpg";
import prop3 from "../assets/prop3.jpg";
import { FaRegHandshake } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import { RiContractLine } from "react-icons/ri";

export default function Home() {
  const heroRef = useScrollAnimation();
  const featureRef = useScrollAnimation();
  const propertyRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Duplex in Lekki Phase 1",
      price: "₦250,000,000",
      img: prop1,
    },
    {
      id: 2,
      title: "4-Bedroom Apartment in Ikoyi",
      price: "₦180,000,000",
      img: prop2,
    },
    {
      id: 3,
      title: "Modern Home in Banana Island",
      price: "₦500,000,000",
      img: prop3,
    },
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="opacity-0 relative h-[85vh] md:h-screen flex items-center justify-center text-center text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoomIn"
          style={{
            backgroundImage: `url(${hero})`, 
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Overlay */}
        <div className="relative z-10 max-w-3xl px-6 fade-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight fade-in">
            Discover <span className="text-[#f5b400]">Luxury Living</span> in
            Every Home
          </h1>
          <p className="mt-4 text-gray-200 text-lg">
            Explore exclusive properties designed for comfort, elegance, and
            timeless beauty.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/services"
              className="bg-[#f5b400] text-[#0a2640] py-3 px-6 rounded-lg font-semibold btn-hover"
            >
              View Properties
            </Link>
            <Link
              to="/contact"
              className="bg-white/90 text-[#0a2640] py-3 px-6 rounded-lg font-semibold hover:bg-white transition duration-300"
            >
              Contact Agent
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featureRef}
        className="opacity-0 max-w-6xl mx-auto mt-24 px-4 grid md:grid-cols-3 gap-10 text-center"
      >
        <div className="fade-up transform hover:-translate-y-2 transition-all duration-500">
          <FaRegHandshake className="w-16 h-16 mx-auto mb-4 text-[#f5b400]" />
          <h3 className="text-xl font-semibold text-[#0a2640]">
            Trusted Agents
          </h3>
          <p className="text-[#0a2640]/70 mt-2">
            Work with professional agents who understand your needs and deliver
            beyond expectations.
          </p>
        </div>

        <div className="fade-up transform hover:-translate-y-2 transition-all duration-500 delay-100">
          <FaCrown className="w-16 h-16 mx-auto mb-4 text-[#f5b400]" />
          <h3 className="text-xl font-semibold text-[#0a2640]">
            Luxury Properties
          </h3>
          <p className="text-[#0a2640]/70 mt-2">
            From Lekki to Banana Island, explore our curated selection of
            premium properties.
          </p>
        </div>

        <div className="fade-up transform hover:-translate-y-2 transition-all duration-500 delay-200">
          <RiContractLine className="w-16 h-16 mx-auto mb-4 text-[#f5b400]" />
          <h3 className="text-xl font-semibold text-[#0a2640]">
            Seamless Deals
          </h3>
          <p className="text-[#0a2640]/70 mt-2">
            Experience stress-free buying and selling with full transparency and
            guidance at every step.
          </p>
        </div>
      </section>

      {/* Featured Properties */}
      <section
        ref={propertyRef}
        className="opacity-0 mt-24 max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a2640]">
          Featured <span className="text-[#f5b400]">Properties</span>
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProperties.map((p, index) => (
            <div
              key={p.id}
              className="fade-up bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#0a2640]">
                  {p.title}
                </h3>
                <p className="mt-1 text-[#f5b400] font-medium">{p.price}</p>
                <Link
                  to={`/details/${p.id}`}
                  className="inline-block mt-4 text-[#0a2640] border border-[#0a2640] px-4 py-2 rounded-lg hover:bg-[#0a2640] hover:text-white transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        ref={ctaRef}
        className="opacity-0 mt-24 bg-[#f5b400] text-[#0a2640] py-16 text-center fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Find Your Perfect Home?
        </h2>
        <p className="mt-3 text-[#0a2640]/80">
          Let our expert agents help you make the best real estate decision.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="bg-[#0a2640] text-white py-3 px-8 rounded-lg btn-hover"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
