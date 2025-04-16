
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SoloIDModule from "./pages/modules/SoloIDModule";
import SoloGoldModule from "./pages/modules/SoloGoldModule";
import TradeLicenseModule from "./pages/modules/TradeLicenseModule";
import GrantsModule from "./pages/modules/GrantsModule";
import PsychologyModule from "./pages/modules/PsychologyModule";
import AIAgentModule from "./pages/modules/AIAgentModule";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/soloid" element={<SoloIDModule />} />
          <Route path="/dashboard/sologold" element={<SoloGoldModule />} />
          <Route path="/dashboard/trade-license" element={<TradeLicenseModule />} />
          <Route path="/dashboard/grants" element={<GrantsModule />} />
          <Route path="/dashboard/psychology" element={<PsychologyModule />} />
          <Route path="/dashboard/ai-agent" element={<AIAgentModule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
