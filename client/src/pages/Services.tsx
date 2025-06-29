import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Home as HomeIcon, 
  Building, 
  Wrench, 
  CloudRain, 
  Droplets, 
  Layers,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Roofing",
    description: "Complete roof installations and replacements for homes throughout the Midwest. We specialize in asphalt shingles, metal roofing, and tile installations that withstand harsh weather conditions.",
    icon: HomeIcon,
    bgColor: "bg-brick-red",
    href: "/services/residential",
    features: [
      "New roof installation",
      "Roof replacement", 
      "Asphalt shingle roofing",
      "Metal roofing systems",
      "Tile and slate roofing",
      "Energy-efficient solutions"
    ]
  },
  {
    title: "Commercial Roofing", 
    description: "Professional commercial roofing solutions for businesses, warehouses, and industrial facilities. We handle large-scale projects with minimal disruption to your operations.",
    icon: Building,
    bgColor: "bg-slate-gray",
    href: "/services/commercial",
    features: [
      "Flat roof systems",
      "EPDM membrane roofing",
      "TPO roofing",
      "Metal commercial roofing",
      "Roof maintenance programs",
      "Industrial applications"
    ]
  },
  {
    title: "Roof Repair",
    description: "Fast and reliable roof repairs for leaks, damaged shingles, and wear-and-tear issues. Our emergency services are available 24/7 to protect your property.",
    icon: Wrench,
    bgColor: "bg-forest-green", 
    href: "/services/repair",
    features: [
      "Leak detection and repair",
      "Shingle replacement",
      "Flashing repair",
      "Ventilation issues",
      "Emergency tarping",
      "Preventive maintenance"
    ]
  },
  {
    title: "Storm Damage Repair",
    description: "Specialized storm damage assessment and repair services. We work directly with insurance companies to streamline the claims process and restore your roof quickly.",
    icon: CloudRain,
    bgColor: "bg-warm-orange",
    href: "/services/storm",
    features: [
      "Insurance claim assistance",
      "Storm damage assessment",
      "Hail damage repair",
      "Wind damage restoration",
      "Emergency board-up",
      "Complete reconstruction"
    ]
  },
  {
    title: "Gutter Installation",
    description: "Professional gutter installation and replacement services to protect your home's foundation and landscaping from water damage. Custom solutions for every home.",
    icon: Droplets,
    bgColor: "bg-blue-600",
    href: "/services/gutters",
    features: [
      "Seamless gutter installation",
      "Gutter guards and screens",
      "Downspout installation",
      "Gutter repair and cleaning",
      "Copper and aluminum gutters",
      "Proper drainage solutions"
    ]
  },
  {
    title: "Siding Installation",
    description: "Complete siding installation and repair services to enhance your home's curb appeal and energy efficiency. Choose from various materials and styles.",
    icon: Layers,
    bgColor: "bg-green-600",
    href: "/services/siding",
    features: [
      "Vinyl siding installation",
      "Fiber cement siding",
      "Wood siding restoration",
      "Insulated siding systems",
      "Trim and soffit work",
      "Color matching services"
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-gray to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Roofing Services</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              From residential repairs to commercial installations, we provide comprehensive roofing solutions tailored to protect your investment and meet your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white hover:shadow-xl transition-all duration-300 h-full">
                    <div className={`h-32 ${service.bgColor} flex items-center justify-center`}>
                      <Icon className="text-white h-16 w-16" />
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-slab font-bold text-slate-gray mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-gray mb-3">What We Offer:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-forest-green mt-1 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link href={service.href} className="flex-1">
                          <Button className="w-full bg-brick-red hover:bg-red-700 text-white">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href="/contact" className="flex-1">
                          <Button variant="outline" className="w-full border-brick-red text-brick-red hover:bg-brick-red hover:text-white">
                            Get Quote
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-gray mb-4">Why Choose Heartland Roofing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 20 years of experience serving the Midwest, we've built our reputation on quality workmanship and exceptional customer service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-brick-red text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-slab font-bold text-slate-gray mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed in Iowa with comprehensive insurance coverage for your peace of mind.</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-forest-green text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-slab font-bold text-slate-gray mb-3">Quality Materials</h3>
              <p className="text-gray-600">We use only premium materials from trusted manufacturers, backed by industry-leading warranties.</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-warm-orange text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-slab font-bold text-slate-gray mb-3">Emergency Service</h3>
              <p className="text-gray-600">24/7 emergency response for storm damage and urgent repairs to protect your property.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brick-red text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Contact us today for a free estimate on any of our roofing services. Our expert team is ready to help protect your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-brick-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Get Free Estimate
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brick-red px-8 py-3 text-lg font-semibold"
                onClick={() => window.location.href = 'tel:555-123-7663'}
              >
                Call (555) 123-ROOF
              </Button> 
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
