import { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Bankhead Construction LLC",
  description: "Get a free estimate today. Contact Bankhead Construction in St. Louis for drywall repair, flooring, and general contracting services.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="bg-[#050505] py-20 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
            Get Your <span className="text-primary italic">Free Quote</span>
          </h1>
          <p className="text-xl text-gray-400">
            Tell us about your project, and we'll get back to you quickly with a transparent, no-stress estimate.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Form */}
            <div className="lg:w-3/5">
              <div className="bg-[#111] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8 font-heading">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-400">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-400">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="(314) 701-4877"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-400">Service Needed</label>
                    <select 
                      id="service" 
                      className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="drywall">Drywall Repair</option>
                      <option value="flooring">Flooring Installation</option>
                      <option value="painting">Interior Painting</option>
                      <option value="tile">Tile Work</option>
                      <option value="construction">General Construction</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400">Project Details</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-y"
                      placeholder="Please describe what you're looking to have done..."
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-4 rounded-md transition-all shadow-lg hover:shadow-primary/30"
                  >
                    Request Free Estimate
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-2/5 space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 font-heading">Contact Information</h3>
                <div className="space-y-6">
                  <a href="tel:+13147014877" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Call Us Directly</p>
                      <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">(314) 701-4877</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Business Hours</p>
                      <p className="text-lg font-bold text-white">Mon-Sat: 7AM - 4:30PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Service Area</p>
                      <p className="text-lg font-bold text-white">St. Louis, MO & Surrounding Area</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map (Optional iframe embed) */}
              <div className="rounded-2xl overflow-hidden h-64 border border-white/5 relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199480.1264353406!2d-90.4147040520625!3d38.653100412803874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2sSt.%20Louis%2C%20MO!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale-[50%] contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
