import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, User, Users } from 'lucide-react';

const sessions = [
    {
        icon: <MapPin className="w-7 h-7 text-olive" strokeWidth={1.5} />,
        title: "Studio Classes",
        description: "Multi-level yoga classes taught in various serene locations across Malta."
    },
    {
        icon: <User className="w-7 h-7 text-olive" strokeWidth={1.5} />,
        title: "Private Sessions",
        description: "One-on-one tailored yoga sessions designed to meet your specific goals and needs."
    },
    {
        icon: <Users className="w-7 h-7 text-olive" strokeWidth={1.5} />,
        title: "Small Groups",
        description: "Intimate at-home yoga classes for you and your friends, moving together."
    }
];

const Sessions = () => {
    return (
        <section id="sessions" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="text-center mb-20">
                    <div className="w-10 h-1 bg-olive rounded-full mx-auto mb-8"></div>
                    <h2 className="text-[11px] uppercase tracking-[0.4em] text-olive font-semibold mb-5">Types of Sessions</h2>
                    <h3 className="text-3xl md:text-5xl font-serif text-muted-black">How We Move</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {sessions.map((session, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="flex flex-col items-center md:items-start p-10 rounded-2xl bg-soft-sage/50 border border-olive/8 hover:bg-soft-sage hover:shadow-[0_8px_30px_rgba(107,158,120,0.08)] transition-all duration-700 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-olive/10 flex items-center justify-center mb-6 group-hover:bg-olive/15 transition-colors duration-500">
                                {session.icon}
                            </div>
                            <h4 className="text-xl font-serif mb-4">{session.title}</h4>
                            <p className="text-muted-black/50 font-light leading-relaxed">
                                {session.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sessions;
