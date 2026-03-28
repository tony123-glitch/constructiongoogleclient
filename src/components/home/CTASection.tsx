import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888081628-3e4b77fcc652?q=80&w=2070&auto=format&fit=crop')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/95 z-10 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Fast Scheduling Available. Get a transparent, no-obligation estimate from St. Louis's most trusted construction team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link 
            href="/contact" 
            className="group inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-5 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl"
          >
            Request a Free Estimate
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a 
            href="tel:+13147014877"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-md font-bold text-lg text-white border-2 border-white hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (314) 701-4877
          </a>
        </div>
      </div>
    </section>
  )
}
