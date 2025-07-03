import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <DialogTrigger asChild>
            <Button
              className="bg-brick-red hover:bg-red-700 text-white p-4 rounded-full shadow-lg h-14 w-14"
              title="Questions? Chat with us!"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </DialogTrigger>
        </motion.div>
        <DialogContent className="sm:max-w-[425px] p-0">
          <DialogHeader className="bg-brick-red text-white p-6 rounded-t-lg flex flex-row justify-between items-center">
            <DialogTitle className="text-lg font-semibold">Chat with Heartland Roofing</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 hover:bg-red-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              This is where your AI chatbot will be integrated.
            </p>
            <p className="text-sm text-gray-500">
              For now, please call us at <strong>(555) 123-ROOF</strong> or use our contact form.
            </p>
            {/* Future chatbot integration will go here */}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 