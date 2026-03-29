import { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import PageHeader from "@/components/ui/PageHeader"
import CTASection from "@/components/home/CTASection"

export const metadata: Metadata = {
  title: "Our Services | Bankhead Construction St. Louis",
  description: "Explore our premium construction services in St. Louis including drywall repair, flooring, interior painting, tile work, and general construction.",
}

export default function ServicesPage() {
  const services = [
    {
      id: "drywall",
      title: "Drywall Repair in St. Louis",
      description: "Whether it's water damage, cracks, or holes from moving day, our drywall repair service restores your walls to perfect condition. We ensure a seamless blend with your existing texture.",
      benefits: ["Invisible patches", "Dust-minimizing process", "Ready for perfect paint"],
      process: ["Damage Assessment", "Area Prep & Protection", "Patching & Sanding", "Texture Matching"],
      image: "/servicepics/drywallrepair.jpg"
    },
    {
      id: "flooring",
      title: "Flooring Installation St. Louis",
      description: "Upgrade your home with professional flooring installation. From elegant hardwood to durable luxury vinyl tile (LVT), we lay the foundation for a beautiful room.",
      benefits: ["Precision cutting and fitting", "Moisture barrier optimization", "Level and squeak-free results"],
      process: ["Subfloor Inspection", "Material Acclimation", "Professional Installation", "Trim & Baseboard Finishing"],
      image: "/servicepics/flooringinstall.jpg"
    },
    {
      id: "construction",
      title: "General Contractor St. Louis",
      description: "For larger renovations or structural changes, our general construction services provide the expertise needed from framing to finishing.",
      benefits: ["Fully permitted & code-compliant", "Dedicated project management", "High-quality structural lumber"],
      process: ["Consultation & Design", "Permitting", "Demolition & Framing", "Finishing Touches"],
      image: "/servicepics/contracting.png"
    },
    {
      id: "painting",
      title: "Interior Painting Services",
      description: "A fresh coat of paint transforms a room. We provide meticulous prep work, clean lines, and even coverage using premium paints that last.",
      benefits: ["Crisp, clean edges", "No-mess guarantee", "Premium, durable finishes"],
      process: ["Furniture Protection", "Wall Prep & Priming", "Multiple Coat Application", "Final Inspection"],
      image: "/servicepics/painting.jpg"
    },
    {
      id: "tile",
      title: "Custom Tile Work St. Louis",
      description: "Beautiful tile backsplashes, shower surrounds, and flooring add significant value to your home. We install ceramic, porcelain, glass, and natural stone.",
      benefits: ["Waterproof sub-layers", "Perfectly uniform grout lines", "Intricate pattern capabilities"],
      process: ["Surface Waterproofing", "Layout Planning", "Tile Setting", "Grouting & Sealing"],
      image: "/servicepics/floortile.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title={<>Our Construction <span className="text-primary italic">Services</span></>}
        subtitle="Professional craftsmanship for discerning homeowners in St. Louis."
        backgroundImage="/servicepics/decksidingrepair.jpg"
      />

      <div className="container mx-auto px-4 md:px-6 py-20 divide-y divide-white/5">
        {services.map((service, idx) => (
          <section key={service.id} id={service.id} className="py-20 first:pt-0 last:pb-0">
            <div className={`flex flex-col gap-12 lg:items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/10 pb-2">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/10 pb-2">Our Process</h3>
                    <ol className="space-y-3">
                      {service.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold shrink-0">{i + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="pt-4">
                  <Link 
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-primary/30"
                  >
                    Get a Quote for {service.title.split(' ')[0]}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      <CTASection />
    </div>
  )
}
