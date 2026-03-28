import { ShieldCheck, MapPin, Clock } from "lucide-react"

export default function TrustBadges() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Licensed & Insured",
      description: "Full protection and peace of mind for every project we undertake."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Local St. Louis Experts",
      description: "Rooted in the community, understanding local building codes and needs."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Fast & Reliable Service",
      description: "On-time completion without ever compromising on craftsmanship quality."
    }
  ]

  return (
    <section className="relative -mt-16 z-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-secondary/90 backdrop-blur-md border border-white/5 p-8 rounded-xl shadow-2xl flex flex-col items-start gap-4 hover:border-primary/50 transition-colors duration-300 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
