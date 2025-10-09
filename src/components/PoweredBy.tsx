const PoweredBy = () => {
  const partners = [
    {
      name: 'BTC',
      logo: '/24_BTC-LogoBLCK (1).png',
      url: 'https://www.btc.com',
    },
    {
      name: 'SingularityNET',
      logo: '/SingularityNET.png',
      url: 'https://singularitynet.io',
    },
    {
      name: 'Wada',
      logo: '/Wada-RGB_Logo-Full-Alternative-Color (1).png',
      url: 'https://www.wada.org',
    },
    {
      name: 'XR Agency',
      logo: '/24_Ci-XRAGENCYCO_blk.png',
      url: 'https://xragency.co',
    },
  ];

  return (
    <section id="powered-by" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#14a19f] rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Powered By</h2>
          <p className="text-xl text-gray-400">Our amazing partners and supporters</p>
          <div className="w-24 h-1 bg-[#14a19f] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-stretch">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-32 md:h-36 p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-xl border-2 border-gray-700 hover:border-[#14a19f] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(20,161,159,0.3)]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-16 md:h-20 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
