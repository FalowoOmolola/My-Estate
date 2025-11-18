import React from "react";

export default function Footer(){
  return (
    <footer className="bg-[#0a2640] text-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-xl font-semibold">Dauntless Estates</div>
          <p className="mt-2 text-sm text-[#f5f5f5]/80">Luxury residential and commercial property services — we guide you home.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1 text-[#f5f5f5]/90">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-[#f5f5f5]/90">hello@dauntlessestates.com</p>
          <p className="text-sm text-[#f5f5f5]/90 mt-1">+234 706 850 4071</p>
        </div>
      </div>

      <div className="border-t border-[#0a2640]/60">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-[#f5f5f5]/70">© {new Date().getFullYear()} Dauntless Estates — All rights reserved</div>
      </div>
    </footer>
  );
}
