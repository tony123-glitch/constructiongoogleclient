import { CheckCircle2 } from "lucide-react"

export default function WhyChooseUs() {
  const points = [
    {
      title: "Fast Response Times",
      description: "We respect your time. Expect quick communication, prompt estimates, and reliable scheduling."
    },
    {
      title: "High-Quality Craftsmanship",
      description: "We don't cut corners. Every nail, brush stroke, and cut is done with precision and care."
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. You get detailed, upfront quotes so you know exactly what to expect."
    },
    {
      title: "Customer Satisfaction Focus",
      description: "We don't consider the job done until you are completely thrilled with the results."
    }
  ]

  return (
    <section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
              Why <span className="text-primary italic">Choose Us</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Serving the St. Louis area, Bankhead Construction is built on the principle that your home deserves the best. We combine modern techniques with traditional hard work.
            </p>
            
            <div className="space-y-6 pt-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{point.title}</h4>
                    <p className="text-gray-400 mt-1 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] group border border-white/10 shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-top transform group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: "url('/cedric.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10">
                  <p className="text-white font-medium md:text-lg italic leading-relaxed">
                    "If you're ready to make a change and transform your home, count on us for all your home remodeling needs. We're dedicated to providing superior craftmanship and top-notch customer service. Our remodeling contractors have over 10 years of experience and always go above and beyond for any project."
                  </p>
                  <p className="text-primary font-bold mt-4">— Cedric Bankhead, Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
