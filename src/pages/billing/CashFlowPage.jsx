import { motion } from 'framer-motion';
import { 
  Wallet, 
  ArrowUpCircle, 
  ArrowDownCircle, 
  Search, 
  Filter, 
  Download, 
  Plus, 
  MoreVertical,
  Calendar,
  CreditCard,
  Banknote,
  RefreshCcw
} from 'lucide-react';
import { useState } from 'react';

export default function CashFlowPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const transactions = [
    { id: 'TRX-001', date: '12 May 2026', desc: 'Pembayaran Tagihan INV-2605-002', category: 'Income', type: 'Bank Transfer', amount: '+450.000', status: 'Completed' },
    { id: 'TRX-002', date: '11 May 2026', desc: 'Pembelian Kabel FO (Roll)', category: 'Expense', type: 'Tunai', amount: '-1.250.000', status: 'Completed' },
    { id: 'TRX-003', date: '10 May 2026', desc: 'Pembayaran Tagihan INV-2605-005', category: 'Income', type: 'VA Mandiri', amount: '+450.000', status: 'Completed' },
    { id: 'TRX-004', date: '09 May 2026', desc: 'Sewa Rack Data Center', category: 'Expense', type: 'Bank Transfer', amount: '-5.000.000', status: 'Completed' },
    { id: 'TRX-005', date: '08 May 2026', desc: 'Deposit Saldo E-Wallet Ops', category: 'Transfer', type: 'Internal', amount: '2.000.000', status: 'Completed' },
    { id: 'TRX-006', date: '07 May 2026', desc: 'Refund Deposit Pelanggan CUST-088', category: 'Expense', type: 'Bank Transfer', amount: '-150.000', status: 'Pending' },
  ];

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-primary mb-1">Kas & Keuangan</h1>
          <p className="text-body-sm text-on-surface-variant uppercase tracking-widest font-label-caps">Manajemen Saldo & Arus Kas Real-time</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-body-sm font-medium hover:bg-surface-variant transition-all flex items-center gap-2">
            <Download size={18} />
            Export CSV
          </button>
          <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
            <Plus size={18} />
            Transaksi Baru
          </button>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {/* Main Balance */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-[#1a211f] to-[#0e1512] border border-primary-fixed/20 p-8 rounded-3xl relative overflow-hidden group shadow-2xl md:col-span-1"
        >
          <div className="absolute top-0 right-0 p-8 text-primary-fixed/10 group-hover:scale-125 transition-transform duration-700">
            <Wallet size={120} strokeWidth={1} />
          </div>
          <p className="text-xs font-bold text-primary-fixed uppercase tracking-[0.2em] mb-4">Total Saldo Tersedia</p>
          <h2 className="text-4xl font-extrabold text-primary mb-6 tracking-tighter">Rp 124.500.000</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-primary-fixed text-xs font-bold bg-primary-fixed/10 px-3 py-1.5 rounded-full border border-primary-fixed/20">
              <CreditCard size={14} /> 3 Akun Bank
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant text-xs font-bold bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
              <RefreshCcw size={14} className="animate-spin-slow" /> Terupdate 1m ago
            </div>
          </div>
        </motion.div>

        {/* In/Out Summary */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-md">
          <div className="bg-[#1a211f]/60 border border-outline-variant/20 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <p className="text-xs font-label-caps text-on-surface-variant uppercase mb-2 tracking-widest">Total Pemasukan (Bulan Ini)</p>
              <h3 className="text-2xl font-bold text-primary-fixed">Rp 88.320.000</h3>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[10px] text-primary-fixed font-bold bg-primary-fixed/10 p-2 rounded-lg border border-primary-fixed/10">
              <ArrowUpCircle size={16} /> 12% Lebih tinggi dari bulan lalu
            </div>
          </div>
          <div className="bg-[#1a211f]/60 border border-outline-variant/20 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <p className="text-xs font-label-caps text-on-surface-variant uppercase mb-2 tracking-widest">Total Pengeluaran (Bulan Ini)</p>
              <h3 className="text-2xl font-bold text-error">Rp 32.450.000</h3>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[10px] text-error font-bold bg-error/10 p-2 rounded-lg border border-error/10">
              <ArrowDownCircle size={16} /> 5% Penurunan biaya operasional
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="flex flex-col gap-md mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-primary flex items-center gap-2 uppercase tracking-tighter">
            <Banknote size={20} className="text-primary-fixed" />
            Riwayat Transaksi
          </h3>
          <div className="flex gap-2">
            <div className="relative hidden sm:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40" />
              <input 
                type="text" 
                placeholder="Cari transaksi..."
                className="bg-white/5 border border-white/5 rounded-full py-1.5 pl-9 pr-4 text-xs outline-none focus:border-primary-fixed/30"
              />
            </div>
            <button className="p-2 bg-surface-container border border-outline-variant/30 rounded-lg text-on-surface-variant hover:text-primary transition-all">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50 border-b border-outline-variant/20">
                  <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium">TANGGAL</th>
                  <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium">DESKRIPSI</th>
                  <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium text-center">KATEGORI</th>
                  <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium">METODE</th>
                  <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium text-right">JUMLAH (RP)</th>
                  <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium text-center">AKSI</th>
                </tr>
              </thead>
              <tbody className="text-body-sm divide-y divide-outline-variant/10">
                {transactions.map((trx, idx) => (
                  <tr key={idx} className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-on-surface font-medium">{trx.date}</span>
                        <span className="text-[10px] text-on-surface-variant opacity-60 font-mono uppercase tracking-widest">{trx.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-on-surface font-bold truncate max-w-[250px] uppercase tracking-tight">{trx.desc}</p>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter border ${
                        trx.category === 'Income' 
                        ? 'bg-primary-fixed/10 text-primary-fixed border-primary-fixed/20' 
                        : trx.category === 'Expense' 
                          ? 'bg-error/10 text-error border-error/20'
                          : 'bg-white/5 text-on-surface-variant border-white/10'
                      }`}>
                        {trx.category}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <CreditCard size={14} />
                        {trx.type}
                      </div>
                    </td>
                    <td className={`px-6 py-5 text-right font-mono font-extrabold text-base ${
                      trx.amount.startsWith('+') ? 'text-primary-fixed' : trx.amount.startsWith('-') ? 'text-error' : 'text-on-surface'
                    }`}>
                      {trx.amount}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <button className="text-on-surface-variant hover:text-primary transition-colors p-1.5 hover:bg-surface-variant rounded">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-outline-variant/20 flex justify-center bg-surface-container-low/30">
            <button className="text-primary-fixed text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
              Muat Lebih Banyak Transaksi <Calendar size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
