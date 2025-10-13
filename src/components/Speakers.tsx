import { User } from 'lucide-react';

const Speakers = () => {
  const speakers = [
    {
      name: 'Dr. Ben Goertzel',
      title: 'CEO of SingularityNET',
      role: 'Judge',
      bio: 'Ben Goertzel is a computer scientist, artificial intelligence researcher, and businessman. He helped popularize the term artificial general intelligence.',
      image: '/image copy copy copy copy copy.png',
    },
    {
      name: 'Ibby Benali',
      title: 'ASI Dev Lead Science Technology and Engineering',
      role: 'Judge',
      bio: 'ASI Dev Lead for Science, Technology, and Engineering, driving technical innovation and engineering excellence at the forefront of artificial superintelligence development.',
      image: '/WhatsApp Image 2025-10-13 at 12.24.40 PM.jpeg',
    },
    {
      name: 'Guillermo Lucero',
      title: 'Senior Project Manager',
      role: 'Judge',
      bio: 'Senior Project Manager, researcher, and developer from Argentina with 20+ years in tech, media, and civic innovation. LatAm Community Lead for SingularityNET and the ASI Alliance, leading AI-driven governance frameworks for human-centered development.',
      image: '/WhatsApp Image 2025-10-10 at 12.49.22 AM.jpeg',
    },
    {
      name: 'Nefertiti Angelica Strong',
      title: 'Co-founder Beyond The Code and XR Agency',
      role: 'Judge',
      bio: 'Co-founder of Beyond The Code and XR Agency, pioneering the intersection of extended reality and innovative technology solutions. Passionate about bridging the digital divide and empowering communities through immersive technology experiences.',
      image: '/5075937387623418765.jpg',
    },
    {
      name: 'Sam',
      title: 'Wada.org',
      role: 'Judge',
      bio: 'Judge representing Wada.org, bringing expertise and insight to evaluate innovative solutions and emerging technologies.',
      image: '/WhatsApp Image 2025-10-09 at 1.22.35 PM.jpeg',
    },
    {
      name: 'Saskia Betz',
      title: 'Co-founder Beyond The Code and XR Agency',
      role: 'Judge',
      bio: 'Co-founder of Beyond The Code and XR Agency, driving innovation in extended reality and technology education. Dedicated to creating inclusive tech spaces and advancing immersive experiences that shape the future of digital interaction.',
      image: '/Saskia Betz.jpg',
    },
    {
      name: 'Vincent',
      title: 'Founder, Adamur BASIX Partners',
      role: 'Judge',
      bio: 'Founder of Adamur BASIX Partners, bringing entrepreneurial vision and strategic expertise to evaluate innovative ventures.',
      image: '/image.png',
    },
    {
      name: 'Janie',
      title: 'Founder, Adamur BASIX Partners',
      role: 'Judge',
      bio: 'Co-founder of Adamur BASIX Partners, driving innovation and strategic partnerships in the tech ecosystem.',
      image: '/image copy copy.png',
    },
    {
      name: 'Luke Gniwecki',
      title: 'Head of AI Compute Product',
      role: 'Judge',
      bio: 'Head of AI Compute Product, leading the development of cutting-edge AI infrastructure and computational solutions.',
      image: '/WhatsApp Image 2025-10-07 at 8.49.46 PM.jpeg',
    },
    {
      name: 'Wendwossen Dufera',
      title: 'Machine Learning Engineer',
      role: 'Judge',
      bio: 'Machine Learning Engineer bringing expertise in developing and deploying advanced ML models and AI solutions.',
      image: '/image copy copy copy.png',
    },
    {
      name: 'Nahom Senay',
      title: 'Machine Learning Engineer',
      role: 'Judge',
      bio: 'Machine Learning Engineer with deep expertise in ML model development, deployment, and innovative AI solutions.',
      image: '/image copy copy copy copy.png',
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#14a19f] rounded-full filter blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Judges</h2>
          <div className="w-24 h-1 bg-[#14a19f] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border-2 border-gray-700 hover:border-[#14a19f] card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center border-2 border-gray-600 group-hover:border-[#14a19f] group-hover:shadow-[0_0_30px_rgba(20,161,159,0.4)] transition-all duration-300 overflow-hidden">
                  {speaker.image ? (
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-12 h-12 text-[#14a19f] group-hover:scale-110 transition-transform" />
                  )}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 group-hover:text-[#14a19f] transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{speaker.title}</p>
                <span className="inline-block px-3 py-1 bg-[#14a19f]/20 text-[#14a19f] text-xs font-semibold rounded-full mb-3">
                  {speaker.role}
                </span>
                {speaker.bio && <p className="text-sm text-gray-400 leading-relaxed">{speaker.bio}</p>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Speakers;
