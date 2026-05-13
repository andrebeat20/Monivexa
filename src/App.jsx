import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/marketing/LandingPage';
import LoginPortal from './pages/auth/LoginPortal';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import SelectionHub from './pages/core/SelectionHub';
import BillingModule from './pages/billing/BillingModule';
import StockModule from './pages/stock/StockModule';
import NetworkModule from './pages/network/NetworkModule';
import DashboardLayout from './layouts/DashboardLayout';
import ServicesPage from './pages/marketing/ServicesPage';
import PricingPage from './pages/marketing/PricingPage';
import AboutPage from './pages/marketing/AboutPage';
import InvoiceDetail from './pages/billing/InvoiceDetail';
import InvoicesList from './pages/billing/InvoicesList';
import CustomersList from './pages/billing/CustomersList';
import ReportsPage from './pages/billing/ReportsPage';
import CashFlowPage from './pages/billing/CashFlowPage';
import NotificationsPage from './pages/billing/NotificationsPage';
import TicketsPage from './pages/billing/TicketsPage';
import RegistrationPage from './pages/billing/RegistrationPage';
import MasterDataPage from './pages/billing/MasterDataPage';
import ToolsPage from './pages/billing/ToolsPage';
import InvoiceTemplatePage from './pages/billing/InvoiceTemplatePage';
import InventoryList from './pages/stock/InventoryList';
import WarehouseList from './pages/stock/WarehouseList';
import LogisticsPage from './pages/stock/LogisticsPage';
import StockReportsPage from './pages/stock/StockReportsPage';
import OLTStatusPage from './pages/network/OLTStatusPage';
import ODPManagementPage from './pages/network/ODPManagementPage';
import NetworkSupportPage from './pages/network/NetworkSupportPage';
import NetworkLogsPage from './pages/network/NetworkLogsPage';

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
            <Route path="/billing/invoices" element={<InvoicesList />} />
            <Route path="/billing/customers" element={<CustomersList />} />
            <Route path="/billing/reports" element={<ReportsPage />} />
            <Route path="/billing/cashflow" element={<CashFlowPage />} />
            <Route path="/billing/notifications" element={<NotificationsPage />} />
            <Route path="/billing/tickets" element={<TicketsPage />} />
            <Route path="/billing/registration" element={<RegistrationPage />} />
            <Route path="/billing/master" element={<MasterDataPage />} />
            <Route path="/billing/master/invoice-template" element={<InvoiceTemplatePage />} />
            <Route path="/billing/tools" element={<ToolsPage />} />
            <Route path="/billing/invoice/:id" element={<InvoiceDetail />} />
            <Route path="/stock" element={<StockModule />} />
            <Route path="/stock/inventory" element={<InventoryList />} />
            <Route path="/stock/warehouses" element={<WarehouseList />} />
            <Route path="/stock/reports" element={<StockReportsPage />} />
            <Route path="/stock/logistics" element={<LogisticsPage />} />
            <Route path="/network" element={<NetworkModule />} />
            <Route path="/network/olt" element={<OLTStatusPage />} />
            <Route path="/network/odp" element={<ODPManagementPage />} />
            <Route path="/network/support" element={<NetworkSupportPage />} />
            <Route path="/network/logs" element={<NetworkLogsPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
