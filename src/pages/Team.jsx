import React from 'react';
import { Link } from 'react-router-dom';

export default function Team() {
  return (
<main className="flex-grow">
{/* Hero Section */}
<section className="py-section-gap px-gutter max-w-container-max mx-auto text-center">
<h1 className="font-h1 text-h1 text-primary mb-6">Expertise meets compassion.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                Get to know the dedicated professionals who ensure every visit to Mile Dental Clinic is a comfortable, world-class experience. We combine technical excellence with genuine patient care.
            </p>
</section>
{/* Team Grid */}
<section className="pb-section-gap px-gutter max-w-container-max mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Doctor Card 1 */}
<div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-2 bg-tertiary-container rounded-l-xl opacity-80"></div>
<div className="flex items-center gap-6 mb-6 relative z-10">
<div className="w-24 h-24 rounded-full p-1 border-2 border-tertiary-container shrink-0">
<img alt="Dr. Sarah Jenkins" className="w-full h-full object-cover rounded-full" data-alt="A professional, brightly lit headshot of a female dentist in her 40s wearing clean blue scrubs. She has a warm, reassuring smile. The background is a clean, modern clinical setting with soft, ambient lighting reflecting a pristine, high-end Nairobi dental clinic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaDUxqM0pGUIh7hGXQMXrKG6-_ZaZYJ886uwtI4aysmCcLT-cs0C-iTVMpLd5170f0EmU9rAuC6Z088l-LXyMYOz9DnLYbfIAvGCxiJN6VJglseAsLuRInFPsaRNLjssKoU7_kDNmBAJo24YxbWmdtbArqikfuVIr3bPqBH0Fnpb1g-BI1sut_rfuwsRWyPzLWAFK8xMIDp0QOIwSlyBdtFnijRdG8DiqwRET7WwDegoJ79oYpI8s8aR3ZdDlNYXan5OJm91cKIg"/>
</div>
<div>
<h3 className="font-h3 text-h3 text-primary mb-1">Dr. Sarah Jenkins</h3>
<p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-wider">Lead Prosthodontist</p>
<span className="inline-flex items-center gap-1 bg-secondary-container text-on-secondary-container font-label-caps text-[10px] px-2 py-1 rounded-sm">
<span className="material-symbols-outlined text-[12px] icon-fill">verified</span>
                                Certified
                            </span>
</div>
</div>
<div className="flex-grow">
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                            With over 15 years of experience reconstructing smiles, Dr. Jenkins prioritizes minimally invasive techniques. Her gentle approach and detailed explanations ensure patients feel completely at ease before any procedure.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs font-medium text-tertiary-container bg-surface-container px-3 py-1 rounded-full">Implants</span>
<span className="text-xs font-medium text-tertiary-container bg-surface-container px-3 py-1 rounded-full">Veneers</span>
</div>
</div>
</div>
{/* Doctor Card 2 */}
<div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-2 bg-tertiary-container rounded-l-xl opacity-80"></div>
<div className="flex items-center gap-6 mb-6 relative z-10">
<div className="w-24 h-24 rounded-full p-1 border-2 border-tertiary-container shrink-0">
<img alt="Dr. David Ochieng" className="w-full h-full object-cover rounded-full" data-alt="A professional headshot of a male dentist of African descent in his late 30s. He wears crisp white clinical attire over a shirt. He is smiling confidently in a modern, well-lit clinic environment with white and soft blue tones, projecting expertise and approachability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb6EvSQmmoZopWvIq_cj1N6oXlpNfTFhiICpTyAkt_bXy-mw9XqmWrIK3N87F2YX4-JKx_zKFQLMyQCZCwwz7Niw2-asuU8mNDJIVFd_r1TNIKFr2gYkJF7xXmULLTwQxryZAQJ18hgm50p-cAobAnbYw1yjLHO_Y9u9sXtJ83LJiVYn9u2QxqjIUW7VO28vuOa-EbMItKAFOQo1kchJAFNwrmMjvBD4MoprC879vzGD0A_SRb26P9E4fyY6TbvOa3_O5_ebI6aw"/>
</div>
<div>
<h3 className="font-h3 text-h3 text-primary mb-1">Dr. David Ochieng</h3>
<p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-wider">Endodontist</p>
<span className="inline-flex items-center gap-1 bg-secondary-container text-on-secondary-container font-label-caps text-[10px] px-2 py-1 rounded-sm">
<span className="material-symbols-outlined text-[12px] icon-fill">military_tech</span>
                                Award-Winning
                            </span>
</div>
</div>
<div className="flex-grow">
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                            Dr. Ochieng specializes in pain-free root canal therapies. Known for his calming demeanor, he utilizes advanced microscopic technology to ensure precision, significantly reducing recovery time and patient anxiety.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs font-medium text-tertiary-container bg-surface-container px-3 py-1 rounded-full">Root Canals</span>
<span className="text-xs font-medium text-tertiary-container bg-surface-container px-3 py-1 rounded-full">Pain Management</span>
</div>
</div>
</div>
{/* Doctor Card 3 */}
<div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-2 bg-tertiary-container rounded-l-xl opacity-80"></div>
<div className="flex items-center gap-6 mb-6 relative z-10">
<div className="w-24 h-24 rounded-full p-1 border-2 border-tertiary-container shrink-0">
<img alt="Dr. Emily Wanjiku" className="w-full h-full object-cover rounded-full" data-alt="A brightly lit portrait of a female pediatric dentist of African descent wearing fun, subtly patterned scrubs. She has an extremely warm, inviting smile. The background is slightly out of focus, showing clean, modern clinical elements with a soft, bright aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQBwqaM7ia0gbQNEbdYXloa49Kq0_dR_rBpob19GPERvvqPvDCOffMthpDeK5ysbHM2zEKe_t8e4lBNH-CKPsH9OewpzyaafqfsgWO5kHVg8EHw7Bk1KyM7Fk2T_iNv69x65kASehf0jwdE7F7zxuAwKYLev2u3SBJjLZqhcJo7bQz9jGfnICqG-CoKL89qA1ijD1CIMRqfJbTxGclVvRysXHBmAlMGbAMmXtsvBqDELoq9ycJfp1ZpEidlAUF95TKnWxJtfzRXA"/>
</div>
<div>
<h3 className="font-h3 text-h3 text-primary mb-1">Dr. Emily Wanjiku</h3>
<p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-wider">Pediatric Dentist</p>
</div>
</div>
<div className="flex-grow">
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                            Creating positive first dental experiences is Dr. Wanjiku's passion. Her clinic space is designed to be child-friendly, and she employs interactive techniques to make dental visits fun and educational for young patients.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs font-medium text-tertiary-container bg-surface-container px-3 py-1 rounded-full">Child Care</span>
<span className="text-xs font-medium text-tertiary-container bg-surface-container px-3 py-1 rounded-full">Preventative</span>
</div>
</div>
</div>
</div>
</section>
</main>
  );
}
