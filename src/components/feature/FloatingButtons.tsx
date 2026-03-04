import { useEffect, useState } from 'react';

const whatsappMessage = encodeURIComponent(
  'Merhaba, areaelektrik.com web siteniz üzerinden yazıyorum.'
);
const whatsappLink = `https://wa.me/905336429211?text=${whatsappMessage}`;

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
        style={{ backgroundColor: '#d4b896' }}
        aria-label="WhatsApp ile iletişime geç"
      >
        <i className="ri-whatsapp-line text-xl md:text-2xl" style={{ color: '#1a1a1a' }}></i>
      </a>

      <a
        href="tel:+905336429211"
        className="w-10 h-10 md:w-12 md:h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
        aria-label="Telefon ile ara"
      >
        <i className="ri-phone-line text-white text-xl md:text-2xl"></i>
      </a>
    </div>
  );
}
