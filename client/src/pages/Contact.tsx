import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  IdCard,
  CheckCircle,
  Loader2
} from "lucide-react";
import { motion } from "framer-motion";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"), 
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceOfInterest: z.string().optional(),
  propertyAddress: z.string().optional(),
  projectDescription: z.string().optional(),
});

const quoteFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  propertyAddress: z.string().min(1, "Property address is required"),
  projectDescription: z.string().optional(),
  urgency: z.string().default("normal"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;
type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const services = [
  "Residential Roofing",
  "Commercial Roofing", 
  "Roof Repair",
  "Storm Damage Repair",
  "Gutter Installation",
  "Siding Installation",
  "Roof Inspection",
  "Emergency Services"
];

const urgencyOptions = [
  { value: "normal", label: "Normal (1-2 weeks)" },
  { value: "urgent", label: "Urgent (Within 1 week)" },
  { value: "emergency", label: "Emergency (ASAP)" }
];

export default function Contact() {
  const [activeForm, setActiveForm] = useState<"contact" | "quote">("contact");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceOfInterest: "",
      propertyAddress: "",
      projectDescription: "",
    }
  });

  const quoteForm = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      propertyAddress: "",
      projectDescription: "",
      urgency: "normal",
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll respond within 4 hours during business hours.",
      });
      contactForm.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const quoteMutation = useMutation({
    mutationFn: (data: QuoteFormValues) => apiRequest("POST", "/api/quote", data),
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted!",
        description: "Thank you for your quote request. We'll contact you within 24 hours to schedule your free estimate.",
      });
      quoteForm.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/quotes"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error Submitting Quote Request",
        description: error.message || "There was a problem submitting your quote request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onContactSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  const onQuoteSubmit = (data: QuoteFormValues) => {
    quoteMutation.mutate(data);
  };

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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Ready to protect your investment? Get in touch for a free consultation and estimate from Iowa's trusted roofing experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Forms */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Form Toggle */}
              <div className="flex mb-8 bg-gray-100 p-1 rounded-lg">
                <Button
                  onClick={() => setActiveForm("contact")}
                  variant={activeForm === "contact" ? "default" : "ghost"}
                  className={`flex-1 ${
                    activeForm === "contact" 
                      ? "bg-brick-red hover:bg-red-700 text-white" 
                      : "text-slate-gray hover:text-brick-red"
                  }`}
                >
                  Send Message
                </Button>
                <Button
                  onClick={() => setActiveForm("quote")}
                  variant={activeForm === "quote" ? "default" : "ghost"}
                  className={`flex-1 ${
                    activeForm === "quote" 
                      ? "bg-brick-red hover:bg-red-700 text-white" 
                      : "text-slate-gray hover:text-brick-red"
                  }`}
                >
                  Request Quote
                </Button>
              </div>

              {/* Contact Form */}
              {activeForm === "contact" && (
                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-slab text-slate-gray">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...contactForm}>
                      <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={contactForm.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="John" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={contactForm.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={contactForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={contactForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone *</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="(555) 123-4567" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={contactForm.control}
                          name="serviceOfInterest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service of Interest</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a service..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map((service) => (
                                    <SelectItem key={service} value={service}>
                                      {service}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="propertyAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Property Address</FormLabel>
                              <FormControl>
                                <Input placeholder="123 Main St, City, State ZIP" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="projectDescription"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your roofing needs..."
                                  rows={4}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full bg-brick-red hover:bg-red-700 text-white py-4 text-lg font-semibold"
                          disabled={contactMutation.isPending}
                        >
                          {contactMutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Mail className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}

              {/* Quote Form */}
              {activeForm === "quote" && (
                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-slab text-slate-gray">Request a Free Quote</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...quoteForm}>
                      <form onSubmit={quoteForm.handleSubmit(onQuoteSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={quoteForm.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="John" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={quoteForm.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={quoteForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={quoteForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone *</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="(555) 123-4567" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={quoteForm.control}
                            name="serviceType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Service Type *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select service type..." />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {services.map((service) => (
                                      <SelectItem key={service} value={service}>
                                        {service}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={quoteForm.control}
                            name="urgency"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Timeline</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select timeline..." />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {urgencyOptions.map((option) => (
                                      <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={quoteForm.control}
                          name="propertyAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Property Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="123 Main St, City, State ZIP" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={quoteForm.control}
                          name="projectDescription"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Description</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your roofing project in detail..."
                                  rows={4}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full bg-brick-red hover:bg-red-700 text-white py-4 text-lg font-semibold"
                          disabled={quoteMutation.isPending}
                        >
                          {quoteMutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Submitting Request...
                            </>
                          ) : (
                            <>
                              <CheckCircle className="mr-2 h-5 w-5" />
                              Get My Free Estimate
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-slab font-bold text-slate-gray mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brick-red text-white p-3 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-gray">Phone</h4>
                      <p className="text-gray-600">(555) 123-ROOF</p>
                      <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-forest-green text-white p-3 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-gray">Email</h4>
                      <p className="text-gray-600">info@heartlandroofing.com</p>
                      <p className="text-sm text-gray-500">Response within 4 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-gray text-white p-3 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-gray">Service Area</h4>
                      <p className="text-gray-600">Des Moines, Cedar Rapids, Iowa City</p>
                      <p className="text-sm text-gray-500">Within 100 miles of Des Moines</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-warm-orange text-white p-3 rounded-lg">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-gray">Business Hours</h4>
                      <p className="text-gray-600">Mon-Fri: 7AM-6PM</p>
                      <p className="text-gray-600">Sat: 8AM-4PM</p>
                      <p className="text-sm text-gray-500">Emergency services 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="font-slab text-slate-gray">Licensed & Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <IdCard className="h-8 w-8 text-brick-red mx-auto mb-2" />
                      <div className="text-sm font-semibold">Iowa Licensed</div>
                      <div className="text-xs text-gray-600">#RC123456</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <Shield className="h-8 w-8 text-forest-green mx-auto mb-2" />
                      <div className="text-sm font-semibold">Fully Insured</div>
                      <div className="text-xs text-gray-600">$2M Coverage</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="font-slab text-slate-gray">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Des Moines", "Cedar Rapids", "Iowa City", "Ames", "Waterloo", "Dubuque"].map((city) => (
                      <Badge key={city} variant="outline" className="border-brick-red text-brick-red">
                        {city}, IA
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Don't see your city? Contact us to confirm service availability in your area.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
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
              Storm damage or urgent repairs? We provide 24/7 emergency response to protect your property.
            </p>
            <Button 
              className="bg-white text-warm-orange hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              onClick={() => window.location.href = 'tel:555-123-7663'}
            >
              Emergency Line: (555) 123-ROOF
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
