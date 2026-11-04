import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="hairline-t bg-monolithNoir text-travertine pt-20 pb-12 px-6 lg:px-12">
      <div className="max-w-[1720px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 hairline-b border-white/10">
        {/* Atelier Col 1 */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <svg className="w-7 h-7 stroke-travertine stroke-[1.5] fill-none" viewBox="0 0 40 40">
              <rect fill="#F8F6F1" height="24" width="4" x="6" y="8"></rect>
              <rect fill="#F8F6F1" height="24" width="4" x="13" y="8"></rect>
              <path d="M21 32V18C21 12.4772 25.4772 8 31 8V8C36.5228 8 41 12.4772 41 18V32" stroke="#F8F6F1" stroke-width="2.5"></path>
              <line stroke="#F8F6F1" stroke-width="2" x1="4" x2="36" y1="32" y2="32"></line>
            </svg>
            <span className="font-serif text-2xl tracking-[0.16em] uppercase">The Artihc Studio</span>
          </div>
          <p className="font-sans text-xs text-travertine/60 font-light max-w-sm leading-relaxed">
            Quiet luxury architectural atelier conceiving bespoke residential sanctuaries, duplex penthouses, and private estates across South India.
          </p>
          <div className="text-[10px] tracking-[0.24em] uppercase text-warmOchre">
            Awwwards &amp; Architectural Digest South Asia Featured
          </div>
        </div>

        {/* Atelier Col 2: Studio Locations */}
        <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans text-xs">
          <div className="space-y-2">
            <div className="text-[10px] tracking-[0.2em] uppercase text-warmOchre">Tirupati Atelier</div>
            <p className="text-travertine/60 leading-relaxed text-[11px]">
              Ridge Compound, 2nd Cross, Karakambadi Road, Tirupati, AP 517507
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-[10px] tracking-[0.2em] uppercase text-warmOchre">Bangalore Studio</div>
            <p className="text-travertine/60 leading-relaxed text-[11px]">
              100ft Road, 12th Main, Indiranagar, Bangalore, KA 560038
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-[10px] tracking-[0.2em] uppercase text-warmOchre">Hyderabad Atelier</div>
            <p className="text-travertine/60 leading-relaxed text-[11px]">
              Road No. 36, Jubilee Hills, Hyderabad, TS 500033
            </p>
          </div>
        </div>

        {/* Atelier Col 3: Direct Dialogue */}
        <div className="md:col-span-3 space-y-4 font-sans text-xs">
          <div className="text-[10px] tracking-[0.2em] uppercase text-warmOchre">Direct Partner Liaison</div>
          <div className="text-travertine/80 space-y-1">
            <div>commissions@artihcstudio.com</div>
            <div>+91 (0) 877 228 9011</div>
          </div>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-block py-2.5 px-5 border border-white/20 text-[10px] tracking-[0.2em] uppercase text-travertine hover:border-bronze hover:text-bronze transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Legal & Technical Stamp */}
      <div className="max-w-[1720px] mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-travertine/40 font-sans gap-4">
        <div>© 2025 The Artihc Studio (TAS). All Rights Reserved.</div>
        <div className="flex items-center gap-6">
          <span>Architectural Standards: ISO 9001:2015</span>
          <span>•</span>
          <span>Aesthetic Privacy Enforced</span>
        </div>
      </div>
    </footer>
  );
}
