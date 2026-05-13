import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetRequest = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Construct WhatsApp message
    const message = `Halo Admin Monivexa, saya lupa password untuk akun dengan username: "${username}". Mohon bantuannya untuk reset password.`;
    const waUrl = `https://wa.me/6285753327872?text=${encodeURIComponent(message)}`;
    
    // Delay for effect
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setLoading(false);
    }, 1000);
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
            
            <div className="flex justify-center mb-6">
              <Link to="/">
                <img src="/logo_monivexa.png" alt="Monivexa Logo" className="h-16 w-auto hover:scale-105 transition-transform" />
              </Link>
            </div>
            <div className="text-center">
              <span className="material-symbols-outlined text-primary-fixed text-5xl mb-4">lock_reset</span>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs text-3xl">Forgot Password</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Identity verification via Secure Channel</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-on-surface-variant leading-relaxed">
              <p>Untuk alasan keamanan, pemulihan password dilakukan melalui otentikasi admin. Masukkan username Anda di bawah untuk membuat permintaan reset via WhatsApp.</p>
            </div>

            <form className="flex flex-col gap-md" onSubmit={handleResetRequest}>
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Your Username</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" style={{ fontSize: '20px' }}>person</span>
                  <input 
                    className="w-full bg-surface-container/50 border border-outline-variant rounded-xl text-on-surface font-body-md py-3 pl-xl pr-sm focus:border-primary-fixed outline-none transition-all" 
                    placeholder="Masukkan Username Anda" 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <button 
                disabled={loading}
                className="w-full bg-primary-fixed text-[#0e1512] font-bold py-4 rounded-xl hover:shadow-[0px_0px_20px_rgba(95,251,214,0.3)] transition-all mt-4 flex justify-center items-center gap-2 disabled:opacity-50" 
                type="submit"
              >
                {loading ? 'Processing...' : 'Kirim Permintaan Reset'}
                {!loading && <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>send</span>}
              </button>
            </form>
            
            <div className="text-center pt-2 flex flex-col gap-2">
              <p className="text-sm text-on-surface-variant">
                Butuh bantuan lain? <a href="https://wa.me/6285753327872" target="_blank" rel="noopener noreferrer" className="text-primary-fixed hover:underline">Hubungi IT Support</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
