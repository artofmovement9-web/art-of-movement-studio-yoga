import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
        <path d="M11.996.002A12.016 12.016 0 000 12c0 2.128.558 4.256 1.621 6.115L.17 24l6.024-1.579a11.966 11.966 0 005.802 1.488 12.014 12.014 0 0012-11.907C24.004 5.385 18.63 0 11.996.002zm0 19.982a9.98 9.98 0 01-5.1-1.385l-.365-.218-3.793.993.999-3.697-.244-.38a9.99 9.99 0 01-1.485-5.32c0-5.508 4.49-9.988 10-9.988 5.511 0 9.997 4.48 9.997 9.991 0 5.51-4.486 9.998-10.009 10.004zm5.498-7.513c-.302-.151-1.782-.879-2.056-.979-...274-.101-.476-.151-.676.151-...201.302-.782.979-.958 1.18-.176.202-.352.228-.654.076a8.216 8.216 0 01-2.42-1.493 8.937 8.937 0 01-1.666-2.072c-.176-.302-.02-.465.132-.616.136-.135.302-.352.454-.528.151-.176.201-.302.302-.503.1-.2.05-.377-.025-.528-.076-.151-.676-1.631-.926-2.235-.245-.589-.494-.509-.676-.519-.176-.009-.377-.009-.578-.009A1.1 1.1 0 005.5 5.532c-.302.302-1.157 1.132-1.157 2.76 0 1.63 1.182 3.207 1.346 3.42.164.214 2.33 3.559 5.638 4.981 2.324.996 3.109.914 3.666.864.558-.05 1.782-.729 2.033-1.433.251-.704.251-1.308.176-1.434-.076-.126-.277-.201-.579-.352z" fillRule="evenodd" />
    </svg>
);

const WhatsAppCTA = () => {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 200);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3 md:bottom-8 md:right-8">
            {/* Back to top */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : 10 }}
                className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-500 group bg-white border border-olive/15 text-muted-black hover:bg-soft-sage hover:shadow-[0_4px_20px_rgba(107,158,120,0.1)]"
                aria-label="Back to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform duration-300">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </motion.button>

            {/* WhatsApp */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.5 }}>
                <a
                    href="https://wa.me/35677418079"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300"
                    aria-label="Contact us on WhatsApp"
                >
                    <WhatsAppIcon />
                </a>
            </motion.div>
        </div>
    );
};

export default WhatsAppCTA;
