
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../mocks/projects';

const whatsappMessage = encodeURIComponent('Merhaba, areaelektrik.com web siteniz üzerinden yazıyorum.');
const whatsappLink = `https://wa.me/905336429211?text=${whatsappMessage}`;

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#faf8f4' }}>
      {/* Hero Section */}
      <section className="relative py-12 md:py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">Projelerimiz</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Türkiye genelinde başarıyla tamamladığımız projelerden örnekler
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group rounded-xl border cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center py-8 px-4"
                style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4', minHeight: '140px' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                  <i className="ri-folder-line text-lg" style={{ color: '#d4b896' }}></i>
                </div>
                <h3 className="text-sm font-semibold text-center" style={{ color: '#1a1a1a' }}>{project.title}</h3>
              </div>
            ))}
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

      {/* CTA Section */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Projeniz İçin Bizimle İletişime Geçebilirsiniz
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8">
            Türkiye genelinde uzman ekibimiz projeniz için en uygun çözümü sunmak için hazır
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              style={{ backgroundColor: '#d4b896', color: '#1a1a1a' }}
            >
              <i className="ri-whatsapp-line text-lg md:text-xl"></i>
              WhatsApp ile İletişime Geçebilirsiniz
            </a>
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center gap-2 border-2 text-white px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
              style={{ borderColor: '#d4b896' }}
            >
              İletişime Geçin
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
