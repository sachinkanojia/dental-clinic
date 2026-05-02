import React from 'react';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  return (
<main className="flex-grow pt-[88px]"> {/* pt offsets fixed header */}
{/* Hero Section */}
<section className="bg-gradient-hero py-section-gap px-gutter text-center">
<div className="max-w-3xl mx-auto">
<h1 className="font-h1 text-h1 text-primary mb-6">Patient Stories</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                    Discover why thousands of patients trust Mile Dental Clinic for their smiles. Read genuine experiences highlighting our commitment to clinical excellence and patient comfort.
                </p>
<button className="bg-secondary text-on-secondary font-button text-button px-6 py-3 rounded-lg hover:shadow-lg transition-shadow">
                    Leave a Review
                </button>
</div>
</section>
{/* Testimonials Grid */}
<section className="py-section-gap px-gutter max-w-container-max mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Review Card 1 */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex items-center mb-4">
<img alt="Patient Avatar" className="w-12 h-12 rounded-full mr-4 object-cover" data-alt="A professional headshot of a smiling woman in her 30s. The lighting is soft and natural, suggesting a friendly and approachable demeanor. The background is slightly blurred to keep the focus on her face, fitting a modern corporate or clinic testimonial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSrjIY5w6v83FvZK4sjFJon0b7nXIW9e-btAyouHl89-am9zYkww0wXG-nhgi94CZOOfL9y_2iJ5J8lD6zAzL1KO3zOleNdzJFD9A3lhu5ctBa9ha17jGZDJ2nQpc_XE653qTYfiNLlwLnejWNpFaV8VYufDg0H5uWHUMXibvE5qLcWlrf-gPVzqSdhtZz7G_mWqe3lg0WfZprDxQEjqtQPHdj1St-w_knrsI5uLzjEj368czmS8vMJAU2Y4ML1kc3k5SBsBIpWA"/>
<div>
<h3 className="font-h3 text-[18px] text-on-surface">Sarah J.</h3>
<div className="flex text-sm">
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
</div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">
                        "The absolute best dental experience I've ever had. The clinic has a wonderfully <strong className="text-primary font-semibold">Clean environment</strong> and the procedure was entirely <strong className="text-primary font-semibold">Pain-free</strong>. Highly recommend to anyone anxious about visiting the dentist."
                    </p>
<span className="text-xs font-label-caps text-outline uppercase tracking-wider">2 weeks ago</span>
</div>
{/* Review Card 2 */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex items-center mb-4">
<img alt="Patient Avatar" className="w-12 h-12 rounded-full mr-4 object-cover" data-alt="A clear, professional portrait of a man in his 40s looking directly at the camera with a gentle smile. The lighting is bright and evenly distributed, characteristic of high-end corporate or healthcare photography. The background is a muted, light tone to maintain a clean aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJO3IN6JGVO3B9hgFFbgty9J1siqwguFJrBkAkpp77vbn_bEcdKOn9ENkxfjiOCeh-wiFXmM1AA5Qxik0Fod7EuRRbjxqFb8B81cAQe7PI1nR_MTvXDJgb6YP0_CTzTXEJoPpGijR9EtjuzwTNfwdRzpU2fXLNhFoIUAp67wBdF4tdqb7hok-JP_qALElfBxMk-sL7srg8twMFgk7I3qJH3eB5BzaXuvpLPeitx_QEP_pLS4e_1UXJyy4LrL2W909Sm4AOynqRiw"/>
<div>
<h3 className="font-h3 text-[18px] text-on-surface">David M.</h3>
<div className="flex text-sm">
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
</div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">
                        "Incredibly <strong className="text-primary font-semibold">Professional</strong> team from the moment you walk in. The <strong className="text-primary font-semibold">Friendly staff</strong> made me feel at ease immediately. They explain every step of the process clearly."
                    </p>
<span className="text-xs font-label-caps text-outline uppercase tracking-wider">1 month ago</span>
</div>
{/* Review Card 3 */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex items-center mb-4">
<img alt="Patient Avatar" className="w-12 h-12 rounded-full mr-4 object-cover" data-alt="A vibrant headshot of a professional woman in her 50s. She is smiling warmly. The setting appears to be a modern office environment with blurred elements in the background. The lighting is bright, conveying trustworthiness and expertise." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3a3mE2e8bL4SsJScnRlc3AQ4Up04ZPqKmlchrgHNOzNL0j50u64F5-R-X8_hSSyR0_g4vBX6_BUIKfu3DZdh1KMaJz4RycLFPEmA19hezvac-iJpZ6DVKmONNwiC4nQeTCktAiua6aLV0GBz4S1ipSnK7oj-1rspI0xqPcnNsJE0ae0q4eOxyMV88-CTQEPaRsFmGcq3TJUWbtSQkdodYNTAFA8AnrcmEy7l2YUJsk9geGu2jFxL6ES6WL6ZBYN4lxDjLYWBmpQ"/>
<div>
<h3 className="font-h3 text-[18px] text-on-surface">Elena R.</h3>
<div className="flex text-sm">
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined text-outline text-base" style={{fontVariationSettings: '\'FILL\' 0'}}>star</span>
</div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">
                        "Great service overall. The clinic's <strong className="text-primary font-semibold">Clean environment</strong> is top-notch. I appreciated how <strong className="text-primary font-semibold">Professional</strong> the dentist was when explaining my treatment options."
                    </p>
<span className="text-xs font-label-caps text-outline uppercase tracking-wider">2 months ago</span>
</div>
{/* Review Card 4 */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex items-center mb-4">
<div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xl mr-4">
                            T
                        </div>
<div>
<h3 className="font-h3 text-[18px] text-on-surface">Thomas K.</h3>
<div className="flex text-sm">
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
</div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">
                        "I've always dreaded the dentist, but Mile Dental changed that. Completely <strong className="text-primary font-semibold">Pain-free</strong> root canal. The <strong className="text-primary font-semibold">Friendly staff</strong> held my hand through the anxiety."
                    </p>
<span className="text-xs font-label-caps text-outline uppercase tracking-wider">3 months ago</span>
</div>
{/* Review Card 5 */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex items-center mb-4">
<img alt="Patient Avatar" className="w-12 h-12 rounded-full mr-4 object-cover" data-alt="A portrait of a young man with a slight stubble, smiling confidently. He is wearing a casual shirt. The background is out of focus, featuring soft, cool tones that match a clinical or modern corporate color palette. The lighting highlights his face naturally." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsbQ0cAwE7zd8Kz_gHBbPLx8-h81sinEYb1JN3hcuIoW4Qf69GkJ8FVzDuPty5oMeUFWuQ65IJNDpW5D5F57rUMBLjpU0TtGTOZ-2sg08quQzqabkDVOo3lrazxz8KhxwE5pR_XiCvy0mQf2hExdIzneOiXy5OPdPHlIbFkdPADne85eSpiDOYLV4QIME8LvqcefT_J1rEwfII3nJc9g30wonTldde3l03XWBWNkxCK8Gv6OGheujw1Pkl8Mb0kd3MFFjL8Qbomg"/>
<div>
<h3 className="font-h3 text-[18px] text-on-surface">Michael B.</h3>
<div className="flex text-sm">
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
</div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">
                        "State-of-the-art facility. Very <strong className="text-primary font-semibold">Professional</strong> and efficient. I was in and out for my cleaning with no delays. The <strong className="text-primary font-semibold">Clean environment</strong> is very reassuring."
                    </p>
<span className="text-xs font-label-caps text-outline uppercase tracking-wider">4 months ago</span>
</div>
{/* Review Card 6 */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex items-center mb-4">
<div className="w-12 h-12 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-xl mr-4">
                            L
                        </div>
<div>
<h3 className="font-h3 text-[18px] text-on-surface">Laura W.</h3>
<div className="flex text-sm">
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
<span className="material-symbols-outlined star-rating text-base">star</span>
</div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">
                        "The best care in Nairobi. Dr. Smith is incredibly gentle, ensuring everything is <strong className="text-primary font-semibold">Pain-free</strong>. The <strong className="text-primary font-semibold">Friendly staff</strong> makes scheduling a breeze."
                    </p>
<span className="text-xs font-label-caps text-outline uppercase tracking-wider">5 months ago</span>
</div>
</div>
{/* Load More CTA */}
<div className="text-center mt-12">
<button className="font-button text-button text-primary hover:text-secondary transition-colors underline decoration-2 underline-offset-4">
                    Load More Reviews
                </button>
</div>
</section>
</main>
  );
}
