import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { useState } from 'react';

export default function LoginPortal() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        localStorage.setItem('monivexa_token', data.token);
        localStorage.setItem('monivexa_user', JSON.stringify(data.user));
        navigate('/hub');
      } else {
        if (data.error_code === 'USER_NOT_FOUND') {
          setError(data.message);
        } else if (data.error_code === 'WRONG_PASSWORD') {
          const newCount = attemptCount + 1;
          setAttemptCount(newCount);
          if (newCount >= 3) {
            setError('Password salah 3x. Lupa password? Silakan klik Lupa Password di bawah.');
          } else {
            setError(data.message);
          }
        } else {
          setError(data.message || 'Login gagal.');
        }
      }
    } catch (err) {
      setError('Gagal menghubungi server. Pastikan backend aktif.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col relative overflow-hidden w-full">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-40" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBW45SRSqPLWCBzt1x2sJR01UhyvLJyRNinMPSyEL6xYoQV2D2ixRWu5jjjFrgfao4EnuxVSIOsUvYVWxaVvsMgaiRsMFsnSfSMfEGPk2PiiKI6LjenSGwneF2R1cf5hdF0FLaEr_LOQEaDZeP81AnQNEZfrRFhZTiOVNjoLWPGklbkg8a2t-C96em7GMmUrVl29MZjTo9B7MhKAgp-AaV4eO7oEr_c356FvOmlsQ-rB2H3cqs2m3FjQWkEmgru4DzFDsNazhYOmxA')" }}
        ></div>
        <div className="absolute inset-0 bg-[#0e1512]/90"></div>
        <div className="absolute inset-0 network-grid pointer-events-none opacity-20"></div>
      </div>

      {/* Main Content Canvas */}
      <main className="relative z-10 flex-grow flex items-center justify-center p-gutter flex-col">
        <div className="w-full max-w-[480px] flex flex-col gap-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary-fixed transition-colors w-fit group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-body-sm">Kembali ke Beranda</span>
          </button>

          {/* Login Card */}
          <div className="glass-card rounded-2xl shadow-2xl p-lg flex flex-col gap-lg border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-fixed to-transparent opacity-30"></div>
            {/* Header */}
            <div className="text-center">
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Client Portal</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Secure access to Network Ops Center</p>
            </div>
            <div className="h-px w-full bg-outline-variant"></div>
            
            {/* Form */}
            <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-error/10 border border-error/20 text-error text-xs p-3 rounded flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">error</span>
                  {error}
                </div>
              )}
              {/* Username Field */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="username">Username</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" style={{ fontSize: '20px' }}>person</span>
                  <input 
                    className="w-full bg-surface-container/50 border border-outline-variant rounded-DEFAULT text-on-surface font-body-md text-body-md py-sm pl-xl pr-sm focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-colors placeholder:text-outline outline-none" 
                    id="username" 
                    name="username" 
                    placeholder="Contoh: owner, admin, demo" 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              {/* Password Field */}
              <div className="flex flex-col gap-xs">
                <div className="flex justify-between items-center">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="password">Password</label>
                  <Link to="/forgot-password" size="sm" className="font-body-sm text-body-sm text-primary-fixed-dim hover:text-primary-fixed transition-colors cursor-pointer">Forgot Password?</Link>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" style={{ fontSize: '20px' }}>lock</span>
                  <input 
                    className="w-full bg-surface-container/50 border border-outline-variant rounded-DEFAULT text-on-surface font-body-md text-body-md py-sm pl-xl pr-sm focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-colors placeholder:text-outline outline-none" 
                    id="password" 
                    name="password" 
                    placeholder="Default: password123" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              {/* Action Button */}
              <button 
                disabled={loading}
                className="w-full bg-primary-fixed text-[#0e1512] font-headline-md text-body-lg font-semibold py-sm rounded-DEFAULT hover:shadow-[0px_0px_12px_rgba(100,255,214,0.4)] transition-all mt-sm flex justify-center items-center gap-xs disabled:opacity-50 disabled:cursor-not-allowed" 
                type="submit"
              >
                {loading ? 'Authenticating...' : 'Login'}
                {!loading && <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>}
              </button>
            </form>
            
            {/* Footer Links */}
            <div className="text-center pt-sm">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Don't have an account? <Link to="/register" className="text-primary-fixed-dim hover:text-primary-fixed transition-colors font-medium">Register here</Link>
              </p>
            </div>
          </div>
          
          {/* Connection Status */}
          <div className="mt-md flex justify-center items-center gap-xs">
            <div className="w-2 h-2 rounded-full bg-primary-fixed shadow-[0px_0px_8px_rgba(100,255,218,0.6)]"></div>
            <span className="font-label-caps text-label-caps text-on-surface-variant opacity-80 uppercase tracking-widest">Global Network Online</span>
          </div>
        </div>
      </main>
    </div>
  );
}
