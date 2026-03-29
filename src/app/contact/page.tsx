import { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import PageHeader from "@/components/ui/PageHeader"

export const metadata: Metadata = {
  title: "Contact Us | Bankhead Construction LLC",
  description: "Get a free estimate today. Contact Bankhead Construction in St. Louis for drywall repair, flooring, and general contracting services.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title={<>Get Your <span className="text-primary italic">Free Quote</span></>}
        subtitle="Tell us about your project, and we'll get back to you quickly with a transparent, no-stress estimate."
        backgroundImage="/servicepics/painting.jpg"
      />

      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Form */}
            <div className="lg:w-3/5">
              <div className="bg-[#050505]/80 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                
                <h3 className="text-3xl font-bold text-white mb-8 font-heading relative z-10">Send Us a Message</h3>
                
                <form className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-400">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white hover:border-white/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-400">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white hover:border-white/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                        placeholder="(314) 701-4877"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-400">Service Needed</label>
                    <select 
                      id="service" 
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white hover:border-white/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner appearance-none"
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
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white hover:border-white/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner resize-y"
                      placeholder="Please describe what you're looking to have done..."
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full group relative inline-flex items-center justify-center gap-2 bg-primary text-white border border-transparent px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_0_rgba(11,61,145,0)] hover:shadow-[0_0_40px_rgba(11,61,145,0.6)] hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10">Request Free Estimate</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-2/5 space-y-10 lg:pt-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 font-heading">Contact Information</h3>
                <div className="space-y-6">
                  <a href="tel:+13147014877" className="flex items-center gap-6 group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400 mb-1">Call Us Directly</p>
                      <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">(314) 701-4877</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-6 bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400 mb-1">Business Hours</p>
                      <p className="text-xl font-bold text-white">Mon-Sat: 7AM - 4:30PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400 mb-1">Service Area</p>
                      <p className="text-xl font-bold text-white">St. Louis, MO & Surrounding</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map (Optional iframe embed) */}
              <div className="rounded-2xl overflow-hidden h-72 border border-white/10 relative group shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199480.1264353406!2d-90.4147040520625!3d38.653100412803874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2sSt.%20Louis%2C%20MO!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale-[70%] contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
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
