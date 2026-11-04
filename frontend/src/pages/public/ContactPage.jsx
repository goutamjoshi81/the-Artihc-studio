import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, MapPin, Mail, MessageSquare, Check, ArrowRight, Shield } from 'lucide-react';
import { studioStore } from '../../data/store';

export default function ContactPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialProject = searchParams.get('project') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: initialProject ? `Inquiry: ${initialProject}` : 'Private Residential Villa',
    location: 'Hyderabad',
    area: '7,500 SQ.FT',
    budget: '₹3.5 Crore — ₹7.0 Crore',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      studioStore.submitEnquiry(formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const generateWhatsAppUrl = () => {
    const text = `*New Studio Project Commission Enquiry*
*Client Name:* ${formData.name || 'Private Patron'}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Typology:* ${formData.project_type}
*Location:* ${formData.location}
*Approx. Footprint:* ${formData.area}
*Budget Tier:* ${formData.budget}
*Message:* ${formData.message || 'I would like to schedule a private studio consultation with Principal Architects.'}`;
    return `https://wa.me/918772289011?text=${encodeURIComponent(text)}`;
  };

  return (
    <main className="w-full pt-28 bg-travertine">
      {/* Editorial Header & Datum Marker */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto pt-6 pb-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 hairline-b">
          <div className="space-y-3 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="font-sans text-[10px] text-bronze uppercase tracking-[0.22em] bg-atelierCream px-3 py-1 border border-stoneBorder font-semibold">
                DATUM REF: TAS-PRV-2025/M
              </span>
              <span className="w-8 h-px bg-monolithNoir/20"></span>
              <span className="font-sans text-[10px] text-monolithNoir/60 uppercase tracking-[0.22em]">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-light text-monolithNoir">
              04 / CONTACT — Studio Offices &amp; Project Inquiries
            </h1>
          </div>

          <div className="flex items-center gap-4 text-right">
            <div className="flex flex-col">
              <span className="font-sans text-[10px] text-monolithNoir/60 uppercase tracking-[0.22em]">
                CYCLE 2025/2026 STATUS
              </span>
              <span className="font-sans text-[11px] text-monolithNoir uppercase tracking-[0.18em] font-bold">
                04 OF 12 QUOTA SLOTS REMAINING
              </span>
            </div>
            <div className="w-3 h-3 bg-bronze rounded-full animate-ping"></div>
          </div>
        </div>
      </section>

      {/* Hero Manifest & Annual Quota Banner */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto mb-16">
        <div className="bg-atelierCream p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-stoneBorder">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-sans text-[10px] text-bronze uppercase tracking-[0.2em] font-semibold">
              THE DISCIPLINE OF SELECTIVITY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-monolithNoir italic max-w-3xl leading-snug">
              We accept a strictly restricted quota of 12 commissions annually across Tirupati, Bangalore, and Hyderabad.
            </h2>
            <p className="font-sans text-xs text-monolithNoir/70 max-w-2xl pt-2 font-light leading-relaxed">
              Direct partnership with our principal architects ensuring uncompromising craft fidelity from initial soil test to final micro-joinery inspection.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
            <div className="bg-travertine p-6 space-y-2.5 w-full lg:max-w-xs border border-stoneBorder">
              <div className="flex justify-between items-center text-monolithNoir/70 text-[10px] font-sans">
                <span className="uppercase tracking-wider">ALLOCATION COMMITTED</span>
                <span className="font-mono text-monolithNoir font-bold">66.6%</span>
              </div>
              <div className="w-full h-1.5 bg-atelierCream overflow-hidden border border-stoneBorder">
                <div className="bg-monolithNoir h-full w-[66.6%]"></div>
              </div>
              <div className="flex justify-between items-center pt-1 text-monolithNoir/70 text-[10px] font-sans">
                <span className="uppercase tracking-wider">Q3/Q4 COMMENCEMENTS</span>
                <span className="text-bronze font-bold">8 RESERVED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Column Architectural Core */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: The 3 Atelier Sanctums & Direct Liaisons */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <span className="font-sans text-[10px] text-monolithNoir/50 uppercase tracking-[0.22em] block mb-1">
                PHYSICAL ANCHORS
              </span>
              <h3 className="font-serif text-3xl text-monolithNoir font-normal">
                The Atelier Sanctums
              </h3>
              <p className="font-sans text-xs text-monolithNoir/70 mt-2 font-light leading-relaxed">
                Every studio maintains tactile sample archives, full-scale joinery prototypes, and stone block libraries cut from regional Andhra and Deccan quarries.
              </p>
            </div>

            {/* Atelier 1: Tirupati */}
            <div className="bg-atelierCream/60 p-6 space-y-3 border border-stoneBorder hover:bg-atelierCream transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] text-bronze uppercase tracking-[0.22em]">
                  13.6288° N • 79.4192° E
                </span>
                <span className="font-sans text-[9px] bg-travertine px-2 py-0.5 text-monolithNoir uppercase border border-stoneBorder">
                  SANCTUM 01
                </span>
              </div>
              <h4 className="font-serif text-xl text-monolithNoir">Tirupati Studio</h4>
              <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                Ridge Compound, 2nd Cross, Karakambadi Road, Tirupati, AP 517507
              </p>
              <div className="pt-2 space-y-1 text-xs font-sans">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-monolithNoir/50 uppercase">HEAD OF STUDIO:</span>
                  <span className="text-monolithNoir font-medium">Ar. V. Rao</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-monolithNoir/50 uppercase">SECURE DESK:</span>
                  <a href="tel:+918772289011" className="text-monolithNoir hover:text-bronze underline underline-offset-4 decoration-bronze/40">
                    +91 (0) 877 228 9011
                  </a>
                </div>
              </div>
            </div>

            {/* Atelier 2: Bangalore */}
            <div className="bg-atelierCream/60 p-6 space-y-3 border border-stoneBorder hover:bg-atelierCream transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] text-bronze uppercase tracking-[0.22em]">
                  12.9716° N • 77.5946° E
                </span>
                <span className="font-sans text-[9px] bg-travertine px-2 py-0.5 text-monolithNoir uppercase border border-stoneBorder">
                  SANCTUM 02
                </span>
              </div>
              <h4 className="font-serif text-xl text-monolithNoir">Bangalore Atelier</h4>
              <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                100ft Road, 12th Main, Indiranagar, Bangalore, KA 560038
              </p>
              <div className="pt-2 space-y-1 text-xs font-sans">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-monolithNoir/50 uppercase">HEAD OF STUDIO:</span>
                  <span className="text-monolithNoir font-medium">Ar. Ananya Som</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-monolithNoir/50 uppercase">SECURE DESK:</span>
                  <a href="tel:+918041228890" className="text-monolithNoir hover:text-bronze underline underline-offset-4 decoration-bronze/40">
                    +91 (0) 80 4122 8890
                  </a>
                </div>
              </div>
            </div>

            {/* Atelier 3: Hyderabad */}
            <div className="bg-atelierCream/60 p-6 space-y-3 border border-stoneBorder hover:bg-atelierCream transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] text-bronze uppercase tracking-[0.22em]">
                  17.3850° N • 78.4867° E
                </span>
                <span className="font-sans text-[9px] bg-travertine px-2 py-0.5 text-monolithNoir uppercase border border-stoneBorder">
                  SANCTUM 03
                </span>
              </div>
              <h4 className="font-serif text-xl text-monolithNoir">Hyderabad Atelier</h4>
              <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                Road No. 36, Jubilee Hills, Hyderabad, TS 500033
              </p>
              <div className="pt-2 space-y-1 text-xs font-sans">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-monolithNoir/50 uppercase">HEAD OF STUDIO:</span>
                  <span className="text-monolithNoir font-medium">Ar. Vikramaditya Som</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-monolithNoir/50 uppercase">SECURE DESK:</span>
                  <a href="tel:+914067119002" className="text-monolithNoir hover:text-bronze underline underline-offset-4 decoration-bronze/40">
                    +91 (0) 40 6711 9002
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Private Commission Inquiry Console */}
          <div className="lg:col-span-7 border border-monolithNoir bg-atelierCream/40 p-8 lg:p-12">
            <div className="mb-8">
              <span className="font-sans text-[10px] text-bronze uppercase tracking-[0.22em] font-semibold block mb-1">
                DISCREET INITIATION
              </span>
              <h3 className="font-serif text-3xl text-monolithNoir font-light">
                Project Commission Form
              </h3>
              <p className="font-sans text-xs text-monolithNoir/70 mt-1 font-light">
                All submissions are encrypted and routed exclusively to the principal partners.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-wider text-monolithNoir/70 font-sans">
                      Principal Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Srikanth Reddy"
                      className="w-full p-4 border border-stoneBorder bg-travertine font-sans text-xs focus:outline-hidden focus:border-monolithNoir text-monolithNoir"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-wider text-monolithNoir/70 font-sans">
                      Principal Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. srikanth@estate.com"
                      className="w-full p-4 border border-stoneBorder bg-travertine font-sans text-xs focus:outline-hidden focus:border-monolithNoir text-monolithNoir"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-wider text-monolithNoir/70 font-sans">
                      Direct WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98490 00000"
                      className="w-full p-4 border border-stoneBorder bg-travertine font-sans text-xs focus:outline-hidden focus:border-monolithNoir text-monolithNoir"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-wider text-monolithNoir/70 font-sans">
                      Atelier Location
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full p-4 border border-stoneBorder bg-travertine font-sans text-xs focus:outline-hidden focus:border-monolithNoir text-monolithNoir"
                    >
                      <option value="Hyderabad">Hyderabad Studio</option>
                      <option value="Bangalore">Bangalore Atelier</option>
                      <option value="Tirupati">Tirupati Sanctum</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-wider text-monolithNoir/70 font-sans">
                      Spatial Typology
                    </label>
                    <select
                      name="project_type"
                      value={formData.project_type}
                      onChange={handleChange}
                      className="w-full p-4 border border-stoneBorder bg-travertine font-sans text-xs focus:outline-hidden focus:border-monolithNoir text-monolithNoir"
                    >
                      <option value="Private Residential Villa">Private Residential Villa</option>
                      <option value="Duplex Penthouse">Duplex Penthouse</option>
                      <option value="Executive Workplace">Executive Workplace</option>
                      <option value="Bespoke Hospitality">Bespoke Hospitality</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-wider text-monolithNoir/70 font-sans">
                      Allocated Capital Tier
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full p-4 border border-stoneBorder bg-travertine font-sans text-xs focus:outline-hidden focus:border-monolithNoir text-monolithNoir"
                    >
                      <option value="₹2.0 Crore — ₹3.5 Crore">₹2.0 Crore — ₹3.5 Crore</option>
                      <option value="₹3.5 Crore — ₹7.0 Crore">₹3.5 Crore — ₹7.0 Crore</option>
                      <option value="₹7.0 Crore+ (Monumental Commission)">₹7.0 Crore+ (Monumental Commission)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-wider text-monolithNoir/70 font-sans">
                    Spatial Brief &amp; Site Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Outline your prospective property dimensions, architectural preferences, or immediate timeline..."
                    className="w-full p-4 border border-stoneBorder bg-travertine font-sans text-xs focus:outline-hidden focus:border-monolithNoir text-monolithNoir"
                  ></textarea>
                </div>

                <div className="p-4 border border-stoneBorder bg-travertine flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs font-sans text-monolithNoir/70">
                    Need instant consultation with a principal?
                  </div>
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider font-medium text-bronze hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Direct WhatsApp VIP Desk</span>
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-monolithNoir text-travertine text-[10px] tracking-[0.26em] uppercase font-sans hover:bg-bronze transition-colors flex items-center justify-center gap-3"
                >
                  <span>{isSubmitting ? 'Inscribing Commission...' : 'Dispatch Dossier to Principals'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-bronze/10 border border-bronze mx-auto flex items-center justify-center text-bronze">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-3xl text-monolithNoir font-light">
                  Commission Inscribed Successfully
                </h3>
                <p className="font-sans text-xs text-monolithNoir/70 max-w-md mx-auto leading-relaxed">
                  Your project dossier has been registered in the atelier archive. Principal Architect V. Rao will review your brief and reach out via phone/secure email within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 border border-stoneBorder text-[10px] uppercase tracking-widest text-monolithNoir hover:border-bronze"
                  >
                    Submit Another Commission
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
