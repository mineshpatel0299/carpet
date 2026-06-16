'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productCategory: string;
}

export default function ProductModal({ isOpen, onClose, productCategory }: ProductModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setTimeout(() => setIsSuccess(false), 500);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(onClose, 3200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-navy/50 backdrop-blur-[6px]"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
              className="relative w-full max-w-[480px] bg-parchment pointer-events-auto overflow-hidden rounded-2xl"
              style={{ boxShadow: '0 40px 100px rgba(7,19,36,0.18), 0 0 0 1px rgba(184,134,69,0.12)' }}
            >
              {/* Top gold hairline */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent z-10" />

              {/* Header */}
              <div className="px-8 pt-10 pb-7 border-b border-navy/8">
                <button
                  onClick={onClose}
                  className="absolute top-5 right-6 text-navy/30 hover:text-navy transition-colors duration-200 p-1"
                  aria-label="Close"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-gold/50" />
                  <span className="font-body text-[8px] tracking-[0.5em] uppercase text-gold font-semibold">
                    Creaticabud Atelier
                  </span>
                </div>
                <h2 className="font-display font-normal text-navy text-[26px] leading-tight">
                  Make an <span className="italic text-gold">Enquiry</span>
                </h2>
                <p className="font-body text-[11px] text-navy/40 mt-1.5 tracking-wide">
                  {productCategory} Collection
                </p>
              </div>

              {/* Body */}
              <div className="px-8 py-7">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-10 text-center"
                    >
                      <div className="flex justify-center mb-5">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#B88645" fillOpacity="0.3" />
                          <path d="M12 5L13.8 10.2L19 12L13.8 13.8L12 19L10.2 13.8L5 12L10.2 10.2L12 5Z" fill="#B88645" />
                        </svg>
                      </div>
                      <h3 className="font-display text-[22px] text-navy mb-2">
                        <span className="italic text-gold">Thank You</span>
                      </h3>
                      <p className="font-body text-[12px] text-navy/50 leading-relaxed max-w-[260px] mx-auto">
                        Your enquiry has been received. Our atelier team will reach out within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {[
                        { id: 'modal-name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
                        { id: 'modal-email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
                        { id: 'modal-phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
                      ].map(field => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className="block font-body text-[8.5px] tracking-[0.35em] uppercase text-navy/40 font-semibold mb-1.5">
                            {field.label}
                          </label>
                          <input
                            id={field.id}
                            type={field.type}
                            required={field.required}
                            placeholder={field.placeholder}
                            className="w-full bg-linen border-b border-navy/15 text-navy font-body text-[13px] px-0 py-2.5 focus:outline-none focus:border-gold/60 transition-colors duration-300 placeholder:text-navy/25 bg-transparent"
                          />
                        </div>
                      ))}

                      <div>
                        <label htmlFor="modal-message" className="block font-body text-[8.5px] tracking-[0.35em] uppercase text-navy/40 font-semibold mb-1.5">
                          Message <span className="text-navy/25 normal-case tracking-normal text-[10px]">(optional)</span>
                        </label>
                        <textarea
                          id="modal-message"
                          rows={3}
                          placeholder="Tell us about your space and requirements…"
                          className="w-full bg-transparent border-b border-navy/15 text-navy font-body text-[13px] px-0 py-2.5 focus:outline-none focus:border-gold/60 transition-colors duration-300 resize-none placeholder:text-navy/25"
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative w-full group overflow-hidden bg-navy text-linen font-body text-[9px] tracking-[0.35em] uppercase font-semibold py-4 transition-all duration-500 disabled:opacity-60"
                        >
                          <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                          <span className="relative z-10 group-hover:text-navy transition-colors duration-300">
                            {isSubmitting ? (
                              <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Sending…
                              </span>
                            ) : 'Submit Enquiry'}
                          </span>
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom hairline */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
