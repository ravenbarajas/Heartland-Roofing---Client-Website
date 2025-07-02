import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Des Moines, IA",
    rating: 5,
    date: "October 2024",
    service: "Storm Damage Repair",
    text: "Heartland Roofing did an exceptional job on our home after the spring storms. From the initial assessment to the final cleanup, their team was professional, timely, and incredibly knowledgeable. The quality of their work is outstanding, and they made the insurance claim process seamless. I can't recommend them highly enough!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Mike Thompson",
    location: "Cedar Rapids, IA", 
    rating: 5,
    date: "September 2024",
    service: "Residential Roofing",
    text: "From estimate to completion, the Heartland team was professional and communicative every step of the way. They explained every detail of the process and kept us informed of progress daily. Our new roof looks amazing and we've had no issues through two harsh Iowa winters. The warranty and follow-up service are excellent.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Robert & Linda Miller",
    location: "Dubuque, IA",
    rating: 5,
    date: "August 2024", 
    service: "Emergency Repair",
    text: "Emergency service was incredible - they had a crew out within hours of our call during a severe storm. The team worked quickly to secure our home and prevent further damage. Fair pricing, excellent workmanship, and they treated our home like it was their own. True professionals who care about their community.",
    avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=faces"
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    location: "Iowa City, IA",
    rating: 5,
    date: "July 2024",
    service: "Gutter Installation", 
    text: "The gutter installation exceeded our expectations. The team was punctual, clean, and incredibly efficient. They even noticed and fixed a small roofing issue at no extra charge. The new gutters have performed flawlessly through several heavy rains. Outstanding customer service from start to finish.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "David Chen",
    location: "Ames, IA",
    rating: 5,
    date: "June 2024",
    service: "Commercial Roofing",
    text: "Heartland handled our office building roof replacement with minimal disruption to our business operations. They worked around our schedule and completed the project ahead of timeline. The crew was professional, safety-conscious, and the quality of work is top-notch. Great value for a commercial project.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Amanda Wilson", 
    location: "Waterloo, IA",
    rating: 5,
    date: "May 2024",
    service: "Roof Repair",
    text: "Had a persistent leak that other contractors couldn't solve. Heartland's team diagnosed the issue quickly and provided a permanent solution. Their attention to detail and problem-solving skills are impressive. No more leaks, and they stand behind their work. Honest, reliable, and skilled.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 7,
    name: "Tom Richards",
    location: "Des Moines, IA",
    rating: 5,
    date: "April 2024",
    service: "Siding Installation",
    text: "Complete exterior makeover including siding and trim work. The transformation is incredible! The crew was meticulous about matching colors and ensuring perfect alignment. Clean worksite every day and excellent communication throughout the project. Our home value has definitely increased.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 8,
    name: "Rachel Brown",
    location: "Cedar Rapids, IA",
    rating: 5,
    date: "March 2024",
    service: "Metal Roofing",
    text: "Chose metal roofing for energy efficiency and longevity. Heartland's expertise with metal systems was evident from day one. They helped us select the perfect color and style, and the installation was flawless. Already seeing lower energy bills and love the modern look. Highly recommended for metal roofing!",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 9,
    name: "Mark & Susan Taylor",
    location: "Iowa City, IA", 
    rating: 5,
    date: "February 2024",
    service: "Historic Restoration",
    text: "Our 1920s home needed sensitive roof restoration. Heartland's team understood the historical significance and worked carefully to maintain authenticity while updating for modern weather resistance. Their craftsmanship preserved the character of our home beautifully. True artisans who respect historical integrity.",
    avatar: "https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=faces"
  }
];

const stats = [
  { number: "500+", label: "Happy Customers" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "98%", label: "Would Recommend" },
  { number: "24hr", label: "Response Time" }
];

export default function Testimonials() {
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-gray mb-6">Customer Reviews</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-slate-gray leading-relaxed">
              Don't just take our word for it. Here's what hundreds of satisfied homeowners and business owners across the Midwest have to say about our roofing services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Testimonials Grid */}
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from real customers who trusted us to protect their most important investment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-slate-gray">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.location}</div>
                        </div>
                      </div>
                      <Quote className="h-8 w-8 text-brick-red opacity-50" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{testimonial.rating}.0</span>
                    </div>

                    {/* Service and Date */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <span className="bg-brick-red text-white px-2 py-1 rounded text-xs">
                        {testimonial.service}
                      </span>
                      <span className="text-gray-500">{testimonial.date}</span>
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-gray-700 italic leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-slate-gray mb-6">
              Recently Worked with Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We'd love to hear about your experience! Your feedback helps us continue to improve and helps other homeowners make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brick-red hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold">
                Leave a Review
              </Button>
              <Button 
                variant="outline" 
                className="border-brick-red text-brick-red hover:bg-brick-red hover:text-white px-8 py-3 text-lg font-semibold"
              >
                Share Your Photos
              </Button>
            </div>
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
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Join Our Happy Customers?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Experience the Heartland difference for yourself. Get your free estimate today and discover why hundreds of Midwest homeowners trust us with their roofing needs.
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
