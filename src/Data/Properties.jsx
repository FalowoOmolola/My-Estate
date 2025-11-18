import prop1 from "../assets/prop1.jpg";
import prop2 from "../assets/prop2.jpg";
import prop3 from "../assets/prop3.jpg";

export const properties = [
  {
    id: 1,
    title: "Luxury Duplex in Lekki Phase 1",
    price: "₦250,000,000",
    location: "Lekki Phase 1, Lagos",
    images: ["/prop1.jpg", "/prop1-2.jpg"],
    image: prop1,
    bedrooms: 4,
    bathrooms: 3,
    size: "450 sqm",
    description:
      "This stunning luxury villa features spacious living areas, modern architecture, and top-class facilities. Located in the heart of Lekki, it offers serene living with easy access to the city.",
  },
  {
    id: 2,
    title: "4-Bedroom Apartment in Ikoyi",
    price: "₦180,000,000",
    images: ["/prop2.jpg", "/prop2-2.jpg"],
    image: prop2,
    bedrooms: 3,
    bathrooms: 3,
    size: "300 sqm",
    description:
      "A premium penthouse with panoramic city views, private terrace and concierge services. Ideal for executive living.",
  },
  {
    id: 3,
    title: "Modern Home in Banana Island",
    price: "₦500,000,000",
    location: "Banana Island, Lagos",
    images: ["/prop3.jpg", "/prop3-2.jpg"],
    image: prop3,
    bedrooms: 3,
    bathrooms: 2,
    size: "220 sqm",
    description:
      "Comfortable family home in a quiet neighborhood, with garden and secure parking.",
  },
];
