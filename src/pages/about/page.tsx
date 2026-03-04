
const whatsappMessage = encodeURIComponent('Merhaba, areaelektrik.com web siteniz üzerinden yazıyorum.');
const whatsappLink = `https://wa.me/905336429211?text=${whatsappMessage}`;

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#faf8f4' }}>
      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <img
            src="/images/hero-about-bg.webp"
            alt="Hakkımızda"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Hakkımızda</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            15 yıldır elektrik sektöründe Türkiye genelinde güvenilir ve kaliteli hizmet sunuyoruz
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border" style={{ backgroundColor: 'rgba(212,184,150,0.15)', borderColor: 'rgba(212,184,150,0.4)' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4b896' }}></div>
                <span className="text-sm font-semibold" style={{ color: '#1a1a1a' }}>Area Elektrik</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1a1a1a' }}>
                Güvenilir Elektrik Çözümleri
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Area Elektrik, 2010 yılından bu yana elektrik taahhüt ve zayıf akım sistemleri alanında hizmet vermektedir.
                15 yıllık tecrübemizle, konutlardan endüstriyel tesislere kadar geniş bir yelpazede Türkiye genelinde
                profesyonel çözümler sunuyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Firmamız, TSE standartlarına uygun, güvenli ve uzun ömürlü elektrik sistemleri kurma prensibiyle
                çalışmaktadır. Kaliteli malzeme kullanımı, deneyimli teknik kadro ve müşteri memnuniyeti odaklı
                yaklaşımımızla sektörde öncü konumdayız.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                88 kişilik uzman ekibimiz ve 750'yi aşkın tamamlanan proje referansımızla Türkiye'nin her noktasında
                güvenilir bir iş ortağıyız.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#d4b896' }}>15+</div>
                  <div className="text-sm text-gray-500">Yıllık Tecrübe</div>
                </div>
                <div className="text-center p-4 rounded-xl border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#d4b896' }}>750+</div>
                  <div className="text-sm text-gray-500">Tamamlanan Proje</div>
                </div>
                <div className="text-center p-4 rounded-xl border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#d4b896' }}>88</div>
                  <div className="text-sm text-gray-500">Kişilik Ekip</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-team.webp"
                  alt="Area Elektrik Ekibi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl p-6 shadow-xl max-w-xs" style={{ backgroundColor: '#d4b896' }}>
                <p className="font-semibold" style={{ color: '#1a1a1a' }}>
                  "Güvenli ve kaliteli elektrik sistemleri için doğru adres"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ backgroundColor: '#f0ebe3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 shadow-sm border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                <i className="ri-target-line text-3xl" style={{ color: '#1a1a1a' }}></i>
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Misyonumuz</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Elektrik taahhüt ve zayıf akım sistemleri alanında, en yüksek kalite standartlarında, güvenli ve
                sürdürülebilir çözümler sunarak müşterilerimizin ihtiyaçlarını en iyi şekilde karşılamak.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sektördeki teknolojik gelişmeleri yakından takip ederek, yenilikçi ve enerji verimli sistemler
                kurmak, müşteri memnuniyetini her zaman ön planda tutmak.
              </p>
            </div>

            <div className="rounded-2xl p-8 shadow-sm border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                <i className="ri-eye-line text-3xl" style={{ color: '#1a1a1a' }}></i>
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Vizyonumuz</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Türkiye'nin elektrik taahhüt ve zayıf akım sistemleri sektöründe öncü ve tercih edilen firma olmak,
                uluslararası standartlarda hizmet kalitesiyle tanınmak.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sürekli gelişim ve yenilikçilik anlayışıyla, sektöre değer katan projeler üretmek ve güvenilir
                iş ortaklıkları kurmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Değerlerimiz</h2>
            <p className="text-gray-500 text-lg">Çalışma prensiplerimiz ve kurumsal değerlerimiz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'ri-shield-check-line', title: 'Güvenilirlik', desc: 'Taahhütlerimizi zamanında ve eksiksiz yerine getiriyoruz' },
              { icon: 'ri-star-line', title: 'Kalite', desc: 'En yüksek kalite standartlarında malzeme ve işçilik' },
              { icon: 'ri-team-line', title: 'Profesyonellik', desc: 'Uzman ve deneyimli kadromuzla profesyonel hizmet' },
              { icon: 'ri-customer-service-2-line', title: 'Müşteri Odaklılık', desc: 'Müşteri memnuniyeti her zaman önceliğimiz' },
            ].map((val, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                  <i className={`${val.icon} text-4xl`} style={{ color: '#1a1a1a' }}></i>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>{val.title}</h3>
                <p className="text-gray-500">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Neden Area Elektrik?</h2>
            <p className="text-gray-400 text-lg">Bizi tercih etmeniz için sebepler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'ri-medal-line', title: '15 Yıllık Tecrübe', desc: 'Sektörde 15 yıldır edindiğimiz tecrübe ve bilgi birikimimizle Türkiye genelinde her türlü projeye çözüm üretiyoruz' },
              { icon: 'ri-user-star-line', title: '88 Kişilik Uzman Kadro', desc: 'Alanında uzman, sertifikalı ve deneyimli mühendis ve teknisyen kadromuzla hizmet veriyoruz' },
              { icon: 'ri-checkbox-circle-line', title: 'TSE Standartları', desc: 'Tüm projelerimizde TSE standartlarına uygunluk ve güvenlik önceliğimizdir' },
              { icon: 'ri-tools-line', title: 'Kaliteli Malzeme', desc: 'Sadece sertifikalı, kaliteli ve güvenilir markaların ürünlerini kullanıyoruz' },
              { icon: 'ri-time-line', title: '7/24 Destek', desc: 'Acil durumlarda 7/24 ulaşabileceğiniz teknik destek ve müdahale ekibimiz hazır' },
              { icon: 'ri-shield-check-line', title: 'Garanti ve Destek', desc: 'Tüm projelerimizde garanti ve proje sonrası destek hizmetleri sunuyoruz' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-6 border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(212,184,150,0.2)' }}>
                <i className={`${item.icon} text-4xl mb-4 block`} style={{ color: '#d4b896' }}></i>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1a1a1a' }}>
            Projeniz İçin Bizimle İletişime Geçebilirsiniz
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Türkiye genelindeki elektrik projeleriniz için güvenilir çözüm ortağınız olmaktan mutluluk duyarız
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
            style={{ backgroundColor: '#1a1a1a' }}
          >
            <i className="ri-whatsapp-line text-xl"></i>
            WhatsApp ile İletişime Geçebilirsiniz
          </a>
        </div>
      </section>
    </div>
  );
}
