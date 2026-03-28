import Link from "next/link"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <img src="/logo.png" alt="Bankhead Construction Logo" className="h-24 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium construction, remodeling, and repair services in St. Louis. Built on trust, driven by quality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-heading font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-') === 'home' ? '' : link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-white font-heading font-semibold text-lg">Our Services</h4>
            <ul className="space-y-3">
              {['Drywall Repair', 'Flooring Installation', 'General Construction', 'General Repairs', 'Interior Painting', 'Tile Work'].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-heading font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Serving St. Louis, Missouri & Surrounding Areas</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+13147014877" className="hover:text-primary transition-colors">(314) 701-4877</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Mon - Sat: 7:00 AM - 4:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bankhead Construction LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
