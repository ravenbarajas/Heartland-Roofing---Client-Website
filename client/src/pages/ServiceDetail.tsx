import { useRoute } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield, 
  DollarSign,
  Phone,
  Home as HomeIcon,
  Building,
  Wrench,
  CloudRain,
  Droplets,
  Layers,
  Star,
  Award,
  Users
} from "lucide-react";
import { motion } from "framer-motion";

const serviceData = {
  residential: {
    title: "Residential Roofing",
    icon: HomeIcon,
    bgColor: "bg-brick-red",
    description: "Complete roof installations and replacements for homes throughout the Midwest. We specialize in durable, weather-resistant roofing systems that protect your family and increase your home's value.",
    heroImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&w=1200&h=600&fit=crop",
    features: [
      "New roof installation",
      "Complete roof replacement", 
      "Asphalt shingle roofing",
      "Metal roofing systems",
      "Tile and slate roofing",
      "Energy-efficient solutions",
      "Ventilation systems",
      "Warranty protection"
    ],
    process: [
      {
        step: 1,
        title: "Free Inspection & Estimate",
        description: "We thoroughly assess your roof's condition and provide a detailed, no-obligation estimate."
      },
      {
        step: 2, 
        title: "Material Selection",
        description: "Choose from premium materials that match your style, budget, and performance needs."
      },
      {
        step: 3,
        title: "Professional Installation",
        description: "Our certified team installs your new roof with precision and attention to detail."
      },
      {
        step: 4,
        title: "Final Inspection & Cleanup",
        description: "We ensure quality workmanship and leave your property clean and protected."
      }
    ],
    benefits: [
      "Increased home value and curb appeal",
      "Enhanced energy efficiency",
      "Superior weather protection",
      "Long-term durability and performance",
      "Comprehensive warranty coverage",
      "Professional installation standards"
    ],
    priceRange: "$8,000 - $25,000+",
    timeline: "1-3 days",
    warranty: "Up to 50 years material, 10 years workmanship"
  },
  commercial: {
    title: "Commercial Roofing",
    icon: Building,
    bgColor: "bg-slate-gray", 
    description: "Professional commercial roofing solutions for businesses, warehouses, and industrial facilities. We handle large-scale projects with minimal disruption to your operations.",
    heroImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&w=1200&h=600&fit=crop",
    features: [
      "Flat roof systems",
      "EPDM membrane roofing",
      "TPO roofing",
      "Metal commercial roofing",
      "Modified bitumen",
      "Roof maintenance programs",
      "Industrial applications",
      "Energy-efficient systems"
    ],
    process: [
      {
        step: 1,
        title: "Site Assessment",
        description: "Comprehensive evaluation of your building's roofing needs and structural requirements."
      },
      {
        step: 2,
        title: "Custom Design",
        description: "Engineered solutions tailored to your building's specifications and operational needs."
      },
      {
        step: 3,
        title: "Scheduled Installation",
        description: "Work coordinated around your business schedule to minimize operational disruption."
      },
      {
        step: 4,
        title: "Quality Assurance",
        description: "Rigorous testing and inspection to ensure system performance and code compliance."
      }
    ],
    benefits: [
      "Minimal business disruption",
      "Long-term cost savings",
      "Energy efficiency improvements",
      "Code compliance assurance",
      "Preventive maintenance programs",
      "Professional project management"
    ],
    priceRange: "$15,000 - $100,000+",
    timeline: "3-14 days",
    warranty: "Up to 30 years material, 10 years workmanship"
  },
  repair: {
    title: "Roof Repair",
    icon: Wrench,
    bgColor: "bg-forest-green",
    description: "Fast and reliable roof repairs for leaks, damaged shingles, and wear-and-tear issues. Our emergency services are available 24/7 to protect your property from further damage.",
    heroImage: "https://images.unsplash.com/photo-1513147122760-ad1d5bf68cdb?ixlib=rb-4.0.3&w=1200&h=600&fit=crop",
    features: [
      "Leak detection and repair",
      "Shingle replacement",
      "Flashing repair",
      "Vent and penetration sealing",
      "Emergency tarping",
      "Preventive maintenance",
      "Gutter repairs",
      "Chimney repairs"
    ],
    process: [
      {
        step: 1,
        title: "Emergency Response",
        description: "Rapid response to assess damage and provide temporary protection if needed."
      },
      {
        step: 2,
        title: "Detailed Diagnosis",
        description: "Thorough inspection to identify all issues and determine the best repair approach."
      },
      {
        step: 3,
        title: "Professional Repair",
        description: "Expert repairs using quality materials that match your existing roof system."
      },
      {
        step: 4,
        title: "Follow-up Inspection",
        description: "Quality check to ensure repairs are effective and your roof is fully protected."
      }
    ],
    benefits: [
      "Prevents further property damage",
      "Cost-effective solutions",
      "Quick response times",
      "Quality materials and workmanship",
      "Extends roof lifespan",
      "Peace of mind protection"
    ],
    priceRange: "$200 - $5,000+",
    timeline: "Same day - 3 days",
    warranty: "2-5 years workmanship"
  },
  storm: {
    title: "Storm Damage Repair",
    icon: CloudRain,
    bgColor: "bg-warm-orange",
    description: "Specialized storm damage assessment and repair services. We work directly with insurance companies to streamline the claims process and restore your roof quickly and professionally.",
    heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&w=1200&h=600&fit=crop",
    features: [
      "Insurance claim assistance",
      "Storm damage assessment",
      "Hail damage repair",
      "Wind damage restoration",
      "Emergency board-up",
      "Complete reconstruction",
      "Debris removal",
      "Temporary protection"
    ],
    process: [
      {
        step: 1,
        title: "Emergency Protection",
        description: "Immediate response to secure your property and prevent further damage."
      },
      {
        step: 2,
        title: "Insurance Documentation",
        description: "Comprehensive damage assessment and documentation for insurance claims."
      },
      {
        step: 3,
        title: "Restoration Planning",
        description: "Detailed restoration plan coordinated with insurance adjusters and your schedule."
      },
      {
        step: 4,
        title: "Complete Restoration",
        description: "Professional restoration that returns your property to pre-storm condition or better."
      }
    ],
    benefits: [
      "Insurance expertise and advocacy",
      "Rapid emergency response",
      "Comprehensive damage restoration",
      "Stress-free claims process",
      "Quality workmanship guarantee",
      "Complete project management"
    ],
    priceRange: "Insurance covered",
    timeline: "1-7 days",
    warranty: "Full warranty coverage"
  },
  gutters: {
    title: "Gutter Installation",
    icon: Droplets,
    bgColor: "bg-blue-600",
    description: "Professional gutter installation and replacement services to protect your home's foundation and landscaping from water damage. Custom solutions designed for Iowa's climate.",
    heroImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&w=1200&h=600&fit=crop",
    features: [
      "Seamless gutter installation",
      "Gutter guards and screens",
      "Downspout installation",
      "Gutter repair and cleaning",
      "Copper and aluminum gutters",
      "Proper drainage solutions",
      "Ice dam prevention",
      "Custom color matching"
    ],
    process: [
      {
        step: 1,
        title: "Drainage Assessment",
        description: "Evaluation of your property's drainage needs and existing gutter condition."
      },
      {
        step: 2,
        title: "Custom Measurement",
        description: "Precise measurements and custom fabrication for perfect fit and function."
      },
      {
        step: 3,
        title: "Professional Installation",
        description: "Expert installation with proper pitch and secure mounting for optimal performance."
      },
      {
        step: 4,
        title: "System Testing",
        description: "Thorough testing to ensure proper water flow and drainage performance."
      }
    ],
    benefits: [
      "Foundation protection",
      "Landscape preservation",
      "Basement water prevention",
      "Curb appeal enhancement",
      "Long-term durability",
      "Low maintenance requirements"
    ],
    priceRange: "$800 - $3,500+",
    timeline: "1-2 days",
    warranty: "10-15 years material, 5 years workmanship"
  },
  siding: {
    title: "Siding Installation",
    icon: Layers,
    bgColor: "bg-green-600",
    description: "Complete siding installation and repair services to enhance your home's curb appeal and energy efficiency. Choose from various materials and styles to match your vision.",
    heroImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&w=1200&h=600&fit=crop",
    features: [
      "Vinyl siding installation",
      "Fiber cement siding",
      "Wood siding restoration",
      "Insulated siding systems",
      "Trim and soffit work",
      "Color matching services",
      "Window trim installation",
      "Complete exterior makeovers"
    ],
    process: [
      {
        step: 1,
        title: "Design Consultation",
        description: "Work with our team to select materials, colors, and styles that match your vision."
      },
      {
        step: 2,
        title: "Surface Preparation",
        description: "Proper preparation of existing surfaces to ensure optimal adhesion and performance."
      },
      {
        step: 3,
        title: "Professional Installation",
        description: "Expert installation with attention to detail for weather protection and aesthetics."
      },
      {
        step: 4,
        title: "Final Inspection",
        description: "Quality check and walkthrough to ensure your complete satisfaction."
      }
    ],
    benefits: [
      "Enhanced curb appeal",
      "Improved energy efficiency",
      "Increased home value",
      "Weather protection",
      "Low maintenance options",
      "Custom design flexibility"
    ],
    priceRange: "$6,000 - $20,000+",
    timeline: "3-7 days",
    warranty: "25-50 years material, 10 years workmanship"
  }
};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:serviceType");
  const serviceType = params?.serviceType as keyof typeof serviceData;
  const service = serviceData[serviceType];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <CardContent>
            <h1 className="text-2xl font-bold text-slate-gray mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6">The requested service could not be found.</p>
            <Link href="/services">
              <Button className="bg-brick-red hover:bg-red-700 text-white">
                View All Services
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-gray to-gray-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="flex items-center mb-6">
                <div className={`${service.bgColor} p-4 rounded-lg mr-4`}>
                  <Icon className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold">{service.title}</h1>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-brick-red hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                    Get Free Estimate
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="bg-white text-slate-gray hover:bg-warm-orange hover:text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => window.location.href = 'tel:555-123-7663'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={service.heroImage} 
                alt={service.title}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-brick-red text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-slab font-bold text-slate-gray mb-2">Pricing Range</h3>
              <p className="text-gray-600">{service.priceRange}</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-forest-green text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-slab font-bold text-slate-gray mb-2">Timeline</h3>
              <p className="text-gray-600">{service.timeline}</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-warm-orange text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-slab font-bold text-slate-gray mb-2">Warranty</h3>
              <p className="text-gray-600">{service.warranty}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-gray mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive {service.title.toLowerCase()} services tailored to your specific needs and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-8 w-8 text-forest-green mb-3" />
                <h3 className="font-semibold text-slate-gray">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-gray mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach that ensures quality results and customer satisfaction every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="bg-brick-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    {step.step}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-slab font-bold text-slate-gray mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-slate-gray mb-6">
                Benefits of Our {service.title}
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-forest-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={service.heroImage} 
                alt={`Benefits of ${service.title}`}
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
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
              Over 20 years of experience serving the Midwest with quality craftsmanship and exceptional service.
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
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-slab font-bold text-slate-gray mb-3">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Certified professionals with decades of experience in Midwest roofing challenges.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-forest-green text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-slab font-bold text-slate-gray mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed in Iowa with comprehensive insurance coverage for your protection.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-warm-orange text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-slab font-bold text-slate-gray mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority with clear communication and guaranteed quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-gray mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Real reviews from satisfied customers who chose our {service.title.toLowerCase()} services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white p-6 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 font-medium">5.0</span>
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "Exceptional work from start to finish. The team was professional, efficient, and the quality exceeded our expectations. Highly recommend Heartland Roofing!"
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=60&h=60&fit=crop&crop=face" 
                      alt="Customer" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <div className="font-semibold text-slate-gray">Sarah Johnson</div>
                      <div className="text-sm text-gray-600">Des Moines, IA</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white p-6 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 font-medium">5.0</span>
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "From estimate to completion, everything was handled professionally. Great communication, fair pricing, and outstanding results. Very satisfied!"
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=60&h=60&fit=crop&crop=face" 
                      alt="Customer" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <div className="font-semibold text-slate-gray">Mike Thompson</div>
                      <div className="text-sm text-gray-600">Cedar Rapids, IA</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
              Contact us today for a free estimate on your {service.title.toLowerCase()} project. Our expert team is ready to protect your property with quality craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-brick-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Get Free Estimate
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="bg-white text-slate-gray hover:bg-warm-orange hover:text-white px-8 py-4 text-lg font-semibold"
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
