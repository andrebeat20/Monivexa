import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPortal from './pages/LoginPortal';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SelectionHub from './pages/SelectionHub';
import BillingModule from './pages/BillingModule';
import StockModule from './pages/StockModule';
import NetworkModule from './pages/NetworkModule';
import DashboardLayout from './layouts/DashboardLayout';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      {/* Global Background and Grid */}
      <div className="fixed inset-0 bg-[#0e1512] z-[-1]"></div>
      <div className="fixed inset-0 network-grid opacity-40 z-[-1] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(95,251,214,0.05),transparent_70%)] z-[-1] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPortal />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/hub" element={<SelectionHub />} />
          
          <Route element={<DashboardLayout />}>
            <Route path="/billing" element={<BillingModule />} />
            <Route path="/stock" element={<StockModule />} />
            <Route path="/network" element={<NetworkModule />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
