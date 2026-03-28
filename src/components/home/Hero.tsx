"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888081628-3e4b77fcc652?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl space-y-8 mt-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mt-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Top Rated in St. Louis</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight tracking-tight text-white drop-shadow-sm">
            Reliable Construction Services You Can <span className="text-primary italic">Trust</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            From drywall repair to complete renovations, Bankhead Construction LLC delivers premium craftsmanship, fast execution, and uncompromising quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 rounded-md font-semibold text-primary-foreground overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(11,61,145,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative">Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="tel:+13147014877"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold text-white border border-white/20 hover:bg-white/5 transition-colors backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 text-primary" />
              Call (314) 701-4877
            </a>
          </div>
          
          {/* Small Trust Indicators */}
          <div className="flex items-center gap-6 pt-6 border-t border-white/10 mt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-500 text-sm">★★★★★</div>
              <span className="text-xs text-gray-400 font-medium">Trusted by 500+ locals</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="hidden md:block relative w-full aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: "url('/Screenshot%202026-03-28%20145816.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-background/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl inline-block">
              <p className="font-bold font-heading text-lg">Excellence Delivered</p>
              <p className="text-primary text-sm font-semibold">100% Satisfaction Guarantee</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
