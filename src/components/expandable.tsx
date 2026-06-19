"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ExpandableCard({
  summary,
  children,
}: {
  summary: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 md:p-5 flex items-start gap-3"
      >
        <div className="flex-1 min-w-0">{summary}</div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-accent text-xl leading-none mt-0.5 shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-border-light pt-3">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
