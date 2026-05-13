import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  LogOut, 
  HelpCircle, 
  Bell, 
  ChevronRight, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Globe, 
  Boxes,
  LayoutDashboard
} from 'lucide-react';

export default function SelectionHub() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

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

  const modules = [
    {
      id: 'billing',
      title: 'Billing & Revenue',
      desc: 'Automated invoicing, customer accounts, and real-time financial analytics.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-600",
      shadow: "shadow-blue-500/20",
      path: '/billing',
      roles: ['owner', 'admin', 'demo'],
      stats: '12 Active Tasks'
    },
    {
      id: 'stock',
      title: 'Stock & Inventory',
      desc: 'Multi-warehouse asset tracking, hardware logistics, and serial monitoring.',
      icon: <Boxes className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      shadow: "shadow-indigo-500/20",
      path: '/stock',
      roles: ['owner', 'admin'],
      stats: 'Low Stock: 5 items'
    },
    {
      id: 'network',
      title: 'Network Ops',
      desc: 'OLT monitoring, ODP topology visualization, and real-time signal diagnostics.',
      icon: <Globe className="w-8 h-8" />,
      color: "from-emerald-400 to-teal-600",
      shadow: "shadow-teal-500/20",
      path: '/network',
      roles: ['owner', 'admin', 'demo'],
      stats: 'System Status: Optimal'
    }
  ];

  const allowedModules = modules.filter(m => user && m.roles.includes(user.role));

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-white selection:bg-primary-fixed/30 selection:text-primary-fixed relative overflow-hidden flex flex-col">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-primary-fixed/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 network-grid opacity-20"></div>
      </div>

      {/* Modern Top Header */}
      <header className="relative z-50 bg-[#0e1512]/80 backdrop-blur-xl border-b border-white/5 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/assets/logo_monivexa.png" alt="Logo" className="h-10 w-auto transition-transform group-hover:scale-110" />
              <span className="text-2xl font-black tracking-tighter uppercase text-white">Monivexa</span>
            </Link>
            <div className="hidden md:flex h-8 w-px bg-white/10"></div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <ShieldCheck size={14} className="text-primary-fixed" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary-fixed/80">Inti Infrastruktur v2.4</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
              <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-white leading-none mb-1">{user?.fullName}</span>
                <span className="text-[10px] uppercase tracking-widest text-primary-fixed font-black opacity-70">Peran: {user?.role}</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-fixed to-blue-500 p-px">
                <div className="w-full h-full rounded-[11px] bg-[#0e1512] flex items-center justify-center font-black text-primary-fixed">
                  {user?.fullName?.charAt(0)}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors relative group">
                <Bell size={20} className="text-on-surface-variant group-hover:text-primary-fixed transition-colors" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0e1512]"></span>
              </button>
              <button 
                onClick={handleLogout}
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-red-500/10 transition-colors group"
                title="Logout"
              >
                <LogOut size={20} className="text-on-surface-variant group-hover:text-red-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hub Canvas */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-6xl w-full">
          {/* Welcome Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              CORE <span className="text-primary-fixed italic font-serif">COMMAND</span> HUB
            </h1>
            <p className="text-on-surface-variant text-lg font-medium max-w-2xl mx-auto opacity-70">
              Selamat datang kembali. Semua sistem terpantau normal. <br/>Silakan pilih modul untuk melanjutkan operasional Anda.
            </p>
          </motion.div>

          {/* Module Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {allowedModules.map((module, idx) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                onClick={() => navigate(module.path)}
                className={`group relative glass-card p-1 rounded-[2.5rem] cursor-pointer transition-all duration-500 overflow-hidden shadow-2xl ${module.shadow}`}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="bg-[#0e1512] rounded-[2.2rem] p-10 h-full flex flex-col relative z-10 border border-white/5 group-hover:border-white/20 transition-colors">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    {module.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary-fixed transition-colors uppercase">{module.title}</h3>
                    <p className="text-on-surface-variant font-medium leading-relaxed mb-8 opacity-70">
                      {module.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-fixed/60 mb-1">Status Sistem</span>
                      <span className="text-xs font-bold text-white/80">{module.stats}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-fixed group-hover:text-[#0e1512] transition-all duration-500">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* System Overview Footer in Hub */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Cloud Status', val: 'Operational', icon: <Zap size={14} />, color: 'text-emerald-400' },
              { label: 'Server Load', val: '12% Nominal', icon: <Cpu size={14} />, color: 'text-primary-fixed' },
              { label: 'Security', val: 'Level 5 Encrypted', icon: <ShieldCheck size={14} />, color: 'text-blue-400' },
              { label: 'Last Sync', val: 'Just Now', icon: <LayoutDashboard size={14} />, color: 'text-purple-400' }
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                <div className={`${s.color} opacity-60`}>{s.icon}</div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">{s.label}</span>
                  <span className="text-xs font-bold text-white/80">{s.val}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer Hub */}
      <footer className="relative z-10 py-10 px-6 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">© 2024 Monivexa Technical Group</span>
          </div>
          <div className="flex gap-8">
            {['System Status', 'Documentation', 'Security Audit'].map(l => (
              <a key={l} href="#" className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-primary-fixed transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
