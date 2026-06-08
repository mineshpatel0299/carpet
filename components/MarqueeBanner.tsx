const rowA = [
  'Agra — Mughal Heritage', 'Jaipur — Royal Weaves', 'Varanasi — Silk Tradition',
  'Bhadohi — Carpet Capital', 'Mirzapur — Hand Knotted', 'Kashmir — Pure Silk',
  'Panipat — Tufted Craft', 'Bikaner — Desert Motifs', 'Jodhpur — Dhurrie Art',
]
const rowB = [
  'Warangal — Pochampally', 'Amritsar — Wool Masters', 'Gwalior — Pashmina Rugs',
  'Srinagar — Namdah Craft', 'Rajasthan — Block Print', 'Uttar Pradesh — Zari Work',
  'Hyderabad — Nizam Style', 'Bhuj — Kutchi Weaves', 'Kannur — Kerala Mats',
]

function Strip({ items, reverse }: { items: string[]; reverse: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {doubled.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="font-body font-light text-[8px] tracking-[0.35em] uppercase px-8 whitespace-nowrap cursor-default text-stone-light/28">
            {item}
          </span>
          <span className="text-gold/20 text-[5px]">◆</span>
        </span>
      ))}
    </div>
  )
}

export default function MarqueeBanner() {
  return (
    <div className="bg-midnight border-y border-parchment/5 py-0 overflow-hidden marquee-fade">
      <div className="py-2.5 overflow-hidden">
        <Strip items={rowA} reverse={false} />
      </div>
      <div className="border-t border-parchment/5 py-2.5 overflow-hidden">
        <Strip items={rowB} reverse={true} />
      </div>
    </div>
  )
}
