
const whatsappMessage = encodeURIComponent('Merhaba, areaelektrik.com web siteniz üzerinden yazıyorum.');
const whatsappLink = `https://wa.me/905336429211?text=${whatsappMessage}`;

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#faf8f4' }}>
      {/* Hero Section */}
      <section className="relative py-12 md:py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <img
            src="/images/hero-contact-bg.webp"
            alt="İletişim"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">İletişim</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Türkiye genelindeki projeleriniz için bize ulaşın, size yardımcı olmaktan mutluluk duyarız
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8" style={{ color: '#1a1a1a' }}>İletişim Bilgileri</h2>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4 p-4 md:p-6 rounded-2xl border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-map-pin-line text-xl" style={{ color: '#1a1a1a' }}></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#1a1a1a' }}>Adres</h3>
                    <p className="text-gray-500 text-sm md:text-base">Irmak Mah. Hasan Güven Cad. Özge D Blok No:69/3C Gaziemir / İzmir</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 md:p-6 rounded-2xl border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-phone-line text-xl" style={{ color: '#1a1a1a' }}></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#1a1a1a' }}>Telefon</h3>
                    <a href="tel:+905336429211" className="text-gray-500 hover:text-[#1a1a1a] transition-colors cursor-pointer text-sm md:text-base">
                      0533 642 92 11
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 md:p-6 rounded-2xl border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(37,211,102,0.12)' }}>
                    <i className="ri-whatsapp-line text-xl" style={{ color: '#25D366' }}></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#1a1a1a' }}>WhatsApp</h3>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#25D366] transition-colors cursor-pointer text-sm md:text-base">
                      WhatsApp ile İletişime Geçebilirsiniz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 md:p-6 rounded-2xl border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-mail-line text-xl" style={{ color: '#1a1a1a' }}></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#1a1a1a' }}>E-posta</h3>
                    <a href="mailto:info@areaelektrik.com" className="text-gray-500 hover:text-[#1a1a1a] transition-colors cursor-pointer text-sm md:text-base">
                      info@areaelektrik.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 md:p-6 rounded-2xl border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-time-line text-xl" style={{ color: '#1a1a1a' }}></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#1a1a1a' }}>Çalışma Saatleri</h3>
                    <p className="text-gray-500 text-sm md:text-base">Pazartesi - Cuma: 08:00 - 18:00</p>
                    <p className="text-gray-500 text-sm md:text-base">Cumartesi: 09:00 - 14:00</p>
                    <p className="text-gray-500 text-sm md:text-base">Pazar: Kapalı</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] text-white px-5 py-2.5 md:py-3 rounded-full font-bold hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-sm md:text-base"
                >
                  <i className="ri-whatsapp-line text-lg md:text-xl"></i>
                  WhatsApp ile İletişime Geçebilirsiniz
                </a>
                <a
                  href="tel:+905336429211"
                  className="flex-1 text-white px-5 py-2.5 md:py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-sm md:text-base"
                  style={{ backgroundColor: '#1a1a1a' }}
                >
                  <i className="ri-phone-line text-lg md:text-xl"></i>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
