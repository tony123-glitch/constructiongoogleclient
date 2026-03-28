import Link from "next/link"
import { PaintRoller, Hammer, Wrench, Grid, Droplet, Brush } from "lucide-react"

export default function ServicesOverview() {
  const services = [
    {
      title: "Drywall Repair",
      description: "Seamless patching, taping, and finishing for flawless walls before painting.",
      icon: <Grid className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
      href: "/services#drywall",
    },
    {
      title: "Flooring Installation",
      description: "Expert installation of hardwood, laminate, vinyl, and tile flooring systems.",
      icon: <Grid className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
      href: "/services#flooring",
    },
    {
      title: "General Construction",
      description: "Comprehensive building and framing for renovations and new additions.",
      icon: <Hammer className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
      href: "/services#construction",
    },
    {
      title: "General Repairs",
      description: "Fast and reliable fixes for everything from doors and windows to siding.",
      icon: <Wrench className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
      href: "/services#repairs",
    },
    {
      title: "Interior Painting",
      description: "Premium interior painting with meticulous prep and perfect, clean edges.",
      icon: <PaintRoller className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
      href: "/services#painting",
    },
    {
      title: "Tile Work",
      description: "Custom backsplashes, shower surrounds, and high-end floor tiling.",
      icon: <Grid className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
      href: "/services#tile",
    },
  ]

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            Comprehensive <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            From minor repairs to major renovations, Bankhead Construction brings expertise and unwavering quality to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link 
              href={service.href} 
              key={idx}
              className="group bg-[#111111] border border-[#222222] p-8 rounded-xl hover:bg-primary hover:border-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(11,61,145,0.3)] transform hover:-translate-y-2 flex flex-col"
            >
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-lg border border-[#333333] group-hover:border-white/20 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-primary-foreground/90 transition-colors leading-relaxed flex-1">
                {service.description}
              </p>
              <div className="mt-8 flex items-center text-primary group-hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
