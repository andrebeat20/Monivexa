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
  Mail
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { StatusBadge } from '../../components/shared/StatusBadge';
import { PageHeader } from '../../components/shared/PageHeader';

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
    <>
      <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-body-sm font-medium hover:bg-surface-variant transition-all flex items-center gap-2">
        <Download size={18} /> Export CSV
      </button>
      <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
        <Plus size={18} /> Buat Invoice
      </button>
    </>
  );

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      <PageHeader 
        title="Daftar Invoice" 
        subtitle="Manajemen Penagihan Pelanggan" 
        actions={headerActions} 
      />

      <div className="bg-[#1a211f]/60 border border-outline-variant/20 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
          <input 
            type="text" 
            placeholder="Cari No Invoice atau Nama Pelanggan..." 
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-primary-fixed/50 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2.5 rounded-lg text-body-sm hover:bg-surface-variant transition-all font-bold uppercase tracking-widest text-[10px]">
            <Filter size={16} /> Filter Status
          </button>
          <button className="flex-1 md:flex-none flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2.5 rounded-lg text-body-sm hover:bg-surface-variant transition-all font-bold uppercase tracking-widest text-[10px]">
            <Calendar size={16} /> Periode
          </button>
        </div>
      </div>

      <GlassCard className="overflow-hidden shadow-2xl" hover={false}>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/20">
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">NO INVOICE</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">PELANGGAN / PAKET</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest text-right">TOTAL (RP)</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest text-center">JATUH TEMPO</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">STATUS</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="text-body-sm divide-y divide-outline-variant/10">
              {invoices.map((inv, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={inv.id} 
                  className="hover:bg-surface-container-low/50 transition-colors group cursor-pointer"
                  onClick={() => navigate(`/billing/invoice/${inv.id}`)}
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-lg text-primary-fixed">
                        <Receipt size={16} />
                      </div>
                      <span className="font-mono text-primary-fixed font-bold tracking-tight">{inv.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <p className="text-primary font-bold uppercase tracking-tight">{inv.name}</p>
                      <span className="text-[10px] text-on-surface-variant opacity-70 tracking-wider">{inv.product}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-mono text-on-surface font-bold text-base">{inv.price}</td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-on-surface font-medium">{inv.due}</span>
                      <span className="text-[9px] text-on-surface-variant uppercase tracking-tighter">Created: {inv.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <StatusBadge status={inv.status === 'Paid' ? 'Lunas' : 'Belum Lunas'} type={inv.status === 'Paid' ? 'success' : 'error'} />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="p-2 text-on-surface-variant hover:text-primary-fixed hover:bg-surface-variant rounded-lg transition-all border border-outline-variant/10">
                        <Printer size={18} />
                      </button>
                      <button className="p-2 text-on-surface-variant hover:text-primary-fixed hover:bg-surface-variant rounded-lg transition-all border border-outline-variant/10">
                        <Mail size={18} />
                      </button>
                      <button className="p-2 text-on-surface-variant hover:text-primary transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 px-2">
        <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest opacity-60">Page 1 of 24 • Total 142 Invoices</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary border border-outline-variant/20 rounded-lg transition-all">Prev</button>
          <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-fixed border border-primary-fixed/20 bg-primary-fixed/5 rounded-lg transition-all shadow-[0_0_10px_rgba(95,251,214,0.1)]">Next</button>
        </div>
      </div>
    </div>
  );
}
