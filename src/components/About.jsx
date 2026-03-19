import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-28 md:py-36 px-6 lg:px-16 max-w-5xl mx-auto bg-white text-center flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
            >
                <div className="w-10 h-1 bg-olive rounded-full mx-auto mb-8"></div>
                <h2 className="text-[11px] uppercase tracking-[0.4em] text-olive font-semibold mb-10">Philosophy</h2>
                <p className="text-2xl md:text-4xl font-serif font-normal leading-relaxed md:leading-[1.5] text-muted-black/85 break-words">
                    "My approach is rooted in <span className="italic text-olive">mindful movement</span>, breath, and alignment.
                    I create a supportive and encouraging environment with personalized attention,
                    helping students progress confidently and enhance wellbeing on and off the mat."
                </p>
            </motion.div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-muted-black/15 to-transparent mt-20"></div>
        </section>
    );
};

export default About;
