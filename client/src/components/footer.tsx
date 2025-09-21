import { Mail, Phone, Calendar, Users, Video, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative" data-testid="footer">
      {/* Separator line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Logo */}
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-white mb-2 animate-pulse" data-testid="footer-logo">
              A2S
            </div>
            <p className="text-slate-300 text-lg font-light">Aesthetics to Spaces</p>
          </div>
          
          {/* 4 Column Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Column 1: Quick Links */}
            <div className="space-y-6 group">
              <h3 className="text-xl font-semibold text-emerald-400 border-b-2 border-emerald-400/20 pb-2 group-hover:border-emerald-400/40 transition-colors duration-300" data-testid="quick-links-title">
                Quick Links
              </h3>
              <div className="space-y-4">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Plans & Features", href: "#plans" },
                  { label: "Vendor Waitlist", href: "#vendors" },
                  { label: "Contact", href: "#contact" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group/link flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-1"
                    data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover/link:font-medium transition-all duration-300">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Column 2: Services */}
            <div className="space-y-6 group">
              <h3 className="text-xl font-semibold text-blue-400 border-b-2 border-blue-400/20 pb-2 group-hover:border-blue-400/40 transition-colors duration-300" data-testid="services-title">
                Services
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Property Search", href: "#" },
                  { label: "Interior & Vastu", href: "#" },
                  { label: "Vendor & Factory Onboarding", href: "#vendors" },
                  { label: "Smart Tools (AR/VR, AI Valuation, IoT)", href: "#features" }
                ].map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="group/link flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                    data-testid={`service-${service.label.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover/link:font-medium transition-all duration-300">{service.label}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Column 3: Contact */}
            <div className="space-y-6 group">
              <h3 className="text-xl font-semibold text-orange-400 border-b-2 border-orange-400/20 pb-2 group-hover:border-orange-400/40 transition-colors duration-300" data-testid="contact-title">
                Contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 group/contact" data-testid="contact-email">
                  <div className="p-1.5 rounded-lg bg-orange-400/10 group-hover/contact:bg-orange-400/20 transition-colors duration-300">
                    <Mail className="text-orange-400 w-3 h-3" />
                  </div>
                  <a 
                    href="mailto:ravsil.a2s.co@gmail.com" 
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-xs"
                    data-testid="link-email"
                  >
                    ravsil.a2s.co@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-2 group/contact" data-testid="contact-phone">
                  <div className="p-1.5 rounded-lg bg-green-400/10 group-hover/contact:bg-green-400/20 transition-colors duration-300">
                    <Phone className="text-green-400 w-3 h-3" />
                  </div>
                  <a 
                    href="tel:9703631298" 
                    className="text-slate-300 hover:text-green-400 transition-colors duration-300 text-xs"
                    data-testid="link-phone"
                  >
                    9703631298
                  </a>
                </div>
              </div>
            </div>
            
            {/* Column 4: Encounters */}
            <div className="space-y-6 group">
              <h3 className="text-xl font-semibold text-purple-400 border-b-2 border-purple-400/20 pb-2 group-hover:border-purple-400/40 transition-colors duration-300" data-testid="encounters-title">
                Encounters
              </h3>
              
              <div className="space-y-3">
                {[
                  { label: "Meet us at events", icon: Users, color: "purple-400" },
                  { label: "Schedule a call", icon: Calendar, color: "blue-400" },
                  { label: "Request a demo", icon: Video, color: "orange-400" }
                ].map((encounter, index) => (
                  <button
                    key={index}
                    className="group/encounter w-full flex items-center gap-2 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-300 hover:scale-102"
                    data-testid={`encounter-${encounter.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className={`p-1 rounded-lg bg-${encounter.color}/10 group-hover/encounter:bg-${encounter.color}/20 transition-colors duration-300`}>
                      <encounter.icon className={`w-3 h-3 text-${encounter.color}`} />
                    </div>
                    <span className="text-xs text-slate-300 group-hover/encounter:text-white transition-colors duration-300 font-medium">
                      {encounter.label}
                    </span>
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover/encounter:text-white opacity-0 group-hover/encounter:opacity-100 transition-all duration-300 ml-auto" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Border */}
          <div className="pt-8 border-t border-slate-600/50 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 A2S - Aesthetics to Spaces. Building the future of property management.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
