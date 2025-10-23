import { Menu, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Navigation = ({ isMobileMenuOpen, setIsMobileMenuOpen }: NavigationProps) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prize Pool', href: '#prizes' },
    { name: 'Judges', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Hack Pack', href: '/hackpack', isRoute: true },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95 backdrop-blur-xl border-b border-[#14a19f]/20" style={{ boxShadow: '0 10px 50px rgba(0, 0, 0, 0.7), 0 0 20px rgba(20, 161, 159, 0.15)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2 group">
              <Zap className="w-8 h-8 text-[#14a19f] group-hover:glow-text transition-all" />
              <span className="text-xl font-bold text-white">BGI Hackathon</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-300 hover:text-[#14a19f] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-[#14a19f] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-[#14a19f] p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleNavClick}
                  className="block text-gray-300 hover:text-[#14a19f] px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-gray-300 hover:text-[#14a19f] px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
