import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Lock, BadgeCheck, Loader2, ArrowRight, ShieldPlus } from 'lucide-react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, fullName })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(data.message || 'Registration failed.');
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
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-fixed/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 network-grid opacity-20"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[500px] relative z-10"
      >
        <button 
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary-fixed transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-[0.2em]">Kembali Ke Login</span>
        </button>

        <div className="glass-card rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="bg-gradient-to-b from-white/[0.05] to-transparent p-10 md:p-14">
            <div className="text-center mb-10">
              <div className="w-20 h-20 rounded-3xl bg-primary-fixed/10 flex items-center justify-center text-primary-fixed mx-auto mb-8 shadow-xl border border-primary-fixed/20">
                <img src="/assets/logo_monivexa.png" alt="Logo" className="h-10 w-auto opacity-50" />
              </div>
              <h1 className="text-3xl font-black tracking-tight mb-2 uppercase italic">Account Creation</h1>
              <p className="text-on-surface-variant font-medium text-sm opacity-60">Inisialisasi identitas operator Anda</p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-4 rounded-2xl mb-8">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-primary-fixed/10 border border-primary-fixed/20 text-primary-fixed text-xs p-4 rounded-2xl mb-8 flex items-center gap-3">
                <BadgeCheck size={18} />
                {success}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant ml-2">Nama Lengkap</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary-fixed transition-colors" size={20} />
                  <input 
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Masukkan Nama Lengkap"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary-fixed/50 transition-all font-medium placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant ml-2">ID Operator (Username)</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary-fixed transition-colors" size={20} />
                  <input 
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Pilih Username"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary-fixed/50 transition-all font-medium placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant ml-2">Kunci Keamanan (Password)</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary-fixed transition-colors" size={20} />
                  <input 
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Buat Password Aman"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary-fixed/50 transition-all font-medium placeholder:text-white/10"
                  />
                </div>
              </div>

              <button 
                disabled={loading}
                className="w-full relative group bg-white text-black font-black py-5 rounded-2xl overflow-hidden hover:bg-primary-fixed transition-all hover:shadow-[0_20px_40px_-10px_rgba(100,255,214,0.3)] active:scale-95 disabled:opacity-50 mt-6 uppercase tracking-[0.2em] text-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? <Loader2 className="animate-spin" /> : 'Buat Identitas'}
                  {!loading && <ArrowRight size={18} />}
                </span>
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-white/5 text-center">
              <p className="text-on-surface-variant text-sm font-medium opacity-60">
                Sudah terdaftar? <Link to="/login" className="text-primary-fixed hover:underline">Masuk ke Login</Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
