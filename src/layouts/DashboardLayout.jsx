import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, 
  LogOut, 
  HelpCircle, 
  LayoutDashboard, 
  Receipt, 
  Package, 
  Network, 
  Settings,
  Bell,
  Search,
  Menu,
  ChevronRight,
  Users,
  BarChart3,
  Wallet,
  AlertTriangle,
  UserPlus,
  Database,
  Wrench
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('monivexa_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const getModuleInfo = () => {
    if (location.pathname.startsWith('/billing')) return { name: 'Billing', icon: <Receipt size={20} />, color: 'text-primary-fixed' };
    if (location.pathname.startsWith('/stock')) return { name: 'Stock', icon: <Package size={20} />, color: 'text-tertiary-fixed' };
    if (location.pathname.startsWith('/network')) return { name: 'Network', icon: <Network size={20} />, color: 'text-primary-fixed' };
    return { name: 'Dashboard', icon: <LayoutDashboard size={20} />, color: 'text-primary-fixed' };
  };

  const module = getModuleInfo();

  const getSidebarLinks = () => {
    if (location.pathname.startsWith('/billing')) {
      return [
        { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/billing' },
        { label: 'Tagihan', icon: <Receipt size={20} />, path: '#' },
        { label: 'Pelanggan', icon: <Users size={20} />, path: '#' },
        { label: 'Laporan', icon: <BarChart3 size={20} />, path: '#' },
        { label: 'Kas Keuangan', icon: <Wallet size={20} />, path: '#' },
        { label: 'Notifikasi', icon: <Bell size={20} />, path: '#' },
        { label: 'Pengaduan', icon: <AlertTriangle size={20} />, path: '#' },
        { label: 'Pendaftaran', icon: <UserPlus size={20} />, path: '#' },
        { label: 'Master', icon: <Database size={20} />, path: '#' },
        { label: 'Alat', icon: <Wrench size={20} />, path: '#' },
      ];
    }

    if (location.pathname.startsWith('/stock')) {
      return [
        { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/stock' },
        { label: 'Inventory', icon: <Package size={20} />, path: '#' },
        { label: 'Warehouses', icon: <Database size={20} />, path: '#' },
        { label: 'Reports', icon: <BarChart3 size={20} />, path: '#' },
        { label: 'Logistics', icon: <Wrench size={20} />, path: '#' }, // Using wrench for logistics as a placeholder
      ];
    }
    
    if (location.pathname.startsWith('/network')) {
      return [
        { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/network' },
        { label: 'OLT Status', icon: <Network size={20} />, path: '#' },
        { label: 'ODP Management', icon: <Settings size={20} />, path: '#' },
        { label: 'Support', icon: <HelpCircle size={20} />, path: '#' },
        { label: 'Logs', icon: <Database size={20} />, path: '#' }, // Using database for logs placeholder
      ];
    }
    
    // Default links for other modules
    return [
      { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: location.pathname },
      { label: 'Activity', icon: <Bell size={20} />, path: '#' },
      { label: 'Settings', icon: <Settings size={20} />, path: '#' },
    ];
  };

  const sidebarLinks = getSidebarLinks().filter(link => {
    if (!user) return false;
    if (user.role === 'demo') {
      // Hide administrative/master links for demo users
      const restricted = ['Master', 'Alat', 'Settings', 'Logistics', 'ODP Management'];
      return !restricted.includes(link.label);
    }
    return true;
  });

  const handleLogout = () => {
    localStorage.removeItem('monivexa_token');
    localStorage.removeItem('monivexa_user');
    navigate('/login');
  };

  return (
    <div className="flex h-screen w-full bg-[#0e1512] overflow-hidden text-on-surface">
      {/* Sidebar */}
      <aside className={`bg-[#1a211f] border-r border-white/5 transition-all duration-300 flex flex-col z-50 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        {/* Brand */}
        <div className="h-16 flex items-center px-6 border-b border-white/5 shrink-0">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded bg-primary-fixed/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-primary-fixed">
              {module.icon}
            </div>
            {isSidebarOpen && (
              <span className="text-xl font-bold text-primary tracking-tight">Monivexa</span>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-2">
          {sidebarLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => link.path !== '#' && navigate(link.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                location.pathname === link.path 
                ? 'bg-primary-fixed/10 text-primary-fixed border-r-2 border-primary-fixed' 
                : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'
              }`}
            >
              <div className="shrink-0 group-hover:scale-110 transition-transform">{link.icon}</div>
              {isSidebarOpen && <span className="text-sm font-bold tracking-tight">{link.label}</span>}
            </button>
          ))}
          
          <div className="pt-4 mt-4 border-t border-white/5">
            <button
              onClick={() => navigate('/hub')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-white/5 hover:text-primary-fixed transition-all group"
            >
              <div className="shrink-0 group-hover:-translate-x-1 transition-transform"><ArrowLeft size={20} /></div>
              {isSidebarOpen && <span className="text-sm font-bold tracking-tight">Back to HUB</span>}
            </button>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-white/5">
          <div className={`bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-3 ${!isSidebarOpen && 'justify-center px-0'}`}>
            <div className="w-8 h-8 rounded-full bg-primary-fixed/10 border border-primary-fixed/30 shrink-0 flex items-center justify-center text-xs font-bold text-primary-fixed">
              {user ? user.username.substring(0, 2).toUpperCase() : 'MX'}
            </div>
            {isSidebarOpen && user && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-primary truncate">{user.fullName}</p>
                <p className="text-[10px] text-on-surface-variant truncate uppercase tracking-widest font-bold opacity-60">{user.role}</p>
              </div>
            )}
            {isSidebarOpen && (
              <button onClick={handleLogout} className="text-on-surface-variant hover:text-red-400 transition-colors" title="Logout">
                <LogOut size={18} />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Top bar */}
        <header className="h-16 flex items-center justify-between px-6 bg-[#0e1512]/60 backdrop-blur-xl border-b border-white/5 z-40">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-on-surface-variant hover:text-primary hover:bg-white/5 rounded-xl transition-colors"
            >
              <Menu size={20} />
            </button>
            
            {/* Search */}
            <div className="hidden sm:flex relative max-w-md w-full">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40" />
              <input 
                type="text" 
                placeholder="Search resources, users, logs..."
                className="w-full bg-white/5 border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-fixed/30 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-surface-container/50 border border-outline-variant/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></div>
              <span className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest">Network Online</span>
            </div>
            
            <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant/50 rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            
            <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant/50 rounded-full transition-colors">
              <HelpCircle size={20} />
            </button>
          </div>
        </header>

        {/* Content Canvas */}
        <main className="flex-1 overflow-y-auto p-gutter relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
