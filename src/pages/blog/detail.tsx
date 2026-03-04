
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../../mocks/blogs';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1a2332] mb-4">Blog Bulunamadı</h1>
          <Link to="/blog" className="text-[#ffc107] hover:underline cursor-pointer">
            Blog sayfasına dön
          </Link>
        </div>
      </div>
    );
  }

  const otherBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-r from-[#1a2332] to-[#2a3442]">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            Blog'a Dön
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#ffc107] text-[#1a2332] text-xs font-semibold px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-gray-300 text-sm">{blog.date}</span>
            <span className="text-gray-300 text-sm">{blog.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-lg mb-8 md:mb-12">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share */}
          <div className="mt-8 md:mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-gray-600 font-medium">Bu yazıyı paylaşın:</span>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(blog.title + ' - https://areaelektrik.com/blog/' + blog.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <i className="ri-whatsapp-line text-lg"></i>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://areaelektrik.com/blog/${blog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <i className="ri-facebook-fill text-lg"></i>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=https://areaelektrik.com/blog/${blog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <i className="ri-twitter-x-line text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-6 md:mb-8">Diğer Yazılar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherBlogs.map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <span className="bg-[#ffc107]/20 text-[#1a2332] text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#1a2332] mt-3 mb-2 group-hover:text-[#ffc107] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
