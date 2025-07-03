import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn, Filter } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["All", "Residential", "Commercial", "Repairs", "Storm Damage", "Before/After"];

const projects = [
  {
    id: 1,
    title: "Modern Farmhouse Roof Replacement",
    category: "Residential",
    description: "Complete asphalt shingle roof replacement with enhanced ventilation system.",
    location: "Des Moines, IA",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
    beforeAfter: true
  },
  {
    id: 2,
    title: "Commercial Warehouse TPO Installation",
    category: "Commercial", 
    description: "15,000 sq ft TPO membrane roof installation for manufacturing facility.",
    location: "Cedar Rapids, IA",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Historic Home Slate Restoration",
    category: "Residential",
    description: "Careful restoration of 1920s slate roof maintaining historical authenticity.",
    location: "Iowa City, IA", 
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Storm Damage Emergency Repair",
    category: "Storm Damage",
    description: "Emergency tarping and repair after severe hail damage during spring storms.",
    location: "Ames, IA",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Seamless Gutter System Installation", 
    category: "Residential",
    description: "Custom aluminum gutter system with leaf guards and proper drainage.",
    location: "Waterloo, IA",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Leak Repair and Flashing Replacement",
    category: "Repairs",
    description: "Complex leak detection and repair around chimney and vent penetrations.",
    location: "Dubuque, IA",
    image: "https://images.unsplash.com/photo-1513147122760-ad1d5bf68cdb?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
  },
  {
    id: 7,
    title: "Metal Roof Installation",
    category: "Residential",
    description: "Standing seam metal roof installation for energy efficiency and durability.",
    location: "Des Moines, IA",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
  },
  {
    id: 8,
    title: "Office Building Roof Maintenance",
    category: "Commercial",
    description: "Preventive maintenance program for multi-story office complex.",
    location: "Cedar Rapids, IA", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
  },
  {
    id: 9,
    title: "Hail Damage Restoration",
    category: "Storm Damage",
    description: "Complete roof replacement after severe hail storm with insurance claim assistance.",
    location: "Iowa City, IA",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
    beforeAfter: true
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => 
        project.category === selectedCategory || 
        (selectedCategory === "Before/After" && project.beforeAfter)
      );

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
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-gray mb-6">Project Gallery</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-slate-gray leading-relaxed">
              Explore our portfolio of completed roofing projects across the Midwest. See the quality craftsmanship that has made us a trusted partner for hundreds of homeowners and businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center text-gray-600 mr-4">
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category 
                    ? "bg-brick-red hover:bg-red-700 text-white" 
                    : "border-brick-red text-brick-red hover:bg-brick-red hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-brick-red hover:bg-gray-100"
                            onClick={() => setSelectedImage(project)}
                          >
                            <ZoomIn className="h-5 w-5" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <div className="grid md:grid-cols-2 gap-6">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-auto rounded-lg"
                            />
                            <div>
                              <h3 className="text-2xl font-slab font-bold text-slate-gray mb-4">
                                {project.title}
                              </h3>
                              <p className="text-gray-600 mb-4">{project.description}</p>
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <span className="font-medium text-slate-gray mr-2">Category:</span>
                                  <Badge variant="secondary">{project.category}</Badge>
                                </div>
                                <div className="flex items-center">
                                  <span className="font-medium text-slate-gray mr-2">Location:</span>
                                  <span className="text-gray-600">{project.location}</span>
                                </div>
                                {project.beforeAfter && (
                                  <div className="flex items-center">
                                    <span className="font-medium text-slate-gray mr-2">Type:</span>
                                    <Badge className="bg-forest-green">Before & After</Badge>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    {project.beforeAfter && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-forest-green text-white">Before & After</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-slab font-bold text-slate-gray mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="border-brick-red text-brick-red">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{project.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-gray-600">No projects found for this category.</p>
            </motion.div>
          )}
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
            <h2 className="text-4xl font-serif font-bold mb-6">Want Your Project Featured Next?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Join the hundreds of satisfied customers who trust Heartland Roofing for their home protection needs. Get your free estimate today.
            </p>
            <Button className="bg-white text-brick-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Get Your Free Estimate
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
