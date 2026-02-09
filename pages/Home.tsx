
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { getOptimizedImage } from '../imageUtils';

const Home: React.FC = () => {
  return (
    <div className="px-4 py-8 md:px-6 md:py-12 max-w-[1600px] mx-auto">
      <div className="mb-16 text-left">
        <h1 className="text-3xl mb-2 tracking-normal text-black uppercase font-bold">cinematography & image craft</h1>
        <p className="text-black/40 uppercase tracking-[0.3em] text-[10px] font-bold">
          A COLLECTION OF NARRATIVE, NON-FICTION, AND FILM WORKS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {CATEGORIES.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.slug}`}
            className="group relative aspect-video overflow-hidden bg-neutral-100"
          >
            <img
              src={getOptimizedImage(category.featuredImage, 800)}
              alt={category.name}
              className="w-full h-full object-cover transition-all duration-1000 opacity-100 group-hover:opacity-90 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <h2 className="text-base md:text-xl text-white uppercase mb-2 font-bold tracking-normal">{category.name}</h2>
                {category.comingSoon ? (
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">COMING SOON</p>
                ) : (
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">
                    {category.customProjectCountText || `${category.projects.length} PROJECTS`}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
