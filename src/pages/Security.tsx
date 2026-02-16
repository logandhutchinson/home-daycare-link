import { Shield, Lock, Eye, AlertTriangle, Clock, FileText } from "lucide-react";
import { motion } from "framer-motion";

const auditLogs = [
  { action: "Viewed patient record", user: "Sarah Chen", target: "Martha Johnson", time: "2 min ago", level: "info" },
  { action: "Updated care plan", user: "Dr. Patel", target: "Robert Williams", time: "15 min ago", level: "info" },
  { action: "Failed login attempt", user: "unknown@email.com", target: "—", time: "32 min ago", level: "warning" },
  { action: "Exported patient list", user: "Admin", target: "All patients", time: "1 hour ago", level: "info" },
  { action: "Permission denied", user: "Maria Garcia", target: "Billing module", time: "2 hours ago", level: "warning" },
  { action: "Document signed", user: "Martha Johnson (family)", target: "Consent form", time: "3 hours ago", level: "info" },
];

export default function Security() {
  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Security & Compliance</h1>
        <p className="text-sm text-muted-foreground">Monitor access, audit trails, and compliance settings</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Active Sessions", value: "12", icon: Eye },
          { label: "Failed Logins (24h)", value: "3", icon: AlertTriangle },
          { label: "Audit Events (24h)", value: "247", icon: Clock },
          { label: "Policy Violations", value: "0", icon: Shield },
        ].map((s, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-4 shadow-card">
            <s.icon className="w-5 h-5 text-primary mb-2" />
            <p className="text-xl font-display font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border shadow-card">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h2 className="font-display font-semibold text-foreground">Audit Log</h2>
          <button className="text-xs text-primary font-medium hover:underline">Export</button>
        </div>
        <div className="divide-y divide-border">
          {auditLogs.map((log, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }} className="px-5 py-3 flex items-center gap-4">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                log.level === "warning" ? "bg-warning/10" : "bg-secondary"
              }`}>
                {log.level === "warning" ? <AlertTriangle className="w-4 h-4 text-warning" /> : <FileText className="w-4 h-4 text-muted-foreground" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{log.action}</p>
                <p className="text-xs text-muted-foreground">{log.user} → {log.target}</p>
              </div>
              <span className="text-xs text-muted-foreground flex-shrink-0">{log.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
