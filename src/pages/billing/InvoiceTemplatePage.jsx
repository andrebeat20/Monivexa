import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Save, 
  Image as ImageIcon, 
  Type, 
  Building2, 
  CreditCard, 
  FileText,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function InvoiceTemplatePage() {
  const navigate = useNavigate();
  const [activeTheme, setActiveTheme] = useState('modern');

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button 
          onClick={() => navigate('/billing/master')}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group w-fit"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-body-sm font-bold uppercase tracking-wider">Kembali ke Master</span>
        </button>
        <button className="bg-primary-fixed text-[#0e1512] px-6 py-2 rounded-xl text-body-sm font-bold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
          <Save size={18} />
          Simpan Perubahan
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg mt-4">
        {/* Settings Panel */}
        <div className="lg:col-span-5 flex flex-col gap-lg">
          <section className="bg-[#1a211f]/60 border border-outline-variant/20 p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-3 uppercase tracking-tighter">
              <Building2 size={24} className="text-primary-fixed" />
              Identitas Perusahaan
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Logo Perusahaan</label>
                <div className="h-32 w-full border-2 border-dashed border-outline-variant/30 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-primary-fixed/50 transition-colors cursor-pointer bg-white/5">
                  <ImageIcon size={32} className="text-on-surface-variant" />
                  <span className="text-xs text-on-surface-variant font-medium">Klik untuk ganti logo (.png)</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Nama Perusahaan</label>
                <input type="text" defaultValue="PT SAFANET DIGITAL NETWORKING" className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary-fixed/50 transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Alamat Lengkap</label>
                <textarea defaultValue="Jl. Ahmad Yani No. 12, Pontianak, Kalimantan Barat" className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary-fixed/50 transition-all h-24" />
              </div>
            </div>
          </section>

          <section className="bg-[#1a211f]/60 border border-outline-variant/20 p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-3 uppercase tracking-tighter">
              <CreditCard size={24} className="text-primary-fixed" />
              Info Pembayaran
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Nama Bank</label>
                <input type="text" defaultValue="BANK CENTRAL ASIA (BCA)" className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary-fixed/50 transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Nomor Rekening</label>
                <input type="text" defaultValue="1234-567-890" className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary-fixed/50 transition-all" />
              </div>
            </div>
          </section>
        </div>

        {/* Live Preview Panel */}
        <div className="lg:col-span-7">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-4 px-4">
              <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                <Eye size={16} /> Live Preview
              </h3>
              <div className="flex gap-2">
                {['modern', 'minimal', 'classic'].map(theme => (
                  <button 
                    key={theme}
                    onClick={() => setActiveTheme(theme)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${
                      activeTheme === theme ? 'bg-primary-fixed text-[#0e1512] border-primary-fixed' : 'border-white/10 text-on-surface-variant hover:border-white/30'
                    }`}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              layout
              className="bg-white rounded-xl shadow-2xl p-10 text-slate-900 min-h-[700px] flex flex-col gap-10"
            >
              {/* Preview Content (simplified version of InvoiceDetail) */}
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-black text-slate-900">MONIVEXA</h4>
                  <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-400">Infrastructure Core</p>
                  <div className="mt-4 text-[10px] text-slate-500 font-medium">
                    <p>PT SAFANET DIGITAL NETWORKING</p>
                    <p>Jl. Ahmad Yani No. 12, Pontianak</p>
                  </div>
                </div>
                <div className="text-right">
                  <h5 className="text-4xl font-bold text-slate-200">INVOICE</h5>
                  <p className="text-sm font-mono font-bold text-slate-400">INV-2024-001</p>
                </div>
              </div>

              <div className="h-px bg-slate-100 w-full"></div>

              <div className="grid grid-cols-2 gap-8 text-[11px]">
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest mb-2">Tagihan Kepada:</p>
                  <p className="text-base font-bold text-slate-900 uppercase">PELANGGAN CONTOH</p>
                  <p className="text-slate-500">Jl. Contoh Alamat No. 123, Pontianak</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-slate-400 font-bold uppercase tracking-widest mb-2">Pembayaran Melalui:</p>
                  <p className="text-sm font-bold text-slate-900">BANK CENTRAL ASIA (BCA)</p>
                  <p className="text-lg font-mono font-bold text-slate-700">1234-567-890</p>
                </div>
              </div>

              <div className="flex-1">
                <table className="w-full text-left text-[11px]">
                  <thead className="border-b-2 border-slate-900">
                    <tr>
                      <th className="py-2 font-bold uppercase">Deskripsi</th>
                      <th className="py-2 text-right font-bold uppercase">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-4 font-medium">Paket Internet Bisnis (Mei 2024)</td>
                      <td className="py-4 text-right font-bold">Rp 450.000</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium">Biaya Administrasi</td>
                      <td className="py-4 text-right font-bold">Rp 5.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col items-end gap-2 border-t border-slate-200 pt-6">
                <div className="flex justify-between w-40 text-slate-500">
                  <span className="text-[11px]">Subtotal</span>
                  <span className="font-bold">Rp 455.000</span>
                </div>
                <div className="flex justify-between w-40 text-xl font-black text-slate-900">
                  <span>TOTAL</span>
                  <span>Rp 455.000</span>
                </div>
              </div>

              <div className="mt-auto pt-10 border-t border-slate-50 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-slate-300" />
                <p className="text-[9px] text-slate-400 italic">Invoice ini sah dan dikeluarkan secara otomatis oleh sistem Monivexa.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
