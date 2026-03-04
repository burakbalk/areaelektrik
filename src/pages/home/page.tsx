import { services } from '../../mocks/services';
import { projects } from '../../mocks/projects';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf8f4' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 md:pt-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://static.readdy.ai/image/f7a5d02425e0675ec2bf06c3a77d9570/9ebc5ab639cf5e692bb8c322dc8df331.png"
            alt="Elektrik Sistemleri"
            className="w-full h-full object-cover object-top opacity-25"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6 border" style={{ backgroundColor: 'rgba(212,184,150,0.15)', borderColor: 'rgba(212,184,150,0.4)' }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4b896' }}></div>
              <span className="text-xs md:text-sm font-medium" style={{ color: '#d4b896' }}>Türkiye Geneli Elektrik Çözüm Ortağı</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Akıllı Ev Sistemleri <span className="italic" style={{ color: '#d4b896' }}>&amp; Elektrik Taahhüt</span>
            </h1>

            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              15 yıllık tecrübemizle elektrik taahhüt, akıllı ev sistemleri, zayıf akım ve proje hizmetlerinde
              Türkiye genelinde profesyonel çözümler sunuyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                style={{ backgroundColor: '#d4b896', color: '#1a1a1a' }}
              >
                <i className="ri-whatsapp-line text-lg md:text-xl"></i>
                WhatsApp ile İletişime Geçebilirsiniz
              </a>
              <Link
                to="/projeler"
                className="border-2 text-white px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                style={{ borderColor: '#d4b896', backgroundColor: 'transparent' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#d4b896'; (e.currentTarget as HTMLElement).style.color = '#1a1a1a'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
              >
                Tamamlanan Projelerimizi İnceleyebilirsiniz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 md:py-14" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '750+', label: 'Tamamlanan Proje' },
              { value: '88', label: 'Kişilik Uzman Ekip' },
              { value: '12', label: 'Devam Eden Proje' },
              { value: '15+', label: 'Yıllık Tecrübe' },
            ].map((stat, i) => (
              <div key={i} className="text-center border-r last:border-r-0" style={{ borderColor: 'rgba(212,184,150,0.2)' }}>
                <div className="text-3xl md:text-5xl font-bold mb-1" style={{ color: '#d4b896' }}>{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-xs md:text-sm uppercase tracking-wider" style={{ color: '#c8a96e' }}>Hizmetlerimiz</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6" style={{ color: '#1a1a1a' }}>
              Profesyonel Elektrik ve Zayıf Akım Çözümleri
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">Türkiye genelinde tüm elektrik ve güvenlik sistemleri ihtiyaçlarınız için yanınızdayız.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/hizmetler/${getServiceSlug(service.title)}`}
                className="group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border"
                style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-3 md:p-5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-2 md:mb-3 transition-colors" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className={`${service.icon} text-lg md:text-xl`} style={{ color: '#1a1a1a' }}></i>
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-1 md:mb-2 transition-colors line-clamp-2" style={{ color: '#1a1a1a' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-2 md:mb-3 line-clamp-2 hidden sm:block">
                    {service.description}
                  </p>
                  <span className="font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#c8a96e' }}>
                    Detay <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#f0ebe3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="rounded-3xl p-6 md:p-12 text-white" style={{ backgroundColor: '#1a1a1a' }}>
              <span className="text-xs md:text-sm uppercase tracking-wider text-gray-400">Neden Bizi Seçmelisiniz</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-6 md:mb-8 leading-tight">
                15 Yıllık Tecrübe ile Güvenli Çözümler
              </h2>
              <ul className="space-y-3 md:space-y-4">
                {[
                  'Profesyonel ve deneyimli 88 kişilik teknik ekip',
                  'Türkiye genelinde hızlı ve zamanında servis',
                  'Kaliteli ve sertifikalı malzeme kullanımı',
                  '7/24 teknik destek ve acil müdahale',
                  '750+ başarıyla tamamlanan proje referansı',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#d4b896' }}></div>
                    <span className="text-sm md:text-lg text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl p-6 md:p-12" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e0d4' }}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center" style={{ color: '#1a1a1a' }}>
                Güvenilir ve Kaliteli Elektrik Hizmetleri
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                Area Elektrik olarak, Türkiye genelinde elektrik taahhüt, akıllı ev sistemleri, zayıf akım sistemleri,
                proje hazırlama ve danışmanlık konularında uzman kadromuzla her ölçekte projeye çözüm üretiyoruz.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                TSE standartlarına uygun, güvenli ve uzun ömürlü elektrik sistemleri kuruyoruz. Konuttan endüstriyel
                tesislere kadar geniş bir yelpazede hizmet veren firmamız, müşteri memnuniyetini ön planda tutar.
              </p>
              <div className="text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2 whitespace-nowrap cursor-pointer text-sm md:text-base"
                  style={{ backgroundColor: '#d4b896', color: '#1a1a1a' }}
                >
                  <i className="ri-whatsapp-line"></i>
                  WhatsApp ile İletişime Geçebilirsiniz
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4b896' }}></div>
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">Projelerimiz</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#1a1a1a' }}>
                Tamamlanan Başarılı Projeler
              </h2>
            </div>
            <Link
              to="/projeler"
              className="font-semibold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer text-sm md:text-base"
              style={{ color: '#c8a96e' }}
            >
              Tamamlanan Projelerimizi İnceleyebilirsiniz
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {projects.slice(0, 6).map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-xl overflow-hidden border cursor-pointer hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4', minHeight: '160px' }}
              >
                <div className="flex flex-col items-center justify-center h-40 md:h-48">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-folder-line text-xl" style={{ color: '#d4b896' }}></i>
                  </div>
                  <h3 className="text-sm md:text-base font-bold" style={{ color: '#1a1a1a' }}>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative min-h-[250px] md:min-h-[400px] lg:min-h-[500px]">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20electrical%20engineering%20team%20working%20together%20on%20electrical%20installation%20project%20with%20safety%20equipment%20and%20modern%20tools%20in%20bright%20clean%20industrial%20workspace%20teamwork%20collaboration%20atmosphere&width=800&height=800&seq=cta1&orientation=squarish"
                alt="Profesyonel Ekip"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 md:top-6 left-4 md:left-6">
                <span className="text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold" style={{ backgroundColor: '#1a1a1a' }}>
                  Profesyonel Hizmet
                </span>
              </div>
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
                  Ücretsiz<br />Keşif ve<br />Teklif
                </h3>
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center text-center" style={{ backgroundColor: '#1a1a1a' }}>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                Projeniz İçin Bizimle İletişime Geçebilirsiniz
              </h3>
              <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Türkiye genelinde projeleriniz için ücretsiz keşif ve detaylı teklif almak için hemen bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-sm md:text-base"
                  style={{ backgroundColor: '#d4b896', color: '#1a1a1a' }}
                >
                  <i className="ri-whatsapp-line text-lg md:text-xl"></i>
                  WhatsApp ile İletişime Geçebilirsiniz
                </a>
                <a
                  href="tel:+905336429211"
                  className="text-[#1a1a1a] px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-sm md:text-base"
                  style={{ backgroundColor: '#d4b896' }}
                >
                  <i className="ri-phone-line text-lg md:text-xl"></i>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-12 md:py-20" style={{ backgroundColor: '#f0ebe3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#1a1a1a' }}>İletişime Geçin</h2>
            <p className="text-gray-500 text-sm md:text-lg">Sorularınız için bize ulaşın</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl p-5 md:p-8 shadow-sm border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
              <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6" style={{ color: '#1a1a1a' }}>İletişim Bilgileri</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-map-pin-line text-base md:text-xl" style={{ color: '#1a1a1a' }}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base" style={{ color: '#1a1a1a' }}>Adres</h4>
                    <p className="text-gray-500 text-xs md:text-sm">Irmak Mah. Hasan Güven Cad. Özge D Blok No:69/3C Gaziemir / İzmir</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-phone-line text-base md:text-xl" style={{ color: '#1a1a1a' }}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base" style={{ color: '#1a1a1a' }}>Telefon</h4>
                    <a href="tel:+905336429211" className="text-gray-500 hover:text-[#1a1a1a] transition-colors cursor-pointer text-xs md:text-sm">
                      0533 642 92 11
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-whatsapp-line text-base md:text-xl" style={{ color: '#1a1a1a' }}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base" style={{ color: '#1a1a1a' }}>WhatsApp</h4>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1a1a1a] transition-colors cursor-pointer text-xs md:text-sm">
                      WhatsApp ile İletişime Geçebilirsiniz
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-mail-line text-base md:text-xl" style={{ color: '#1a1a1a' }}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base" style={{ color: '#1a1a1a' }}>E-posta</h4>
                    <a href="mailto:info@areaelektrik.com" className="text-gray-500 hover:text-[#1a1a1a] transition-colors cursor-pointer text-xs md:text-sm">
                      info@areaelektrik.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-time-line text-base md:text-xl" style={{ color: '#1a1a1a' }}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base" style={{ color: '#1a1a1a' }}>Çalışma Saatleri</h4>
                    <p className="text-gray-500 text-xs md:text-sm">Pazartesi - Cuma: 08:00 - 18:00</p>
                    <p className="text-gray-500 text-xs md:text-sm">Cumartesi: 09:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-sm w-full rounded-2xl p-8 text-center"
            style={{ backgroundColor: '#faf8f4' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 cursor-pointer"
              style={{ color: '#1a1a1a' }}
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
              <i className="ri-folder-line text-3xl" style={{ color: '#d4b896' }}></i>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>{selectedProject.title}</h3>
            <p className="text-gray-400 text-sm">Bu proje henüz detaylandırılmamıştır.</p>
          </div>
        </div>
      )}
    </div>
  );
}
