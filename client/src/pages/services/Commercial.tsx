import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Building as BuildingIcon, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

const serviceData = {
  title: "Commercial Roofing", 
  description: "Professional commercial roofing solutions for businesses, warehouses, and industrial facilities. We handle large-scale projects with minimal disruption to your operations.",
  icon: BuildingIcon,
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
};

export default function Commercial() {
  const Icon = serviceData.icon;
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{serviceData.title}</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              {serviceData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white hover:shadow-xl transition-all duration-300 h-full">
              <div className={`h-32 ${serviceData.bgColor} flex items-center justify-center`}>
                <Icon className="text-white h-16 w-16" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-slab font-bold text-slate-gray mb-4">Service Highlights:</h3>
                
                <div className="mb-6">
                  <div className="grid md:grid-cols-2 gap-2">
                    {serviceData.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-forest-green mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="flex-1">
                    <Button className="w-full bg-brick-red hover:bg-red-700 text-white">
                      Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full border-brick-red text-brick-red hover:bg-brick-red hover:text-white"
                    onClick={() => window.location.href = 'tel:555-123-7663'}
                  >
                    Call Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Reusing from Services.tsx for consistency */}
      <section className="py-16 bg-brick-red text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Protect Your Business?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Contact us today for a free estimate on your commercial roofing project. Our expert team is ready to help protect your business.
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