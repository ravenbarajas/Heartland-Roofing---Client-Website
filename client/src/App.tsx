import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotPlaceholder from "@/components/ChatbotPlaceholder";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Residential from "@/pages/services/Residential";
import Commercial from "@/pages/services/Commercial";
import RoofRepair from "@/pages/services/RoofRepair";
import StormDamage from "@/pages/services/StormDamage";
import GutterInstallation from "@/pages/services/GutterInstallation";
import SidingInstallation from "@/pages/services/SidingInstallation";
import Gallery from "@/pages/Gallery";
import Testimonials from "@/pages/Testimonials";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/services/residential" component={Residential} />
          <Route path="/services/commercial" component={Commercial} />
          <Route path="/services/repair" component={RoofRepair} />
          <Route path="/services/storm" component={StormDamage} />
          <Route path="/services/gutters" component={GutterInstallation} />
          <Route path="/services/siding" component={SidingInstallation} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ChatbotPlaceholder />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
