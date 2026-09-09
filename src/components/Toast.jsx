import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, AlertCircle } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  const icons = {
    success: <Check className="w-4 h-4 text-emerald-700" />,
    info: <Info className="w-4 h-4 text-accent-teal" />,
    error: <AlertCircle className="w-4 h-4 text-accent-coral" />,
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.95 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-surface border border-line px-4 py-3 rounded-full shadow-lift text-ink text-sm font-sans"
        role="status"
        aria-live="polite"
      >
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-surface-subtle">
          {icons[type] || icons.info}
        </span>
        <span className="font-medium text-ink pr-2">{message}</span>
      </motion.div>
    </AnimatePresence>
  );
};
