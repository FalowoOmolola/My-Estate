import React from "react";
import PropertyCard from "../Components/PropertyCard";
import { properties } from "../Data/Properties";

export default function ListingsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((p, i) => (
        <div key={p.id} className="opacity-0" style={{ animationDelay: `${120 * i}ms` }}>
          <PropertyCard p={p} delay={120 * i} />
        </div>
      ))}
    </div>
  );
}
