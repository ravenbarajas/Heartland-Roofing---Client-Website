import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Calculator, 
  Wrench, 
  Home as HomeIcon, 
  Building, 
  CloudRain, 
  Droplets, 
  Layers,
  Star,
  Shield,
  Phone,
  TriangleAlert,
  ChevronDown,
  Images,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Roofing",
    description: "Complete roof installations and replacements for homes throughout the Midwest. Quality materials and expert craftsmanship guaranteed.",
    icon: HomeIcon,
    bgColor: "bg-brick-red",
    href: "/services/residential"
  },
  {
    title: "Commercial Roofing", 
    description: "Professional commercial roofing solutions for businesses, warehouses, and industrial facilities with durable, long-lasting materials.",
    icon: Building,
    bgColor: "bg-slate-gray",
    href: "/services/commercial"
  },
  {
    title: "Roof Repair",
    description: "Fast and reliable roof repairs for leaks, damaged shingles, and wear-and-tear issues. Emergency services available 24/7.",
    icon: Wrench,
    bgColor: "bg-forest-green", 
    href: "/services/repair"
  },
  {
    title: "Storm Damage Repair",
    description: "Specialized storm damage assessment and repair services. We work directly with insurance companies to streamline the process.",
    icon: CloudRain,
    bgColor: "bg-warm-orange",
    href: "/services/storm"
  },
  {
    title: "Gutter Installation",
    description: "Professional gutter installation and replacement services to protect your home's foundation and landscaping from water damage.",
    icon: Droplets,
    bgColor: "bg-blue-600",
    href: "/services/gutters"
  },
  {
    title: "Siding Installation",
    description: "Complete siding installation and repair services to enhance your home's curb appeal and energy efficiency.",
    icon: Layers,
    bgColor: "bg-green-600",
    href: "/services/siding"
  }
];

const testimonials = [
  {
    rating: 5,
    text: "Heartland Roofing did an exceptional job on our home after the spring storms. Professional, timely, and the quality is outstanding. Highly recommend!",
    author: "Sarah Johnson",
    location: "Des Moines, IA",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
  },
  {
    rating: 5,
    text: "From estimate to completion, the team was professional and communicative. Our new roof looks amazing and we've had no issues through two winters.",
    author: "Mike Thompson", 
    location: "Cedar Rapids, IA",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
  },
  {
    rating: 5,
    text: "Emergency service was incredible - they had a crew out within hours of our call during the storm. Fair pricing and excellent workmanship.",
    author: "Robert & Linda Miller",
    location: "Dubuque, IA", 
    avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=faces"
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    alt: "Residential roof replacement project"
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    alt: "Commercial roofing project"
  },
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    alt: "Gutter installation project"
  },
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    alt: "Complete exterior renovation"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Protecting the Heart of Your Home
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted roofing experts serving the Midwest with quality craftsmanship and exceptional service for over 20 years.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button className="bg-brick-red hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                <Calculator className="mr-2 h-5 w-5" />
                Get a Free Estimate
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-slate-gray hover:bg-warm-orange hover:text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                <Wrench className="mr-2 h-5 w-5" />
                Our Services
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-warm-orange text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center space-x-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TriangleAlert className="h-6 w-6" />
              </motion.div>
              <div>
                <span className="font-bold text-lg">24/7 Emergency Storm Damage Repair</span>
                <span className="mx-4">|</span>
                <span className="font-semibold">Call Now: (555) 123-ROOF</span>
              </div>
              <Phone className="h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-slate-gray mb-6">
                Midwest Roofing Excellence Since 2003
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Heartland Roofing Co., we understand the unique challenges that Midwest weather brings. From harsh winters to severe summer storms, your roof faces it all. That's why we're committed to providing the highest quality roofing solutions that stand the test of time.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brick-red">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brick-red">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              <Link href="/about" className="inline-flex items-center text-brick-red hover:text-red-700 font-semibold">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
                alt="Professional roofing team at work" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-forest-green text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-bold">Fully Licensed</div>
                  <div className="text-sm">& Insured</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-gray mb-4">
              Our Roofing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential repairs to commercial installations, we provide comprehensive roofing solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
                    <div className={`h-48 ${service.bgColor} flex items-center justify-center`}>
                      <Icon className="text-white h-16 w-16" />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-slab font-bold text-slate-gray mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
                      <Link href={service.href} className="inline-flex items-center text-brick-red hover:text-red-700 font-semibold">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-gray mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from satisfied homeowners across the Midwest.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 p-8 shadow-lg h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 font-medium">5.0</span>
                    </div>
                    <blockquote className="text-gray-700 mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-3">
                        <div className="font-semibold text-slate-gray">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/testimonials">
              <Button className="bg-brick-red hover:bg-red-700 text-white px-8 py-3">
                View All Reviews <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-gray mb-4">
              Our Recent Projects
            </h2>
            <p className="text-xl text-gray-600">
              See the quality craftsmanship that has made us the Midwest's trusted roofing partner.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-3">
                      <Images className="h-6 w-6 text-brick-red" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/gallery">
              <Button className="bg-forest-green hover:bg-green-700 text-white px-8 py-3">
                View Full Gallery <Images className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
