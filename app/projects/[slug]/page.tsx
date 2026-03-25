import React from 'react';
import MagneticButton from '@/components/magnetic-button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main className="min-h-screen bg-paper dark:bg-background transition-colors duration-300">
      <Navbar />
      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Split Pane */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="section-label">Case Study</span>
                <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter mb-12 uppercase text-ink break-words">
                  {slug.replace('-', ' ')}
                </h1>
                <div className="space-y-10 font-sans text-lg text-muted">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-4 border-b border-border pb-2">The Problem</h3>
                    <p>
                      Legacy architecture struggled under intense I/O concurrency. The data flow was deeply coupled and lacked modularity,
                      making it impossible to safely deploy hot-patches or scale independent nodes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-4 border-b border-border pb-2">The Solution</h3>
                    <p>
                      Engineered a highly concurrent, lock-free event queue based on the Disruptor pattern. 
                      Implemented a custom parser using finite state machines to drastically reduce lexical analysis overhead by 65%.
                    </p>
                  </div>
                </div>
                
                <MagneticButton className="mt-16">
                  <a href="#">View Source <span className="text-accent ml-2">&rarr;</span></a>
                </MagneticButton>
              </div>
              
              {/* Tech Arch Diagram Mock */}
              <div className="bg-warm dark:bg-warm editorial-border p-10 flex flex-col items-center justify-center relative overflow-hidden group min-h-[600px] hover-lift">
                {/* Decorative Blueprint elements */}
                <div className="absolute inset-0 pattern-dots opacity-20 dark:opacity-10" />
                <div className="absolute top-4 left-4 font-mono text-[10px] text-muted opacity-50">FIG. 1.0 — Architecture Topology</div>
                
                <div className="relative z-10 w-full h-full flex flex-col justify-between max-w-sm mx-auto">
                    {/* Mock Diagram Layers */}
                    <div className="w-full h-24 border-2 border-dashed border-accent flex flex-col items-center justify-center font-mono text-sm bg-paper/50 backdrop-blur-sm shadow-xl transition-transform duration-500 hover:scale-105">
                      <span className="text-ink font-bold">Client UI Layer</span>
                      <span className="text-xs text-muted">Next.js / React</span>
                    </div>
                    
                    <div className="w-[2px] h-20 bg-accent mx-auto relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-paper text-[10px] px-2 py-1 font-mono rounded-full">gRPC</div>
                    </div>
                    
                    <div className="w-full h-32 border-2 border-solid border-ink dark:border-paper flex flex-col items-center justify-center font-mono text-sm bg-paper dark:bg-background shadow-xl transition-transform duration-500 hover:scale-105">
                      <span className="text-ink font-bold">Core Engine</span>
                      <span className="text-xs text-muted mb-2">Rust / Tokio</span>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 border border-border flex items-center justify-center text-[10px]">Wkr</div>
                        <div className="w-10 h-10 border border-border flex items-center justify-center text-[10px]">Wkr</div>
                        <div className="w-10 h-10 bg-accent text-paper flex items-center justify-center text-[10px]">Agg</div>
                      </div>
                    </div>

                    <div className="w-[2px] h-20 bg-border mx-auto" />

                    <div className="w-full h-16 border-2 border-solid border-muted flex items-center justify-center font-mono text-sm bg-warm shadow-inner">
                      <span className="text-muted">Persistence Log</span>
                    </div>
                </div>
              </div>
            </div>
            
            {/* Code Snippet Showcase */}
            <div className="mt-32">
               <h3 className="font-mono text-sm uppercase tracking-widest text-ink mb-6">Core Implementation Snippet</h3>
               <div className="bg-ink p-8 rounded-sm shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-accent to-transparent left-0" />
                  <pre className="font-mono text-sm text-paper overflow-x-auto">
                    <code>{`pub fn parse_expression(lexer: &mut Lexer) -> Result<AstNode, ParseError> {
    let mut node = parse_primary(lexer)?;
    
    while let Some(op) = lexer.peek_operator() {
        let precedence = get_precedence(op);
        if precedence <= current_precedence { break; }
        
        lexer.advance();
        let right = parse_expression_with_precedence(lexer, precedence)?;
        
        node = AstNode::BinaryOp {
            operator: op,
            left: Box::new(node),
            right: Box::new(right)
        };
    }
    
    Ok(node)
}`}</code>
                  </pre>
               </div>
            </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
