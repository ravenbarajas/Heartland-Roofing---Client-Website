import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Users, Award, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "20+", label: "Years Experience" },
  { number: "100%", label: "Customer Satisfaction" },
  { number: "24/7", label: "Emergency Service" }
];

const certifications = [
  { name: "Iowa Licensed Contractor", number: "#RC123456" },
  { name: "BBB A+ Rating", number: "Accredited Business" },
  { name: "GAF Master Elite", number: "Certified Installer" },
  { name: "OSHA Safety Certified", number: "10-Hour Training" }
];

const values = [
  {
    icon: Shield,
    title: "Quality Craftsmanship",
    description: "We use only the highest quality materials and proven installation techniques to ensure your roof lasts for decades."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We communicate clearly, show up on time, and stand behind our work with comprehensive warranties."
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Our certified roofing professionals have decades of combined experience handling every type of roofing challenge in the Midwest."
  },
  {
    icon: Clock,
    title: "Reliable Service", 
    description: "When you need us, we're here. From emergency repairs to scheduled maintenance, we provide dependable service when you need it most."
  }
];

export default function About() {
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-gray mb-6">About Heartland Roofing</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-gray leading-relaxed">
              Over two decades of protecting Midwest homes with quality craftsmanship, honest service, and unmatched expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-slate-gray mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2003 by master roofer Jim Hartley, Heartland Roofing Co. began with a simple mission: to provide honest, quality roofing services to families across the Midwest. What started as a small operation has grown into one of Iowa's most trusted roofing companies.
                </p>
                <p>
                  We've weathered countless storms alongside our neighbors, literally and figuratively. From the devastating tornadoes of 2008 to the historic floods of 2019, we've been there to help communities rebuild stronger than before.
                </p>
                <p>
                  Today, our team of certified professionals continues that founding mission, combining traditional craftsmanship with modern materials and techniques to protect what matters most - your home and family.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-brick-red hover:bg-red-700 text-white">
                    Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1513147122760-ad1d5bf68cdb?ixlib=rb-4.0.3&w=800&h=600&fit=crop" 
                alt="Heartland Roofing team at work" 
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-gray mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-brick-red mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-gray mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from initial consultation to project completion and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="bg-brick-red text-white p-3 rounded-lg">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-slab font-bold text-slate-gray mb-2">{value.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-gray mb-4">Licensed & Certified</h2>
            <p className="text-xl text-gray-600">
              Our certifications ensure you're working with qualified professionals who meet the highest industry standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 h-full">
                  <CardContent className="p-0">
                    <CheckCircle className="h-12 w-12 text-forest-green mx-auto mb-4" />
                    <h3 className="font-slab font-bold text-slate-gray mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.number}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Protect Your Home?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Experience the Heartland difference. Get your free estimate today and discover why hundreds of Midwest homeowners trust us with their most important investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-brick-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Get Free Estimate
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brick-red px-8 py-3 text-lg font-semibold">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
