import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#14a19f] rounded-full filter blur-[150px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#0d7775] rounded-full filter blur-[150px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500 rounded-full filter blur-[120px] opacity-20"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl backdrop-blur-sm border border-[#14a19f]/30 shadow-2xl hover:shadow-[0_0_40px_rgba(20,161,159,0.4)] transition-all duration-300">
            <img
              src="/25BGISUMMIT_small-logo.png"
              alt="BGI Summit 2025"
              className="h-20 w-auto"
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 glow-text">
          BGI Hackathon 2025
        </h1>

        <p className="text-3xl sm:text-4xl font-semibold text-white mb-6" style={{ textShadow: '0 2px 10px rgba(20, 161, 159, 0.5)' }}>
          AGI Without Borders
        </p>

        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Join developers, designers, and dreamers shaping the next wave of tech innovation.
        </p>

        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/60 via-gray-900/80 to-gray-800/60 backdrop-blur-md rounded-2xl border-2 border-[#14a19f] p-8 shadow-[0_0_50px_rgba(20,161,159,0.4)]">
            <div className="text-center">
              <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mb-2">Hackathon Dates</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                October 14-25
              </p>
              <p className="text-lg sm:text-xl text-[#14a19f] font-semibold mt-1">2025</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#tracks"
            className="px-8 py-4 bg-gradient-to-r from-[#14a19f] to-[#0d7775] text-white rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
            style={{ boxShadow: '0 10px 40px rgba(20, 161, 159, 0.5)' }}
          >
            View Tracks
          </a>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#14a19f] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;