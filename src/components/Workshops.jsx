import React from 'react';
import { motion } from 'framer-motion';
import workshop1 from '../assets/workshops/77.jpg';
import workshop2 from '../assets/workshops/C.png';
import workshop3 from '../assets/workshops/3.jpg';

const workshops = [
    {
        title: "Inversion Workshop",
        date: "Coming Soon",
        image: workshop1,
        description: "Conquer your fears and build the foundations for safe, controlled inversions. Shift your perspective as the body turns upside down, bringing clarity, trust, balance, and renewed energy."
    },
    {
        title: "Core & Strength",
        date: "Monthly Focus",
        image: workshop2,
        description: "A deep dive into building the functional core strength necessary to support advanced asana and daily movement."
    },
    {
        title: "Backbends Focus",
        date: "Coming Soon",
        image: workshop3,
        description: "Open the heart and safely explore spinal extension. Learn the biomechanics of deep, supported backbending."
    }
];

const Workshops = () => {
    return (
        <section id="workshops" className="py-28 bg-soft-beige">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
                    <div>
                        <div className="w-10 h-1 bg-olive rounded-full mb-8"></div>
                        <h2 className="text-[11px] uppercase tracking-[0.4em] text-olive font-semibold mb-5">Deep Dives</h2>
                        <h3 className="text-3xl md:text-5xl font-serif text-muted-black">Themed Workshops</h3>
                    </div>
                    <a
                        href="https://wa.me/35677418079"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-black/60 border-b border-muted-black/20 pb-1 hover:text-olive hover:border-olive transition-all duration-500"
                    >
                        Inquire about schedule →
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {workshops.map((workshop, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="bg-white overflow-hidden rounded-2xl border border-black/5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-700 group flex flex-col"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={workshop.image}
                                    alt={workshop.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-olive/10 text-olive text-[10px] uppercase tracking-[0.2em] font-semibold mb-5 w-fit">{workshop.date}</div>
                                <h4 className="text-xl font-serif mb-4 text-muted-black">{workshop.title}</h4>
                                <p className="text-muted-black/50 font-light leading-relaxed mb-8 flex-grow text-sm">
                                    {workshop.description}
                                </p>
                                <div className="w-full h-px bg-gradient-to-r from-olive/20 via-olive/10 to-transparent mt-auto"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <div className="max-w-4xl mx-auto text-center mt-32 px-6">
                <h2 className="text-4xl md:text-5xl font-serif text-muted-black mb-4 italic">Ready to move, breathe, and grow?</h2>
                <p className="text-muted-black/40 font-light mb-10">Start your journey today with a personalized session.</p>
                <a
                    href="https://wa.me/35677418079"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-olive hover:bg-olive-light text-white px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-500 shadow-[0_4px_20px_rgba(107,158,120,0.3)] hover:shadow-[0_8px_30px_rgba(107,158,120,0.4)] hover:-translate-y-0.5"
                >
                    Contact me on WhatsApp
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>
        </section>
    );
};

export default Workshops;
