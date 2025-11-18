import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md bg-[#0a2640] flex items-center justify-center text-[#f5f5f5] font-bold text-lg transform hover:scale-105 transition">
            D
          </div>
          <div>
            <div className="text-lg font-semibold text-[#0a2640]">Dauntless Estates</div>
            <div className="text-xs text-[#0a2640]/60">Find Your Dream Home</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#0a2640] font-semibold' : 'text-[#0a2640]/80 hover:text-[#0a2640]')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-[#0a2640] font-semibold' : 'text-[#0a2640]/80 hover:text-[#0a2640]')}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'text-[#0a2640] font-semibold' : 'text-[#0a2640]/80 hover:text-[#0a2640]')}>
            Services
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-[#0a2640] font-semibold' : 'text-[#0a2640]/80 hover:text-[#0a2640]')}>
            Contact
          </NavLink>

          <a href="/contact" className="ml-3 inline-block rounded-full px-4 py-2 text-sm font-medium bg-[#f5b400] text-[#0a2640] btn-lift">
            Get In Touch
          </a>
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} aria-label="menu" className="p-2 rounded-md border">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-3 flex flex-col gap-2">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      )}
    </div>
  );
}
