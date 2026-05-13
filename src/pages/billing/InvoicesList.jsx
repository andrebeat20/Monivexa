import { motion } from 'framer-motion';
import { 
  Receipt, 
  Search, 
  Filter, 
  Download, 
  Plus, 
  MoreVertical, 
  Eye, 
  Calendar,
  Printer,
  Mail,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { PageHeader } from '../../components/shared/PageHeader';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 20 }
  }
};

export default function InvoicesList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const invoices = [
    { id: 'INV-2605-001', name: 'RUMAH MANUS', product: 'Paket Bisnis', price: '450.000', date: '01 May 2026', due: '10 May 2026', status: 'Unpaid' },
    { id: 'INV-2605-002', name: 'AMSAL', product: 'Paket Bisnis', price: '450.000', date: '01 May 2026', due: '12 May 2026', status: 'Paid' },
    { id: 'INV-2605-003', name: 'KOSMEN ADEN', product: 'Paket Premium', price: '750.000', date: '01 May 2026', due: '15 May 2026', status: 'Unpaid' },
    { id: 'INV-2605-004', name: 'HERMAN FILIPUS', product: 'Paket Basic', price: '250.000', date: '01 May 2026', due: '15 May 2026', status: 'Unpaid' },
    { id: 'INV-2605-005', name: 'KUTREK', product: 'Paket Bisnis', price: '450.000', date: '01 May 2026', due: '18 May 2026', status: 'Paid' },
    { id: 'INV-2605-006', name: 'BUDI SANTOSO', product: 'Paket Bisnis', price: '450.000', date: '01 May 2026', due: '20 May 2026', status: 'Unpaid' },
  ];

  const headerActions = (
    <div className="flex gap-4">
      <button className="hidden md:flex bg-white/5 border border-white/10 text-white/60 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all items-center gap-2">
        <Download size={16} /> Export CSV
      </button>
      <button className="bg-primary-fixed text-[#0e1512] px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(95,251,214,0.3)] transition-all flex items-center gap-2">
        <Plus size={18} /> New Invoice
      </button>
    </div>
  );

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8 max-w-container-max mx-auto w-full pb-20 px-4 md:px-0"
    >
      <PageHeader 
        title="INVOICE LEDGER" 
        subtitle="Comprehensive Billing History and Status" 
        actions={headerActions} 
      />

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-6 relative group">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary-fixed transition-colors" />
          <input 
            type="text" 
            placeholder="Search by ID or Customer Name..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none focus:border-primary-fixed/50 transition-all font-medium placeholder:text-white/10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="md:col-span-3">
          <button className="w-full flex items-center justify-between bg-white/5 border border-white/10 px-5 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest text-white/60 hover:bg-white/10 transition-all">
            <div className="flex items-center gap-2"><Filter size={16} /> Status Filter</div>
            <ChevronRight size={14} />
          </button>
        </div>
        <div className="md:col-span-3">
          <button className="w-full flex items-center justify-between bg-white/5 border border-white/10 px-5 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest text-white/60 hover:bg-white/10 transition-all">
            <div className="flex items-center gap-2"><Calendar size={16} /> Period Select</div>
            <ChevronRight size={14} />
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <GlassCard className="overflow-hidden border border-white/5 shadow-2xl" hover={false}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/[0.02] border-b border-white/5">
                  <th className="px-8 py-5 text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Transaction ID</th>
                  <th className="px-8 py-5 text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Customer Identity</th>
                  <th className="px-8 py-5 text-[10px] font-black text-white/40 uppercase tracking-[0.2em] text-right">Total Amount</th>
                  <th className="px-8 py-5 text-[10px] font-black text-white/40 uppercase tracking-[0.2em] text-center">Due Deadline</th>
                  <th className="px-8 py-5 text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Status</th>
                  <th className="px-8 py-5 text-[10px] font-black text-white/40 uppercase tracking-[0.2em] text-center">Control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03]">
                {invoices.map((inv, idx) => (
                  <tr 
                    key={inv.id} 
                    className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
                    onClick={() => navigate(`/billing/invoice/${inv.id}`)}
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-white/5 rounded-xl text-primary-fixed group-hover:bg-primary-fixed group-hover:text-[#0e1512] transition-all">
                          <Receipt size={16} />
                        </div>
                        <span className="font-mono text-[11px] text-primary-fixed font-bold tracking-tight">{inv.id}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <p className="text-white font-black uppercase tracking-tight mb-1">{inv.name}</p>
                        <span className="text-[9px] text-white/30 font-black uppercase tracking-widest">{inv.product}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right font-mono text-white font-bold text-base">Rp {inv.price}</td>
                    <td className="px-8 py-6 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-white text-xs font-bold">{inv.due}</span>
                        <span className="text-[9px] text-white/20 font-black uppercase tracking-tighter mt-1">Issued: {inv.date}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                        inv.status === 'Paid' ? 'bg-primary-fixed/10 text-primary-fixed' : 'bg-red-500/10 text-red-400'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${inv.status === 'Paid' ? 'bg-primary-fixed' : 'bg-red-400'}`}></div>
                        {inv.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <div className="flex justify-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                        <button className="p-2.5 text-white hover:text-primary-fixed hover:bg-white/10 rounded-xl transition-all border border-white/5">
                          <Printer size={16} />
                        </button>
                        <button className="p-2.5 text-white hover:text-primary-fixed hover:bg-white/10 rounded-xl transition-all border border-white/5">
                          <Mail size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </motion.div>

      {/* Pagination Container */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.3em]">Records: 1 - 6 of 142 • Active Ledger</p>
        <div className="flex gap-3">
          <button className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white border border-white/10 rounded-xl transition-all bg-white/5">Previous Page</button>
          <button className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-[#0e1512] bg-primary-fixed rounded-xl transition-all shadow-lg shadow-primary-fixed/20">Next Section</button>
        </div>
      </motion.div>
    </motion.div>
  );
}
