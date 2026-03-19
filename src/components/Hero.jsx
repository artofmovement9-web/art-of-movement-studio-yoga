import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Background", href: "#bio" },
        { name: "Philosophy", href: "#about" },
        { name: "Classes", href: "#classes" },
        { name: "Retreats", href: "#sessions" },
        { name: "Schedule", href: "#workshops" },
    ];

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* ─── Premium Navigation ─── */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-black/5'
                : 'bg-white'
                }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-[72px]">
                    {/* Logo + Brand */}
                    <button onClick={scrollToTop} className="flex items-center space-x-3 focus:outline-none group">
                        <img src="/meditation-icon.svg" className="w-8 h-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" alt="Logo" />
                        <div className="flex flex-col">
                            <span className="text-muted-black font-semibold text-base tracking-[0.15em] uppercase leading-tight">Art of Movement</span>
                            <span className="text-olive text-[10px] tracking-[0.3em] uppercase font-medium hidden sm:block">Yoga & Mindfulness · Malta</span>
                        </div>
                    </button>

                    {/* Nav Links — Center */}
                    <div className="hidden lg:flex items-center space-x-10 text-[13px] uppercase tracking-[0.2em] text-muted-black/60 font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative py-2 hover:text-muted-black transition-colors duration-400 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-olive after:transition-all after:duration-500 hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA — Right */}
                    <a
                        href="https://wa.me/35677418079"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center bg-olive hover:bg-olive-light text-white px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-500 shadow-[0_4px_20px_rgba(107,158,120,0.3)] hover:shadow-[0_8px_30px_rgba(107,158,120,0.4)] hover:-translate-y-0.5"
                    >
                        Book a Session
                    </a>

                    {/* Hamburger — Mobile */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50 group focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <motion.span animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-[1.5px] bg-muted-black block transition-all origin-center" />
                        <motion.span animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="w-6 h-[1.5px] bg-muted-black block transition-all" />
                        <motion.span animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-[1.5px] bg-muted-black block transition-all origin-center" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white backdrop-blur-xl lg:hidden flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center space-y-6">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="text-muted-black text-2xl font-light tracking-[0.25em] uppercase hover:text-olive transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="pt-4">
                                <a
                                    href="https://wa.me/35677418079"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-8 py-3.5 bg-olive text-white rounded-full font-semibold tracking-[0.2em] text-xs uppercase shadow-lg"
                                >
                                    Book a Session
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ─── Hero Section ─── */}
            <section id="home" className="relative w-full min-h-screen overflow-hidden pt-[72px]">
                {/* Background Image — full bleed */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <img
                        src="/hero-bg.jpg"
                        alt="Yoga on the beach — Art of Movement"
                        className="w-full h-full object-cover object-[center_25%] md:object-center scale-[1.02]"
                    />
                    {/* Subtle warm tint */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cream/50 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/20"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16 flex items-center min-h-[calc(100vh-72px)]">
                    {/* Text Card — Premium frosted panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative bg-white/80 backdrop-blur-2xl rounded-[2rem] p-10 md:p-14 lg:p-16 max-w-lg shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-white/60"
                    >
                        {/* Accent line */}
                        <div className="w-10 h-1 bg-olive rounded-full mb-8"></div>

                        <h1 className="font-serif text-muted-black text-[2.5rem] md:text-[3.2rem] lg:text-[3.6rem] leading-[1.1] mb-6 tracking-tight">
                            Achieve your<br />goals with<br />
                            <span className="italic text-olive">mindful movement</span>
                        </h1>

                        <p className="text-muted-black/50 text-base md:text-lg font-light leading-relaxed mb-10 max-w-sm">
                            Discover a healthier, stronger, and more mindful you — one step at a time, based right here in Malta.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <a
                                href="https://wa.me/35677418079"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center bg-olive hover:bg-olive-light text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-500 shadow-[0_4px_20px_rgba(107,158,120,0.3)] hover:shadow-[0_8px_30px_rgba(107,158,120,0.4)] hover:-translate-y-0.5"
                            >
                                Book a Session
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center border border-muted-black/15 hover:border-olive text-muted-black/70 hover:text-olive px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-500"
                            >
                                Learn More
                            </a>
                        </div>

                        {/* Social proof / trust marker */}
                        <div className="mt-10 pt-8 border-t border-muted-black/5 flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-olive/20 border-2 border-white flex items-center justify-center text-[10px] font-bold text-olive">A</div>
                                <div className="w-8 h-8 rounded-full bg-warm-glow/20 border-2 border-white flex items-center justify-center text-[10px] font-bold text-warm-glow">M</div>
                                <div className="w-8 h-8 rounded-full bg-olive/20 border-2 border-white flex items-center justify-center text-[10px] font-bold text-olive">S</div>
                            </div>
                            <p className="text-xs text-muted-black/40 font-medium">Trusted by 200+ students across Malta</p>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Badges — right side, staggered */}
                <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="absolute top-[20%] right-[6%] glass-panel-light rounded-2xl px-5 py-3 animate-float"
                    >
                        <span className="text-[11px] text-muted-black/70 tracking-wider font-semibold uppercase">↗ Flexibility</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="absolute top-[48%] right-[3%] glass-panel-light rounded-2xl px-5 py-3 animate-float-delayed"
                    >
                        <span className="text-[11px] text-muted-black/70 tracking-wider font-semibold uppercase">↗ Balance</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="absolute bottom-[18%] right-[10%] glass-panel-light rounded-2xl px-5 py-3 animate-float"
                    >
                        <span className="text-[11px] text-muted-black/70 tracking-wider font-semibold uppercase">↗ Mindfulness</span>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Hero;
