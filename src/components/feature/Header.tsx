import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const whatsappMessage = encodeURIComponent('Merhaba, areaelektrik.com web siteniz üzerinden yazıyorum.');
const whatsappLink = `https://wa.me/905336429211?text=${whatsappMessage}`;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://static.readdy.ai/image/f7a5d02425e0675ec2bf06c3a77d9570/e61c1ac28d4e8b1464c369fa1e02a647.png"
              alt="Area Elektrik Logo"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#1a1a1a] font-medium transition-colors relative group whitespace-nowrap text-sm"
            >
              Ana Sayfa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4b896] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/hakkimizda"
              className="text-gray-700 hover:text-[#1a1a1a] font-medium transition-colors relative group whitespace-nowrap text-sm"
            >
              Hakkımızda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4b896] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/hizmetler"
              className="text-gray-700 hover:text-[#1a1a1a] font-medium transition-colors relative group whitespace-nowrap text-sm"
            >
              Hizmetler
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4b896] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/projeler"
              className="text-gray-700 hover:text-[#1a1a1a] font-medium transition-colors relative group whitespace-nowrap cursor-pointer text-sm"
            >
              Projeler
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4b896] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/blog"
              className="text-gray-700 hover:text-[#1a1a1a] font-medium transition-colors relative group whitespace-nowrap cursor-pointer text-sm"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4b896] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/iletisim"
              className="text-gray-700 hover:text-[#1a1a1a] font-medium transition-colors relative group whitespace-nowrap cursor-pointer text-sm"
            >
              İletişim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4b896] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+905336429211"
              className="flex items-center gap-2 text-[#1a2332] hover:text-[#c8a96e] transition-colors whitespace-nowrap cursor-pointer text-sm"
            >
              <i className="ri-phone-line text-lg"></i>
              <span className="font-medium">0533 642 92 11</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a] px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer text-sm"
              style={{ backgroundColor: '#d4b896' }}
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#1a2332] cursor-pointer"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-[#1a2332] font-medium whitespace-nowrap text-sm"
            >
              Ana Sayfa
            </Link>
            <Link
              to="/hakkimizda"
              className="block py-2 text-gray-700 hover:text-[#1a2332] font-medium whitespace-nowrap text-sm"
            >
              Hakkımızda
            </Link>
            <Link
              to="/hizmetler"
              className="block py-2 text-gray-700 hover:text-[#1a2332] font-medium whitespace-nowrap text-sm"
            >
              Hizmetler
            </Link>
            <Link
              to="/projeler"
              className="block py-2 text-gray-700 hover:text-[#1a2332] font-medium whitespace-nowrap text-sm"
            >
              Projeler
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-gray-700 hover:text-[#1a2332] font-medium whitespace-nowrap text-sm"
            >
              Blog
            </Link>
            <Link
              to="/iletisim"
              className="block py-2 text-gray-700 hover:text-[#1a2332] font-medium whitespace-nowrap text-sm"
            >
              İletişim
            </Link>
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <a
                href="tel:+905336429211"
                className="flex items-center gap-2 py-2 text-[#1a2332] font-medium whitespace-nowrap cursor-pointer text-sm"
              >
                <i className="ri-phone-line"></i>
                0533 642 92 11
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-[#1a1a1a] px-4 py-2 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 text-sm"
                style={{ backgroundColor: '#d4b896' }}
              >
                <i className="ri-whatsapp-line"></i>
                Teklif Al
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
