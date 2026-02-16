import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ChatAssistantButton() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 lg:right-6 w-[360px] max-w-[calc(100vw-2rem)] h-[480px] bg-card rounded-2xl shadow-xl border border-border flex flex-col z-50 overflow-hidden"
          >
            <div className="gradient-primary px-4 py-3 flex items-center justify-between">
              <div>
                <h3 className="font-display font-semibold text-primary-foreground text-sm">Young at Heart Assistant</h3>
                <p className="text-primary-foreground/70 text-xs">Scheduling, docs & policy help</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="bg-secondary rounded-xl px-3 py-2.5 text-sm text-secondary-foreground max-w-[85%]">
                Hi! I'm your Young at Heart assistant. I can help with scheduling, documentation, and policy questions. What do you need?
              </div>
            </div>
            <div className="p-3 border-t border-border">
              <div className="flex items-center gap-2 bg-secondary rounded-xl px-3 py-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
                <button className="text-primary hover:text-primary/80 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 w-14 h-14 rounded-full gradient-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-50"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
