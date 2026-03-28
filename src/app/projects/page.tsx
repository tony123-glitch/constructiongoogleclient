import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
      image: "/servicepics/shedrestoration.jpg",
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
    <div className="min-h-screen pt-24 bg-background">
      <div className="bg-[#050505] py-20 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
            Our <span className="text-primary italic">Projects</span>
          </h1>
          <p className="text-xl text-gray-400">
            A showcase of craftsmanship, precision, and dedication to the St. Louis community.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-xl">
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

          <div className="mt-20 text-center bg-[#0a0a0a] p-12 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-3xl font-bold text-white mb-6 font-heading relative z-10">Start Your Own Project Today</h3>
            <Link 
              href="/contact" 
              className="relative z-10 inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 shadow-xl transition-transform hover:-translate-y-1"
            >
              Get a Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
