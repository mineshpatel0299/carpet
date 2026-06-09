"use client";

import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";
import {ImageProps} from "next/image";
import {ArrowLeft, ArrowRight, Quote, X} from "lucide-react";

import {cn} from "@/lib/utils";

// ===== Types and Interfaces =====
export interface iTestimonial {
  name: string;
  designation: string;
  description: string;
  profileImage: string;
}

interface iCarouselProps {
  items: React.ReactElement<{
    testimonial: iTestimonial;
    index: number;
    layout?: boolean;
    onCardClose: () => void;
  }>[];
  initialScroll?: number;
}

// ===== Custom Hooks =====
const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  onOutsideClick: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      onOutsideClick();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

// ===== Components =====
const Carousel = ({items, initialScroll = 0}: iCarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const {scrollLeft, scrollWidth, clientWidth} = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // Added minor offset to fix rounding issues
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({left: -300, behavior: "smooth"});
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({left: 300, behavior: "smooth"});
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  return (
    <div className="relative w-full mt-10">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-5"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 z-[40] h-auto w-[5%] overflow-hidden bg-gradient-to-l from-navy to-transparent pointer-events-none",
          )}
        />
        <div
          className={cn(
            "flex flex-row justify-start gap-8 md:gap-12 pl-3",
            "max-w-[1400px] mx-auto",
          )}
        >
          {items.map((item, index) => {
            return (
              <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
                key={`card-${index}`}
                className="last:pr-[5%] md:last:pr-[33%] rounded-[24px]"
              >
                {React.cloneElement(item, {
                  onCardClose: () => {
                    return handleCardClose(index);
                  },
                })}
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-8">
        <button
          className="relative z-40 h-12 w-12 rounded-full border border-gold/30 bg-navy flex items-center justify-center disabled:opacity-30 hover:bg-gold/10 hover:border-gold transition-colors duration-300"
          onClick={handleScrollLeft}
          disabled={!canScrollLeft}
        >
          <ArrowLeft className="h-5 w-5 text-gold" />
        </button>
        <button
          className="relative z-40 h-12 w-12 rounded-full border border-gold/30 bg-navy flex items-center justify-center disabled:opacity-30 hover:bg-gold/10 hover:border-gold transition-colors duration-300"
          onClick={handleScrollRight}
          disabled={!canScrollRight}
        >
          <ArrowRight className="h-5 w-5 text-gold" />
        </button>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
  index,
  layout = false,
  onCardClose = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=600&q=80",
}: {
  testimonial: iTestimonial;
  index: number;
  layout?: boolean;
  onCardClose?: () => void;
  backgroundImage?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => {
    return setIsExpanded(true);
  };
  const handleCollapse = () => {
    setIsExpanded(false);
    onCardClose();
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCollapse();
      }
    };

    if (isExpanded) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.dataset.scrollY = scrollY.toString();
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY > 0) window.scrollTo({top: scrollY, behavior: "instant"});
    }

    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      return window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isExpanded]);

  useOutsideClick(containerRef, handleCollapse);

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 h-screen overflow-hidden z-[100]">
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              className="bg-navy/80 backdrop-blur-md h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{opacity: 0, scale: 0.95, y: 20}}
              animate={{opacity: 1, scale: 1, y: 0}}
              exit={{opacity: 0, scale: 0.95, y: 20}}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              ref={containerRef}
              layoutId={layout ? `card-${testimonial.name}` : undefined}
              className="max-w-4xl mx-auto bg-ivory shadow-2xl h-full sm:h-auto sm:my-auto z-[110] p-8 md:p-14 rounded-[24px] relative mt-0 sm:mt-[15vh] overflow-y-auto max-h-[100vh] sm:max-h-[80vh]"
            >
              <button
                className="sticky sm:absolute top-4 right-4 sm:top-6 sm:right-6 h-12 w-12 ml-auto rounded-full flex items-center justify-center bg-navy hover:bg-gold transition-colors duration-300 z-50 group"
                onClick={handleCollapse}
              >
                <X className="h-6 w-6 text-linen group-hover:text-navy transition-colors" />
              </button>
              
              <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border-2 border-gold/30">
                  <Image 
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <motion.p
                    layoutId={layout ? `category-${testimonial.name}` : undefined}
                    className="text-gold text-xs tracking-[0.3em] font-body uppercase font-semibold mb-2"
                  >
                    {testimonial.designation}
                  </motion.p>
                  <motion.p
                    layoutId={layout ? `title-${testimonial.name}` : undefined}
                    className="text-3xl sm:text-4xl font-display font-normal text-navy leading-tight"
                  >
                    {testimonial.name}
                  </motion.p>
                </div>
              </div>
              
              <div className="py-10 text-navy/80 text-xl sm:text-3xl font-display leading-snug">
                <Quote className="h-8 w-8 text-gold/40 mb-4" />
                "{testimonial.description}"
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${testimonial.name}` : undefined}
        onClick={handleExpand}
        className="text-left w-full h-full"
        whileHover={{
          scale: 1.02,
          y: -10,
          transition: {duration: 0.4, ease: [0.22, 1, 0.36, 1]},
        }}
      >
        <div
          className={`${index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"} rounded-[24px] bg-ivory h-[500px] md:h-[550px] w-[280px] md:w-[350px] overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-lg border border-navy/5 hover:border-gold/30 transition-colors duration-500`}
        >
          <div className="absolute opacity-15 mix-blend-overlay pointer-events-none" style={{inset: "-1px 0 0"}}>
            <div className="absolute inset-0">
              <Image
                className="block w-full h-full object-center object-cover"
                src={backgroundImage}
                alt="Background layer"
                fill
              />
            </div>
          </div>
          
          <div className="relative z-20 flex flex-col items-center p-8 w-full h-full">
            <ProfileImage src={testimonial.profileImage} alt={testimonial.name} />
            
            <motion.div
              className="mt-8 flex-grow flex flex-col items-center justify-center text-center"
            >
              <Quote className="h-5 w-5 text-gold/40 mb-3" />
              <motion.p
                layoutId={layout ? `title-${testimonial.name}` : undefined}
                className="text-navy text-[20px] md:text-[22px] font-display leading-[1.4] mb-6 line-clamp-4"
              >
                "{testimonial.description}"
              </motion.p>
            </motion.div>
            
            <div className="mt-auto flex flex-col items-center text-center">
              <motion.p
                layoutId={layout ? `category-${testimonial.name}` : undefined}
                className="text-navy text-sm font-body tracking-[0.1em] uppercase font-semibold mb-1"
              >
                {testimonial.name}
              </motion.p>
              <motion.p
                layoutId={layout ? `category-${testimonial.name}` : undefined}
                className="text-navy/50 text-[10px] font-body tracking-[0.2em] uppercase font-semibold"
              >
                {testimonial.designation}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.button>
    </>
  );
};

const ProfileImage = ({src, alt, ...rest}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] overflow-hidden rounded-full border-2 border-gold/30 flex-none relative shadow-sm">
      <Image
        className={cn(
          "transition-all duration-700 absolute top-0 inset-0 object-cover z-20",
          isLoading ? "blur-md scale-110" : "blur-0 scale-100",
        )}
        onLoad={() => {
          return setLoading(false);
        }}
        src={src}
        fill
        sizes="120px"
        loading="lazy"
        decoding="async"
        blurDataURL={typeof src === "string" ? src : undefined}
        alt={alt || "Profile image"}
        {...rest}
      />
    </div>
  );
};

export {Carousel, TestimonialCard, ProfileImage};
