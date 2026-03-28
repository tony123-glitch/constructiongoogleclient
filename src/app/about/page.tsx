import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, ShieldCheck, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Bankhead Construction LLC St. Louis",
  description: "Learn about Bankhead Construction LLC, St. Louis's most trusted partner for premium craftsmanship, reliable repairs, and general construction.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 bg-background">
      {/* Header */}
      <div className="relative py-24 bg-[#050505] border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888081628-3e4b77fcc652?q=80&w=2070&auto=format&fit=crop')" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Building St. Louis <span className="text-primary italic">Better</span>
          </h1>
          <p className="text-xl text-gray-400">
            Trust, craftsmanship, and reliability are the foundation of everything we build.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                More Than Just <br/>a Construction Company
              </h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  Bankhead Construction LLC was founded on a simple premise: homeowners in St. Louis deserve contractors who show up on time, communicate clearly, and do exceptional work. 
                </p>
                <p>
                  We grew tired of the industry standard where projects dragged on and corners were cut. By prioritizing integrity and treating every home as if it were our own, we've built a reputation for excellence across the Greater St. Louis area.
                </p>
                <p>
                  Whether we're patching drywall, laying intricate tile flooring, or managing a major remodel, our focus remains exactly the same: your completely satisfied smile at the end of the project.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] border border-white/10 shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-400">These principles guide every swing of the hammer and every client interaction.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#111] p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
              <ShieldCheck className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Integrity First</h3>
              <p className="text-gray-400 leading-relaxed">We provide honest recommendations, transparent pricing, and we never upsell you on services you don't need.</p>
            </div>
            <div className="bg-[#111] p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
              <Wrench className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Master Craftsmanship</h3>
              <p className="text-gray-400 leading-relaxed">Good enough is never enough. We take immense pride in the details, ensuring perfection in every corner.</p>
            </div>
            <div className="bg-[#111] p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
              <Target className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Reliability</h3>
              <p className="text-gray-400 leading-relaxed">When we say we'll be there, we'll be there. We respect your schedule and keep our project timelines intact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">Ready to Experience the Difference?</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Partner with St. Louis's leading team of dedicated professionals for your next home improvement project.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 shadow-xl transition-all hover:-translate-y-1"
        >
          Work With Us
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  )
}
