import { Search, Plus, Shield, Clock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const staff = [
  { name: "Sarah Chen", role: "RN", status: "On Shift", hours: 32, credentials: "RN, BLS", expiring: false },
  { name: "James Miller", role: "PT", status: "On Shift", hours: 28, credentials: "PT, DPT", expiring: true },
  { name: "Maria Garcia", role: "CNA", status: "Off Today", hours: 36, credentials: "CNA, CPR", expiring: false },
  { name: "David Kim", role: "RN", status: "On Shift", hours: 40, credentials: "RN, BSN, WOCN", expiring: false },
  { name: "Lisa Rodriguez", role: "Activity Dir.", status: "On Shift", hours: 38, credentials: "CTRS", expiring: false },
  { name: "Michael Brown", role: "CNA", status: "PTO", hours: 0, credentials: "CNA", expiring: false },
  { name: "Jennifer Park", role: "LPN", status: "On Shift", hours: 24, credentials: "LPN, IV Cert", expiring: true },
  { name: "Robert Taylor", role: "Driver", status: "On Route", hours: 30, credentials: "CDL-B", expiring: false },
];

export default function Staffing() {
  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-5">
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="flex-1">
          <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Staffing</h1>
          <p className="text-sm text-muted-foreground">Manage staff availability, credentials, and training</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-primary-foreground gradient-primary rounded-lg hover:opacity-90 transition-opacity self-start">
          <Plus className="w-4 h-4" /> Add Staff
        </button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input placeholder="Search staff..." className="w-full pl-9 pr-3 py-2 text-sm bg-secondary rounded-lg text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring" />
      </div>

      <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Staff Member</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Role</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Status</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3 hidden md:table-cell">Hours (Week)</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3 hidden lg:table-cell">Credentials</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {staff.map((s, i) => (
                <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.02 }} className="hover:bg-secondary/50 cursor-pointer transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                        {s.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="text-sm font-medium text-foreground">{s.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{s.role}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-medium ${
                      s.status === "On Shift" || s.status === "On Route" ? "text-success" :
                      s.status === "PTO" ? "text-info" : "text-muted-foreground"
                    }`}>{s.status}</span>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm text-foreground">{s.hours}h</span>
                      {s.hours >= 40 && <AlertTriangle className="w-3.5 h-3.5 text-warning" />}
                    </div>
                  </td>
                  <td className="px-5 py-3 hidden lg:table-cell">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-muted-foreground">{s.credentials}</span>
                      {s.expiring && (
                        <span className="text-[10px] font-medium bg-warning/10 text-accent-foreground px-1.5 py-0.5 rounded">Expiring</span>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
