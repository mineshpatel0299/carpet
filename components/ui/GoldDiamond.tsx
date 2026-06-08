export default function GoldDiamond({ className = '' }: { className?: string }) {
  return (
    <span className={`text-gold text-[8px] tracking-widest opacity-60 ${className}`}>
      ◆
    </span>
  )
}
