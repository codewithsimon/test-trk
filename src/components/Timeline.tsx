import { Rocket, Clock, Code, Video, Globe, Trophy } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      date: 'October 14',
      title: 'Launch Day 🚀',
      description: 'Registrations officially open! The BGI Hackathon 2025 journey begins.',
      icon: Rocket,
    },
    {
      date: 'October 16',
      title: 'Registration Closes 🕔',
      description: 'Last day to sign up and secure your spot in the competition.',
      icon: Clock,
    },
    {
      date: 'October 14–25',
      title: 'Hackathon Week 💻',
      description: 'It\'s go time! Participants collaborate, code, and innovate throughout the week.',
      icon: Code,
    },
    {
      date: 'October 21–22',
      title: 'Live Watch Sessions 🎥',
      description: 'All participants tune in to the BGI Conference Istanbul (BGI25 Unconference) to watch inspiring live sessions and updates.',
      icon: Video,
    },
    {
      date: 'October 23',
      title: 'Live Finals (Hybrid) 🌍',
      description: 'BGI25 Un-Conference - Finalist teams present their projects live — hosted by  SingularityNet.io Wada & Beyondthecode  powered by BGI25hackathon ,Cudos, ASI, Fetch,BGI Nexus, LATAM .',
      icon: Globe,
    },    
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#14a19f] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Hackathon Timeline</h2>
          <p className="text-xl text-gray-400">Your roadmap from registration to celebration</p>
          <div className="w-24 h-1 bg-[#14a19f] mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#14a19f] via-[#0d7775] to-[#14a19f] transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-20 md:pl-0`}>
                    <div
                      className="group bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl border-2 border-gray-700 hover:border-[#14a19f] card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                      }}
                    >
                      <div className="flex items-center mb-3 md:hidden">
                        <div className="p-2 bg-gradient-to-br from-[#14a19f]/20 to-[#0d7775]/20 rounded-lg border border-[#14a19f]/30 mr-3">
                          <Icon className="w-5 h-5 text-[#14a19f]" />
                        </div>
                        <span className="text-[#14a19f] font-bold text-lg">{event.date}</span>
                      </div>

                      <span className="hidden md:inline-block text-[#14a19f] font-bold text-lg mb-2">{event.date}</span>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-[#14a19f] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#14a19f] rounded-full animate-ping opacity-75" style={{ animationDuration: '2s', animationDelay: `${index * 0.3}s` }}></div>
                      <div className="relative p-3 bg-gradient-to-br from-[#14a19f] to-[#0d7775] rounded-full border-4 border-gray-900 shadow-[0_0_30px_rgba(20,161,159,0.6)] hidden md:block">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
