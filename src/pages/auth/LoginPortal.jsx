import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Lock, User, Eye, EyeOff, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

export default function LoginPortal() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('monivexa_token', data.token);
        localStorage.setItem('monivexa_user', JSON.stringify(data.user));
        navigate('/hub');
      } else {
        setError(data.message || 'Authentication failed. Please check your credentials.');
      }
    } catch (err) {
      setError('Connection refused. Ensure the backend engine is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0a0f0d] text-white min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary-fixed/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 network-grid opacity-20"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[500px] relative z-10"
      >
        {/* Back Link */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary-fixed transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-[0.2em]">Kembali Ke Halaman Utama</span>
        </button>

        {/* Login Card */}
        <div className="glass-card rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="bg-gradient-to-b from-white/[0.05] to-transparent p-10 md:p-14">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div 
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <img src="/assets/logo_monivexa.png" alt="Logo" className="h-12 w-auto" />
                <span className="text-2xl font-black tracking-tighter uppercase">Monivexa</span>
              </motion.div>
              <h1 className="text-3xl font-black tracking-tight mb-2 uppercase italic">Secure Gateway</h1>
              <p className="text-on-surface-variant font-medium text-sm opacity-60">Akses terotorisasi ke Inti Infrastruktur</p>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-4 rounded-2xl mb-8 flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">!</div>
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant ml-2">ID Operator</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary-fixed transition-colors" size={20} />
                  <input 
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Username"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary-fixed/50 transition-all font-medium placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant ml-2">Token Akses (Password)</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary-fixed transition-colors" size={20} />
                  <input 
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 outline-none focus:border-primary-fixed/50 transition-all font-medium placeholder:text-white/10"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="flex justify-end px-2">
                  <Link to="/forgot-password" size="sm" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-fixed/50 hover:text-primary-fixed transition-colors">Forget Password</Link>
                </div>
              </div>

              <button 
                disabled={loading}
                className="w-full relative group bg-white text-black font-black py-5 rounded-2xl overflow-hidden hover:bg-primary-fixed transition-all hover:shadow-[0_20px_40px_-10px_rgba(100,255,214,0.3)] active:scale-95 disabled:opacity-50 mt-4 uppercase tracking-[0.2em] text-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? <Loader2 className="animate-spin" /> : 'Otentikasi'}
                  {!loading && <ArrowRight size={18} />}
                </span>
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-white/5 text-center">
              <p className="text-on-surface-variant text-sm font-medium opacity-60">
                Baru di platform ini? <Link to="/register" className="text-primary-fixed hover:underline">Daftar Akun</Link>
              </p>
            </div>
          </div>
        </div>

        {/* System Footer Info */}
        <div className="mt-10 flex items-center justify-center gap-6 opacity-30">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-primary-fixed" />
            <span className="text-[10px] font-black uppercase tracking-widest">TLS 1.3 Aktif</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20"></div>
          <span className="text-[10px] font-black uppercase tracking-widest">Protokol Akses Aman v4.0</span>
        </div>
      </motion.div>
    </div>
  );
}

// Simple AnimatePresence workaround if not importing it correctly
function AnimatePresence({ children }) {
  return <>{children}</>;
}
