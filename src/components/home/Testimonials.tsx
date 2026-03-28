import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcia Myers",
      location: "Local Client",
      text: "I needed to enlarge my shed door and replace rotting posts. He also created the cute matching chicken door out of a larger hole. I told him I will paint that later myself. Cedric completed the project ahead of schedule and at the estimated amount. I really appreciate his ability to communicate and his professionalism. Not only that but I am very happy with the quality of his work.",
      rating: 5
    },
    {
      name: "John Hild",
      location: "Local Client",
      text: "Cedric did a wonderful job painting my Dad's house. He painted the whole house walls and ceiling. He is very handy working on other items. I would highly recommend him for all construction projects.",
      rating: 5
    },
    {
      name: "Michael Little",
      location: "Local Client",
      text: "Cedric was great! I hired him to paint my house and he was able to start within a couple of days and I couldn't have been happier.",
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
            Client <span className="text-primary italic">Reviews</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it—see what homeowners across St. Louis are saying about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="bg-[#111] border border-white/5 rounded-2xl p-8 relative hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{review.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
