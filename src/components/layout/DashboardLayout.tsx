
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Fingerprint, 
  CreditCard, 
  FileText, 
  Briefcase, 
  Brain, 
  Bot, 
  Menu, 
  X, 
  ChevronRight, 
  LogOut, 
  Bell, 
  Settings 
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const navigationItems = [
    {
      name: "SoloID",
      path: "/dashboard/soloid",
      icon: <Fingerprint className="h-5 w-5" />,
      description: "Manage your digital identity"
    },
    {
      name: "SoloGold Vault",
      path: "/dashboard/sologold",
      icon: <CreditCard className="h-5 w-5" />,
      description: "Access your digital assets"
    },
    {
      name: "Trade License",
      path: "/dashboard/trade-license",
      icon: <FileText className="h-5 w-5" />,
      description: "Manage business licensing"
    },
    {
      name: "Grant Applications",
      path: "/dashboard/grants",
      icon: <Briefcase className="h-5 w-5" />,
      description: "Track funding opportunities"
    },
    {
      name: "Psychology Tier",
      path: "/dashboard/psychology",
      icon: <Brain className="h-5 w-5" />,
      description: "View behavior assessment"
    },
    {
      name: "AI Agent Portal",
      path: "/dashboard/ai-agent",
      icon: <Bot className="h-5 w-5" />,
      description: "Access AI tools and services"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden flex items-center p-4 bg-solo-dark border-b border-solo-purple border-opacity-20">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-solo-purple" 
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <h1 className="ml-3 text-xl font-semibold bg-gradient-to-r from-solo-purple to-solo-blue bg-clip-text text-transparent">
          Solo Nation
        </h1>
        <div className="flex items-center ml-auto space-x-2">
          <Button variant="ghost" size="icon" className="text-solo-gray hover:text-solo-purple">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-solo-gray hover:text-solo-purple">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Sidebar */}
      <div 
        className={`
          fixed md:static top-0 left-0 h-full z-20 w-64 
          transform transition-transform duration-200 ease-in-out 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 
          glass-card border-r border-solo-purple border-opacity-20
        `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="hidden md:flex items-center justify-between p-4 border-b border-solo-purple border-opacity-20">
            <h1 className="text-xl font-semibold bg-gradient-to-r from-solo-purple to-solo-blue bg-clip-text text-transparent">
              Solo Nation
            </h1>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-solo-gray hover:text-solo-purple" 
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* User info */}
          <div className="p-4 border-b border-solo-purple border-opacity-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-solo-purple to-solo-blue flex items-center justify-center text-white font-semibold">
                  SN
                </div>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-solo-dark"></div>
              </div>
              <div>
                <h2 className="text-sm font-medium">Member #A8922</h2>
                <p className="text-xs text-solo-gray">Tier: Sovereign</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t border-solo-purple border-opacity-20">
            <Link to="/login">
              <Button variant="outline" className="w-full text-solo-purple border-solo-purple border-opacity-40 hover:bg-solo-purple hover:bg-opacity-10">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <div className="hidden md:flex items-center justify-end p-4 border-b border-solo-purple border-opacity-20">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-solo-gray hover:text-solo-purple">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-solo-gray hover:text-solo-purple">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="h-6 border-l border-solo-purple border-opacity-20"></div>
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-solo-purple to-solo-blue flex items-center justify-center text-white font-semibold text-xs">
                SN
              </div>
              <span className="text-sm">Member #A8922</span>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
