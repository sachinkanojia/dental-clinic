import React from 'react';
import { Link } from 'react-router-dom';

export default function BookAppointment() {
  return (
<main className="flex-grow pt-[100px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
{/* Header Section */}
<div className="text-center mb-16">
<h1 className="font-h1 text-h1 text-primary mb-4">Contact &amp; Appointments</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">We're here to help you achieve your perfect smile. Reach out to us or book an appointment directly using the form below.</p>
</div>
{/* Split Layout */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
{/* Left Side: Contact Details */}
<div className="space-y-8">
{/* Location Card */}
<div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] transition-shadow duration-300 border border-outline-variant/30 flex items-start gap-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-tertiary-container transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
<div className="bg-surface-container p-4 rounded-full flex-shrink-0 text-primary">
<span className="material-symbols-outlined" data-icon="location_on">location_on</span>
</div>
<div>
<h3 className="font-h3 text-h3 text-on-surface mb-2">Our Location</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Afya Centre, Mezzanine Floor<br/>Nairobi, Kenya</p>
<Link className="font-button text-button text-secondary hover:text-primary transition-colors flex items-center gap-1" to="#map-section">
                            Get Directions <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
{/* Contact Card */}
<div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] transition-shadow duration-300 border border-outline-variant/30 flex items-start gap-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-tertiary-container transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
<div className="bg-surface-container p-4 rounded-full flex-shrink-0 text-primary">
<span className="material-symbols-outlined" data-icon="call">call</span>
</div>
<div>
<h3 className="font-h3 text-h3 text-on-surface mb-2">Contact Us</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-2">Phone: +254 721 679492</p>
<Link className="inline-flex items-center gap-2 mt-4 bg-[#25D366]/10 text-[#075E54] font-button text-button px-4 py-2 rounded-lg hover:bg-[#25D366]/20 transition-colors" to="https://wa.me/254721679492" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined" data-icon="chat">chat</span> WhatsApp Us
                        </Link>
</div>
</div>
{/* Hours Card */}
<div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_20px_rgba(15,76,129,0.04)] hover:shadow-[0_10px_30px_rgba(15,76,129,0.08)] transition-shadow duration-300 border border-outline-variant/30 flex items-start gap-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-tertiary-container transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
<div className="bg-surface-container p-4 rounded-full flex-shrink-0 text-primary">
<span className="material-symbols-outlined" data-icon="schedule">schedule</span>
</div>
<div className="w-full">
<h3 className="font-h3 text-h3 text-on-surface mb-4">Opening Hours</h3>
<ul className="space-y-3 font-body-md text-body-md text-on-surface-variant w-full">
<li className="flex justify-between border-b border-outline-variant/20 pb-2"><span>Mon - Fri</span> <span>8:00 AM - 6:00 PM</span></li>
<li className="flex justify-between border-b border-outline-variant/20 pb-2"><span>Saturday</span> <span>9:00 AM - 2:00 PM</span></li>
<li className="flex justify-between pb-2 text-error"><span>Sunday</span> <span>Closed</span></li>
</ul>
</div>
</div>
</div>
{/* Right Side: Booking Form */}
<div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_20px_rgba(15,76,129,0.04)] border border-outline-variant/30 lg:ml-8 relative">
<div className="absolute -top-4 -right-4 bg-tertiary text-on-tertiary font-label-caps text-label-caps px-4 py-2 rounded-full shadow-md z-10 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="verified">verified</span> Secure Booking
                </div>
<h2 className="font-h2 text-h2 text-on-surface mb-6">Book an Appointment</h2>
<form className="space-y-6">
{/* Progress Stepper (Visual only) */}
<div className="flex items-center mb-8 relative px-4">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-button text-sm z-10">1</div>
<div className="flex-1 h-[2px] bg-primary/20 relative">
<div className="absolute top-0 left-0 h-full bg-primary w-1/2"></div>
</div>
<div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-button text-sm z-10 border border-outline-variant/30">2</div>
</div>
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="name">Full Name *</label>
<input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="phone">Phone Number *</label>
<input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="phone" name="phone" placeholder="+254 XXX XXXX" required="" type="tel"/>
</div>
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="email">Email Address</label>
<input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="service">Select Service *</label>
<select className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer" id="service" name="service" required="">
<option disabled="" selected="" value="">Choose a dental service...</option>
<option value="consultation">General Consultation</option>
<option value="cleaning">Teeth Cleaning</option>
<option value="whitening">Teeth Whitening</option>
<option value="braces">Orthodontics (Braces)</option>
<option value="implants">Dental Implants</option>
</select>
</div>
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="date">Preferred Date &amp; Time *</label>
<div className="flex gap-4">
<input className="w-2/3 bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="date" name="date" required="" type="date"/>
<select className="w-1/3 bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer" id="time" name="time" required="">
<option value="morning">Morning</option>
<option value="afternoon">Afternoon</option>
</select>
</div>
</div>
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="notes">Additional Notes (Optional)</label>
<textarea className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" id="notes" name="notes" placeholder="Any specific concerns?" rows="3"></textarea>
</div>
<button className="w-full bg-primary text-on-primary font-button text-button py-4 rounded-lg shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2" type="submit">
                        Submit Appointment Request <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
<p className="text-xs text-center text-outline mt-4 font-body-md">By submitting, you agree to our privacy policy regarding medical data handling.</p>
</form>
</div>
</div>
</main>
  );
}
