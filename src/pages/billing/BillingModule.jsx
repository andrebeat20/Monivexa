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
  PieChart as PieIcon
} from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { StatCard } from '../../components/shared/StatCard';
import { StatusBadge } from '../../components/shared/StatusBadge';
import { PageHeader } from '../../components/shared/PageHeader';

ChartJS.register(ArcElement, ChartTooltip, Legend);

export default function BillingModule() {
  const navigate = useNavigate();
  
  const chartData = {
    labels: ['Paid', 'Unpaid'],
    datasets: [{
      data: [12855000, 87311000],
      backgroundColor: ['#5ffbd6', '#ffb4ab'],
      borderColor: ['#1a211f', '#1a211f'],
      borderWidth: 2,
      hoverOffset: 4
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(26, 33, 31, 0.9)',
        padding: 12,
        titleColor: '#dde4e0',
        bodyColor: '#dde4e0',
        borderColor: '#2f3633',
        borderWidth: 1,
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
    <>
      <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-body-sm font-medium hover:bg-surface-variant transition-all flex items-center gap-2">
        <Printer size={18} /> Print Report
      </button>
      <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
        <Plus size={18} /> Input Transaksi
      </button>
    </>
  );

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      <PageHeader 
        title="Billing Overview" 
        subtitle="PT SAFANET DIGITAL NETWORKING - MAY 2026" 
        actions={headerActions} 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        <StatCard label="TOTAL TAGIHAN" value="225" trend="+5%" icon={<Receipt />} />
        <StatCard label="BELUM LUNAS" value="87.3M" trend="Action Needed" icon={<AlertCircle />} color="text-error" />
        <StatCard label="COLLECTION RATE" value="12.8%" trend="12.8M" icon={<CheckCircle />} color="text-primary-fixed" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        <div className="lg:col-span-2 flex flex-col gap-md">
          <GlassCard hover={false} className="overflow-hidden shadow-xl">
            <div className="px-6 py-5 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container/30">
              <h2 className="text-headline-md text-primary font-bold">Tagihan - May 2026</h2>
              <div className="flex gap-2">
                <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant rounded transition-colors border border-outline-variant/30">
                  <Filter size={18} />
                </button>
                <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant rounded transition-colors border border-outline-variant/30">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/20">
                    <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium">NO TAGIHAN</th>
                    <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium">NAMA / ALAMAT</th>
                    <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium text-right">HARGA (RP)</th>
                    <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium">STATUS</th>
                    <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium text-center">AKSI</th>
                  </tr>
                </thead>
                <tbody className="text-body-sm divide-y divide-outline-variant/10">
                  {invoices.map((inv, idx) => (
                    <tr 
                      key={idx} 
                      className="hover:bg-surface-container-low/50 transition-colors group cursor-pointer"
                      onClick={() => navigate(`/billing/invoice/${inv.id}`)}
                    >
                      <td className="px-6 py-4 font-mono text-primary-fixed">{inv.id}</td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-primary uppercase">{inv.name}</div>
                        <div className="text-[10px] text-on-surface-variant opacity-70 tracking-wider uppercase">{inv.address}</div>
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-on-surface font-semibold">{inv.price}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={inv.status === 'Paid' ? 'Lunas' : 'Belum Lunas'} type={inv.status === 'Paid' ? 'success' : 'error'} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-on-surface-variant hover:text-primary-fixed transition-colors p-1 hover:bg-surface-variant rounded">
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-outline-variant/20 flex justify-center bg-surface-container-low/30 group">
              <button 
                onClick={() => navigate('/billing/invoices')}
                className="text-primary-fixed text-body-sm font-medium hover:underline flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                View All Invoices <Plus size={16} />
              </button>
            </div>
          </GlassCard>
        </div>

        <div className="flex flex-col gap-lg">
          <GlassCard className="overflow-hidden shadow-xl" hover={false}>
            <div className="px-6 py-5 border-b border-outline-variant/20 flex items-center gap-2">
              <History size={18} className="text-primary-fixed" />
              <h2 className="text-headline-md text-primary font-bold">Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6 relative before:absolute before:inset-0 before:left-[19px] before:h-full before:w-px before:bg-outline-variant/30">
                <div className="relative flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed text-[#0e1512] flex items-center justify-center shrink-0 z-10 shadow-[0_0_10px_rgba(95,251,214,0.3)]">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 items-center gap-2">
                      <span className="text-body-sm font-bold text-primary">Payment Received</span>
                      <span className="text-[10px] text-on-surface-variant opacity-60">10m ago</span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant">INV-2605-002 - AMSAL</p>
                    <p className="text-body-sm font-mono text-primary-fixed font-bold">+Rp 450.000</p>
                  </div>
                </div>
                <div className="relative flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/50 text-on-surface-variant flex items-center justify-center shrink-0 z-10">
                    <Receipt size={20} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 items-center gap-2">
                      <span className="text-body-sm font-bold text-primary">Invoice Generated</span>
                      <span className="text-[10px] text-on-surface-variant opacity-60">2h ago</span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant italic">Batch generation for May</p>
                    <p className="text-body-sm font-mono text-on-surface">225 Invoices</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="overflow-hidden shadow-xl" hover={false}>
            <div className="px-6 py-5 border-b border-outline-variant/20 flex justify-between items-center">
              <h2 className="text-headline-md text-primary font-bold">Distribution</h2>
              <PieIcon size={18} className="text-on-surface-variant opacity-60" />
            </div>
            <div className="p-6">
              <div className="h-48 w-full relative mb-6">
                <Doughnut data={chartData} options={chartOptions} />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-display-xl-mobile font-bold text-primary">12%</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Collected</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-body-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-fixed"></div>
                    <span className="text-on-surface-variant">Lunas</span>
                  </div>
                  <span className="font-mono text-primary font-bold">12.8M</span>
                </div>
                <div className="flex items-center justify-between text-body-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-error"></div>
                    <span className="text-on-surface-variant">Belum Lunas</span>
                  </div>
                  <span className="font-mono text-primary font-bold">87.3M</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
