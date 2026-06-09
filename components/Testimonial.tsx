'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type TestimonialDetails = {
  [key: string]: {
    id: string;
    description: string;
    name: string;
    designation: string;
    profileImage: string;
  }
};

const testimonialData = {
  ids: ["t1", "t2", "t3", "t4", "t5"],
  details: {
    "t1": {
      id: "t1",
      description: "The hand-knotted silk carpet Creaticabud created for our presidential suite is without question the finest piece in our entire property. Guests ask about it every single day.",
      name: "James Harrington",
      designation: "Director of Design, Mayfair Collection",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=85",
    },
    "t2": {
      id: "t2",
      description: "Working with Creaticabud on our villa project in Dubai was a revelation. Their ability to translate a mood board into a custom carpet — perfectly sized, perfectly coloured — is remarkable.",
      name: "Layla Al-Mansouri",
      designation: "Principal Designer, Studio Mansouri",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=85",
    },
    "t3": {
      id: "t3",
      description: "We have sourced carpets from India for thirty years. No other manufacturer combines the artisan quality of Creaticabud with such reliable logistics and export handling.",
      name: "Henrik Sørensen",
      designation: "Head of Procurement, Nordisk Interiors",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=85",
    },
    "t4": {
      id: "t4",
      description: "The attention to detail in the weaving process is second to none. We visited the Agra atelier and were blown away by the dedication to ethical production and natural dyeing techniques.",
      name: "Eleanor Vance",
      designation: "Founder, Heritage Textures NY",
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85",
    },
    "t5": {
      id: "t5",
      description: "Our boutique hotel required 120 custom rugs with a very specific modernist motif. Creaticabud delivered exactly on time, and the quality of the New Zealand wool is extraordinary.",
      name: "Marcus Chen",
      designation: "Architect, Horizon Hospitality",
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=85",
    },
  },
} as const;

export default function Testimonial() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonials = testimonialData.ids.map(id => testimonialData.details[id as keyof typeof testimonialData.details]);
  const current = testimonials[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    })
  };

  return (
    <section ref={ref} className="relative bg-gradient-to-br from-stone-light to-ivory overflow-hidden py-24 md:py-32" id="testimonials">
      <div className="carpet-texture opacity-30" />

      {/* Decorative center element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-navy/20 to-transparent" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <p className="font-body font-semibold text-[9px] tracking-[0.5em] uppercase text-navy/50 mb-6">
            Client Words
          </p>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto" />
        </motion.div>

        {/* The Carousel */}
        <div className="relative w-full h-[400px] sm:h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="absolute w-full flex flex-col items-center"
            >
              <h3 className="font-display font-normal text-[24px] sm:text-[32px] md:text-[40px] text-navy leading-[1.3] mb-12 max-w-4xl tracking-[-0.01em]">
                "{current.description}"
              </h3>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-gold/30 shrink-0">
                  <Image 
                    src={current.profileImage}
                    alt={current.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-display text-[18px] text-navy leading-none mb-1.5">
                    {current.name}
                  </p>
                  <p className="font-body text-[9px] tracking-[0.2em] uppercase text-navy/50 font-semibold">
                    {current.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Navigation */}
        <div className="flex items-center gap-8 mt-12">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center text-navy/50 hover:bg-navy hover:text-linen hover:border-navy transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-500 rounded-full ${
                  idx === currentIndex 
                    ? "w-8 h-[2px] bg-gold" 
                    : "w-2 h-[2px] bg-navy/20 hover:bg-navy/40"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center text-navy/50 hover:bg-navy hover:text-linen hover:border-navy transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  )
}
