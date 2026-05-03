import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClass = (path) => {
    return currentPath === path
      ? "text-[#0F4C81] dark:text-blue-400 font-bold border-b-2 border-[#0F4C81] pb-1 hover:opacity-80 transition-opacity"
      : "text-slate-600 dark:text-slate-400 hover:text-[#0F4C81] transition-colors hover:opacity-80 transition-opacity";
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm dark:shadow-none border-b border-slate-100 dark:border-slate-800 transition-all duration-300">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-container text-3xl" style={{ fontVariationSettings: '\'FILL\' 1' }}>dentistry</span>
          <span className="text-xl font-bold tracking-tight text-[#0F4C81] dark:text-white">Dental Clinic</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-manrope font-medium text-sm tracking-wide">
          <Link className={getLinkClass('/')} to="/">Home</Link>
          <Link className={getLinkClass('/about-us')} to="/about-us">About Us</Link>
          <Link className={getLinkClass('/services')} to="/services">Services</Link>
          <Link className={getLinkClass('/testimonials')} to="/testimonials">Testimonials</Link>
          <Link className={getLinkClass('/gallery')} to="/gallery">Gallery</Link>
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Link className="font-button text-button text-secondary hover:text-primary transition-colors" to="#">Call Now</Link>
          <Link className="bg-primary-container text-on-primary font-button text-button px-6 py-3 rounded-DEFAULT hover:bg-primary transition-colors shadow-sm" to="/book-appointment">Book Appointment</Link>
        </div>
        <button className="md:hidden text-primary-container" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="material-symbols-outlined text-3xl">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-4 px-8 flex flex-col gap-4 font-manrope font-medium shadow-md">
          <Link onClick={() => setMenuOpen(false)} className={getLinkClass('/')} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} className={getLinkClass('/about-us')} to="/about-us">About Us</Link>
          <Link onClick={() => setMenuOpen(false)} className={getLinkClass('/services')} to="/services">Services</Link>
          <Link onClick={() => setMenuOpen(false)} className={getLinkClass('/testimonials')} to="/testimonials">Testimonials</Link>
          <Link onClick={() => setMenuOpen(false)} className={getLinkClass('/gallery')} to="/gallery">Gallery</Link>
          <hr className="border-slate-100 dark:border-slate-800 my-2" />
          <Link className="font-button text-button text-secondary text-center py-2" to="#">Call Now</Link>
          <Link onClick={() => setMenuOpen(false)} className="bg-primary-container text-on-primary font-button text-button px-6 py-3 rounded-DEFAULT text-center shadow-sm" to="/book-appointment">Book Appointment</Link>
        </div>
      )}
    </header>
  );
}
