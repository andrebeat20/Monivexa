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
  ShieldCheck
} from 'lucide-react';

export default function InvoiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for the invoice
  // In a real app, you would fetch this based on the ID
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
    <div className="flex flex-col gap-lg max-w-[900px] mx-auto w-full pb-20">
      {/* Navigation & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button 
          onClick={() => navigate('/billing')}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group w-fit"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-body-sm font-bold uppercase tracking-wider">Kembali ke Billing</span>
        </button>
        <div className="flex gap-3">
          <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-body-sm font-medium hover:bg-surface-variant transition-all flex items-center gap-2">
            <Printer size={18} />
            Cetak
          </button>
          <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
            <Download size={18} />
            Unduh PDF
          </button>
        </div>
      </div>

      {/* Invoice Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a211f] border border-outline-variant/30 rounded-2xl overflow-hidden shadow-2xl relative"
      >
        {/* Status Banner */}
        <div className={`py-3 px-6 text-center text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 ${
          invoiceData.status === 'Paid' 
          ? 'bg-primary-fixed text-[#0e1512]' 
          : 'bg-error text-on-error'
        }`}>
          {invoiceData.status === 'Paid' ? (
            <>
              <CheckCircle size={16} /> LUNAS - TERIMA KASIH
            </>
          ) : (
            <>
              <Clock size={16} /> MENUNGGU PEMBAYARAN - JATUH TEMPO: {invoiceData.dueDate}
            </>
          )}
        </div>

        <div className="p-10 flex flex-col gap-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-primary tracking-tighter">MONIVEXA</h2>
                <p className="text-xs text-primary-fixed font-bold tracking-[0.3em] uppercase">Infrastructure Core</p>
              </div>
              <div className="text-body-sm text-on-surface-variant flex flex-col gap-1">
                <p className="flex items-center gap-2"><Building size={14} className="text-primary-fixed" /> PT SAFANET DIGITAL NETWORKING</p>
                <p className="flex items-center gap-2"><MapPin size={14} className="text-primary-fixed" /> Pontianak, Kalimantan Barat</p>
                <p className="flex items-center gap-2"><Mail size={14} className="text-primary-fixed" /> support@monivexa.com</p>
              </div>
            </div>
            
            <div className="text-right flex flex-col gap-2">
              <h1 className="text-headline-lg font-bold text-primary">INVOICE</h1>
              <p className="text-primary-fixed font-mono font-bold text-xl">{invoiceData.id}</p>
              <div className="mt-2 text-body-sm text-on-surface-variant">
                <p>Tanggal: <span className="text-on-surface font-medium">{invoiceData.date}</span></p>
                <p>Jatuh Tempo: <span className="text-error font-medium">{invoiceData.dueDate}</span></p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-outline-variant/30"></div>

          {/* Billing Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-label-caps text-primary-fixed font-bold tracking-widest border-b border-primary-fixed/20 pb-2 w-fit">TAGIHAN KEPADA</h3>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-bold text-primary flex items-center gap-2 uppercase tracking-tight">
                  <User size={20} className="text-primary-fixed/50" />
                  {invoiceData.customer.name}
                </p>
                <p className="text-body-sm text-on-surface-variant flex items-center gap-2">
                  <MapPin size={16} className="text-primary-fixed/50" />
                  {invoiceData.customer.address}
                </p>
                <p className="text-body-sm text-on-surface-variant flex items-center gap-2">
                  <Mail size={16} className="text-primary-fixed/50" />
                  {invoiceData.customer.email}
                </p>
              </div>
            </div>
            
            <div className="bg-surface-container/30 p-6 rounded-xl border border-outline-variant/20 flex flex-col gap-4">
              <h3 className="text-label-caps text-primary-fixed font-bold tracking-widest border-b border-primary-fixed/20 pb-2 w-fit">METODE PEMBAYARAN</h3>
              <div className="flex items-start gap-4">
                <CreditCard className="text-primary-fixed mt-1" size={24} />
                <div className="text-body-sm">
                  <p className="text-primary font-bold">Transfer Bank BCA</p>
                  <p className="text-on-surface font-mono text-lg">123-456-7890</p>
                  <p className="text-on-surface-variant text-[10px] uppercase">a.n PT SAFANET DIGITAL NETWORKING</p>
                </div>
              </div>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="flex flex-col gap-4">
            <h3 className="text-label-caps text-primary-fixed font-bold tracking-widest border-b border-primary-fixed/20 pb-2 w-fit">DETAIL LAYANAN</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant/30">
                    <th className="py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Deskripsi Layanan</th>
                    <th className="py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-center">Periode</th>
                    <th className="py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-center">Qty</th>
                    <th className="py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-right">Harga Unit</th>
                    <th className="py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 text-body-sm">
                  {invoiceData.items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="py-6 font-medium text-primary">{item.description}</td>
                      <td className="py-6 text-center text-on-surface-variant">{item.period}</td>
                      <td className="py-6 text-center text-on-surface-variant">{item.qty}</td>
                      <td className="py-6 text-right font-mono text-on-surface">Rp {item.unitPrice.toLocaleString('id-ID')}</td>
                      <td className="py-6 text-right font-mono text-primary-fixed font-bold">Rp {item.total.toLocaleString('id-ID')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Totals Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-6">
            <div className="max-w-[300px]">
              <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-surface-container/20 border border-outline-variant/20">
                <ShieldCheck size={20} className="text-primary-fixed" />
                <p className="text-[10px] text-on-surface-variant font-medium uppercase leading-tight italic">
                  E-Invoice ini sah dan dikeluarkan secara otomatis oleh sistem Monivexa Infrastructure Network.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-[300px] flex flex-col gap-3">
              <div className="flex justify-between items-center text-body-sm text-on-surface-variant">
                <span>Subtotal</span>
                <span className="font-mono text-on-surface">Rp {invoiceData.subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center text-body-sm text-on-surface-variant">
                <span>Pajak (0%)</span>
                <span className="font-mono text-on-surface">Rp 0</span>
              </div>
              <div className="h-px w-full bg-outline-variant/30 my-1"></div>
              <div className="flex justify-between items-center text-xl font-extrabold">
                <span className="text-primary tracking-tighter">TOTAL</span>
                <span className="text-primary-fixed">Rp {invoiceData.total.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary-fixed to-transparent opacity-20"></div>
      </motion.div>
    </div>
  );
}
