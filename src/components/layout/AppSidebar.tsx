import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  ClipboardList,
  Sun,
  UserCog,
  MessageSquare,
  DollarSign,
  BarChart3,
  Shield,
  Settings,
  ChevronLeft,
  ChevronRight,
  Heart,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Scheduling", icon: Calendar, path: "/scheduling" },
  { label: "Clients & Patients", icon: Users, path: "/clients" },
  { label: "Care Plans & Docs", icon: ClipboardList, path: "/care-plans" },
  { label: "Daycare", icon: Sun, path: "/daycare" },
  { label: "Staffing", icon: UserCog, path: "/staffing" },
  { label: "Messaging", icon: MessageSquare, path: "/messaging" },
  { label: "Billing & Payroll", icon: DollarSign, path: "/billing" },
  { label: "Reports", icon: BarChart3, path: "/reports" },
  { label: "Security", icon: Shield, path: "/security" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

export function AppSidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-sidebar gradient-sidebar z-50 flex items-center px-4 gap-3">
        <button onClick={() => setMobileOpen(true)} className="text-sidebar-foreground p-1">
          <Menu className="w-6 h-6" />
        </button>
        <Heart className="w-5 h-5 text-sidebar-primary" />
        <span className="font-display font-bold text-sidebar-foreground text-lg">CareHub</span>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setMobileOpen(false)} />
          <nav className="absolute left-0 top-0 bottom-0 w-72 gradient-sidebar animate-slide-in-left flex flex-col">
            <div className="flex items-center justify-between px-5 h-14">
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-sidebar-primary" />
                <span className="font-display font-bold text-sidebar-foreground text-xl">CareHub</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="text-sidebar-foreground p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-2 px-3 space-y-0.5">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? "bg-sidebar-accent text-sidebar-primary"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <nav
        className={`hidden lg:flex flex-col gradient-sidebar border-r border-sidebar-border transition-all duration-300 ${
          collapsed ? "w-[68px]" : "w-60"
        }`}
      >
        <div className="flex items-center h-14 px-4 gap-2">
          <Heart className="w-6 h-6 text-sidebar-primary flex-shrink-0" />
          {!collapsed && (
            <span className="font-display font-bold text-sidebar-foreground text-xl truncate">CareHub</span>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                title={collapsed ? item.label : undefined}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center h-10 mx-2 mb-3 rounded-lg text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </nav>
    </>
  );
}
