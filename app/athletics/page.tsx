import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AthleticsPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] dark:bg-[#0B1120] text-[#F5F2ED] transition-colors duration-300">
      <Navbar />
      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="section-label !text-[#FF4E00]">Discipline & Focus</span>
            <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter mb-16 text-white mix-blend-difference">
              Athletics.
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
               <div className="bg-[#2A2A2A] dark:bg-[#1E293B] p-8 border border-[#3A3A3A] relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4E00]/10 to-transparent" />
                   <h3 className="font-mono text-xs uppercase tracking-widest text-[#8E8A83] mb-4">Miles Run (YTD)</h3>
                   <div className="font-serif text-7xl font-bold text-white tracking-tighter group-hover:scale-105 transition-transform">
                      624<span className="text-3xl text-[#FF4E00]">.5</span>
                   </div>
               </div>
               
               <div className="bg-[#2A2A2A] dark:bg-[#1E293B] p-8 border border-[#3A3A3A] relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#00F0FF]/10 to-transparent" />
                   <h3 className="font-mono text-xs uppercase tracking-widest text-[#8E8A83] mb-4">1600m PR</h3>
                   <div className="font-serif text-7xl font-bold text-white tracking-tighter group-hover:scale-105 transition-transform">
                      4:45<span className="text-3xl text-[#8E8A83]">.12</span>
                   </div>
               </div>
               
               <div className="bg-[#FF4E00] p-8 border border-[#FF4E00] relative overflow-hidden group text-[#1A1A1A]">
                   <h3 className="font-mono text-xs uppercase tracking-widest mb-4 opacity-80">Lines of Code (YTD)</h3>
                   <div className="font-serif text-7xl font-bold tracking-tighter group-hover:scale-105 transition-transform">
                      14k+
                   </div>
                   <div className="mt-4 font-mono text-xs font-bold uppercase">
                     Correlation: Direct.
                   </div>
               </div>
            </div>
            
            <div className="bg-[#F5F2ED] text-[#1A1A1A] p-12 editorial-border mt-16 text-center">
              <h2 className="font-serif text-4xl font-bold mb-6">The mental model is the same.</h2>
              <p className="font-sans text-xl max-w-2xl mx-auto text-[#4A4A4A] text-balance">
                 Whether it's the 3rd mile of a 5k or the 3rd hour of debugging a segmentation fault, 
                 the required trait is exactly the same: an unreasonable willingness to keep going.
              </p>
            </div>
            
        </div>
      </section>
      <Footer />
    </main>
  );
}
