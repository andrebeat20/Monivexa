import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Calendar, 
  Filter,
  FileText,
  PieChart as PieIcon,
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
  PointElement, 
  LineElement,
  ArcElement
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

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

export default function ReportsPage() {
  // Mock data for charts
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue (Juta Rp)',
        data: [45, 52, 48, 61, 75],
        borderColor: '#5ffbd6',
        backgroundColor: 'rgba(95, 251, 214, 0.2)',
        fill: true,
        tension: 0.4,
      }
    ]
  };

  const paymentTypeData = {
    labels: ['Transfer Bank', 'Tunai', 'E-Wallet', 'VA'],
    datasets: [
      {
        data: [65, 15, 10, 10],
        backgroundColor: ['#5ffbd6', '#b2fef7', '#004d40', '#1a211f'],
        borderColor: 'rgba(255, 255, 255, 0.05)',
      }
    ]
  };

  const categoryData = {
    labels: ['Internet Bisnis', 'Internet Rumahan', 'Instalasi', 'Lainnya'],
    datasets: [
      {
        label: 'Sales by Category',
        data: [40, 35, 15, 10],
        backgroundColor: '#5ffbd6',
        borderRadius: 8,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1a211f',
        titleColor: '#5ffbd6',
        bodyColor: '#e1e3e0',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: 'rgba(225, 227, 224, 0.5)' } },
      y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: 'rgba(225, 227, 224, 0.5)' } }
    }
  };

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-primary mb-1">Laporan Keuangan</h1>
          <p className="text-body-sm text-on-surface-variant uppercase tracking-widest font-label-caps">Analisis Pendapatan & Performa Bisnis</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-body-sm font-medium hover:bg-surface-variant transition-all flex items-center gap-2">
            <Calendar size={18} />
            Jan - Mei 2026
          </button>
          <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
            <Download size={18} />
            Download Laporan
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {[
          { label: 'Total Pendapatan (YTD)', value: 'Rp 281.000.000', trend: '+12.5%', isUp: true, icon: <TrendingUp size={24} /> },
          { label: 'Rata-rata Bulanan', value: 'Rp 56.200.000', trend: '+5.2%', isUp: true, icon: <BarChart3 size={24} /> },
          { label: 'Piutang Tak Tertagih', value: 'Rp 4.500.000', trend: '-2.1%', isUp: false, icon: <TrendingDown size={24} /> },
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-[#1a211f]/60 border border-outline-variant/20 p-6 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 text-primary-fixed opacity-10 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <p className="text-xs font-label-caps text-on-surface-variant uppercase mb-2 tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-extrabold text-primary mb-2">{stat.value}</h3>
            <div className={`flex items-center gap-1 text-xs font-bold ${stat.isUp ? 'text-primary-fixed' : 'text-error'}`}>
              {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              {stat.trend} <span className="text-on-surface-variant font-medium ml-1">vs periode sebelumnya</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg mt-4">
        {/* Revenue Line Chart */}
        <div className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 p-6 rounded-2xl shadow-xl h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <TrendingUp size={20} className="text-primary-fixed" />
              Pertumbuhan Pendapatan
            </h3>
            <button className="text-on-surface-variant hover:text-primary transition-colors"><Filter size={18} /></button>
          </div>
          <div className="flex-1 min-h-0">
            <Line data={revenueData} options={chartOptions} />
          </div>
        </div>

        {/* Category Bar Chart */}
        <div className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 p-6 rounded-2xl shadow-xl h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <BarChart3 size={20} className="text-primary-fixed" />
              Pendapatan per Kategori
            </h3>
            <button className="text-on-surface-variant hover:text-primary transition-colors"><Filter size={18} /></button>
          </div>
          <div className="flex-1 min-h-0">
            <Bar data={categoryData} options={chartOptions} />
          </div>
        </div>

        {/* Payment Type Pie Chart */}
        <div className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 p-6 rounded-2xl shadow-xl lg:col-span-2 h-[450px] flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <PieIcon size={20} className="text-primary-fixed" />
                Metode Pembayaran Terpopuler
              </h3>
            </div>
            <div className="flex-1 min-h-0 flex items-center justify-center p-4">
              <Pie data={paymentTypeData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          
          <div className="w-full md:w-[350px] flex flex-col justify-center gap-4">
            <h4 className="text-sm font-bold text-primary-fixed uppercase tracking-widest border-b border-primary-fixed/20 pb-2">Rangkuman Insight</h4>
            <div className="space-y-4">
              {[
                { label: 'Efisiensi Penagihan', value: '94%', desc: 'Tagihan terbayar tepat waktu meningkat 5%.' },
                { label: 'Metode Digital', value: '75%', desc: 'Mayoritas pelanggan beralih ke transfer bank & VA.' },
                { label: 'Pertumbuhan YoY', value: '22%', desc: 'Kenaikan signifikan pada paket Internet Bisnis.' },
              ].map((insight, idx) => (
                <div key={idx} className="bg-surface-container-low/30 p-4 rounded-xl border border-outline-variant/20">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-on-surface">{insight.label}</span>
                    <span className="text-sm font-extrabold text-primary-fixed">{insight.value}</span>
                  </div>
                  <p className="text-[10px] text-on-surface-variant leading-relaxed italic opacity-80">{insight.desc}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full py-3 bg-primary-fixed/10 border border-primary-fixed/30 rounded-xl text-primary-fixed font-bold text-sm hover:bg-primary-fixed/20 transition-all flex items-center justify-center gap-2">
              <FileText size={18} />
              Lihat Detail Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
