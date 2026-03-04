
import { Link } from 'react-router-dom';
import { blogs } from '../../mocks/blogs';

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#faf8f4' }}>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <img
            src="https://readdy.ai/api/search-image?query=electrical%20engineering%20blog%20articles%20technical%20writing%20modern%20office%20workspace%20with%20documents%20and%20laptop%20professional%20atmosphere&width=1920&height=600&seq=bloghero1&orientation=landscape"
            alt="Blog"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">Blog</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Elektrik ve güvenlik sistemleri hakkında faydalı bilgiler, ipuçları ve sektörel gelişmeler
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.slug}`}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border"
                style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(212,184,150,0.2)', color: '#1a1a1a' }}>
                      {blog.category}
                    </span>
                    <span className="text-gray-400 text-xs">{blog.readTime}</span>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold mb-2 transition-colors line-clamp-2" style={{ color: '#1a1a1a' }}>
                    {blog.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{blog.date}</span>
                    <span className="font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#c8a96e' }}>
                      Devamını Oku <i className="ri-arrow-right-line"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Sorularınız mı Var?</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8">
            Elektrik ve güvenlik sistemleri hakkında merak ettiklerinizi sorun
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 text-[#1a1a1a] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            style={{ backgroundColor: '#d4b896' }}
          >
            İletişime Geçin <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
