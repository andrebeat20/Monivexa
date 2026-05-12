import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#1a211f]/80 text-primary-fixed font-body-md text-body-md fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-md shadow-sm">
      <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-primary hover:opacity-80 transition-opacity">
          Monivexa
        </Link>
        <div className="hidden md:flex gap-md items-center">
          <Link to="/" className={`${isActive('/') ? 'text-primary-fixed font-bold' : 'text-on-surface-variant'} hover:text-primary-fixed transition-colors duration-200`}>Home</Link>
          <Link to="/services" className={`${isActive('/services') ? 'text-primary-fixed font-bold border-b border-primary-fixed' : 'text-on-surface-variant'} hover:text-primary-fixed transition-colors duration-200`}>Services</Link>
          <Link to="/pricing" className={`${isActive('/pricing') ? 'text-primary-fixed font-bold border-b border-primary-fixed' : 'text-on-surface-variant'} hover:text-primary-fixed transition-colors duration-200`}>Pricing</Link>
          <Link to="/about" className={`${isActive('/about') ? 'text-primary-fixed font-bold border-b border-primary-fixed' : 'text-on-surface-variant'} hover:text-primary-fixed transition-colors duration-200`}>About Us</Link>
        </div>
        <div className="flex gap-sm items-center">
          <a href="https://wa.me/6285753327872" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2 rounded-lg font-label-caps text-label-caps cursor-pointer">Contact Us</a>
          <button onClick={() => navigate('/login')} className="btn-primary px-4 py-2 rounded-lg font-label-caps text-label-caps">Client Portal</button>
        </div>
      </div>
    </nav>
  );
}
