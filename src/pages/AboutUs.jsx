import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <>
{/* Hero Section */}
<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
<div className="order-2 lg:order-1 flex flex-col space-y-6">
<h1 className="font-h1 text-h1 text-primary-blue">Redefining Dental Care in Nairobi.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                    At Mile Dental Clinic, we believe a healthy smile is the foundation of overall wellness. We combine state-of-the-art technology with compassionate care to deliver an unparalleled dental experience, right here in the heart of Kenya.
                </p>
<div className="pt-4 flex space-x-4">
<button className="font-button text-button bg-primary-blue text-white px-8 py-3 rounded-full shadow-ambient-1 hover:shadow-ambient-2 hover:opacity-90 transition-all duration-300">
                        Our Services
                    </button>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-ambient-2 bg-surface-container">
<img alt="Modern, bright, and clean dental operating room at Mile Dental Clinic." className="object-cover w-full h-full object-center" data-alt="A pristine, modern dental operating room in Nairobi. The room is bathed in bright, soft, cool natural light from large windows. The aesthetic is clean, minimalist, and highly professional, featuring state-of-the-art white and light blue dental chairs and precision equipment. The walls are a crisp white, creating an atmosphere of clinical excellence and tranquil reassurance. Depth of field emphasizes the advanced medical chair in the foreground." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbr6WVcK2sXDCrehjpGRlC-QlFsrAthJtcUYd7pvoOqp2F0CwqNRf4VuqZWWWIGSXDVFMLFy9qevhd16QLQ3nhGVWyiMSF4bHI-Uk-G8jluwAtRxHGyDC2cIHmSz5-q1TfIbbzbiRtYW1NlZnJpSA4aVmaiRlgCZiIw9NHu-hv097ERFFg8-2oFqLeuUub7FCrtC5J9vkOg6mTEo8DYgi5Jru1G2HjolSdcZ2r5STDpYZeYO5vbhSOOkt-Kk7rfbdrcDdM6OwtrA"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
</div>
</div>
</div>
</section>
{/* Mission & Values Bento Grid */}
<section className="bg-surface-container-low py-section-gap border-y border-surface-variant">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="text-center mb-16">
<h2 className="font-h2 text-h2 text-primary-blue mb-4">Our Foundation</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">The principles that guide every consultation, every procedure, and every smile we restore.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Mission */}
<div className="md:col-span-2 bg-white rounded-xl p-8 shadow-ambient-1 hover:shadow-ambient-2 transition-shadow duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 text-primary-blue group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-8xl" style={{fontVariationSettings: '\'FILL\' 1'}}>health_metrics</span>
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<span className="material-symbols-outlined text-secondary-blue text-4xl mb-4" style={{fontVariationSettings: '\'FILL\' 1'}}>flag</span>
<h3 className="font-h3 text-h3 text-primary-blue mb-3">Our Mission</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                                To elevate the standard of oral healthcare in Nairobi by providing personalized, expert treatments in a serene environment. We are dedicated to continuous innovation and patient education, ensuring every individual leaves with confidence and lasting oral health.
                            </p>
</div>
</div>
</div>
{/* Value 1 */}
<div className="bg-white rounded-xl p-8 shadow-ambient-1 hover:shadow-ambient-2 transition-shadow duration-300 flex flex-col items-start border-t-4 border-soft-teal">
<span className="material-symbols-outlined text-soft-teal text-3xl mb-4" style={{fontVariationSettings: '\'FILL\' 1'}}>verified_user</span>
<h3 className="font-h3 text-h3 text-primary-blue mb-2 text-xl">Integrity</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Transparent diagnoses and honest treatment plans. We never recommend procedures you don't need.</p>
</div>
{/* Value 2 */}
<div className="bg-white rounded-xl p-8 shadow-ambient-1 hover:shadow-ambient-2 transition-shadow duration-300 flex flex-col items-start border-t-4 border-secondary-blue">
<span className="material-symbols-outlined text-secondary-blue text-3xl mb-4" style={{fontVariationSettings: '\'FILL\' 1'}}>psychology</span>
<h3 className="font-h3 text-h3 text-primary-blue mb-2 text-xl">Expertise</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Our specialists undergo continuous training to master the latest advancements in modern dentistry.</p>
</div>
{/* Value 3 */}
<div className="bg-white rounded-xl p-8 shadow-ambient-1 hover:shadow-ambient-2 transition-shadow duration-300 flex flex-col items-start border-t-4 border-primary-blue">
<span className="material-symbols-outlined text-primary-blue text-3xl mb-4" style={{fontVariationSettings: '\'FILL\' 1'}}>favorite</span>
<h3 className="font-h3 text-h3 text-primary-blue mb-2 text-xl">Empathy</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">We understand dental anxiety. Our clinical environment and approach are designed for your maximum comfort.</p>
</div>
{/* Value 4 */}
<div className="bg-white rounded-xl p-8 shadow-ambient-1 hover:shadow-ambient-2 transition-shadow duration-300 flex flex-col items-start border-t-4 border-tertiary-fixed">
<span className="material-symbols-outlined text-tertiary-container text-3xl mb-4" style={{fontVariationSettings: '\'FILL\' 1'}}>science</span>
<h3 className="font-h3 text-h3 text-primary-blue mb-2 text-xl">Innovation</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Investing in cutting-edge diagnostic and surgical equipment to deliver precise, minimally invasive care.</p>
</div>
</div>
</div>
</section>
{/* Modern Equipment Highlights */}
<section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-surface-variant pb-6">
<div className="max-w-2xl">
<span className="font-label-caps text-label-caps text-secondary-blue uppercase tracking-wider mb-2 block">Technology</span>
<h2 className="font-h2 text-h2 text-primary-blue">State-of-the-Art Care</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md text-right hidden md:block">
                We believe accurate diagnosis is the first step to successful treatment. Our clinic is equipped with global-standard technology.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Eq 1 */}
<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container mb-4 shadow-ambient-1">
<img alt="3D CBCT Scanner" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="A sleek, modern 3D CBCT dental scanner in a pristine, brightly lit clinical room. The machine is white with smooth, futuristic curves, positioned against a light grey wall. The lighting is crisp and cool, casting soft shadows that highlight the machine's precision engineering. The overall aesthetic conveys advanced medical technology, hygiene, and clinical authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqIXf0CW7WIkWUyBm093KvtyU-Omx5L-Cg7NSgElWGLAwppU2_C37FbPJ3FIq_nUAGu2h9hTt2pCIpypzdgSYS44kYwX83DKd8PMZoKzfPddH91vC3op8U4UWCRDig7FdgVPiivf1XXEFAdOx-KDhPBuuauv0Xj975Cws62jFnwPJJImUGQMlWlYpMSL5sQMHunlR1xDLyf0pOLelw88KF__VFk7zHIQItuPO1pRxneCxkcAdp8eXaPznQDY7bD61Xtwps8eLiJg"/>
</div>
<h3 className="font-h3 text-h3 text-primary-blue mb-2 text-xl">3D CBCT Imaging</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">High-resolution 3D scans for precise implant planning, complex root canals, and accurate surgical interventions, ensuring minimal risk.</p>
</div>
{/* Eq 2 */}
<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container mb-4 shadow-ambient-1">
<img alt="Intraoral Scanner" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="A close-up shot of a modern handheld intraoral dental scanner resting on a clean, stainless steel tray. The device is ergonomic, sleek, and primarily white with subtle blue indicator lights. The background is softly blurred (shallow depth of field), showing hinting at a high-tech dental chair. The lighting is bright and clinical, emphasizing the hygiene and advanced nature of the tool." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLWkbf2HyJVt7Sb8yuT5LukuA_DKidcA7j4tdhQtu1zH4Ag-eWyDdZOr_SlIcTHDF5ecO5Ni8p3rLc1-a6ujBYRZ9psyPQQVcXF8R-fK3mjl3N5GFYe3rkaXlGUBsbeacvEGzBuEl6DC7V-iPrMsMlbssRGJvGkUFEvq-DA4ZOWMM6mYa_5w-wnDdijQcIkSEiKFGnNHjlkCwkC7VI-9uaduzMoB5-rz9i0TluC5xVrZl3L6CwBgq_pf4yxT6vrD85BWCMk0WiyA"/>
</div>
<h3 className="font-h3 text-h3 text-primary-blue mb-2 text-xl">Digital Impressions</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Say goodbye to messy molds. Our intraoral scanners capture highly accurate digital impressions of your teeth in seconds, improving comfort and turnaround time.</p>
</div>
{/* Eq 3 */}
<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container mb-4 shadow-ambient-1">
<img alt="Laser Dentistry Equipment" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="A close-up view of advanced dental laser equipment on a sterile clinic cart. The metallic and white surfaces gleam under bright, shadowless LED clinical lighting. A subtle digital display shows precise settings. The composition is clean, minimalist, and highly focused, projecting an image of painless, modern surgical capability and expert care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHy8wUiV-rMpl_X82z1lgcKH7XeQcht99lGhPrRBsetlcADx8xZDsV3ZNix-24e_J-QTXub4fwAZ9fNIJ52mHy1yLiUwIwajqmY5i5ZJLRVZlbuRF5IJ7yRu8WdkcAiFVfWzX7vbeqiJKP1H9OUAMex_580qsm0f-Zh4tYDs3WNBLcnAOprcOnC4CM9eNecMQBVYfr3A0wlgTPAt99aSnrhAnX1PZo_DR1N7CaSuU9yQzXy5icb6me8S0P3wdbJfoVtSwQe9cwug"/>
</div>
<h3 className="font-h3 text-h3 text-primary-blue mb-2 text-xl">Laser Dentistry</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Minimally invasive soft tissue procedures using advanced laser technology. Faster healing times, less discomfort, and superior clinical outcomes.</p>
</div>
</div>
</section>
{/* Trust Badges & Certifications */}
<section className="bg-surface-container py-16 border-y border-surface-variant overflow-hidden">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-8">Recognized For Clinical Excellence</h3>
<div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
{/* Badge 1 */}
<div className="trust-badge-gradient text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-sm">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>workspace_premium</span>
<span className="font-button text-button">ISO 9001 Certified</span>
</div>
{/* Badge 2 */}
<div className="trust-badge-gradient text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-sm">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>medical_services</span>
<span className="font-button text-button">Kenya Dental Association</span>
</div>
{/* Badge 3 */}
<div className="trust-badge-gradient text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-sm">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>verified</span>
<span className="font-button text-button">Top Rated 2023</span>
</div>
</div>
</div>
</section>
{/* Team Teaser */}
<section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="bg-surface rounded-2xl p-8 md:p-16 shadow-ambient-1 relative overflow-hidden flex flex-col md:flex-row items-center border border-surface-variant">
{/* decorative element */}
<div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-fixed rounded-full blur-3xl opacity-50"></div>
<div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 relative z-10">
<h2 className="font-h2 text-h2 text-primary-blue mb-4">Meet Our Experts</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                    Our team comprises highly skilled specialists, ranging from orthodontists to oral surgeons. We collaborate closely to create comprehensive, multidisciplinary treatment plans tailored to your unique smile.
                </p>
<Link className="inline-flex items-center space-x-2 text-secondary-blue font-button text-button border-b border-soft-teal hover:text-primary-blue transition-colors pb-1" to="#">
<span>View Full Team Profiles</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
<div className="md:w-1/2 flex justify-center relative z-10">
<div className="flex -space-x-6">
{/* Profile 1 */}
<div className="w-24 h-24 rounded-full border-4 border-surface shadow-ambient-2 overflow-hidden relative z-30">
<img alt="Dr. Maina - Lead Dentist" className="w-full h-full object-cover" data-alt="A professional headshot of an African male dentist in his late 40s. He is wearing crisp navy blue scrubs and looking directly at the camera with a warm, reassuring, and confident smile. The background is a brightly lit, out-of-focus modern dental clinic setting, creating a soft bokeh effect. The lighting is studio-quality, emphasizing his approachable expertise." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIh6Rtv6mVFFOtN8VeSkNQKg2Ut7_CS48q1z63PJwj7T99fwzdaENEL3dW6gMg3AKfOBVitqyzVYvvXs3AXytLYlA5efm3NnEtjJd7Pr6PXM-v-oXO--SR1-hO6w62wHtohrS_Ig08jsTIKAKZyCzGxEd9meHyHOHU3sV5rkPorZlf3fXR8ttz7PNhIU1dBQN8notM0HxfLlPowgIQEO8mjEhWxSb_71Y5JLkH75tg2bprEaXXH3PI2IIm527AR63RRdgINu9yxg"/>
</div>
{/* Profile 2 */}
<div className="w-24 h-24 rounded-full border-4 border-surface shadow-ambient-2 overflow-hidden relative z-20">
<img alt="Dr. Sarah - Orthodontist" className="w-full h-full object-cover" data-alt="A professional headshot of an African female orthodontist in her 30s. She is wearing a white medical coat over light blue scrubs. She has a bright, perfect smile and exudes a friendly, knowledgeable demeanor. The background is a clean, minimalist white wall with subtle cool shadows. The lighting is soft and flattering, highlighting professional authority and approachability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZPOzLSLkjLxtxaf8ykbQrVbYEgNOW2SBOOrmXZOUgcIe1lSrdcPxGBvrnKfHnpQ_qomA3U0btX42ng8bRVpxVw50_uUcWJ-NCwLzunLzoSPYviJ8aRsgP401F0zbLYSDP0mMcvKRaKOqYns9msugxW0bwkFUD_E8WuqpgVOgvvKp0vbCVb7_qHAkLb2dLS5hkzKLbYaiyAvNNT03YZjG0j3WFLlKRnyCefMwOcLmeLHCrodWJQf7hYVdsZVK5oyFXI0_IE6sRhA"/>
</div>
{/* Profile 3 */}
<div className="w-24 h-24 rounded-full border-4 border-surface shadow-ambient-2 overflow-hidden relative z-10 bg-surface-container flex items-center justify-center">
<span className="font-button text-button text-primary-blue">+4</span>
</div>
</div>
</div>
</div>
</section>
{/* Footer */}
    </>
  );
}
