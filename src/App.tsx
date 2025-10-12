import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import PoweredBy from './components/PoweredBy';
import SupportedBy from './components/SupportedBy';
import Footer from './components/Footer';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Prizes />
      <Speakers />
      <Schedule />
      <PoweredBy />
      <SupportedBy />
      <Footer />
    </div>
  );
}

export default App;
