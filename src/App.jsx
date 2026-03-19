import React from 'react';
import Hero from './components/Hero';
import Bio from './components/Bio';
import About from './components/About';
import Offerings from './components/Offerings';
import Sessions from './components/Sessions';
import Philosophy from './components/Philosophy';
import Workshops from './components/Workshops';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';

function App() {
  return (
    <div className="bg-white min-h-screen font-sans text-muted-black selection:bg-olive selection:text-white">
      <Hero />
      <main>
        <Bio />
        <About />
        <Offerings />
        <Sessions />
        <Philosophy />
        <Workshops />
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}

export default App;
