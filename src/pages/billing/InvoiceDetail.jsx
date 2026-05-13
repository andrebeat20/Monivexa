import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Printer, 
  Download, 
  CheckCircle, 
  Clock, 
  CreditCard,
  Building,
  User,
  MapPin,
  Mail,
  ShieldCheck,
  Globe,
  ArrowDownRight,
  Hash
} from 'lucide-react';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';

export default function InvoiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const invoiceData = {
    id: id || 'INV-2605-001',
    date: '01 May 2026',
    dueDate: '10 May 2026',
    status: id === 'INV-2605-002' ? 'Paid' : 'Unpaid',
    customer: {
      name: id === 'INV-2605-002' ? 'AMSAL' : 'RUMAH MANUS',
      address: id === 'INV-2605-002' ? 'SEGURI, KAB. MEMPAWAH' : 'JL. SANGGAU, PONTIANAK',
      email: 'customer@example.com',
      phone: '+62 812-3456-7890'
    },
    items: [
      { description: 'Paket Internet Bisnis (Dedicated 1:1)', period: 'Mei 2026', qty: 1, unitPrice: 450000, total: 450000 },
      { description: 'Biaya Administrasi', period: '-', qty: 1, unitPrice: 5000, total: 5000 }
    ],
    subtotal: 455000,
    tax: 0,
    total: 455000
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-8 max-w-[1000px] mx-auto w-full pb-20 px-4"
    >
      {/* Dynamic Header Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <button 
          onClick={() => navigate('/billing')}
          className="flex items-center gap-3 text-white/40 hover:text-primary-fixed transition-all group w-fit"
        >
          <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary-fixed/10 group-hover:border-primary-fixed/20">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Ledger</span>
        </button>
        
        <div className="flex gap-3">
          <button className="flex-1 md:flex-none bg-white/5 border border-white/10 text-white/60 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <Printer size={16} /> Print Document
          </button>
          <button className="flex-1 md:flex-none bg-primary-fixed text-[#0e1512] px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(95,251,214,0.3)] transition-all flex items-center justify-center gap-2">
            <Download size={18} /> Export PDF
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard hover={false} className="overflow-hidden border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          {/* Status Indicator Stripe */}
          <div className={`py-4 px-8 text-center text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3 ${
            invoiceData.status === 'Paid' 
            ? 'bg-primary-fixed text-[#0e1512]' 
            : 'bg-red-500 text-white'
          }`}>
            {invoiceData.status === 'Paid' ? (
              <>
                <CheckCircle size={14} strokeWidth={3} /> Verified Payment • Monivexa Core
              </>
            ) : (
              <>
                <Clock size={14} strokeWidth={3} /> Awaiting Settlement • Overdue: {invoiceData.dueDate}
              </>
            )}
          </div>

          <div className="p-8 md:p-16 flex flex-col gap-16 relative">
            {/* Design Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
              <h2 className="text-[15rem] font-black tracking-tighter">MX</h2>
            </div>

            {/* Top Branding Section */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-[#0e1512] shadow-[0_0_20px_rgba(95,251,214,0.3)]">
                      <Globe size={24} />
                    </div>
                    <h2 className="text-4xl font-black text-white tracking-tighter italic">MONIVEXA</h2>
                  </div>
                  <p className="text-[10px] text-primary-fixed font-black tracking-[0.4em] uppercase opacity-70">Infrastructure Network Core</p>
                </div>
                <div className="space-y-2 text-[11px] font-bold text-white/40 uppercase tracking-widest">
                  <p className="flex items-center gap-3"><Building size={14} className="text-primary-fixed/40" /> PT Safanet Digital Networking</p>
                  <p className="flex items-center gap-3"><MapPin size={14} className="text-primary-fixed/40" /> Pontianak, West Kalimantan</p>
                  <p className="flex items-center gap-3"><Mail size={14} className="text-primary-fixed/40" /> network.ops@monivexa.com</p>
                </div>
              </div>
              
              <div className="md:text-right space-y-4">
                <div className="space-y-1">
                  <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic opacity-20">Invoice</h1>
                  <div className="flex items-center md:justify-end gap-2 text-primary-fixed font-mono font-black text-2xl">
                    <Hash size={20} className="opacity-40" />
                    {invoiceData.id}
                  </div>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 space-y-1">
                  <p>Issue Date: <span className="text-white ml-2">{invoiceData.date}</span></p>
                  <p>Settlement Deadline: <span className="text-red-400 ml-2">{invoiceData.dueDate}</span></p>
                </div>
              </div>
            </div>

            {/* Recipient & Payment Method */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <h3 className="text-[10px] font-black text-primary-fixed uppercase tracking-[0.3em] border-b border-white/5 pb-3">Billed Recipient</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20">
                      <User size={24} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-1">{invoiceData.customer.name}</h4>
                      <p className="text-[11px] font-bold text-white/40 uppercase tracking-wider">{invoiceData.customer.phone}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-[11px] font-bold text-white/40 uppercase tracking-tight ml-16">
                    <p className="flex items-start gap-2"><MapPin size={14} className="text-primary-fixed/40 shrink-0" /> {invoiceData.customer.address}</p>
                    <p className="flex items-center gap-2"><Mail size={14} className="text-primary-fixed/40 shrink-0" /> {invoiceData.customer.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/[0.03] p-8 rounded-[2rem] border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <CreditCard size={100} />
                </div>
                <h3 className="text-[10px] font-black text-primary-fixed uppercase tracking-[0.3em] border-b border-white/5 pb-3 mb-6">Settlement Channel</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary-fixed">
                      <Building size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Bank Central Asia (BCA)</p>
                      <p className="text-2xl font-black text-white font-mono tracking-tighter">123 - 456 - 7890</p>
                      <p className="text-[9px] font-black text-primary-fixed uppercase tracking-[0.2em] mt-1 opacity-60">a.n PT Safanet Digital Networking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Itemization */}
            <div className="space-y-6 relative z-10">
              <h3 className="text-[10px] font-black text-primary-fixed uppercase tracking-[0.3em] border-b border-white/5 pb-3">Service Inventory</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="py-5 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Deployment Description</th>
                      <th className="py-5 text-[10px] font-black text-white/20 uppercase tracking-[0.2em] text-center">Cycle</th>
                      <th className="py-5 text-[10px] font-black text-white/20 uppercase tracking-[0.2em] text-center">Unit</th>
                      <th className="py-5 text-[10px] font-black text-white/20 uppercase tracking-[0.2em] text-right">Base Price</th>
                      <th className="py-5 text-[10px] font-black text-white/20 uppercase tracking-[0.2em] text-right">Net Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.02]">
                    {invoiceData.items.map((item, idx) => (
                      <tr key={idx} className="group">
                        <td className="py-8">
                          <p className="font-black text-white uppercase tracking-tight text-base mb-1">{item.description}</p>
                          <span className="text-[9px] text-white/20 font-black uppercase tracking-widest italic group-hover:text-primary-fixed transition-colors">Node Operational Status: Optimal</span>
                        </td>
                        <td className="py-8 text-center text-xs font-bold text-white/40 uppercase">{item.period}</td>
                        <td className="py-8 text-center text-xs font-bold text-white/40">{item.qty}</td>
                        <td className="py-8 text-right font-mono text-sm text-white/40 uppercase">Rp {item.unitPrice.toLocaleString('id-ID')}</td>
                        <td className="py-8 text-right font-mono text-base text-white font-black">Rp {item.total.toLocaleString('id-ID')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary & Validation */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 relative z-10 mt-8">
              <div className="max-w-[320px] w-full">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <ShieldCheck size={24} className="text-primary-fixed shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase leading-relaxed tracking-tight italic">
                      This electronic record is cryptographically verified and serves as a valid proof of transaction within the Monivexa Infrastructure Network.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-[350px] space-y-4">
                <div className="flex justify-between items-center text-[11px] font-black text-white/30 uppercase tracking-[0.2em]">
                  <span>Subtotal Units</span>
                  <span className="font-mono text-white/60">Rp {invoiceData.subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between items-center text-[11px] font-black text-white/30 uppercase tracking-[0.2em]">
                  <span>Infrastructure Tax (0%)</span>
                  <span className="font-mono text-white/60">Rp 0</span>
                </div>
                <div className="h-px w-full bg-white/5 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black text-primary-fixed uppercase tracking-[0.4em] italic">Operational Total</span>
                  <div className="flex flex-col items-end">
                    <span className="text-4xl font-black text-white tracking-tighter">Rp {invoiceData.total.toLocaleString('id-ID')}</span>
                    <div className="flex items-center gap-1 text-[9px] font-black text-primary-fixed uppercase tracking-widest mt-1">
                      <ArrowDownRight size={10} /> Authorized Ledger Entry
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Holographic Footer Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-primary-fixed/20 to-transparent"></div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
