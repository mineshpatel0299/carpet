import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface CardData {
    id: number | string;
    title: string;
    description: string;
    color: string;
    icon?: React.FC | any;
    roman?: string;
    image?: string;
}

interface CardProps {
    id: number | string;
    title: string;
    description: string;
    index: number;
    totalCards: number;
    color: string;
    icon?: React.FC | any;
    roman?: string;
    image?: string;
}

const Card: React.FC<CardProps> = ({ title, description, index, totalCards, color, icon: Icon, roman, image }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const container = containerRef.current;
        if (!card || !container) return;

        const targetScale = 1 - (totalCards - index) * 0.05;

        // Set initial state
        gsap.set(card, {
            scale: 1,
            transformOrigin: "center top"
        });

        // Create scroll trigger for stacking effect
        ScrollTrigger.create({
            trigger: container,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const scale = gsap.utils.interpolate(1, targetScale, progress);

                gsap.set(card, {
                    scale: Math.max(scale, targetScale),
                    transformOrigin: "center top"
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [index, totalCards]);

    return (
        <div
            ref={containerRef}
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'sticky',
                top: 0
            }}
        >
            <div
                ref={cardRef}
                style={{
                    position: 'relative',
                    maxWidth: '1200px',
                    height: '500px',
                    borderRadius: '32px',
                    isolation: 'isolate',
                    top: `calc(-5vh + ${index * 25}px)`,
                    transformOrigin: 'top'
                }}
                className="card-content w-[96%] lg:w-[100%] max-w-[1200px]"
            >
                {/* Electric Border Effect adapted for Luxury Theme */}
                <div
                    style={{
                        position: 'absolute',
                        inset: '-2px',
                        borderRadius: '34px',
                        padding: '2px',
                        background: `conic-gradient(
                            from 0deg,
                            transparent 0deg,
                            ${color} 60deg,
                            rgba(184, 134, 69, 0.6) 120deg,
                            transparent 180deg,
                            rgba(184, 134, 69, 0.4) 240deg,
                            transparent 360deg
                        )`,
                        zIndex: -1,
                        opacity: 0.6
                    }}
                />

                {/* Main Card Content */}
                <div className="bg-white/70 backdrop-blur-2xl border border-gold/20" style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    borderRadius: '32px',
                    boxShadow: `
                        0 20px 50px rgba(14, 27, 45, 0.08),
                        0 2px 8px rgba(184, 134, 69, 0.05),
                        inset 0 1px 0 rgba(255, 255, 255, 0.6),
                        inset 0 -1px 0 rgba(255, 255, 255, 0.2)
                    `,
                    overflow: 'hidden'
                }}>
                    
                    {/* Content Section */}
                    <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 relative z-10">
                        {/* Icon & Roman Numeral Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-full bg-gold/5 blur-xl pointer-events-none" />
                                <div className="w-16 h-16 rounded-2xl bg-navy/5 border border-gold/10 flex items-center justify-center">
                                    {Icon && <Icon />}
                                </div>
                            </div>
                            {roman && (
                                <span className="font-display text-gold/30 text-4xl font-light select-none tracking-widest">
                                    {roman}
                                </span>
                            )}
                        </div>

                        <h3 className="font-display text-3xl md:text-4xl text-navy mb-6">
                            {title}
                        </h3>

                        <p className="font-body text-base md:text-lg leading-[1.8] text-navy/70">
                            {description}
                        </p>

                        <div className="mt-10 pt-8 border-t border-gold/15 flex items-center justify-between">
                            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/80">
                                Heritage Craft
                            </span>
                            <span className="text-gold">
                                →
                            </span>
                        </div>
                    </div>

                    {/* Image Section (Right side) */}
                    {image && (
                        <div className="hidden md:block w-5/12 relative border-l border-gold/10">
                            <img 
                                src={image} 
                                alt={title} 
                                className="w-full h-full object-cover"
                            />
                            {/* Inner Shadow overlay */}
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/30 mix-blend-overlay" />
                        </div>
                    )}

                    {/* Glass shine effect */}
                    <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        right: '10px',
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
                        pointerEvents: 'none'
                    }} />

                    {/* Side glass reflection */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '1px',
                        height: '100%',
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, transparent 50%)',
                        pointerEvents: 'none'
                    }} />

                    {/* Frosted glass texture */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(184,134,69,0.03) 1px, transparent 2px),
                            radial-gradient(circle at 80% 70%, rgba(14,27,45,0.02) 1px, transparent 2px)
                        `,
                        backgroundSize: '30px 30px, 25px 25px',
                        pointerEvents: 'none',
                        opacity: 0.8
                    }} />
                </div>
            </div>
        </div>
    );
};

interface StackedCardsProps {
    cards: CardData[];
    title: React.ReactNode;
    subtitle?: React.ReactNode;
}

export const StackedCards: React.FC<StackedCardsProps> = ({ cards, title, subtitle }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        gsap.fromTo(container,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.2,
                ease: "power2.out"
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="w-full relative">
            {/* Hero Section */}
            <div style={{
                height: '50vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    {subtitle && (
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-10 h-px bg-gold/30" />
                            <span className="font-body text-[9px] tracking-[0.4em] uppercase text-gold font-semibold">
                                {subtitle}
                            </span>
                            <div className="w-10 h-px bg-gold/30" />
                        </div>
                    )}
                    <div className="font-display font-normal text-[32px] md:text-[48px] lg:text-[56px] leading-[1.1] text-navy mb-6">
                        {title}
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div style={{ width: '100%', paddingBottom: '10vh' }}>
                {cards.map((card, index) => {
                    return (
                        <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            index={index}
                            totalCards={cards.length}
                            color={card.color}
                            icon={card.icon}
                            roman={card.roman}
                            image={card.image}
                        />
                    );
                })}
            </div>
        </div>
    );
};
