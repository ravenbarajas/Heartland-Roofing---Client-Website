import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    "Hello! How can I help you today?",
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, inputMessage]);
      setInputMessage("");
    }
  };

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
        <DialogContent className="sm:max-w-[425px] p-0 flex flex-col h-[500px]">
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
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={
                    index % 2 === 0
                      ? "flex justify-start"
                      : "flex justify-end"
                  }
                >
                  <div
                    className={
                      index % 2 === 0
                        ? "bg-gray-200 text-gray-800 rounded-lg p-3 max-w-[80%]"
                        : "bg-brick-red text-white rounded-lg p-3 max-w-[80%]"
                    }
                  >
                    {msg}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-6 border-t flex items-center">
            <Input
              placeholder="Type your message..."
              className="flex-1 mr-2"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <Button onClick={handleSendMessage} className="bg-brick-red hover:bg-red-700">Send</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 