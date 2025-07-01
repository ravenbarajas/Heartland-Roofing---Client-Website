import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  Phone, 
  MessageCircle,
  Shield,
  Clock,
  DollarSign,
  Home,
  CloudRain,
  Wrench
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqCategories = [
  { id: "general", name: "General Questions", icon: HelpCircle },
  { id: "roofing", name: "Roofing Services", icon: Home },
  { id: "repairs", name: "Repairs & Maintenance", icon: Wrench },
  { id: "storm", name: "Storm Damage", icon: CloudRain },
  { id: "insurance", name: "Insurance Claims", icon: Shield },
  { id: "pricing", name: "Pricing & Financing", icon: DollarSign },
];

const faqs = [
  {
    id: 1,
    category: "general",
    question: "How long has Heartland Roofing been in business?",
    answer: "Heartland Roofing Co. has been serving the Midwest since 2003, with over 20 years of experience in residential and commercial roofing. We've completed over 500 projects and have built a reputation for quality craftsmanship and exceptional customer service."
  },
  {
    id: 2,
    category: "general",
    question: "What areas do you serve?",
    answer: "We serve the greater Des Moines metropolitan area and surrounding communities within 100 miles, including Cedar Rapids, Iowa City, Ames, Waterloo, and Dubuque. Contact us to confirm service availability in your specific location."
  },
  {
    id: 3,
    category: "general",
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed in Iowa (License #RC123456) and carry comprehensive liability insurance with $2 million coverage. We provide proof of insurance before starting any project for your peace of mind."
  },
  {
    id: 4,
    category: "roofing",
    question: "What types of roofing materials do you install?",
    answer: "We install a wide variety of roofing materials including asphalt shingles, metal roofing, tile, slate, and specialty materials. We work with top manufacturers like GAF, Owens Corning, and CertainTeed to ensure quality and warranty coverage."
  },
  {
    id: 5,
    category: "roofing",
    question: "How long does a typical roof installation take?",
    answer: "Most residential roof replacements take 1-3 days depending on the size, complexity, and weather conditions. Commercial projects vary based on square footage and system type. We provide detailed timelines during the estimate process."
  },
  {
    id: 6,
    category: "roofing",
    question: "Do you provide warranties on your work?",
    answer: "Yes, we provide comprehensive warranties covering both materials and workmanship. Material warranties range from 20-50 years depending on the product, and our workmanship warranty covers installation for up to 10 years."
  },
  {
    id: 7,
    category: "repairs",
    question: "Do you offer emergency repair services?",
    answer: "Yes, we provide 24/7 emergency repair services for storm damage, severe leaks, and other urgent roofing issues. Our emergency response team can typically arrive within hours to secure your property and prevent further damage."
  },
  {
    id: 8,
    category: "repairs",
    question: "How do I know if I need a repair or full replacement?",
    answer: "Our experienced team will conduct a thorough inspection to assess your roof's condition. We consider factors like age, extent of damage, previous repairs, and cost-effectiveness. We always recommend the most appropriate solution for your situation and budget."
  },
  {
    id: 9,
    category: "repairs",
    question: "Can you match existing shingles for repairs?",
    answer: "We make every effort to match existing materials for seamless repairs. We maintain relationships with multiple suppliers and can often source discontinued products. When exact matches aren't available, we'll discuss the best alternatives."
  },
  {
    id: 10,
    category: "storm",
    question: "How quickly can you respond to storm damage?",
    answer: "We prioritize storm damage calls and typically respond within 2-4 hours during severe weather events. Our emergency team can provide temporary protection like tarping while we prepare a comprehensive repair plan."
  },
  {
    id: 11,
    category: "storm",
    question: "What should I do immediately after storm damage?",
    answer: "First, ensure everyone's safety and avoid the damaged area. Document the damage with photos if it's safe to do so. Contact your insurance company to report the claim, then call us for emergency protection and assessment."
  },
  {
    id: 12,
    category: "insurance",
    question: "Do you work with insurance companies?",
    answer: "Yes, we have extensive experience working with all major insurance companies. We can assist with the claims process, provide detailed documentation, and communicate directly with adjusters to ensure proper coverage."
  },
  {
    id: 13,
    category: "insurance",
    question: "Will insurance cover my roof replacement?",
    answer: "Coverage depends on your policy and the cause of damage. Storm damage, hail, and wind damage are typically covered. Age-related wear and maintenance issues may not be. We'll help assess your situation and work with your insurance adjuster."
  },
  {
    id: 14,
    category: "pricing",
    question: "How much does a new roof cost?",
    answer: "Roofing costs vary based on size, materials, complexity, and local factors. Residential projects typically range from $8,000-$25,000+. We provide detailed, written estimates with no hidden costs and can discuss financing options."
  },
  {
    id: 15,
    category: "pricing",
    question: "Do you offer financing options?",
    answer: "Yes, we partner with financing companies to offer flexible payment plans for qualified customers. Options include low monthly payments and promotional periods. We'll discuss financing during your consultation."
  },
  {
    id: 16,
    category: "pricing",
    question: "Is the estimate really free?",
    answer: "Absolutely! We provide comprehensive, no-obligation estimates at no cost. Our estimates include detailed material specifications, labor costs, and project timelines. There's never any pressure to commit."
  }
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-gray mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-slate-gray leading-relaxed">
              Find answers to common questions about our roofing services, processes, and policies. Can't find what you're looking for? Contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border-brick-red focus:ring-brick-red focus:border-brick-red"
              />
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`flex items-center space-x-2 ${
                    selectedCategory === category.id 
                      ? "bg-brick-red hover:bg-red-700 text-white" 
                      : "border-brick-red text-brick-red hover:bg-brick-red hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-white hover:shadow-lg transition-shadow">
                    <CardHeader 
                      className="cursor-pointer"
                      onClick={() => toggleItem(faq.id)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span className="text-slate-gray">{faq.question}</span>
                        {openItems.includes(faq.id) ? (
                          <ChevronUp className="h-5 w-5 text-brick-red" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-brick-red" />
                        )}
                      </CardTitle>
                    </CardHeader>
                    <AnimatePresence>
                      {openItems.includes(faq.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardContent className="pt-0">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-slab font-bold text-slate-gray mb-2">No questions found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm 
                  ? `No questions match "${searchTerm}". Try a different search term or browse by category.`
                  : "No questions found in this category."
                }
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("general");
                }}
                className="bg-brick-red hover:bg-red-700 text-white"
              >
                View All Questions
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-gray mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is here to help! Choose the best way to get in touch with our roofing experts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-brick-red text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Phone className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-slab font-bold text-slate-gray mb-3">Call Us</h3>
                  <p className="text-gray-600 mb-4">
                    Speak directly with our roofing experts for immediate answers to your questions.
                  </p>
                  <Button 
                    className="bg-brick-red hover:bg-red-700 text-white w-full"
                    onClick={() => window.location.href = 'tel:555-123-7663'}
                  >
                    (555) 123-ROOF
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-forest-green text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-slab font-bold text-slate-gray mb-3">Contact Form</h3>
                  <p className="text-gray-600 mb-4">
                    Send us a detailed message and we'll respond within 4 hours during business hours.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-forest-green hover:bg-green-700 text-white w-full">
                      Send Message
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-warm-orange text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-slab font-bold text-slate-gray mb-3">Schedule Consultation</h3>
                  <p className="text-gray-600 mb-4">
                    Book a free, no-obligation consultation to discuss your specific roofing needs.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-warm-orange hover:bg-orange-600 text-white w-full">
                      Schedule Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8 bg-warm-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-slab font-bold mb-2">Emergency Roofing Services</h3>
            <p className="text-lg mb-4">
              Experiencing storm damage or urgent roof issues? We provide 24/7 emergency response.
            </p>
            <Button 
              className="bg-white text-warm-orange hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              onClick={() => window.location.href = 'tel:555-123-7663'}
            >
              Call Emergency Line: (555) 123-ROOF
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
