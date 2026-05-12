import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <nav className="bg-[#1a211f]/80 text-primary-fixed font-body-md text-body-md fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-md shadow-sm">
      <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-primary hover:opacity-80 transition-opacity">
          Monivexa
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-md items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`${isActive(link.path) ? 'text-primary-fixed font-bold border-b border-primary-fixed' : 'text-on-surface-variant'} hover:text-primary-fixed transition-colors duration-200`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex gap-sm items-center">
          <a href="https://wa.me/6285753327872" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2 rounded-lg font-label-caps text-label-caps cursor-pointer">Contact Us</a>
          <button onClick={() => navigate('/login')} className="btn-primary px-4 py-2 rounded-lg font-label-caps text-label-caps">Client Portal</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary-fixed p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a211f] border-b border-white/5 p-gutter flex flex-col gap-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-md">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className={`${isActive(link.path) ? 'text-primary-fixed font-bold' : 'text-on-surface-variant'} text-lg`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-sm pt-md border-t border-white/5">
            <button onClick={() => navigate('/login')} className="btn-primary w-full py-3 rounded-lg font-label-caps text-label-caps">Client Portal</button>
            <a href="https://wa.me/6285753327872" className="btn-secondary w-full py-3 rounded-lg font-label-caps text-label-caps text-center">Contact Support</a>
          </div>
        </div>
      )}
    </nav>
  );
}

