
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { getOptimizedImage } from '../imageUtils';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const project = CATEGORIES.flatMap(c => c.projects).find(p => p.id === id);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-black px-6 text-center">
        <h2 className="text-3xl font-serif mb-4 text-black">PROJECT NOT FOUND</h2>
        <Link to="/" className="text-sm uppercase tracking-widest underline opacity-50 hover:opacity-100 transition text-black">RETURN TO HOME</Link>
      </div>
    );
  }

  // Simplified and more robust URL normalization to prevent configuration errors
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    let videoId = '';

    // YouTube extraction
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1]?.split('?')[0];
    }

    if (videoId) {
      // Stripping all problematic parameters like origin/enablejsapi for maximum compatibility
      return `https://www.youtube.com/embed/${videoId}?rel=0`;
    }

    // Vimeo extraction
    if (url.includes('vimeo.com/') && !url.includes('player.vimeo.com')) {
      const vimeoParts = url.split('vimeo.com/')[1]?.split('?')[0].split('/');
      if (vimeoParts && vimeoParts.length >= 2) {
        // Handle unlisted format: vimeo.com/VIDEO_ID/HASH
        return `https://player.vimeo.com/video/${vimeoParts[0]}?h=${vimeoParts[1]}`;
      } else if (vimeoParts && vimeoParts.length === 1) {
        return `https://player.vimeo.com/video/${vimeoParts[0]}`;
      }
    } else if (url.includes('player.vimeo.com/video/')) {
      return url;
    }

    return url;
  };

  const finalVideoUrl = getEmbedUrl(project.videoUrl);

  const category = CATEGORIES.find(c => c.name === project.category);

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <Link to={category ? `/category/${category.slug}` : "/"} className="inline-flex items-center text-black/40 hover:text-black transition mb-12 uppercase tracking-widest text-[10px] font-bold">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        BACK TO {category ? category.name.toUpperCase() : 'PROJECTS'}
      </Link>

      <div className="mb-12">
        <p className="text-black/30 uppercase tracking-[0.3em] text-[10px] mb-4">{project.category}</p>
        <h1 className="text-4xl md:text-7xl tracking-normal mb-8 text-black leading-tight font-bold">{project.title}</h1>
      </div>

      {project.videoUrl && (
        <div className="relative aspect-video w-[80%] mx-auto bg-neutral-100 mb-12 shadow-sm border border-black/5 overflow-hidden">
          <iframe
            src={finalVideoUrl}
            title={project.title}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="md:col-span-2">
          <h2 className="text-[10px] uppercase tracking-widest text-black/30 mb-6 font-bold">ABOUT THE PROJECT</h2>
          <div className="text-black/70 text-lg leading-relaxed space-y-6 font-light">
            {project.description.split('\n').filter(p => p.trim() !== '').map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
          </div>
        </div>

        <div className="space-y-8 border-l border-black/5 pl-8 hidden md:block">
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-black/30 mb-2 font-bold">DIRECTOR</h3>
            <p className="text-sm font-medium">{(project.director || 'Collaborative').toUpperCase()}</p>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-black/30 mb-2 font-bold">CINEMATOGRAPHY</h3>
            <p className="text-sm font-medium">{(project.cinematographer || 'Matthew Figler').toUpperCase()}</p>
          </div>
          {project.format && (
            <div>
              <h3 className="text-[10px] uppercase tracking-widest text-black/30 mb-2 font-bold">FORMAT</h3>
              <p className="text-sm font-medium">{project.format.toUpperCase()}</p>
            </div>
          )}
        </div>

        {/* Mobile alternative for project info */}
        <div className="md:hidden grid grid-cols-2 gap-8 border-t border-black/5 pt-8 col-span-1">
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-black/30 mb-2 font-bold">DIRECTOR</h3>
            <p className="text-sm font-medium">{project.director || 'Collaborative'}</p>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-black/30 mb-2 font-bold">CINEMATOGRAPHY</h3>
            <p className="text-sm font-medium">{project.cinematographer || 'Matthew Figler'}</p>
          </div>
          {project.format && (
            <div className="col-span-2">
              <h3 className="text-[10px] uppercase tracking-widest text-black/30 mb-2 font-bold">FORMAT</h3>
              <p className="text-sm font-medium">{project.format.toUpperCase()}</p>
            </div>
          )}
        </div>
      </div>

      {project.episodes && project.episodes.length > 0 && (
        <div className="border-t border-black/5 pt-20 mb-20">
          <h3 className="text-[10px] uppercase tracking-widest text-black/30 mb-8 font-bold text-center">EPISODES</h3>
          <div className="space-y-24">
            {project.episodes.map((episode, index) => (
              <div key={index} className="space-y-6">
                <h4 className="text-sm tracking-widest uppercase font-bold text-center">{episode.title}</h4>
                <div className="relative aspect-video w-[80%] mx-auto bg-neutral-100 shadow-sm border border-black/5 overflow-hidden">
                  <iframe
                    src={getEmbedUrl(episode.videoUrl)}
                    title={episode.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <div className="border-t border-black/5 pt-20">
          <h3 className="text-[10px] uppercase tracking-widest text-black/30 mb-8 font-bold text-center">PROJECT GALLERY</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="bg-neutral-100 overflow-hidden shadow-sm cursor-pointer group"
                style={{ aspectRatio: project.galleryAspectRatio || project.aspectRatio || '16/9' }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={getOptimizedImage(image, 600)}
                  alt={`${project.title} - Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-100 group-hover:opacity-90"
                />
              </div>
            ))}
          </div>
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

export default ProjectDetail;
