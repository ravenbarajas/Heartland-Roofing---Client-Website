import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Home, Menu, Phone, Building, Wrench, CloudRain, Droplets, Layers } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { name: "Residential Roofing", href: "/services/residential", icon: Home },
  { name: "Commercial Roofing", href: "/services/commercial", icon: Building },
  { name: "Roof Repair", href: "/services/repair", icon: Wrench },
  { name: "Storm Damage Repair", href: "/services/storm", icon: CloudRain },
  { name: "Gutter Installation", href: "/services/gutters", icon: Droplets },
  { name: "Siding Installation", href: "/services/siding", icon: Layers },
];

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-xl" : "shadow-lg"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-serif font-bold text-brick-red">
              <Home className="inline-block mr-2 h-8 w-8" />
              Heartland Roofing Co.
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`font-medium transition-colors ${location === "/" ? "text-brick-red" : "text-slate-gray hover:text-brick-red"}`}>
              Home
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-gray hover:text-brick-red font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <NavigationMenuLink key={service.href} asChild>
                            <Link 
                              href={service.href}
                              className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded flex items-center"
                            >
                              <Icon className="h-4 w-4 mr-2" />
                              {service.name}
                            </Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/about" className={`font-medium transition-colors ${location === "/about" ? "text-brick-red" : "text-slate-gray hover:text-brick-red"}`}>
              About Us
            </Link>
            <Link href="/gallery" className={`font-medium transition-colors ${location === "/gallery" ? "text-brick-red" : "text-slate-gray hover:text-brick-red"}`}>
              Gallery
            </Link>
            <Link href="/testimonials" className={`font-medium transition-colors ${location === "/testimonials" ? "text-brick-red" : "text-slate-gray hover:text-brick-red"}`}>
              Testimonials
            </Link>
            <Link href="/faq" className={`font-medium transition-colors ${location === "/faq" ? "text-brick-red" : "text-slate-gray hover:text-brick-red"}`}>
              FAQ
            </Link>
            <Link href="/contact" className={`font-medium transition-colors ${location === "/contact" ? "text-brick-red" : "text-slate-gray hover:text-brick-red"}`}>
              Contact
            </Link>
            
            <Link href="/contact">
              <Button className="bg-brick-red hover:bg-red-700 text-white hover:scale-105 transition-all duration-300">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-gray hover:text-brick-red">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link 
                    href="/" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-gray hover:text-brick-red py-2 text-lg"
                  >
                    Home
                  </Link>
                  
                  <div className="border-t pt-4">
                    <div className="text-slate-gray font-semibold mb-2">Services</div>
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link 
                          key={service.href}
                          href={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center text-gray-600 hover:text-brick-red py-2 pl-4"
                        >
                          <Icon className="h-4 w-4 mr-2" />
                          {service.name}
                        </Link>
                      );
                    })}
                  </div>
                  
                  <Link 
                    href="/about" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-gray hover:text-brick-red py-2 text-lg"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/gallery" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-gray hover:text-brick-red py-2 text-lg"
                  >
                    Gallery
                  </Link>
                  <Link 
                    href="/testimonials" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-gray hover:text-brick-red py-2 text-lg"
                  >
                    Testimonials
                  </Link>
                  <Link 
                    href="/faq" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-gray hover:text-brick-red py-2 text-lg"
                  >
                    FAQ
                  </Link>
                  <Link 
                    href="/contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-gray hover:text-brick-red py-2 text-lg"
                  >
                    Contact
                  </Link>
                  
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full mt-4 bg-brick-red hover:bg-red-700 text-white">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
