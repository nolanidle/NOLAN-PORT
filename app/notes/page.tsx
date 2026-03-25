import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-paper dark:bg-paper transition-colors duration-300 pattern-dots">
      <Navbar />
      <section className="pt-40 pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
            <span className="section-label">Engineering Log</span>
            <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter mb-16 text-ink dark:text-[#E2E8F0]">
              Notes.
            </h1>
            
            <div className="space-y-16 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#D1CDC4] before:to-transparent">
              
              {/* Note Item */}
              <article className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-ink bg-accent text-paper shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-[#1A1A1A]/20">
                    <span className="w-2 h-2 bg-warm rounded-full"></span>
                </div>
                
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2rem)] p-6 editorial-border bg-paper dark:bg-warm hover-lift cursor-pointer hover:border-accent transition-colors">
                  <time className="font-mono text-xs uppercase tracking-widest text-muted mb-2 block">March 14, 2026</time>
                  <h3 className="font-serif text-2xl font-bold text-ink dark:text-[#E2E8F0] mb-3">Why I'm building a CPU-native AI</h3>
                  <p className="font-sans text-sm text-muted dark:text-[#94A3B8] mb-4 line-clamp-3">
                    Transformers are memory bandwidth bound. By rewriting the underlying parallel kernel execution
                    for specific x86 instructions, we can severely cut down on memory stalls during inference...
                  </p>
                  <span className="font-mono text-xs text-accent uppercase font-bold group-hover:underline">Read Full Entry &rarr;</span>
                </div>
              </article>

              <article className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-ink bg-transparent text-ink shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-[#1A1A1A]/20"></div>
                
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2rem)] p-6 editorial-border bg-paper dark:bg-warm hover-lift cursor-pointer hover:border-accent transition-colors">
                  <time className="font-mono text-xs uppercase tracking-widest text-muted mb-2 block">Feb 02, 2026</time>
                  <h3 className="font-serif text-2xl font-bold text-ink dark:text-[#E2E8F0] mb-3">Lexical Analysis in RIFT</h3>
                  <p className="font-sans text-sm text-muted dark:text-[#94A3B8] mb-4 line-clamp-3">
                    Writing a fast lexer from scratch is harder than it looks. Avoiding unnecessary heap allocations
                    and staying entirely within a contiguous byte stream buffer changed the game.
                  </p>
                  <span className="font-mono text-xs text-accent uppercase font-bold group-hover:underline">Read Full Entry &rarr;</span>
                </div>
              </article>

            </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
