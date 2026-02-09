
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { getOptimizedImage } from '../imageUtils';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const category = CATEGORIES.find(c => c.slug === slug);

  if (!category) {
    return <div className="h-screen flex items-center justify-center text-black">Category not found</div>;
  }

  // Collect all images if it's a gallery view (thumbnails + any gallery images)
  const allImages = category.isGalleryView
    ? Array.from(new Set(category.projects.flatMap(p => [p.thumbnail, ...(p.gallery || [])])))
    : [];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <Link to="/" className="inline-flex items-center text-black/40 hover:text-black transition mb-12 uppercase tracking-widest text-[10px] font-bold">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        BACK TO PROJECTS
      </Link>

      <div className="mb-20">
        <h1 className="text-4xl mb-6 tracking-normal text-black uppercase font-bold">{category.name}</h1>
        {category.description && (
          <p className="text-black/50 text-xl font-light max-w-2xl leading-relaxed uppercase">
            {category.description}
          </p>
        )}
      </div>

      {category.comingSoon ? (
        <div className="py-24 border-t border-black/5 flex flex-col items-start text-left">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-2xl mb-2 text-black font-bold tracking-normal">COMING SOON</h2>
            <p className="text-black/50 text-sm leading-relaxed uppercase">
              The {category.name.toLowerCase()} section is currently in production and will be available soon.
              Check back for updates.
            </p>
          </div>
        </div>
      ) : category.isGalleryView ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="aspect-video bg-neutral-100 overflow-hidden shadow-sm cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={getOptimizedImage(image, 800)}
                alt={`${category.name} Look ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-100 group-hover:opacity-90"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {category.projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group block"
            >
              <div
                className="overflow-hidden bg-neutral-100 mb-6 relative"
                style={{ aspectRatio: project.aspectRatio || '16/9' }}
              >
                {project.badgeText && (
                  <div
                    className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold border border-black/5 shadow-sm"
                    style={{ color: project.badgeColor || '#000000' }}
                  >
                    {project.badgeText}
                  </div>
                )}
                <img
                  src={getOptimizedImage(project.thumbnail, 800)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100 group-hover:opacity-90"
                />
              </div>
              <h3 className="text-2xl mb-2 text-black underline underline-offset-8 decoration-black/10 group-hover:decoration-black/30 transition-all font-bold tracking-normal">{project.title}</h3>
              <p className="text-black/50 line-clamp-2 text-sm leading-relaxed uppercase">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      )}

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img
            src={getOptimizedImage(selectedImage, 2000, 90)}
            alt="Gallery view"
            className="max-w-[69vw] max-h-[69vh] object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
