import { Users, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-900 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#14a19f] rounded-full filter blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About BGI Hackathon</h2>
          <div className="w-24 h-1 bg-[#14a19f] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-[#14a19f]/50 card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-[#14a19f]/20 to-[#0d7775]/20 rounded-full border border-[#14a19f]/30 group-hover:shadow-[0_0_30px_rgba(20,161,159,0.4)] transition-all duration-300">
                <Globe className="w-12 h-12 text-[#14a19f] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Community</h3>
            <p className="text-gray-400">
              Connect with innovators from around the world
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-[#14a19f]/50 card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-[#14a19f]/20 to-[#0d7775]/20 rounded-full border border-[#14a19f]/30 group-hover:shadow-[0_0_30px_rgba(20,161,159,0.4)] transition-all duration-300">
                <Users className="w-12 h-12 text-[#14a19f] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaborative Environment</h3>
            <p className="text-gray-400">
              Work with talented developers, designers, and creators
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-[#14a19f]/50 card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-[#14a19f]/20 to-[#0d7775]/20 rounded-full border border-[#14a19f]/30 group-hover:shadow-[0_0_30px_rgba(20,161,159,0.4)] transition-all duration-300">
                <Lightbulb className="w-12 h-12 text-[#14a19f] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
            <p className="text-gray-400">
              Build groundbreaking solutions to real-world problems
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300">
          <p>
           In a world rapidly moving toward Artificial General Intelligence (AGI), the real frontier is not just technical—it’s social, ethical, and     planetary. As Ben Goertzel has often said, AGI must be beneficial for all—not just the privileged few.Give ten teams ten tries and allow diversity  to breed discovery
          </p>

          <p>
            BGI25 Hackathon is designed to reflect that ethos. It’s not a competition for code alone. It’s a call to action for young minds in  Turkey ,India and Africa to shape the future of AI that benefits their communities, speaks their languages, respects their histories, and scales with their dreams. To identify and incubate the next generation of AGI-aligned developers, researchers, and creative technologists from India, Kenya, and the global south — using MeTTa, Fetch.AI, and SingularityNET tools to tackle high-impact, real-world challenges.

          </p>

          <p>
          This is not just a hackathon — it's a strategic call to build toward decentralized AGI, aligning with the values and mission of the ASI Alliance and the BGI25 Unconference.
          </p>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://chat.whatsapp.com/bgihackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-lg font-semibold hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300"
          >
            Join our WhatsApp Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
