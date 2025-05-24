import { Link } from "wouter";
import { Home, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const serviceAreas = [
    "Des Moines, IA",
    "Cedar Rapids, IA", 
    "Iowa City, IA",
    "Ames, IA",
    "Waterloo, IA",
    "Dubuque, IA"
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "Residential Roofing", href: "/services/residential" },
    { name: "Commercial Roofing", href: "/services/commercial" },
    { name: "Roof Repair", href: "/services/repair" },
    { name: "Storm Damage", href: "/services/storm" },
    { name: "Gutter Installation", href: "/services/gutters" },
    { name: "Siding Installation", href: "/services/siding" }
  ];

  return (
    <footer className="bg-slate-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-serif font-bold text-white mb-4">
              <Home className="inline-block mr-2 h-8 w-8" />
              Heartland Roofing Co.
            </div>
            <p className="text-gray-300 mb-4">
              Protecting Midwest homes with quality roofing solutions since 2003. Your trusted local roofing experts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-slab font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-slab font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-slab font-bold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-gray-300">
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Licensed in Iowa #RC123456</p>
              <p className="text-sm text-gray-400">Fully Insured & Bonded</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Heartland Roofing Co. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
