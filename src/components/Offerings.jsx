import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/offerings/1.jpg';
import img2 from '../assets/offerings/2.jpg';
import img3 from '../assets/offerings/3.jpg';
import img4 from '../assets/offerings/4.jpg';
import img5 from '../assets/offerings/5.jpg';
import img6 from '../assets/offerings/8.jpg';
import img7 from '../assets/offerings/7.jpg';
import img8 from '../assets/offerings/14.jpg';

const offerings = [
    { title: "Hatha Yoga", image: img2, description: "A gentle introduction to basic postures. Focus on alignment, breathing, and finding stillness." },
    { title: "Vinyasa Flow", image: img5, description: "A dynamic flow linking breath with movement. Build heat, endurance, and grace." },
    { title: "Power Yoga", image: img7, description: "An intense practice inspired from ashtanga yoga." },
    { title: "Meditation", image: img4, description: "Cultivate inner peace and mental clarity through guided pranayama practices and silent presence." },
    { title: "Private Sessions", image: img1, description: "Personalized guidance tailored to your specific goals, physical needs, and practice level." },
    { title: "Workshops", image: img3, description: "In-depth explorations of specific themes, anatomy, and advanced transitions in a group setting." },
    { title: "Breathwork", image: img6, description: "Master the art of Pranayama to regulate your nervous system and expand your vital energy." },
    { title: "Corporate Wellness", image: img8, description: "Bringing mindfulness to the workplace to reduce stress and improve team focus and vitality." }
];

const Offerings = () => {
    return (
        <section id="classes" className="py-28 bg-soft-beige">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="text-center mb-20">
                    <div className="w-10 h-1 bg-olive rounded-full mx-auto mb-8"></div>
                    <h2 className="text-[11px] uppercase tracking-[0.4em] text-olive font-semibold mb-5">What I Teach</h2>
                    <h3 className="text-3xl md:text-5xl font-serif text-muted-black">The Art of Practice</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white overflow-hidden rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-700 group hover:-translate-y-1"
                        >
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={offering.image}
                                    alt={offering.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="w-8 h-[2px] bg-olive rounded-full mb-4 group-hover:w-14 transition-all duration-500 ease-out"></div>
                                <h4 className="text-lg font-serif mb-3">{offering.title}</h4>
                                <p className="text-muted-black/50 leading-relaxed font-light text-sm">
                                    {offering.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offerings;
