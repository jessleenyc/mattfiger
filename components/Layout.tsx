
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-[11px] font-semibold uppercase tracking-[0.25em]">
          {/* Work Dropdown */}
          <div
            className="relative h-20 flex items-center group"
            ref={dropdownRef}
            onMouseEnter={() => setIsWorkOpen(true)}
            onMouseLeave={() => setIsWorkOpen(false)}
          >
            <button
              className={`flex items-center hover:text-black transition gap-1 ${location.pathname === '/' || location.pathname.startsWith('/category') ? 'text-black' : 'text-black/40'}`}
              onClick={() => setIsWorkOpen(!isWorkOpen)}
            >
              WORK
              <svg className={`w-3 h-3 transition-transform duration-300 ${isWorkOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Subnav Dropdown */}
            <div className={`absolute top-full left-0 w-64 bg-white border border-black/5 py-4 shadow-xl transition-all duration-300 transform ${isWorkOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
              <div className="flex flex-col">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    className={`px-6 py-2.5 hover:bg-black/5 hover:text-black transition text-[10px] ${location.pathname === `/category/${cat.slug}` ? 'text-black bg-black/5' : 'text-black/40'}`}
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

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black focus:outline-none p-2">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto px-8 py-12 flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setIsMobileWorkOpen(!isMobileWorkOpen)}
              className="text-3xl font-serif flex items-center justify-between w-full text-left text-black"
            >
              WORK
              <svg className={`w-6 h-6 transition-transform ${isMobileWorkOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMobileWorkOpen && (
              <div className="flex flex-col space-y-3 pl-4 border-l border-black/10 animate-in slide-in-from-left-2 duration-300">
                {CATEGORIES.map((cat) => (
                  <Link key={cat.id} to={`/category/${cat.slug}`} className="text-black/70 text-base py-1">
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="text-3xl font-serif text-black">ABOUT</Link>
          <Link to="/contact" className="text-3xl font-serif text-black">CONTACT</Link>

          <div className="pt-12 flex flex-wrap gap-6">
            <a href="https://www.instagram.com/matty_le_fig/?hl=en" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-black/40">Instagram</a>
            <a href="https://vimeo.com/figxlee" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-black/40">Vimeo</a>
            <a href="https://entertheglen.tumblr.com/" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-black/40">Tumblr</a>
          </div>
        </div>
      )}
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
