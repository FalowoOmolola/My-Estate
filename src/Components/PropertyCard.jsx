import React from "react";
import { Link } from "react-router-dom";

export default function PropertyCard({ p, delay = 0 }) {
  const style = { animationDelay: `${delay}ms` };
  return (
    <article className="opacity-0 card-pop rounded-lg overflow-hidden bg-white shadow group" style={style}>
      <div className="relative">
        <img src={p.image} alt={p.title} className="w-full h-48 object-cover img-hover" />
        <div className="absolute top-3 left-3 bg-[#0a2640]/85 text-[#f5f5f5] px-3 py-1 rounded-md text-sm">{p.price}</div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-[#0a2640]">{p.title}</h3>
        <p className="text-sm text-[#0a2640]/70 mt-1">{p.location}</p>

        <div className="mt-4 flex items-center justify-between">
          <Link to={`/property/${p.id}`} className="text-sm text-[#0a2640]/80 hover:underline">View details</Link>
          <Link to={`/property/${p.id}`} className="px-3 py-1 rounded-full bg-[#f5b400] text-[#0a2640] text-sm btn-lift">Enquire</Link>
        </div>
      </div>
    </article>
  );
}
