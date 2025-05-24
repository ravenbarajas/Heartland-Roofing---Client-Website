import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotPlaceholder() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Card className="w-80 shadow-2xl border">
              <CardHeader className="bg-brick-red text-white rounded-t-lg">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold">Chat with Heartland Roofing</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-gray-200 hover:bg-red-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <Wrench className="h-12 w-12 text-brick-red mx-auto mb-4" />
                <h5 className="font-slab font-bold text-slate-gray mb-2">Chatbot Coming Soon!</h5>
                <p className="text-gray-600 mb-4">
                  We're working on an AI assistant to help answer your roofing questions instantly.
                </p>
                <p className="text-sm text-gray-500">
                  For now, please call us at <strong>(555) 123-ROOF</strong> or use our contact form.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-brick-red hover:bg-red-700 text-white p-4 rounded-full shadow-lg h-14 w-14"
          title="Questions? Chat with us!"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  );
}
