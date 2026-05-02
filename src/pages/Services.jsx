import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
<main className="flex-grow px-gutter py-section-gap max-w-container-max mx-auto w-full">
{/* Services Grid */}
<section className="mb-section-gap">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Card 1 */}
<div className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] flex flex-col h-full">
<div className="mb-6 text-primary">
<span className="material-symbols-outlined text-4xl" data-icon="cleaning_services">cleaning_services</span>
</div>
<h3 className="font-h3 text-h3 text-primary mb-3">Teeth Cleaning</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Professional deep cleaning to remove plaque and tartar, preventing cavities and gum disease.</p>
<ul className="mb-8 space-y-2 font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start"><span className="material-symbols-outlined text-tertiary-container mr-2 text-sm mt-1" data-icon="check_circle">check_circle</span> Prevents gum disease</li>
<li className="flex items-start"><span className="material-symbols-outlined text-tertiary-container mr-2 text-sm mt-1" data-icon="check_circle">check_circle</span> Freshens breath</li>
</ul>
<button className="w-full py-3 px-4 font-button text-button bg-primary-container text-on-primary rounded-lg hover:bg-primary transition-colors mt-auto">Book Appointment</button>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] flex flex-col h-full">
<div className="mb-6 text-primary">
<span className="material-symbols-outlined text-4xl" data-icon="flare">flare</span>
</div>
<h3 className="font-h3 text-h3 text-primary mb-3">Teeth Whitening</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Advanced whitening treatments to safely and effectively brighten your smile in a single visit.</p>
<ul className="mb-8 space-y-2 font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start"><span className="material-symbols-outlined text-tertiary-container mr-2 text-sm mt-1" data-icon="check_circle">check_circle</span> Safe &amp; effective</li>
<li className="flex items-start"><span className="material-symbols-outlined text-tertiary-container mr-2 text-sm mt-1" data-icon="check_circle">check_circle</span> Immediate results</li>
</ul>
<button className="w-full py-3 px-4 font-button text-button border-2 border-secondary text-secondary rounded-lg hover:bg-surface-container-low transition-colors mt-auto">Book Appointment</button>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] flex flex-col h-full">
<div className="mb-6 text-primary">
<span className="material-symbols-outlined text-4xl" data-icon="medical_services">medical_services</span>
</div>
<h3 className="font-h3 text-h3 text-primary mb-3">Tooth Extraction</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Painless removal of severely damaged or impacted teeth, including wisdom teeth, with utmost care.</p>
<ul className="mb-8 space-y-2 font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start"><span className="material-symbols-outlined text-tertiary-container mr-2 text-sm mt-1" data-icon="check_circle">check_circle</span> Minimal discomfort</li>
<li className="flex items-start"><span className="material-symbols-outlined text-tertiary-container mr-2 text-sm mt-1" data-icon="check_circle">check_circle</span> Quick recovery</li>
</ul>
<button className="w-full py-3 px-4 font-button text-button border-2 border-secondary text-secondary rounded-lg hover:bg-surface-container-low transition-colors mt-auto">Book Appointment</button>
</div>
{/* Card 4 */}
<div className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] flex flex-col h-full">
<div className="mb-6 text-primary">
<span className="material-symbols-outlined text-4xl" data-icon="healing">healing</span>
</div>
<h3 className="font-h3 text-h3 text-primary mb-3">Root Canal</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Expert endodontic therapy to save infected teeth, relieve severe pain, and restore function.</p>
<ul className="mb-8 space-y-2 font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start"><span className="material-symbols-outlined text-tertiary-container mr-2 text-sm mt-1" data-icon="check_circle">check_circle</span> Saves natural tooth</li>
<li className="flex items-start"><span className="material-symbols-outlined text-tertiary-container mr-2 text-sm mt-1" data-icon="check_circle">check_circle</span> Pain relief</li>
</ul>
<button className="w-full py-3 px-4 font-button text-button border-2 border-secondary text-secondary rounded-lg hover:bg-surface-container-low transition-colors mt-auto">Book Appointment</button>
</div>
{/* Card 5 */}
<div className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] flex flex-col h-full">
<div className="mb-6 text-primary">
<span className="material-symbols-outlined text-4xl" data-icon="face">face</span>
</div>
<h3 className="font-h3 text-h3 text-primary mb-3">Braces/Orthodontics</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Comprehensive orthodontic solutions including traditional braces and clear aligners for a perfect bite.</p>
<ul className="mb-8 space-y-2 font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start"><span className="material-symbols-outlined text-tertiary-container mr-2 text-sm mt-1" data-icon="check_circle">check_circle</span> Straightens teeth</li>
<li className="flex items-start"><span className="material-symbols-outlined text-tertiary-container mr-2 text-sm mt-1" data-icon="check_circle">check_circle</span> Improves bite</li>
</ul>
<button className="w-full py-3 px-4 font-button text-button border-2 border-secondary text-secondary rounded-lg hover:bg-surface-container-low transition-colors mt-auto">Book Appointment</button>
</div>
{/* Card 6 */}
<div className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] flex flex-col h-full">
<div className="mb-6 text-primary">
<span className="material-symbols-outlined text-4xl" data-icon="construction">construction</span>
</div>
<h3 className="font-h3 text-h3 text-primary mb-3">Dental Implants</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Permanent, natural-looking replacements for missing teeth, restoring full functionality and aesthetics.</p>
<ul className="mb-8 space-y-2 font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start"><span className="material-symbols-outlined text-tertiary-container mr-2 text-sm mt-1" data-icon="check_circle">check_circle</span> Long-lasting</li>
<li className="flex items-start"><span className="material-symbols-outlined text-tertiary-container mr-2 text-sm mt-1" data-icon="check_circle">check_circle</span> Natural look &amp; feel</li>
</ul>
<button className="w-full py-3 px-4 font-button text-button border-2 border-secondary text-secondary rounded-lg hover:bg-surface-container-low transition-colors mt-auto">Book Appointment</button>
</div>
</div>
</section>
{/* FAQ Section */}
<section className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="font-h2 text-h2 text-primary mb-4">Frequently Asked Questions</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Common inquiries about our dental procedures.</p>
</div>
<div className="space-y-4">
{/* FAQ Item 1 */}
<div className="bg-surface-container-lowest border border-surface-variant rounded-lg p-6">
<h4 className="font-h3 text-h3 text-primary mb-2 text-lg">Does teeth whitening cause sensitivity?</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Some patients may experience temporary sensitivity following whitening treatments. We use modern, professional-grade products designed to minimize this, and can provide desensitizing gels if needed.</p>
</div>
{/* FAQ Item 2 */}
<div className="bg-surface-container-lowest border border-surface-variant rounded-lg p-6">
<h4 className="font-h3 text-h3 text-primary mb-2 text-lg">How long does a root canal procedure take?</h4>
<p className="font-body-md text-body-md text-on-surface-variant">A typical root canal takes between 60 to 90 minutes. Depending on the complexity of the tooth's canal system, it may require one or two visits to complete the treatment.</p>
</div>
</div>
</section>
</main>
  );
}
