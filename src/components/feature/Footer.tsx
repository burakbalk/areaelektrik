import { Link } from 'react-router-dom';
import { services } from '../../mocks/services';

const whatsappMessage = encodeURIComponent('Merhaba, areaelektrik.com web siteniz üzerinden yazıyorum.');
const whatsappLink = `https://wa.me/905336429211?text=${whatsappMessage}`;

const getServiceSlug = (title: string): string => {
  const slugMap: Record<string, string> = {
    'Elektrik Taahhüt Hizmetleri': 'elektrik-taahhut-hizmetleri',
    'Proje Hizmetleri': 'proje-hizmetleri',
    'İşletme ve Bakım Hizmetleri': 'isletme-ve-bakim-hizmetleri',
    'Test ve Ölçüm Hizmetleri': 'test-ve-olcum-hizmetleri',
    'Uzaktan Sayaç & Sensör Okuma Sistemi': 'uzaktan-sayac-sensor-okuma-sistemi',
    'IP & Analog Kamera Sistemleri': 'ip-analog-kamera-sistemleri',
    'IP Santral Sistemleri': 'ip-santral-sistemleri',
    'Hırsız ve Yangın Alarm Sistemleri': 'hirsiz-ve-yangin-alarm-sistemleri',
    'Danışmanlık Hizmetleri': 'danismanlik-hizmetleri'
  };
  return slugMap[title] || '';
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a1a' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="mb-4 md:mb-6">
              <img
                src="https://static.readdy.ai/image/f7a5d02425e0675ec2bf06c3a77d9570/e61c1ac28d4e8b1464c369fa1e02a647.png"
                alt="Area Elektrik Logo"
                className="h-10 md:h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              Türkiye genelinde elektrik taahhüt ve zayıf akım sistemleri alanında 15 yıldır profesyonel hizmet sunuyoruz.
            </p>
            <div className="flex gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: '#d4b896' }}
                aria-label="WhatsApp"
              >
                <i className="ri-whatsapp-line" style={{ color: '#1a1a1a' }}></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#d4b896]/30 flex items-center justify-center hover:bg-[#d4b896] hover:text-[#1a1a1a] transition-all duration-300 cursor-pointer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#d4b896]/30 flex items-center justify-center hover:bg-[#d4b896] hover:text-[#1a1a1a] transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#d4b896]/30 flex items-center justify-center hover:bg-[#d4b896] hover:text-[#1a1a1a] transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 style={{ color: '#d4b896' }} className="text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 md:mb-6">HİZMETLER</h4>
            <ul className="space-y-2 md:space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/hizmetler/${getServiceSlug(service.title)}`}
                    className="text-gray-400 text-xs hover:text-[#d4b896] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 style={{ color: '#d4b896' }} className="text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 md:mb-6">HIZLI ERİŞİM</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><Link to="/" className="text-gray-400 text-xs hover:text-[#d4b896] transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/hakkimizda" className="text-gray-400 text-xs hover:text-[#d4b896] transition-colors">Hakkımızda</Link></li>
              <li><Link to="/hizmetler" className="text-gray-400 text-xs hover:text-[#d4b896] transition-colors">Hizmetler</Link></li>
              <li><Link to="/projeler" className="text-gray-400 text-xs hover:text-[#d4b896] transition-colors">Projeler</Link></li>
              <li><Link to="/blog" className="text-gray-400 text-xs hover:text-[#d4b896] transition-colors">Blog</Link></li>
              <li><Link to="/iletisim" className="text-gray-400 text-xs hover:text-[#d4b896] transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h4 style={{ color: '#d4b896' }} className="text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 md:mb-6">İLETİŞİM</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-lg mt-0.5 flex-shrink-0" style={{ color: '#d4b896' }}></i>
                <span className="text-gray-400 text-xs leading-relaxed">
                  Irmak Mah. Hasan Güven Cad. Özge D Blok No:69/3C Gaziemir / İzmir
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-lg flex-shrink-0" style={{ color: '#d4b896' }}></i>
                <a href="tel:+905336429211" className="text-gray-400 text-xs hover:text-[#d4b896] transition-colors cursor-pointer">
                  0533 642 92 11
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-whatsapp-line text-lg flex-shrink-0" style={{ color: '#d4b896' }}></i>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-xs hover:text-[#d4b896] transition-colors cursor-pointer">
                  WhatsApp ile İletişime Geçebilirsiniz
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-lg flex-shrink-0" style={{ color: '#d4b896' }}></i>
                <a href="mailto:info@areaelektrik.com" className="text-gray-400 text-xs hover:text-[#d4b896] transition-colors cursor-pointer">
                  info@areaelektrik.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-time-line text-lg mt-0.5 flex-shrink-0" style={{ color: '#d4b896' }}></i>
                <div className="text-gray-400 text-xs">
                  <p>Pzt - Cuma: 08:00 - 18:00</p>
                  <p>Cumartesi: 09:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Text */}
        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
          <p className="text-gray-500 text-xs leading-relaxed text-center max-w-5xl mx-auto">
            Area Elektrik, Türkiye genelinde elektrik taahhüt hizmetleri sunmaktadır.
            Elektrik taahhüt, zayıf akım sistemleri, güvenlik kamera sistemleri,
            yangın alarm sistemleri, IP santral kurulumu ve elektrik proje hizmetleri konularında
            uzmanlaşmış kadromuzla tüm Türkiye'de profesyonel çözümler üretiyoruz.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 Area Elektrik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
