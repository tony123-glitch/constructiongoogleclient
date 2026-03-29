import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, ShieldCheck, Wrench } from "lucide-react"
import PageHeader from "@/components/ui/PageHeader"

export const metadata: Metadata = {
  title: "About Us | Bankhead Construction LLC St. Louis",
  description: "Learn about Bankhead Construction LLC, St. Louis's most trusted partner for premium craftsmanship, reliable repairs, and general construction.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title={<>Building St. Louis <span className="text-primary italic">Better</span></>}
        subtitle="Trust, craftsmanship, and reliability are the foundation of everything we build."
        backgroundImage="/servicepics/contracting.png"
      />

      {/* Story Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 delay-150">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight">
                More Than Just <br/>a Construction Company
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
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
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] border border-white/10 shadow-2xl hover:shadow-[0_0_40px_rgba(11,61,145,0.2)] transition-shadow duration-700">
                <div 
                  className="absolute inset-0 bg-cover bg-top hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: "url('/cedric.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <p className="text-white font-heading font-bold text-2xl">Cedric Bankhead</p>
                    <p className="text-primary font-medium">Founder & Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 tracking-tight">Our Core Values</h2>
            <p className="text-xl text-gray-400">These principles guide every swing of the hammer and every client interaction.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl p-10 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <ShieldCheck className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Integrity First</h3>
              <p className="text-gray-400 leading-relaxed">We provide honest recommendations, transparent pricing, and we never upsell you on services you don't need.</p>
            </div>
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl p-10 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <Wrench className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Master Craftsmanship</h3>
              <p className="text-gray-400 leading-relaxed">Good enough is never enough. We take immense pride in the details, ensuring perfection in every corner.</p>
            </div>
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl p-10 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <Target className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Reliability</h3>
              <p className="text-gray-400 leading-relaxed">When we say we'll be there, we'll be there. We respect your schedule and keep our project timelines intact.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
