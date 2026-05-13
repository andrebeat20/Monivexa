import { motion } from 'framer-motion';
import { 
  Receipt, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Printer, 
  Plus, 
  Filter, 
  MoreVertical, 
  Eye,
  History,
  PieChart as PieIcon,
  Search,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Globe
} from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { PageHeader } from '../../components/shared/PageHeader';

ChartJS.register(ArcElement, ChartTooltip, Legend);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 20 }
  }
};

export default function BillingModule() {
  const navigate = useNavigate();
  
  const chartData = {
    labels: ['Paid', 'Unpaid'],
    datasets: [{
      data: [12855000, 87311000],
      backgroundColor: ['#5ffbd6', 'rgba(255, 255, 255, 0.05)'],
      borderColor: ['rgba(255, 255, 255, 0.1)', 'transparent'],
      borderWidth: 1,
      hoverOffset: 10
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '82%',
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1a211f',
        padding: 12,
        titleColor: '#5ffbd6',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        displayColors: false
      }
    }
  };

  const invoices = [
    { id: 'INV-2605-001', name: 'RUMAH MANUS', address: 'JL. SANGGAU', product: 'Paket Bisnis', price: '450.000', due: '10 May 2026', status: 'Unpaid' },
    { id: 'INV-2605-002', name: 'AMSAL', address: 'SEGURI', product: 'Paket Bisnis', price: '450.000', due: '12 May 2026', status: 'Paid' },
    { id: 'INV-2605-003', name: 'KOSMEN ADEN', address: 'SEGURI', product: 'Paket Premium', price: '750.000', due: '15 May 2026', status: 'Unpaid' },
    { id: 'INV-2605-004', name: 'HERMAN FILIPUS', address: 'SERASAU', product: 'Paket Basic', price: '250.000', due: '15 May 2026', status: 'Unpaid' },
    { id: 'INV-2605-005', name: 'KUTREK', address: 'SURYA DELI', product: 'Paket Bisnis', price: '450.000', due: '18 May 2026', status: 'Paid' },
  ];

  const headerActions = (
    <div className="flex gap-4">
      <button className="hidden md:flex bg-white/5 border border-white/10 text-white/60 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all items-center gap-2">
        <Printer size={16} /> Export PDF
      </button>
      <button className="bg-primary-fixed text-[#0e1512] px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(95,251,214,0.3)] transition-all flex items-center gap-2">
        <Plus size={18} /> New Transaction
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
        title="BILLING TERMINAL" 
        subtitle="Operational Revenue Oversight • PT SAFANET DIGITAL" 
        actions={headerActions} 
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Revenue Target", val: "Rp 124.5M", trend: "+12.5%", icon: <Receipt />, color: "from-blue-500/20 to-cyan-500/10" },
          { label: "Unpaid Balance", val: "Rp 87.3M", trend: "High Risk", icon: <AlertCircle />, color: "from-red-500/20 to-orange-500/10" },
          { label: "Collection Rate", val: "12.8%", trend: "In Progress", icon: <CheckCircle />, color: "from-primary-fixed/20 to-emerald-500/10" }
        ].map((stat, i) => (
          <motion.div key={i} variants={itemVariants} className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            <GlassCard className="p-8 border border-white/5 relative z-10 overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-primary-fixed">
                  {stat.icon}
                </div>
                <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${stat.label === 'Unpaid Balance' ? 'text-red-400 bg-red-400/10' : 'text-primary-fixed bg-primary-fixed/10'}`}>
                  {stat.trend}
                </div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-white tracking-tighter">{stat.val}</h3>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Table Section */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div variants={itemVariants}>
            <GlassCard hover={false} className="overflow-hidden border border-white/5">
              <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white/[0.02]">
                <div>
                  <h2 className="text-xl font-black text-white uppercase italic tracking-tight">Active Invoices</h2>
                  <p className="text-xs font-medium text-white/40">Showing all pending and settled transactions for May 2026</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search invoices..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs outline-none focus:border-primary-fixed/50 transition-all"
                    />
                  </div>
                  <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-white/40 hover:text-white transition-all">
                    <Filter size={18} />
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="px-8 py-5 text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Identifier</th>
                      <th className="px-8 py-5 text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Customer / Location</th>
                      <th className="px-8 py-5 text-[10px] font-black text-white/40 uppercase tracking-[0.2em] text-right">Amount</th>
                      <th className="px-8 py-5 text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Status</th>
                      <th className="px-8 py-5 text-[10px] font-black text-white/40 uppercase tracking-[0.2em] text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.03]">
                    {invoices.map((inv, idx) => (
                      <tr 
                        key={idx} 
                        className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
                        onClick={() => navigate(`/billing/invoice/${inv.id}`)}
                      >
                        <td className="px-8 py-6 font-mono text-[11px] text-primary-fixed font-bold">{inv.id}</td>
                        <td className="px-8 py-6">
                          <div className="font-bold text-white uppercase tracking-tight mb-1">{inv.name}</div>
                          <div className="text-[9px] text-white/30 uppercase tracking-widest font-black flex items-center gap-2">
                            <Globe size={10} /> {inv.address}
                          </div>
                        </td>
                        <td className="px-8 py-6 text-right font-mono text-sm text-white font-bold">Rp {inv.price}</td>
                        <td className="px-8 py-6">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                            inv.status === 'Paid' ? 'bg-primary-fixed/10 text-primary-fixed' : 'bg-red-500/10 text-red-400'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${inv.status === 'Paid' ? 'bg-primary-fixed' : 'bg-red-400'}`}></div>
                            {inv.status}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <button className="text-white/20 group-hover:text-primary-fixed transition-all p-2 hover:bg-primary-fixed/10 rounded-xl">
                            <ChevronRight size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-white/[0.01] flex justify-center">
                <button 
                  onClick={() => navigate('/billing/invoices')}
                  className="text-[10px] font-black text-white/40 hover:text-primary-fixed uppercase tracking-[0.3em] flex items-center gap-3 transition-all"
                >
                  View Global Transaction Log <ArrowUpRight size={14} />
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Sidebar Analytics Section */}
        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <GlassCard className="overflow-hidden border border-white/5" hover={false}>
              <div className="p-6 border-b border-white/5 flex items-center gap-3">
                <PieIcon size={18} className="text-primary-fixed" />
                <h2 className="text-sm font-black text-white uppercase tracking-widest italic">Revenue Flow</h2>
              </div>
              <div className="p-8">
                <div className="h-56 w-full relative mb-8">
                  <Doughnut data={chartData} options={chartOptions} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-4xl font-black text-primary-fixed tracking-tighter">12.8%</span>
                    <span className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-black">Collected</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary-fixed shadow-[0_0_10px_rgba(95,251,214,0.5)]"></div>
                      <span className="text-xs font-bold text-white/60">Settled Invoices</span>
                    </div>
                    <span className="font-mono text-sm text-white font-bold">12.8M</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                      <span className="text-xs font-bold text-white/60">Pending Debt</span>
                    </div>
                    <span className="font-mono text-sm text-white font-bold">87.3M</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassCard className="overflow-hidden border border-white/5" hover={false}>
              <div className="p-6 border-b border-white/5 flex items-center gap-3">
                <History size={18} className="text-primary-fixed" />
                <h2 className="text-sm font-black text-white uppercase tracking-widest italic">Recent Events</h2>
              </div>
              <div className="p-6">
                <div className="space-y-8 relative before:absolute before:inset-0 before:left-[19px] before:h-full before:w-px before:bg-white/5">
                  {[
                    { title: "Payment Secured", sub: "INV-2605-002 • AMSAL", val: "+Rp 450.000", time: "10m ago", icon: <CheckCircle className="text-[#0e1512]" />, bg: "bg-primary-fixed" },
                    { title: "Invoice Dispatched", sub: "Batch May 2026", val: "225 Users", time: "2h ago", icon: <Receipt className="text-white/40" />, bg: "bg-white/10" }
                  ].map((event, i) => (
                    <div key={i} className="relative flex gap-5">
                      <div className={`w-10 h-10 rounded-2xl ${event.bg} flex items-center justify-center shrink-0 z-10 shadow-lg`}>
                        {event.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-black text-white uppercase tracking-tight">{event.title}</span>
                          <span className="text-[10px] text-white/20 font-medium">{event.time}</span>
                        </div>
                        <p className="text-[10px] text-white/40 font-medium mb-2">{event.sub}</p>
                        <p className={`text-xs font-black tracking-tighter ${event.bg === 'bg-primary-fixed' ? 'text-primary-fixed' : 'text-white'}`}>
                          {event.val}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
