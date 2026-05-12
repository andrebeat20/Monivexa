import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';

export default function SelectionHub() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('monivexa_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('monivexa_token');
    localStorage.removeItem('monivexa_user');
    navigate('/login');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Module configurations based on roles
  const modules = [
    {
      id: 'billing',
      title: 'Billing & Revenue',
      desc: 'Automated invoicing, customer accounts, and real-time financial analytics.',
      icon: 'receipt_long',
      path: '/billing',
      roles: ['owner', 'admin', 'demo']
    },
    {
      id: 'stock',
      title: 'Stock & Inventory',
      desc: 'Multi-warehouse asset tracking, hardware logistics, and serial monitoring.',
      icon: 'inventory_2',
      path: '/stock',
      roles: ['owner', 'admin']
    },
    {
      id: 'network',
      title: 'Network Ops',
      desc: 'OLT monitoring, ODP topology visualization, and real-time signal diagnostics.',
      icon: 'router',
      path: '/network',
      roles: ['owner', 'admin', 'demo']
    }
  ];

  const allowedModules = modules.filter(m => user && m.roles.includes(user.role));

  return (
    <div className="flex flex-col flex-grow min-h-screen bg-transparent relative">
      {/* TopNavBar */}
      <header className="bg-[#1a211f]/80 backdrop-blur-lg w-full top-0 sticky z-50 border-b border-white/5 shadow-sm">
        <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto w-full h-20">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-bold tracking-tight text-primary-fixed hover:opacity-80 transition-opacity">
              Monivexa
            </Link>
            {user && (
              <div className="hidden md:flex flex-col border-l border-white/10 pl-4">
                <span className="text-xs font-bold text-primary leading-tight">{user.fullName}</span>
                <span className="text-[10px] uppercase tracking-widest text-primary-fixed opacity-70 leading-tight font-bold">{user.role}</span>
              </div>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <button className="h-10 w-10 flex items-center justify-center rounded-xl text-on-surface-variant hover:text-primary-fixed hover:bg-white/5 transition-all duration-300">
              <span className="material-symbols-outlined">help</span>
            </button>
            <button 
              onClick={handleLogout}
              className="h-10 w-10 flex items-center justify-center rounded-xl text-on-surface-variant hover:text-red-400 hover:bg-red-500/10 transition-all duration-300"
              title="Logout"
            >
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow relative z-10 flex flex-col justify-center items-center py-xl px-gutter w-full max-w-container-max mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center mb-16"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-primary mb-4 tracking-tighter leading-tight">
            Infrastructure Core <span className="text-primary-fixed">v2</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-medium opacity-80">
            Select an authorized module to access specialized tools
          </p>
        </motion.div>

        {/* Hub Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {allowedModules.map((module) => (
            <motion.div 
              key={module.id}
              variants={itemVariants}
              onClick={() => navigate(module.path)}
              className="glass-card rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden group hover:border-primary-fixed/50 transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-fixed/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-16 w-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-primary-fixed group-hover:scale-110 group-hover:bg-primary-fixed/10 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl">{module.icon}</span>
              </div>
              <div className="flex flex-col gap-3 flex-grow">
                <h2 className="text-2xl font-bold text-primary group-hover:text-primary-fixed transition-colors">{module.title}</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {module.desc}
                </p>
              </div>
              <div className="mt-4 pt-6 border-t border-white/5 flex items-center justify-between group/btn">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed">Launch Module</span>
                <span className="material-symbols-outlined text-primary-fixed text-sm group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full py-xl bg-transparent border-t border-white/5 z-10 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto w-full gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-primary tracking-tight">Monivexa</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">© 2024 Monivexa Suite. Infrastructure Core v2.</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-8">
            {['Architecture', 'SLA', 'Privacy', 'Developers'].map(link => (
              <a key={link} className="text-sm text-on-surface-variant hover:text-primary-fixed transition-colors cursor-pointer">{link}</a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
