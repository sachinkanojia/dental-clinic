import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
<footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 border-t border-slate-200 dark:border-slate-800">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
<div className="md:col-span-1">
<span className="text-lg font-black text-[#0F4C81] dark:text-white block mb-4">Mile Dental Clinic</span>
<p className="font-manrope text-sm leading-relaxed text-slate-500 dark:text-slate-400">Your trusted partner for expert dental care in the heart of Nairobi.</p>
</div>
<div className="flex flex-col gap-3 font-manrope text-sm leading-relaxed">
<span className="font-semibold text-slate-900 dark:text-white mb-2">Quick Links</span>
<Link className="text-slate-500 dark:text-slate-400 hover:text-[#0F4C81] dark:hover:text-blue-300 Transition-all duration-300" to="#">Privacy Policy</Link>
<Link className="text-slate-500 dark:text-slate-400 hover:text-[#0F4C81] dark:hover:text-blue-300 Transition-all duration-300" to="#">Terms of Service</Link>
</div>
<div className="flex flex-col gap-3 font-manrope text-sm leading-relaxed">
<span className="font-semibold text-slate-900 dark:text-white mb-2">Contact</span>
<Link className="text-slate-500 dark:text-slate-400 hover:text-[#0F4C81] dark:hover:text-blue-300 Transition-all duration-300" to="#">Google Maps</Link>
<Link className="text-slate-500 dark:text-slate-400 hover:text-[#0F4C81] dark:hover:text-blue-300 Transition-all duration-300" to="#">Emergency Care</Link>
</div>
<div className="md:col-span-1 flex flex-col justify-end">
<p className="font-manrope text-sm leading-relaxed text-slate-500 dark:text-slate-400 mt-8 md:mt-0">© 2024 Mile Dental Clinic Nairobi. All rights reserved.</p>
</div>
</div>
</footer>
  );
}
