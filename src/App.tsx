import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Index from "./pages/Index";
import Scheduling from "./pages/Scheduling";
import Clients from "./pages/Clients";
import CarePlans from "./pages/CarePlans";
import Daycare from "./pages/Daycare";
import Staffing from "./pages/Staffing";
import Messaging from "./pages/Messaging";
import Billing from "./pages/Billing";
import Reports from "./pages/Reports";
import Security from "./pages/Security";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/scheduling" element={<Scheduling />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/care-plans" element={<CarePlans />} />
            <Route path="/daycare" element={<Daycare />} />
            <Route path="/staffing" element={<Staffing />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/security" element={<Security />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
