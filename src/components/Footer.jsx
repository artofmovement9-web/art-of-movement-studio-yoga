import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-soft-beige border-t border-olive/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img src="/meditation-icon.svg" className="w-7 h-7" alt="Logo" />
                            <span className="text-muted-black font-semibold text-lg tracking-[0.1em] uppercase">Art of Movement</span>
                        </div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-olive mb-4">Yoga & Mindfulness · Malta</p>
                        <p className="text-muted-black/40 text-sm font-light max-w-xs">Creating a space for self-discovery through the art of yoga and mindfulness.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-muted-black/60 mb-6">Navigate</h5>
                        <div className="flex flex-col space-y-3 text-sm font-light text-muted-black/50">
                            <a href="#bio" className="hover:text-olive transition-colors">Background</a>
                            <a href="#about" className="hover:text-olive transition-colors">Philosophy</a>
                            <a href="#classes" className="hover:text-olive transition-colors">Classes</a>
                            <a href="#sessions" className="hover:text-olive transition-colors">Retreats</a>
                            <a href="#workshops" className="hover:text-olive transition-colors">Schedule</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-muted-black/60 mb-6">Connect</h5>
                        <div className="flex flex-col space-y-3 text-sm font-light text-muted-black/50">
                            <a href="https://instagram.com/art_of_movement_body_flow" target="_blank" rel="noopener noreferrer" className="hover:text-olive transition-colors">
                                Instagram
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100083931552309" target="_blank" rel="noopener noreferrer" className="hover:text-olive transition-colors">
                                Facebook
                            </a>
                            <a href="https://wa.me/35677418079" target="_blank" rel="noopener noreferrer" className="hover:text-olive transition-colors">
                                WhatsApp
                            </a>
                            <a
                                href="mailto:artofmovement9@gmail.com"
                                className="hover:text-olive transition-colors"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-olive/8">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-muted-black/30 font-light tracking-wider">
                    <span>&copy; {new Date().getFullYear()} Art of Movement — Yoga Flow</span>
                    <span className="mt-2 md:mt-0">Based in Malta</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
