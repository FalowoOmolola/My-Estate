import React from "react";
import { useParams, Link } from "react-router-dom";
import { properties } from "../Data/Properties";
import { useScrollAnimation } from "../Hooks/UseScrollAnimation";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));
  const ref = useScrollAnimation();

  if (!property) {
    return (
      <div className="text-center py-20 text-[#0a2640]">
        <h1 className="text-3xl font-semibold">Property not found</h1>
        <Link to="/" className="text-[#0a2640]/80 mt-4 block">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-20 max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={property.image} alt={property.title} className="w-full h-96 object-cover img-hover" />
          </div>
          {/* small gallery */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {property.images.map((img, i) => (
              <img key={i} src={img} alt={`${property.title} ${i}`} className="w-full h-24 object-cover rounded-md img-hover" />
            ))}
          </div>
        </div>

        <div ref={ref} className="opacity-0">
          <h1 className="text-3xl font-bold text-[#0a2640]">{property.title}</h1>
          <p className="text-[#0a2640]/70 mt-1">{property.location}</p>
          <p className="text-2xl font-semibold text-[#f5b400] mt-4">{property.price}</p>

          <div className="mt-6 flex flex-wrap gap-6 text-[#0a2640]">
            <div className="px-4 py-2 bg-[#f8f8f8] rounded-md">{property.bedrooms} bd</div>
            <div className="px-4 py-2 bg-[#f8f8f8] rounded-md">{property.bathrooms} ba</div>
            <div className="px-4 py-2 bg-[#f8f8f8] rounded-md">{property.size}</div>
          </div>

          <p className="mt-6 text-[#0a2640]/80 leading-relaxed">{property.description}</p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="px-6 py-3 rounded-full bg-[#0a2640] text-white btn-lift">Contact Agent</a>
            <Link to="/services" className="px-4 py-3 rounded-full border border-[#0a2640] text-[#0a2640] hover:bg-[#0a2640] hover:text-white transition">View Similar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
