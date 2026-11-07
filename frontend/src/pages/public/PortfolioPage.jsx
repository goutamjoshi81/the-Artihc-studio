import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Grid, List } from 'lucide-react';
import { studioStore } from '../../data/store';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('editorial'); // 'editorial' | 'technical'
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const update = () => {
      setProjects(studioStore.getProjects(selectedCategory));
      setCategories(studioStore.categories || []);
    };
    update();
    return studioStore.subscribe(update);
  }, [selectedCategory]);

  return (
    <main className="w-full pt-28 bg-travertine">
      {/* Top Editorial Header & Datum Matrix */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto pt-6 pb-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-6 hairline-b">
          <div className="space-y-3 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-atelierCream text-monolithNoir font-sans text-[10px] tracking-[0.22em] uppercase rounded-xs">
                PORTFOLIO
              </span>
              <span className="text-monolithNoir/60 font-sans text-[10px] tracking-[0.22em] uppercase">
                REGIONAL MODERNISM • S. INDIA
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.75rem] font-light leading-[1.05] tracking-tight text-monolithNoir">
              03 / PORTFOLIO — Selected Architectural &amp; Interior Projects
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-bronze italic pt-1">
              Selected Projects &amp; Built Works
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end text-left lg:text-right space-y-1">
            <div className="font-sans text-[10px] text-monolithNoir/50 tracking-[0.22em] uppercase">
              CHRONOLOGICAL SCOPE
            </div>
            <div className="font-serif text-xl text-monolithNoir">
              MMXXI — MMXXV
            </div>
            <div className="font-sans text-[10px] text-bronze uppercase tracking-[0.18em]">
              13.6288° N • 12.9716° N • 17.3850° N
            </div>
          </div>
        </div>

        {/* Editorial Preface Strip */}
        <div className="py-6 bg-atelierCream px-8 mt-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-stoneBorder">
          <p className="font-sans text-base text-monolithNoir max-w-2xl font-light italic">
            “Each plate represents an uncompromising dialogue between geographic memory, light, and tactile stone.”
          </p>
          <div className="flex items-center gap-3 text-monolithNoir/70 font-sans text-[10px] uppercase tracking-[0.18em]">
            <span className="w-2 h-2 rounded-full bg-bronze"></span>
            <span>ACCREDITED COA &amp; HAUTE SPECIFICATIONS</span>
          </div>
        </div>
      </section>

      {/* Filter & View Mode Controls */}
      <section className="sticky top-20 z-40 bg-travertine/95 backdrop-blur-md px-6 lg:px-12 max-w-[1720px] mx-auto py-4 hairline-b">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Typology Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id || cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 font-sans text-[10px] tracking-[0.18em] uppercase transition-colors whitespace-nowrap ${
                  selectedCategory === cat.slug
                    ? 'bg-monolithNoir text-travertine font-medium'
                    : 'bg-atelierCream text-monolithNoir/70 hover:text-monolithNoir'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Mode Toggle Switch */}
          <div className="flex items-center self-end lg:self-auto bg-atelierCream p-1 border border-stoneBorder">
            <button
              onClick={() => setViewMode('editorial')}
              className={`flex items-center gap-2 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] transition-all ${
                viewMode === 'editorial'
                  ? 'bg-monolithNoir text-travertine shadow-xs'
                  : 'text-monolithNoir/70 hover:text-monolithNoir'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>EDITORIAL EXHIBITION</span>
            </button>
            <button
              onClick={() => setViewMode('technical')}
              className={`flex items-center gap-2 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] transition-all ${
                viewMode === 'technical'
                  ? 'bg-monolithNoir text-travertine shadow-xs'
                  : 'text-monolithNoir/70 hover:text-monolithNoir'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>TECHNICAL DOSSIER</span>
            </button>
          </div>
        </div>
      </section>

      {/* 1. EDITORIAL EXHIBITION GRID MODE */}
      {viewMode === 'editorial' && (
        <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {projects.map((item, idx) => {
              const gridSpan = idx % 3 === 0 ? 'lg:col-span-8' : 'lg:col-span-4';
              return (
                <article key={item.id} className={`${gridSpan} flex flex-col group border border-stoneBorder bg-atelierCream`}>
                  <div className="relative w-full h-[340px] lg:h-[460px] overflow-hidden bg-atelierCream">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      alt={item.title}
                      src={item.cover_image || '/images/hero_villa.jpg'}
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-monolithNoir/90 backdrop-blur-xs px-3 py-1 text-travertine font-sans text-[9px] tracking-[0.22em] uppercase">
                      PLATE 0{idx + 1} • {item.type}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-monolithNoir/85 backdrop-blur-xs px-3 py-1 text-warmOchre font-sans text-[9px] tracking-[0.22em] uppercase">
                      {item.location}
                    </div>
                  </div>

                  <div className="p-8 bg-travertine flex flex-col justify-between flex-1 hairline-t">
                    <div className="space-y-2">
                      <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-2">
                        <h2 className="font-serif text-2xl lg:text-3xl text-monolithNoir font-normal">
                          {item.title}
                        </h2>
                        <div className="font-sans text-[10px] text-bronze tracking-[0.22em] uppercase">
                          {item.area} • {item.year}
                        </div>
                      </div>
                      <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                        {item.short_desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-6 hairline-t flex items-center justify-between">
                      <div className="flex flex-wrap items-center gap-2 text-[9px] uppercase tracking-wider text-monolithNoir/60 font-sans">
                        <span className="text-monolithNoir font-semibold">Materials:</span>
                        {(item.materials || []).map((mat, i) => (
                          <span key={i}>
                            {mat}{i < item.materials.length - 1 ? ' • ' : ''}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/portfolio/${item.slug}`}
                        className="inline-flex items-center gap-2 text-bronze text-[10px] tracking-[0.2em] uppercase font-sans font-medium hover:text-monolithNoir transition-colors shrink-0"
                      >
                        <span>View Monograph</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* 2. TECHNICAL DOSSIER MODE (Tabular High-Density View) */}
      {viewMode === 'technical' && (
        <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto py-16">
          <div className="overflow-x-auto border border-stoneBorder bg-atelierCream">
            <table className="w-full text-left font-sans text-xs border-collapse">
              <thead>
                <tr className="hairline-b bg-monolithNoir text-travertine text-[10px] tracking-[0.22em] uppercase font-medium">
                  <th className="py-4 px-6">Dossier ID</th>
                  <th className="py-4 px-6">Monograph Title</th>
                  <th className="py-4 px-6">Typology Classification</th>
                  <th className="py-4 px-6">Geographic Locale</th>
                  <th className="py-4 px-6">Volumetric Footprint</th>
                  <th className="py-4 px-6">Primary Material Composition</th>
                  <th className="py-4 px-6 text-right">Technical Spec</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stoneBorder text-monolithNoir/80">
                {projects.map((m, idx) => (
                  <tr key={m.id} className="hover:bg-travertine transition-colors">
                    <td className="py-5 px-6 font-mono text-[11px] text-bronze">TAS-0{m.id || idx + 1}</td>
                    <td className="py-5 px-6 font-serif text-base font-normal text-monolithNoir">{m.title}</td>
                    <td className="py-5 px-6 uppercase text-[10px] tracking-wider">{m.category_name || m.type}</td>
                    <td className="py-5 px-6">{m.location}</td>
                    <td className="py-5 px-6 font-mono">{m.area}</td>
                    <td className="py-5 px-6 text-monolithNoir/60">{(m.materials || []).join(' • ')}</td>
                    <td className="py-5 px-6 text-right">
                      <Link to={`/portfolio/${m.slug}`} className="text-[10px] uppercase tracking-wider text-bronze underline">
                        Open Dossier
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Inquire Bottom Bar */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto pb-24">
        <div className="p-8 bg-monolithNoir text-travertine flex flex-col md:flex-row items-center justify-between gap-6 border border-stoneBorder">
          <div>
            <h3 className="font-serif text-2xl">Commission An Architectural Monograph</h3>
            <p className="text-xs text-travertine/60 font-sans mt-1">Accepting a restricted allocation of 12 commissions annually across South India.</p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-bronze text-travertine text-[10px] tracking-[0.24em] uppercase font-sans hover:bg-warmOchre hover:text-monolithNoir transition-colors shrink-0"
          >
            Start Commission Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
