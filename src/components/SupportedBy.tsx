const SupportedBy = () => {
  const supporters = [
    {
      name: 'XR Agency',
      logo: '/24_Ci-XRAGENCYCO_blk.png',
      url: 'https://xragency.co',
    },
    {
      name: 'Adamour',
      logo: '/image copy copy copy copy copy copy.png',
      url: 'https://adamour.com',
    },
    {
      name: 'iCog Labs',
      logo: '/1631406205902-removebg-preview.png',
      url: 'https://icog-labs.com',
    },
    {
      name: 'Fetch.ai',
      logo: '/Primary logo_black.png',
      url: 'https://fetch.ai',
    },
    {
      name: 'BGI Nexus',
      logo: '/BGI_NEXUS_01_BLACK@2x-8.png',
      url: 'https://bgicollective.singularitynet.io/',
    },
    {
      name: 'LATAM',
      logo: '/WhatsApp_Image_2025-10-10_at_1.18.24_AM-removebg-preview copy.png',
      url: '#',
    },
    {
      name: 'Blockchain Centre',
      logo: '/image-removebg-preview.png',
      url: '#',
    },
  ];

  return (
    <section id="supported-by" className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-[#14a19f] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Supported By</h2>
          <p className="text-xl text-gray-400">Organizations backing our vision</p>
          <div className="w-24 h-1 bg-[#14a19f] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-stretch">
          {supporters.map((supporter, index) => (
            <a
              key={index}
              href={supporter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-32 md:h-36 p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-xl border-2 border-gray-700 hover:border-[#14a19f] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(20,161,159,0.3)]"
            >
              <img
                src={supporter.logo}
                alt={supporter.name}
                className="max-w-full h-16 md:h-20 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
