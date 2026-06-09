'use client'
import { motion } from 'framer-motion'
import { 
  Library, 
  HandHeart, 
  Feather, 
  Tag, 
  Award,
  Crown,
  Landmark,
  Shapes,
  Hexagon
} from 'lucide-react'

const reasons = [
  {
    title: 'Wide Selection',
    desc: 'Ranging from traditional to modern designs, in a variety of colors, shapes, and sizes. You can easily find a rug that suits your taste and decor.',
    icon: Library
  },
  {
    title: 'Handmade Craftsmanship',
    desc: 'Committed to preserving the ancient art of rug-making by employing skilled craftsmen who use traditional techniques to create each rug by hand. This ensures that each rug is unique, with its own character and story.',
    icon: HandHeart
  },
  {
    title: 'Quality Materials',
    desc: 'We only use the highest quality materials, such as wool, silk, and cotton, to make our rugs. This ensures that the rugs are not only beautiful, but also durable and long-lasting.',
    icon: Feather
  },
  {
    title: 'Affordable Prices',
    desc: 'Despite their high quality, Creaticabud offers handmade rugs at affordable prices, making them accessible to a wider range of customers.',
    icon: Tag
  },
  {
    title: 'Trusted Brand',
    desc: 'A trusted brand in the rug industry, with a long history of producing exceptional rugs. When you buy rugs online from us, you can be sure that you are getting a quality product.',
    icon: Award
  }
]

const types = [
  {
    name: 'Persian Rugs',
    desc: 'Known for their intricate designs and bold colours, Persian rugs are one of the most popular types of handmade rugs. We offer a wide range that vary in size, style, and colour.',
    icon: Crown
  },
  {
    name: 'Traditional Indian Rugs',
    desc: 'Showcasing the country\'s rich history and culture. These rugs come in a variety of styles and colors, ranging from bold and vibrant to subtle and understated.',
    icon: Landmark
  },
  {
    name: 'Contemporary Rugs',
    desc: 'For those looking for a modern touch, we offer a selection of contemporary rugs that feature bold designs and bright colours.',
    icon: Shapes
  },
  {
    name: 'Kilim Rugs',
    desc: 'Known for their flat weave and geometric designs. We offer a variety of Kilim rugs that are perfect for adding a touch of texture and pattern to any room.',
    icon: Hexagon
  }
]

export default function RugGuideSection() {
  return (
    <section className="bg-linen py-24 md:py-32 relative overflow-hidden">
      <div className="carpet-texture opacity-30 pointer-events-none" />
      
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        
        {/* Part 1: Why Choose */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="font-body text-[9px] tracking-[0.4em] uppercase text-gold font-semibold mb-6 block">
              The Creaticabud Difference
            </span>
            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.1] text-navy mb-6">
              Why choose <span className="text-gold italic">Creaticabud</span> to buy handmade rugs online?
            </h2>
            <p className="font-body text-[14px] leading-[1.9] text-navy/70">
              If you are looking to buy handmade rugs online, Creaticabud should be at the top of your list. We are one of the leading rug manufacturers, known for producing high-quality, handcrafted rugs that are both luxurious and durable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="bg-white/40 backdrop-blur-sm p-10 border border-gold/10 hover:border-gold/40 transition-colors duration-500 rounded-[8px] group relative overflow-hidden"
                >
                  <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                     <Icon size={160} strokeWidth={0.5} className="text-gold" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500 border border-gold/10 group-hover:border-gold/30">
                    <Icon size={20} strokeWidth={1.5} className="text-gold" />
                  </div>
                  <h3 className="font-display text-[22px] text-navy mb-4 group-hover:text-gold transition-colors duration-300 relative z-10">
                    {reason.title}
                  </h3>
                  <p className="font-body text-[13.5px] leading-[1.8] text-navy/70 relative z-10">
                    {reason.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Part 2: Types of Rugs */}
        <div className="relative">
          <div className="absolute inset-0 bg-navy/[0.03] -mx-6 sm:-mx-10 md:-mx-16 rounded-3xl md:rounded-[40px]" />
          
          <div className="relative pt-16 pb-20 px-4 sm:px-8 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
            >
              <h2 className="font-display text-[32px] md:text-[44px] leading-[1.1] text-navy mb-6">
                Different types of rugs available at <span className="text-gold italic">Creaticabud</span>
              </h2>
              <p className="font-body text-[14px] leading-[1.9] text-navy/70">
                Creaticabud offers a vast selection of rugs made by skilled artisans using traditional techniques. Here are some of the different types you can buy online:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-20">
              {types.map((type, idx) => {
                const Icon = type.icon
                return (
                  <motion.div
                    key={type.name}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 * idx }}
                    className="group flex flex-col sm:flex-row gap-6 md:gap-8 items-start relative"
                  >
                    <div className="hidden sm:flex flex-shrink-0 w-20 h-20 rounded-full border border-gold/20 items-center justify-center bg-white/50 group-hover:bg-gold/5 transition-colors duration-500 shadow-sm relative z-10">
                      <Icon size={32} strokeWidth={1} className="text-gold" />
                    </div>
                    <div className="flex sm:hidden w-16 h-16 rounded-full border border-gold/20 items-center justify-center bg-white/50 group-hover:bg-gold/5 transition-colors duration-500 shadow-sm mb-2">
                       <Icon size={28} strokeWidth={1} className="text-gold" />
                    </div>
                    
                    <span className="font-display text-[64px] md:text-[80px] leading-none text-gold/10 group-hover:text-gold/20 transition-colors duration-500 absolute -top-4 -right-2 md:-top-6 md:-right-6 pointer-events-none z-0">
                      0{idx + 1}
                    </span>
                    <div className="relative z-10 w-full mt-2 sm:mt-0">
                      <h3 className="font-display text-[26px] text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                        {type.name}
                      </h3>
                      <p className="font-body text-[14px] leading-[1.8] text-navy/70 mb-6">
                        {type.desc}
                      </p>
                      <div className="w-full h-px bg-gradient-to-r from-gold/30 to-transparent" />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="mt-20 md:mt-28 text-center max-w-2xl mx-auto"
            >
              <div className="p-8 md:p-10 border border-gold/20 rounded-2xl bg-white/30 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 to-transparent opacity-50 pointer-events-none" />
                <p className="font-body text-[14px] leading-[1.9] text-navy/80 italic relative z-10">
                  <span className="text-gold text-4xl leading-none absolute -top-4 -left-2 opacity-50">"</span>
                  Whether you are looking for a traditional Persian rug, a contemporary design, or a natural fibre rug, Creaticabud's handmade rugs online store has something for everyone. You can buy handmade rugs online and choose from a vast selection of rugs that reflect different styles, cultures, and materials.
                  <span className="text-gold text-4xl leading-none absolute -bottom-6 -right-2 opacity-50">"</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
