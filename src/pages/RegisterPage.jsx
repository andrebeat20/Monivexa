import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, fullName })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(data.message || 'Registrasi gagal.');
      }
    } catch (err) {
      setError('Gagal menghubungi server. Pastikan backend aktif.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col relative overflow-hidden w-full">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0e1512]/95"></div>
        <div className="absolute inset-0 network-grid pointer-events-none opacity-20"></div>
      </div>

      <main className="relative z-10 flex-grow flex items-center justify-center p-gutter flex-col">
        <div className="w-full max-w-[480px] flex flex-col gap-4">
          <button 
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary-fixed transition-colors w-fit group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-body-sm">Kembali ke Login</span>
          </button>

          <div className="glass-card rounded-2xl shadow-2xl p-lg flex flex-col gap-lg border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-fixed to-transparent opacity-30"></div>
            
            <div className="text-center">
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs text-3xl">Create Account</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Join the Monivexa Infrastructure Network</p>
            </div>

            <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-error/10 border border-error/20 text-error text-xs p-3 rounded flex items-center gap-2 animate-shake">
                  <span className="material-symbols-outlined text-[16px]">error</span>
                  {error}
                </div>
              )}
              {success && (
                <div className="bg-primary-fixed/10 border border-primary-fixed/20 text-primary-fixed text-xs p-3 rounded flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  {success}
                </div>
              )}

              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" style={{ fontSize: '20px' }}>badge</span>
                  <input 
                    className="w-full bg-surface-container/50 border border-outline-variant rounded-xl text-on-surface font-body-md py-3 pl-xl pr-sm focus:border-primary-fixed outline-none transition-all" 
                    placeholder="Nama Lengkap Anda" 
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Username</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" style={{ fontSize: '20px' }}>person</span>
                  <input 
                    className="w-full bg-surface-container/50 border border-outline-variant rounded-xl text-on-surface font-body-md py-3 pl-xl pr-sm focus:border-primary-fixed outline-none transition-all" 
                    placeholder="Pilih ID Unik" 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" style={{ fontSize: '20px' }}>lock</span>
                  <input 
                    className="w-full bg-surface-container/50 border border-outline-variant rounded-xl text-on-surface font-body-md py-3 pl-xl pr-sm focus:border-primary-fixed outline-none transition-all" 
                    placeholder="Buat Password Aman" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <button 
                disabled={loading}
                className="w-full bg-primary-fixed text-[#0e1512] font-bold py-4 rounded-xl hover:shadow-[0px_0px_20px_rgba(95,251,214,0.3)] transition-all mt-4 flex justify-center items-center gap-2 disabled:opacity-50" 
                type="submit"
              >
                {loading ? 'Creating Account...' : 'Register Account'}
                {!loading && <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>person_add</span>}
              </button>
            </form>
            
            <div className="text-center pt-2">
              <p className="text-sm text-on-surface-variant">
                Already have an account? <Link to="/login" className="text-primary-fixed font-bold hover:underline">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
