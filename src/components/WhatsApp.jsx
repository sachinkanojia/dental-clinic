import React from 'react';
import { Link } from 'react-router-dom';

export default function WhatsApp() {
  return (
<div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">

<Link aria-label="WhatsApp Support" className="bg-[#25D366] rounded-full p-4 flex items-center justify-center shadow-xl hover:scale-110 transition-transform animate-bounce group relative" to="#">
<span className="material-symbols-outlined text-white" style={{fontVariationSettings: '\'FILL\' 1'}}>chat</span>
{/* Tooltip */}
<div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-surface text-on-surface px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-outline-variant/20">
<p className="font-button text-button">Instant Help</p>
<p className="font-label-caps text-label-caps text-on-surface-variant">Chat with us on WhatsApp</p>
</div>
</Link>

</div>
  );
}
