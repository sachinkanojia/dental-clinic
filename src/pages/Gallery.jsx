import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const getBtnClass = (btnFilter) => {
    const base = "filter-btn px-6 py-2 rounded-full font-label-caps text-label-caps tracking-wider transition-colors ";
    if (filter === btnFilter) {
      return base + "bg-primary-container text-white shadow-sm transition-transform hover:-translate-y-0.5";
    }
    return base + "bg-white border border-outline-variant text-on-surface-variant hover:bg-surface-container-low";
  };

  const getItemStyle = (category) => {
    if (filter === 'all' || filter === category) {
      return { display: 'block' };
    }
    return { display: 'none' };
  };

  return (
<main className="max-w-7xl mx-auto px-gutter py-section-gap">
{/* Header Section */}
<header className="text-center mb-16 max-w-3xl mx-auto">
<h1 className="font-h1 text-h1 text-primary mb-4">Our Clinic &amp; Transformations</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Explore our state-of-the-art facilities, meet our dedicated staff in action, and view the life-changing smile transformations we've achieved for our patients in Nairobi.</p>
</header>
{/* Filter/Tabs (Stylistic) */}
<div className="flex flex-wrap justify-center gap-4 mb-12" id="gallery-filters">
<button onClick={() => setFilter('all')} className={getBtnClass('all')}>ALL</button>
<button onClick={() => setFilter('interior')} className={getBtnClass('interior')}>INTERIOR &amp; EQUIPMENT</button>
<button onClick={() => setFilter('staff')} className={getBtnClass('staff')}>STAFF IN ACTION</button>
<button onClick={() => setFilter('transformations')} className={getBtnClass('transformations')}>SMILE TRANSFORMATIONS</button>
</div>
{/* Masonry Grid */}
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" id="gallery-grid">
{/* Item 1: Interior */}
<div style={getItemStyle('interior')} className="gallery-item interior break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm bg-white cursor-pointer transition-shadow hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)]">
<img alt="Clinic Interior" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A bright, modern dental clinic reception area featuring sleek white minimalist desks, subtle soft teal accents, and large windows letting in natural sunlight. The atmosphere is calming, hygienic, and professional, reflecting a high-end medical environment. Lush green potted plants sit in the corners against a soft gray wall." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWhW6YF4Mvs99Pq-cgo_KzYyNKi2q5K1ECI6tfW7BDGBgDtbhNZHtJAMVTUuS4N1zDshCSK8KMJvzft6iQ6UAzkUtPbaTvz0G4SOj2F4oORYoj3TaAHTGcMf1gJn1012hWRTu739qnY2TylwDpbs2-p6kOVmvCOQwejZLpK_1lPj9CYqds5D5QUKyAeaL3bDB4-fvbIFNuVmjOpQ3u9ptD5iZfXxRKhqCg9M4NZNZIepM178a7OEWhbgDZ-aS3gAlumUUhdoXJcA"/>
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="material-symbols-outlined text-white text-4xl">zoom_in</span>
</div>
<div className="p-4 bg-white border-t border-surface-variant">
<h3 className="font-h3 text-h3 text-primary text-sm mb-1">Reception Area</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-xs">A welcoming, calming environment.</p>
</div>
</div>
{/* Item 2: Before/After (Bento style tall) */}
<div style={getItemStyle('transformations')} className="gallery-item transformations break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm bg-white cursor-pointer transition-shadow hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)]">
<div className="relative h-[400px]">
<img alt="Smile Transformation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A split image showing a dramatic 'before and after' dental smile transformation. On the left, stained and slightly misaligned teeth; on the right, perfectly straight, bright white, healthy teeth. The lighting is clinical and focused, emphasizing the precision of the cosmetic dentistry work against a neutral, soft blue medical background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsIigRGOhsSM5uSKMKW5wcafltyFjcgtvOMD5AUHFfm-bl418VjbXkw5oCpm04wdPYmeFIqgvE1VVD_g6C5e-v8ua6m6HqAlWpj5IPqpVIPfsVkj7Eh5C9zy49uQ_YwvQh27enrLf89rnidW5zyH1GKtej7hQm711xnWdPUWMKtsLfUgPkEZZCUqMacUu0emZ7WSxYlS_FiabJ_87LnvvHBTsjC1qP6okBXQZaSPbNi1aPA-2a5FpqBvDTEI0aECZEWZkyOOARMg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
<span className="font-label-caps text-[10px] bg-tertiary-container px-2 py-1 rounded">BEFORE &amp; AFTER</span>
<span className="font-body-md text-sm">Veneers &amp; Whitening</span>
</div>
</div>
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="material-symbols-outlined text-white text-4xl">zoom_in</span>
</div>
</div>
{/* Item 3: Equipment */}
<div style={getItemStyle('interior')} className="gallery-item interior break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm bg-white cursor-pointer transition-shadow hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] border-l-4 border-tertiary-container">
<img alt="Advanced Equipment" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Close-up of state-of-the-art dental equipment, specifically a modern 3D imaging machine and clean metallic dental tools resting on a pristine tray. The lighting is bright and sterile white, highlighting the technological advancement and hygiene of the clinic. Soft blue tones in the background complete the clinical look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsxl-UUZmgaOvtSE6uJAWW3hfzskXmyRyBrUKmqZW5s2qHcwpOYXu4uJRRCkF45DiikkeEaXwknCVcij_s5Q7PTRWMSuWW_-jDmhjYbYMXbJiIJ44lDWZsB-2XFFbr9hhMy6dY2Y74ViupVvsrGUIZG8DS528xKyZY89UBctn4tYqRfbZhnzYPSEWffG3VthNhsLWc1tfdUI4iae-2zCtCwnA959p9NrX_-CqItlwNKOy5GPA3Pso1ub0VucTB_b-PyJH_7RFTFw"/>
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="material-symbols-outlined text-white text-4xl">zoom_in</span>
</div>
<div className="p-4 bg-white border-t border-surface-variant">
<h3 className="font-h3 text-h3 text-primary text-sm mb-1">3D Imaging Tech</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-xs">Precision diagnostics for every patient.</p>
</div>
</div>
{/* Item 4: Staff in Action */}
<div style={getItemStyle('staff')} className="gallery-item staff break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm bg-white cursor-pointer transition-shadow hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)]">
<img alt="Doctor Treating Patient" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A professional dentist in a clean white coat and soft blue scrubs carefully examining a smiling patient in a modern dental chair. The dentist is wearing a surgical mask and magnifying loupes, demonstrating expertise and focus. The clinic room is flooded with bright, natural daylight, conveying safety and high-end care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnwqUmTAUzEWqdiGG7kGBIlIga2Xundm1xS8Q88AK2uw4CaUyTNIWfERgAQKY8vaaVxujUzbHbVE4eFJTGlQDw3xLPRdMJt6EgM3pdiBeYBVAXVsNF3d7frOKu2SRVN0qM0oXVvhgHFDg_ypb6Een6E9_LCE6M6BWKOznp-DTfZ3iLzlDlq35vHuQQjeKtciZGPC4P79jaMEMs3LHrL43nPRmMp57ghpbsMV3GsI16MGDrmeTU9tkxqfTrwwdnH1WvPmg4ZKsBDA"/>
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="material-symbols-outlined text-white text-4xl">zoom_in</span>
</div>
<div className="p-4 bg-white border-t border-surface-variant">
<h3 className="font-h3 text-h3 text-primary text-sm mb-1">Expert Care</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-xs">Our specialists during a consultation.</p>
</div>
</div>
{/* Item 5: Treatment Room */}
<div style={getItemStyle('interior')} className="gallery-item interior break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm bg-white cursor-pointer transition-shadow hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)]">
<img alt="Treatment Room" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A pristine, minimalist dental treatment room featuring a high-tech ergonomic patient chair centered in the space. The room is painted in soft whites and subtle grays, with overhead surgical lights gleaming. The overall mood is sterile, quiet, and deeply reassuring, characteristic of a premium medical facility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwfmKKG7NJ9Hpk444sU6iWH08W7cshc0YOZG3E-9VwS6ylCjQrUDCPhFw1UWa0fn2jeKPBlgGGjrcdDOYKf1ti9vtZSQtTeP1uOzEMdND4fIdTst31BOAKJr1vb-Z98fZyxhJLhQWcGomFw7JysHKvcBAAo0b1NH3If0Y0NErMghvzMqTe2OUq-cMB7yohc2RLgOxr8ykL4ZnHSDb1WAKFi3yt6ljCqKL4GG_TbpoGMMOIuTntavzpw-pgaPh6qhGCpxI9r5hCng"/>
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="material-symbols-outlined text-white text-4xl">zoom_in</span>
</div>
<div className="p-4 bg-white border-t border-surface-variant">
<h3 className="font-h3 text-h3 text-primary text-sm mb-1">Private Treatment Suites</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-xs">Designed for comfort and hygiene.</p>
</div>
</div>
{/* Item 6: Before/After (Square) */}
<div style={getItemStyle('transformations')} className="gallery-item transformations break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm bg-white cursor-pointer transition-shadow hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)]">
<div className="relative aspect-square">
<img alt="Crowns Transformation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A close-up collage of a stunning smile makeover. Top half shows a mouth with chipped and discolored front teeth; bottom half shows the same mouth after treatment with flawless, white ceramic crowns. The lighting is soft and flattering, highlighting the natural look of the new teeth against pink, healthy gums." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBzbnIxDETtUykRwgTCaviZxzUSNt035ldiVyJNqMfO0AdJ-z3JTraxV3SI8GlZWV_FO4inhxQ1pH3iTOqOeXo-pEmme1GRXtY3pwST7p_c91vdaNEHIqijTgcjNQZbBIe0MdjLgr615Vion62KDuoLbGMorblN5DEbSAD5C61WREnWO_3gP3P6OCj_f9KQR2zhEUjxQz68RwKYIndpctoIPmrWHP_t8Fs-Igzbhmx9nvMQt6C8secNZUz5ig7ySAAw3Hh11LSFw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
<span className="font-label-caps text-[10px] bg-tertiary-container px-2 py-1 rounded">CROWNS</span>
</div>
</div>
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="material-symbols-outlined text-white text-4xl">zoom_in</span>
</div>
</div>
</div>
{/* CTA Section */}
<div className="mt-20 text-center bg-surface-container-low rounded-xl p-12 shadow-sm border border-surface-variant">
<h2 className="font-h2 text-h2 text-primary mb-4">Ready for your transformation?</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-2xl mx-auto">Schedule a consultation today and let our experts design the perfect treatment plan for your smile.</p>
<button className="font-button text-button px-8 py-3 bg-primary-container text-white rounded-lg hover:opacity-80 transition-opacity shadow-md">Book an Appointment</button>
</div>
</main>
  );
}
