
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isMobileWorkOpen, setIsMobileWorkOpen] = useState(true);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
    setIsWorkOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsWorkOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-4xl tracking-normal hover:text-black/70 transition font-bold text-black">
          M.FIG
        </Link>

        {/* Navigation Menu */}
        <div className="flex items-center space-x-6 md:space-x-10 text-[10px] md:text-[12px] font-medium uppercase tracking-[0.2em]">
          {/* Work Dropdown */}
          <div
            className="relative h-20 flex items-center"
            ref={dropdownRef}
            onMouseEnter={() => window.innerWidth > 768 && setIsWorkOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setIsWorkOpen(false)}
          >
            <button
              className={`flex items-center hover:text-black transition gap-1.5 ${location.pathname === '/' || location.pathname.startsWith('/category') ? 'text-black' : 'text-black/40'}`}
              onClick={() => setIsWorkOpen(!isWorkOpen)}
            >
              WORK
              <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${isWorkOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Subnav Dropdown */}
            <div className={`md:absolute fixed md:top-full top-20 md:left-0 left-4 md:right-auto right-4 md:w-64 w-auto bg-white border border-black/5 py-10 md:py-6 shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-300 transform ${isWorkOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
              <div className="flex flex-col">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    className={`px-8 md:px-8 py-4 md:py-3 hover:bg-black/[0.02] hover:text-black transition text-[11px] md:text-[11px] font-bold tracking-[0.25em] ${location.pathname === `/category/${cat.slug}` ? 'text-black bg-black/[0.02]' : 'text-black/40'}`}
                    onClick={() => setIsWorkOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/about" className={`hover:text-black transition ${location.pathname === '/about' ? 'text-black' : 'text-black/40'}`}>ABOUT</Link>
          <Link to="/contact" className={`hover:text-black transition ${location.pathname === '/contact' ? 'text-black' : 'text-black/40'}`}>CONTACT</Link>
        </div>
      </div>
    </nav>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen pt-20 bg-white text-black">
      <Navbar />
      <main className="animate-in fade-in duration-1000">
        {children}
      </main>
      <footer className="py-20 px-6 border-t border-black/5 text-center text-black/30 text-[10px] tracking-[0.4em] uppercase">
        <div className="max-w-[1600px] mx-auto space-y-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-70 hover:opacity-100 transition-opacity">
            <a href="https://www.instagram.com/matty_le_fig/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">INSTAGRAM</a>
            <a href="https://vimeo.com/figxlee" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">VIMEO</a>
            <a href="https://entertheglen.tumblr.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">TUMBLR</a>
          </div>
          <p className="text-black/60 font-bold tracking-normal text-sm mb-4">
            M.FIG CINEMATOGRAPHY & IMAGE CRAFT
          </p>
          <p>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
