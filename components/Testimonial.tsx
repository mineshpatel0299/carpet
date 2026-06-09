'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Carousel, TestimonialCard, iTestimonial } from '@/components/ui/retro-testimonial'

type TestimonialDetails = {
  [key: string]: iTestimonial & { id: string };
};

const testimonialData = {
  ids: [
    "t1",
    "t2",
    "t3",
    "t4",
    "t5",
  ],
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
};

const backgrounds = [
  "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1534889156217-d643df14f14a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1608724552908-e1c141f631ac?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1619444978283-cccfb92c357d?auto=format&fit=crop&w=600&q=80",
  "https://plus.unsplash.com/premium_photo-1725295198378-d286934e2735?auto=format&fit=crop&w=600&q=80",
];

const cards = testimonialData.ids.map((cardId: string, index: number) => {
  const details = testimonialData.details as TestimonialDetails;
  return (
    <TestimonialCard
      key={cardId}
      testimonial={details[cardId]}
      index={index}
      backgroundImage={backgrounds[index % backgrounds.length]}
    />
  );
});

export default function Testimonial() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0])

  return (
    <section ref={ref} className="relative bg-navy overflow-hidden py-28 md:py-32" id="testimonials">

      {/* Jewel-dark parallax brocade pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ scale: bgScale }}
      >
        <div
          className="absolute inset-0 opacity-[0.038]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg,#C98E38 0,#C98E38 1px,transparent 1px,transparent 16px),' +
              'repeating-linear-gradient(-45deg,#C98E38 0,#C98E38 1px,transparent 1px,transparent 16px)',
          }}
        />
      </motion.div>

      <div className="relative z-10 px-8 md:px-20 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-5 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body font-semibold text-[8px] tracking-[0.5em] uppercase text-gold/80 mb-5">
            Client Words
          </p>
          <h2 className="font-display font-normal text-[32px] md:text-[46px] text-linen leading-[1.1] mb-6">
            Voices of our <span className="italic text-gold">People</span>
          </h2>
          <p className="font-body text-[13px] text-linen/60 leading-[1.9] max-w-md">
            Supplied to 5-star properties in Dubai, London & New York. Trusted by leading architects and interior designers across 48 countries.
          </p>
        </motion.div>
      </div>

      <div className="relative z-20 w-full pb-10">
        <Carousel items={cards} />
      </div>

    </section>
  )
}
