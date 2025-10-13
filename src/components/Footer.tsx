import { Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
  ];

  const organizersAndPartners = [
    { name: 'BGI', url: 'https://bgisummit.io' },
    { name: 'ASI Alliance', url: 'https://superintelligence.io' },
    { name: 'SingularityNET', url: 'https://singularitynet.io' },
    { name: 'WADA', url: 'https://wada.org' },
    { name: 'BeyondTheCode.ai', url: 'https://beyondthecode.ai' },
    { name: 'XR Agency', url: 'https://xragency.co' },
    { name: 'Blockchain Centre', url: 'https://blockchaincentrenbo.com' },
    { name: 'Adamur', url: 'https://adamur.io' },
    { name: 'Fetch.ai', url: 'https://fetch.ai' },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 border-t border-gray-800 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-[#14a19f] rounded-full filter blur-[150px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-[#14a19f]" />
              <span className="text-xl font-bold text-white">BGI Hackathon</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building the future through innovation, collaboration, and technology.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#14a19f] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 mb-8">
          <h3 className="text-white font-semibold mb-4 text-center">Learn more about the organizers and partners:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {organizersAndPartners.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#14a19f] text-sm transition-colors text-center"
              >
                {org.name}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} BGI Hackathon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
