import { Brain, Scale, Newspaper, ShieldAlert, Globe } from 'lucide-react';

const Tracks = () => {
  const tracks = [
    {
      title: 'AGI + Cultural Memory',
      description: 'Preserve and enhance cultural heritage through AGI. Build systems that understand, protect, and share cultural knowledge across generations.',
      icon: Brain,
    },
    {
      title: 'Explainable AI for Civic Decision-Making',
      description: 'Create transparent AI systems that support democratic processes. Build tools that make AI decisions understandable and accountable for civic use.',
      icon: Scale,
    },
    {
      title: 'Decentralized News & Media Integrity',
      description: 'Combat misinformation and restore trust in media. Develop decentralized solutions for authentic journalism and verified information.',
      icon: Newspaper,
    },
    {
      title: 'Protecting People from AI Harm',
      description: 'Build safeguards for young users in an AI-powered world. Create systems that protect children from harmful AI-generated content and interactions.',
      icon: ShieldAlert,
    },   
  ];

  return (
    <section id="tracks" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#14a19f] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Hackathon Tracks</h2>
          <p className="text-xl text-gray-400">Choose your innovation path</p>
          <div className="w-24 h-1 bg-[#14a19f] mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-xl border-2 border-gray-700 hover:border-[#14a19f] card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-gradient-to-br from-[#14a19f]/20 to-[#0d7775]/20 rounded-xl border border-[#14a19f]/30 group-hover:border-[#14a19f] group-hover:shadow-[0_0_30px_rgba(20,161,159,0.4)] transition-all duration-300">
                      <Icon className="w-10 h-10 text-[#14a19f] group-hover:glow-text transition-all" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#14a19f] transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{track.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
