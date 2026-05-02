import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
<main className="pt-24 lg:pt-32">
{/* Hero Section */}
<section className="relative px-4 lg:px-8 py-16 lg:py-24 max-w-container-max mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 min-h-[819px]">
<div className="flex-1 text-center lg:text-left z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-caps text-label-caps mb-8 shadow-[0_4px_20px_rgba(15,76,129,0.04)]">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>verified</span>
                    Premium Dental Care
                </div>
<h1 className="font-h1 text-h1 text-primary mb-6">Trusted Dental Care in Nairobi</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto lg:mx-0">Experience world-class dental treatments with comfort and care at Afya Centre. We combine state-of-the-art technology with compassionate expertise.</p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<Link className="w-full sm:w-auto text-center bg-primary-container text-on-primary font-button text-button px-8 py-4 rounded-DEFAULT shadow-[0_4px_20px_rgba(15,76,129,0.08)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.12)] hover:bg-primary transition-all duration-300 transform hover:-translate-y-1" to="/book-appointment">Book Appointment</Link>
<Link className="w-full sm:w-auto text-center border-2 border-secondary text-secondary font-button text-button px-8 py-4 rounded-DEFAULT hover:bg-surface-container-high transition-colors" to="#">Call Now</Link>
</div>
</div>
<div className="flex-1 relative w-full aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(15,76,129,0.08)] bg-surface-container-low">
<img alt="Modern dental clinic" className="w-full h-full object-cover" data-alt="A bright, modern dental clinic interior in Nairobi, featuring a state-of-the-art white dental chair illuminated by soft, natural light filtering through large windows. The clinical setting is pristine and calming, utilizing a refined palette of crisp whites, neutral light grays, and subtle soft teal accents. High-tech equipment is neatly arranged, conveying clinical excellence and professional reliability in a minimalist corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCghHRUmeiidXH_xVL9thoB3eU4A0yXP6xPJ-p7-qQcK6Gx3oxPhKguS-oXeOjZx40gvy-1k0RUqvwVj8W6xN5qv7KGbrH9fMnrC7tNs7iGFKeyWTDQj9Y5klBSXFPVjX9H0OrqujOIGtqLd6VIDZ2OpQ8Ji4dGKwri3aaWpFYPQyCbVdrOLoQoYAGAktI6hJcTSQ_UBladtwpvefN7VMZpZttznHoV_kxcKZEiEzt3jYa_A_P8_zxLu-Ih9DO2D1Q7vzkJJ46naA"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent"></div>
</div>
</section>
{/* Quick Services Grid (Bento Style) */}
<section className="py-section-gap px-4 lg:px-8 bg-surface-container-lowest relative">
<div className="max-w-container-max mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-h2 text-h2 text-primary mb-4">Our Premium Services</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Comprehensive dental solutions designed for your perfect smile.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
{/* Cleaning (Large) */}
<div className="md:col-span-2 md:row-span-2 rounded-2xl bg-surface p-8 border border-outline-variant/30 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] transition-all duration-300 flex flex-col justify-end relative overflow-hidden group">
<img alt="Dental Cleaning" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" data-alt="Close up of professional dental cleaning tools resting on a pristine white clinical tray. The lighting is bright and even, highlighting the gleaming metallic surfaces against a minimalist soft teal background. The image evokes hygiene, state-of-the-art care, and a tranquil clinical environment suitable for a modern dental practice." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLGztluE6zq97rDrmlydijW_KgzPj4G72-do4VeQB31a6_KB4rIJfrgMSRVhABN4DU26mbfps9dV4m5TdIp_5_SzG2I7B68G2GtCVhOE9rZ9mP7QgbNKTDuKIpJZqrA9dBBgz-ZtWlAQWkv_IIa8sIk8IdEGkebj6IoK2bXetimQKyT5P36hhBkAmNq7wyRIZwWWK4qyCY6H37agUozXeLHzK4-eSuN1trPR_edfrT9tcfrQCN64gA0-_ahiqGR7YNzQHEUTj0bg"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
<div className="relative z-10 text-on-primary">
<span className="material-symbols-outlined text-4xl mb-4 text-tertiary-fixed" style={{fontVariationSettings: '\'FILL\' 1'}}>cleaning_services</span>
<h3 className="font-h3 text-h3 mb-2">Professional Cleaning</h3>
<p className="font-body-md text-body-md text-on-primary/80 max-w-md">Advanced plaque removal and deep cleaning for optimal oral health and a brighter smile.</p>
</div>
</div>
{/* Whitening */}
<div className="rounded-2xl bg-secondary-fixed p-8 flex flex-col shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:-translate-y-1 transition-transform duration-300">
<span className="material-symbols-outlined text-4xl mb-auto text-on-secondary-fixed-variant" style={{fontVariationSettings: '\'FILL\' 1'}}>sentiment_very_satisfied</span>
<div>
<h3 className="font-h3 text-h3 text-on-secondary-fixed-variant mb-2">Teeth Whitening</h3>
<p className="font-body-md text-body-md text-on-secondary-fixed-variant/80">Safe, effective laser treatments for immediate brilliance.</p>
</div>
</div>
{/* Braces */}
<div className="rounded-2xl bg-surface-container p-8 border border-outline-variant/50 flex flex-col shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:-translate-y-1 transition-transform duration-300">
<span className="material-symbols-outlined text-4xl mb-auto text-primary" style={{fontVariationSettings: '\'FILL\' 1'}}>orthopedics</span>
<div>
<h3 className="font-h3 text-h3 text-primary mb-2">Orthodontics</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Modern clear aligners and traditional braces for perfect alignment.</p>
</div>
</div>
</div>
</div>
</section>
{/* Why Choose Us & Stats (Asymmetric Layout) */}
<section className="py-section-gap px-4 lg:px-8 bg-surface">
<div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-12">
<div>
<h2 className="font-h2 text-h2 text-primary mb-6">Excellence in Every Detail</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">We prioritize your comfort and health above all, utilizing the latest advancements in dental medicine.</p>
</div>
<div className="space-y-8">
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-fixed-variant" style={{fontVariationSettings: '\'FILL\' 1'}}>science</span>
</div>
<div>
<h4 className="font-h3 text-h3 text-on-surface mb-2">Modern Equipment</h4>
<p className="font-body-md text-body-md text-on-surface-variant">State-of-the-art 3D imaging and painless laser treatments.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-fixed-variant" style={{fontVariationSettings: '\'FILL\' 1'}}>groups</span>
</div>
<div>
<h4 className="font-h3 text-h3 text-on-surface mb-2">Experienced Team</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Specialist orthodontists, surgeons, and hygienists.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-fixed-variant" style={{fontVariationSettings: '\'FILL\' 1'}}>favorite</span>
</div>
<div>
<h4 className="font-h3 text-h3 text-on-surface mb-2">Patient-First Care</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Anxiety-free environment with personalized treatment plans.</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="col-span-2 rounded-2xl bg-primary-container p-10 text-center shadow-[0_10px_30px_rgba(15,76,129,0.12)]">
<span className="block font-h1 text-h1 text-on-primary mb-2">10k+</span>
<span className="font-body-lg text-body-lg text-secondary-fixed">Smiles Transformed</span>
</div>
<div className="rounded-2xl bg-surface-container-lowest p-8 text-center border border-outline-variant/30 shadow-[0_4px_20px_rgba(15,76,129,0.04)]">
<span className="block font-h2 text-h2 text-primary mb-2">15+</span>
<span className="font-body-md text-body-md text-on-surface-variant">Years Experience</span>
</div>
<div className="rounded-2xl bg-tertiary-container p-8 text-center shadow-[0_4px_20px_rgba(15,76,129,0.04)]">
<span className="block font-h2 text-h2 text-on-tertiary mb-2">5.0</span>
<span className="font-body-md text-body-md text-tertiary-fixed">Patient Rating</span>
</div>
</div>
</div>
</section>
{/* Testimonials (Glassmorphism Cards) */}
<section className="py-section-gap px-4 lg:px-8 bg-surface-container-lowest">
<div className="max-w-container-max mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-h2 text-h2 text-primary mb-4">Patient Stories</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Hear from our community about their experiences with Mile Dental Clinic.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="rounded-xl p-8 bg-surface border border-outline-variant/20 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] transition-shadow">
<div className="flex items-center gap-1 mb-6 text-tertiary-fixed-dim">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface mb-8 italic">"The most professional dental clinic I've visited in Nairobi. The facility is spotless, and the staff made my root canal completely painless."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant font-bold">SM</div>
<span className="font-button text-button text-on-surface">Sarah M.</span>
</div>
</div>
<div className="rounded-xl p-8 bg-surface border border-outline-variant/20 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] transition-shadow">
<div className="flex items-center gap-1 mb-6 text-tertiary-fixed-dim">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface mb-8 italic">"Got my braces done here. The modern equipment they use is impressive. Dr. Kamau is fantastic and takes time to explain every step."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant font-bold">DK</div>
<span className="font-button text-button text-on-surface">David K.</span>
</div>
</div>
<div className="rounded-xl p-8 bg-surface border border-outline-variant/20 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] transition-shadow">
<div className="flex items-center gap-1 mb-6 text-tertiary-fixed-dim">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface mb-8 italic">"Very calming environment, especially for someone who fears dentists. The whitening treatment gave me immediate, stunning results."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant font-bold">JW</div>
<span className="font-button text-button text-on-surface">Jane W.</span>
</div>
</div>
</div>
</div>
</section>
{/* Emergency CTA & Location */}
<section className="py-section-gap px-4 lg:px-8 bg-surface relative overflow-hidden">
<div className="max-w-container-max mx-auto bg-primary-container rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_10px_30px_rgba(15,76,129,0.12)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
<div className="lg:w-1/2 relative z-10 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-error-container text-on-error-container font-label-caps text-label-caps mb-6">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>emergency</span>
                        Emergency Care
                    </div>
<h2 className="font-h2 text-h2 text-on-primary mb-4">Pain? We can help immediately.</h2>
<p className="font-body-lg text-body-lg text-on-primary-container mb-8">Emergency appointments available. Don't wait in discomfort.</p>
<Link className="inline-flex items-center gap-2 bg-on-primary text-primary-container font-button text-button px-8 py-4 rounded-DEFAULT hover:bg-surface transition-colors shadow-sm" to="#">
<span className="material-symbols-outlined">call</span>
                        Call +254 721 679492
                    </Link>
</div>
<div className="lg:w-1/2 relative z-10 w-full">
<div className="bg-surface p-6 rounded-2xl shadow-lg border border-outline-variant/10">
<h3 className="font-h3 text-h3 text-primary mb-6">Visit Us</h3>
<div className="space-y-4">
<div className="flex gap-4">
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '\'FILL\' 1'}}>location_on</span>
<div>
<p className="font-button text-button text-on-surface">Mile Dental Clinic</p>
<p className="font-body-md text-body-md text-on-surface-variant">Afya Centre, 1st Floor<br/>Nairobi, Kenya</p>
</div>
</div>
<div className="flex gap-4 pt-4 border-t border-outline-variant/20">
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '\'FILL\' 1'}}>schedule</span>
<div>
<p className="font-button text-button text-on-surface">Working Hours</p>
<p className="font-body-md text-body-md text-on-surface-variant">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
  );
}
