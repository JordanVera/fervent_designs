'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/faq';
import { cn } from '@/lib/utils';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="border border-border bg-card"
          >
            <button
              type="button"
              id={`faq-trigger-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#fce4f7]/40"
            >
              <span className="font-serif text-lg leading-snug text-foreground sm:text-xl">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  'mt-1 shrink-0 text-[#ee85d4] transition-transform duration-300',
                  isOpen && 'rotate-180',
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-border px-6 py-5">
                    <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/65 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
