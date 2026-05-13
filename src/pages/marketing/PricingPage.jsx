import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function PricingPage() {
  const navigate = useNavigate();

  const pricingTiers = [
    {
      name: 'FREE / DEMO',
      price: 'Rp 0',
      description: 'Ideal untuk pengujian awal dan skala kecil.',
      features: [
        { label: 'Kapasitas', value: 'Maks. 20 Pelanggan' },
        { label: 'Billing', value: 'Manual Input' },
        { label: 'GIS Map', value: 'Titik Rumah Saja' },
        { label: 'Monitoring', value: 'Tidak Ada' },
      ],
      buttonText: 'Mulai Sekarang',
      highlighted: false,
      color: 'text-on-surface-variant'
    },
    {
      name: 'STANDARD',
      price: 'Rp 350rb - 500rb',
      description: 'Solusi optimal untuk ISP berkembang.',
      features: [
        { label: 'Kapasitas', value: 'Maks. 300 Pelanggan' },
        { label: 'Billing', value: 'Otomatis via WA' },
        { label: 'GIS Map', value: 'Rumah & ODP' },
        { label: 'Monitoring', value: 'Tidak Ada' },
      ],
      buttonText: 'Pilih Standard',
      highlighted: true,
      color: 'text-primary-fixed'
    },
    {
      name: 'PRO',
      price: 'Rp 1jt - 1.5jt',
      description: 'Performa maksimal untuk infrastruktur skala besar.',
      features: [
        { label: 'Kapasitas', value: 'Unlimited' },
        { label: 'Billing', value: 'Auto + Payment Gateway' },
        { label: 'GIS Map', value: 'Full Topology (Garis Kabel)' },
        { label: 'Monitoring', value: 'Real-time OLT (SNMP)' },
      ],
      buttonText: 'Pilih Pro',
      highlighted: false,
      color: 'text-tertiary-fixed'
    }
  ];

  return (
    <div className="bg-transparent text-on-surface font-body-md min-h-screen flex flex-col relative w-full">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-xl relative z-10">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-gutter pt-24 pb-lg text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold text-primary mb-6 tracking-tighter leading-tight">
            Investasi Jaringan, <br/>
            <span className="text-primary-fixed">Sesuai Skala Anda.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed opacity-90">
            Pilih paket yang tepat untuk operasional ISP Anda. Dari demo gratis hingga kontrol infrastruktur penuh.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-container-max mx-auto px-gutter pb-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`glass-card rounded-2xl p-8 flex flex-col relative border-white/5 transition-all duration-500 group ${tier.highlighted ? 'h-[105%] border-primary-fixed/30 shadow-[0_20px_50px_rgba(95,251,214,0.1)]' : 'h-full hover:border-primary-fixed/20'}`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary-fixed text-[#0e1512] text-[10px] px-4 py-1.5 rounded-bl-2xl font-bold tracking-widest uppercase">REKOMENDASI</div>
                )}
                <div className="mb-8">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${tier.color} bg-white/5 px-3 py-1 rounded-full inline-block mb-4`}>{tier.name}</span>
                  <h2 className="text-3xl font-bold text-primary mb-4 leading-none">{tier.price}</h2>
                  <p className="text-sm text-on-surface-variant mt-2 leading-relaxed opacity-80">{tier.description}</p>
                </div>
                
                <div className="border-t border-white/5 pt-6 mb-8 flex-grow">
                  <ul className="space-y-4">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">{feature.label}</span>
                        <div className="flex items-center gap-2">
                          {feature.value === 'Tidak Ada' ? (
                            <span className="material-symbols-outlined text-on-surface-variant/30 text-[18px]">cancel</span>
                          ) : (
                            <span className="material-symbols-outlined text-primary-fixed text-[18px]">check_circle</span>
                          )}
                          <span className={`text-sm ${feature.value === 'Tidak Ada' ? 'text-on-surface-variant/40' : 'text-on-surface font-medium'}`}>{feature.value}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/6285753327872?text=Halo%20Monivexa,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(tier.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${tier.highlighted ? 'btn-primary' : 'btn-secondary'} w-full py-4 rounded-xl text-sm font-bold shadow-2xl transition-all flex items-center justify-center`}
                >
                  {tier.buttonText}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="max-w-container-max mx-auto px-gutter py-xl">
          <h3 className="text-3xl font-bold text-primary text-center mb-10 tracking-tight">Perbandingan Detail</h3>
          <div className="glass-card rounded-2xl overflow-hidden border border-white/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Kapasitas & Fitur</th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant text-center">FREE / DEMO</th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-primary-fixed text-center bg-primary-fixed/5">STANDARD</th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant text-center">PRO</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ['Batas Pelanggan', '20', '300', 'Unlimited'],
                  ['Sistem Penagihan', 'Manual', 'WhatsApp Automation', 'Payment Gateway'],
                  ['Pemetaan GIS', 'Home Points', 'Home & ODP', 'Full Cable Topology'],
                  ['Monitoring OLT', '-', '-', 'Real-time (SNMP)'],
                  ['Support', 'Community', 'Email Support', 'Priority 24/7']
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-6 text-on-surface font-medium">{row[0]}</td>
                    <td className="p-6 text-on-surface-variant text-center">{row[1]}</td>
                    <td className="p-6 text-primary text-center bg-primary-fixed/5 font-semibold">{row[2]}</td>
                    <td className="p-6 text-on-surface-variant text-center">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-xl bg-transparent border-t border-white/5 mt-auto">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4 tracking-tight">Monivexa</div>
            <p className="text-body-sm text-on-surface-variant max-w-sm">© 2024 Monivexa Suite. Infrastructure Core v2.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
