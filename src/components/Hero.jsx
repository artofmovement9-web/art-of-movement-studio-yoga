import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            {/* ─── Hero Section with background image + Discipline Selector ─── */}
            <section id="home" className="relative w-full min-h-screen overflow-hidden pt-[72px]">
                {/* Background Image — full bleed */}
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    <img
                        src="/lala.png"
                        alt="Art of Movement — Yoga & Dance"
                        className="w-full h-full object-cover object-[center_25%] md:object-center scale-[1.05]"
                    />
                    {/* Soft tint overlays to maintain contrast without completely washing out the image */}
                    <div className="absolute inset-0 bg-white/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/90"></div>
                </div>

                {/* Hero Content — brand + discipline choice */}
                <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col justify-center min-h-[calc(100vh-72px)]">

                    {/* Brand Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-center mb-14 px-4 relative"
                    >
                        {/* Soft glow behind text for professional readability */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-[800px] h-[200%] bg-white/50 blur-[60px] rounded-full pointer-events-none z-0"></div>
                        
                        <div className="relative z-10">
                            <h1 className="font-serif text-muted-black text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] leading-[1.1] mb-4 tracking-tight">
                                The Art of <span className="italic text-[#3a5a40]">Movement</span>
                            </h1>
                            <p className="text-muted-black/70 font-bold text-xs md:text-base tracking-[0.3em] uppercase">
                                Yoga · Dance · Mindfulness
                            </p>
                        </div>
                    </motion.div>

                    {/* Discipline Cards */}
                    <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 max-w-4xl mx-auto w-full">

                        {/* ─── Yoga Card ─── */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="flex-1"
                        >
                            <Link
                                to="/yoga"
                                className="group relative overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur-sm border border-white/50 p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[320px] cursor-pointer transition-all duration-700 hover:shadow-[0_24px_80px_rgba(107,158,120,0.2)] hover:-translate-y-2 block h-full shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
                            >
                                {/* Inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-50 pointer-events-none"></div>
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-olive/10 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4 pointer-events-none group-hover:bg-olive/20 transition-all duration-700"></div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-muted-black/5 flex items-center justify-center mb-6 group-hover:bg-muted-black/10 transition-colors duration-500 border border-muted-black/10 shadow-sm">
                                        <svg className="w-6 h-6 text-[#1A1A1A]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 0-2 .8-2 2s.8 2 2 2 2-.8 2-2-.8-2-2-2zM8 21v-5l-2-3 2-4h8l2 4-2 3v5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] mb-2 drop-shadow-sm">
                                        <span className="italic">Yoga</span>
                                    </h3>
                                    <p className="text-[#1A1A1A]/80 font-medium leading-relaxed text-sm md:text-base mb-6">
                                        Breath, alignment & mindful movement — find strength and stillness on the mat.
                                    </p>
                                </div>

                                <div className="relative z-10 flex items-center text-[#1A1A1A] font-bold text-xs uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">
                                    Explore
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>

                                <div className="absolute inset-0 rounded-[2rem] border-2 border-olive/0 group-hover:border-olive/20 transition-all duration-700 pointer-events-none"></div>
                            </Link>
                        </motion.div>

                        {/* ─── Dance Card — Elegant Glassmorphic Lavender ─── */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                            className="flex-1"
                        >
                            <Link
                                to="/dance"
                                className="group relative overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur-sm border border-white/50 min-h-[280px] md:min-h-[320px] cursor-pointer transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(180,130,200,0.25)] block h-full shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
                            >
                                {/* Inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-50 pointer-events-none"></div>
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[#ce93d8]/15 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4 pointer-events-none group-hover:bg-[#ce93d8]/30 transition-all duration-700"></div>

                                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-white/50 backdrop-blur-xl flex items-center justify-center mb-6 group-hover:bg-white/70 transition-colors duration-500 border border-white/60 shadow-sm">
                                            <svg className="w-6 h-6 text-[#7b1fa2]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM5.5 21l3-7.5L12 16l3.5-2.5L18.5 21M7 10l5 3 5-3" />
                                            </svg>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-serif text-[#4a1a6b] mb-2">
                                            <span className="italic">Dance</span>
                                        </h3>
                                        <p className="text-[#5c3a6e]/70 font-light leading-relaxed text-sm md:text-base mb-6">
                                            Movement, expression & connection — contemporary performances and floor-based classes.
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-[#7b1fa2] font-semibold text-xs uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">
                                            Explore
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </div>
                                        <div className="hidden md:flex items-center gap-1.5 opacity-30">
                                            <div className="w-1 h-1 rounded-full bg-[#ce93d8]"></div>
                                            <div className="w-1 h-1 rounded-full bg-[#ce93d8]"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#7b1fa2]"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 rounded-[2rem] border-2 border-[#ce93d8]/0 group-hover:border-[#ce93d8]/25 transition-all duration-700 pointer-events-none"></div>
                            </Link>
                        </motion.div>

                    </div>

                    {/* Trust marker */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-center mt-12"
                    >
                        <p className="text-xs text-muted-black/30 font-medium tracking-wider">Trusted by 200+ students across Malta</p>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Hero;
