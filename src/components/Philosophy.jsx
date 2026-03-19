import React from 'react';
import { motion } from 'framer-motion';

const philosophyPoints = [
    "Tailored practices suitable for all levels, from beginners to advanced practitioners.",
    "Deep focus on mindful movement, building functional strength, and improving flexibility.",
    "Emphasis on proper alignment to ensure longevity and safety in your practice.",
    "Pranayama (breathwork) techniques to deepen the practice, calm the nervous system, and access stronger postures."
];

const Philosophy = () => {
    return (
        <section className="py-32 bg-soft-sage relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-olive/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-olive/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 lg:px-16 relative z-10 flex flex-col md:flex-row items-start gap-16 md:gap-20">
                <div className="md:w-1/3 md:sticky md:top-32">
                    <div className="w-10 h-1 bg-olive rounded-full mb-8"></div>
                    <h2 className="text-[11px] uppercase tracking-[0.4em] text-olive font-semibold mb-6">Session Focus</h2>
                    <h3 className="text-3xl md:text-5xl font-serif italic text-muted-black leading-snug">The Philosophy</h3>
                </div>

                <div className="md:w-2/3 space-y-10">
                    {philosophyPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="flex items-start gap-6 group p-6 rounded-2xl hover:bg-white/60 transition-all duration-500"
                        >
                            <span className="text-olive text-2xl font-serif mt-1 opacity-40 group-hover:opacity-100 transition-opacity min-w-[40px]">0{index + 1}</span>
                            <p className="text-lg md:text-xl font-light leading-relaxed text-muted-black/60 group-hover:text-muted-black/85 transition-colors">
                                {point}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
