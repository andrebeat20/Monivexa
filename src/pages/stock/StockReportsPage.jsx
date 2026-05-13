import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Package, 
  DollarSign, 
  PieChart, 
  Download, 
  Calendar,
  Filter,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { StatCard } from '../../components/shared/StatCard';
import { PageHeader } from '../../components/shared/PageHeader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function StockReportsPage() {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Barang Masuk',
        data: [65, 59, 80, 81, 56],
        backgroundColor: '#5ffbd6',
        borderRadius: 8,
      },
      {
        label: 'Barang Keluar',
        data: [28, 48, 40, 19, 86],
        backgroundColor: '#fb5f5f',
        borderRadius: 8,
      }
    ],
  };

  const pieData = {
    labels: ['Active Equipment', 'Fiber Optic', 'Power', 'Optics', 'Cables'],
    datasets: [
      {
        data: [45, 25, 15, 10, 5],
        backgroundColor: [
          '#5ffbd6',
          '#b589ff',
          '#ffbd5f',
          '#5faffb',
          '#ff5fb5',
        ],
        borderWidth: 0,
      },
    ],
  };

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Nilai Aset (USD)',
        data: [1100000, 1150000, 1180000, 1200000],
        borderColor: '#5ffbd6',
        backgroundColor: 'rgba(95, 251, 214, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#94a3b8', font: { family: 'Inter', weight: 'bold' }, padding: 20 },
      },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
      y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
    },
  };

  const stats = [
    { label: 'Nilai Total Aset', value: '$1.2M', trend: '+5.2%', icon: <DollarSign />, color: 'text-primary-fixed' },
    { label: 'Perputaran Stok', value: '4.2x', trend: '+1.1%', icon: <TrendingUp />, color: 'text-primary' },
    { label: 'Item Slow-Moving', value: '24', trend: '-2', icon: <TrendingDown />, color: 'text-tertiary-fixed' },
    { label: 'Akurasi Stok', value: '99.8%', trend: 'Optimal', icon: <Package />, color: 'text-primary-fixed' },
  ];

  const headerActions = (
    <>
      <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-body-sm font-medium hover:bg-surface-variant transition-all flex items-center gap-2">
        <Calendar size={18} /> Bulan Ini
      </button>
      <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
        <Download size={18} /> Export PDF
      </button>
    </>
  );

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      <PageHeader 
        title="Analisis & Laporan Stok" 
        subtitle="Visualisasi Aset & Performa Logistik" 
        actions={headerActions} 
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg mt-4">
        <GlassCard className="p-8 min-h-[400px] flex flex-col shadow-xl" hover={false}>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 uppercase tracking-tight">
              <BarChart3 size={20} className="text-primary-fixed" />
              Arus Barang Bulanan
            </h3>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <Filter size={18} />
            </button>
          </div>
          <div className="flex-1">
            <Bar data={barData} options={options} />
          </div>
        </GlassCard>

        <GlassCard className="p-8 min-h-[400px] flex flex-col shadow-xl" hover={false}>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 uppercase tracking-tight">
              <PieChart size={20} className="text-tertiary-fixed" />
              Komposisi Inventaris
            </h3>
          </div>
          <div className="flex-1">
            <Pie data={pieData} options={options} />
          </div>
        </GlassCard>

        <GlassCard className="p-8 min-h-[400px] flex flex-col lg:col-span-2 shadow-xl" hover={false}>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 uppercase tracking-tight">
              <TrendingUp size={20} className="text-primary-fixed" />
              Tren Pertumbuhan Nilai Aset
            </h3>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              <span className="flex items-center gap-1"><ArrowUpRight size={14} className="text-primary-fixed" /> Highest: $1.2M</span>
              <span className="flex items-center gap-1"><ArrowDownRight size={14} className="text-error" /> Lowest: $1.1M</span>
            </div>
          </div>
          <div className="flex-1">
            <Line data={lineData} options={options} />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
