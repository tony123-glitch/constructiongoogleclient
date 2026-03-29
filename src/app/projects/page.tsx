import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/ui/PageHeader"

export const metadata: Metadata = {
  title: "Our Projects | Bankhead Construction LLC",
  description: "View our portfolio of premium construction, remodeling, and repair projects across the St. Louis area.",
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Extensive Shed Restoration",
      category: "General Repairs",
      image: "/servicepics/shedrestoration.png",
      description: "Enlarged the shed door, replaced rotting structural posts, and successfully crafted a matching custom chicken door.",
    },
    {
      id: 2,
      title: "Full Home Exterior & Interior Paint",
      category: "Painting",
      image: "/servicepics/painting.jpg",
      description: "Comprehensive painting project including all walls and ceilings, delivering a flawless modern finish.",
    },
    {
      id: 3,
      title: "Complete First Floor LVT",
      category: "Flooring Installation",
      image: "/servicepics/flooringinstall.jpg",
      description: "Fast, precise luxury vinyl plank flooring installed across the entire first floor of a Chesterfield home.",
    },
    {
      id: 4,
      title: "Deck & Siding Repair",
      category: "Construction",
      image: "/servicepics/decksidingrepair.jpg",
      description: "Repaired structural issues on a back deck and replaced damaged exterior siding rapidly and efficiently.",
    },
    {
      id: 5,
      title: "Custom Master Shower Pattern",
      category: "Tile Work",
      image: "/servicepics/floortile.jpg",
      description: "Installed a sophisticated tile arrangement for a newly minted master bathroom surround in St. Louis.",
    },
    {
      id: 6,
      title: "Seamless Drywall Restoration",
      category: "Drywall Repair",
      image: "/servicepics/drywallrepair.jpg",
      description: "Repaired extensive wall damage blending perfectly into the original wall texture.",
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title={<>Our <span className="text-primary italic">Projects</span></>}
        subtitle="A showcase of craftsmanship, precision, and dedication to the St. Louis community."
        backgroundImage="/servicepics/shedrestoration.png"
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-[#050505]/80 backdrop-blur-xl p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <h3 className="text-4xl font-bold text-white mb-8 font-heading relative z-10">Start Your Own Project Today</h3>
            <Link 
              href="/contact" 
              className="group relative z-10 inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_0_rgba(11,61,145,0)] hover:shadow-[0_0_40px_rgba(11,61,145,0.6)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Get a Free Estimate</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
