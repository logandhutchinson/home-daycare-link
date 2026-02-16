import { Calendar, Users, ClipboardCheck, AlertTriangle, Clock, UserCheck, Activity, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { motion } from "framer-motion";

const stats = [
  { label: "Today's Visits", value: 24, change: "+3 from yesterday", changeType: "positive" as const, icon: Calendar },
  { label: "Active Patients", value: 47, change: "2 new this week", changeType: "positive" as const, icon: Users },
  { label: "Daycare Attendance", value: "18/25", change: "72% capacity", changeType: "neutral" as const, icon: UserCheck },
  { label: "Open Shifts", value: 5, change: "3 urgent", changeType: "negative" as const, icon: Clock },
  { label: "Docs Pending Review", value: 8, change: "Due today", changeType: "negative" as const, icon: ClipboardCheck },
  { label: "Incidents (Week)", value: 1, change: "↓ from 3 last week", changeType: "positive" as const, icon: AlertTriangle },
];

const upcomingVisits = [
  { time: "8:00 AM", patient: "Martha Johnson", caregiver: "Sarah Chen", type: "Nursing Assessment", status: "In Progress" },
  { time: "9:30 AM", patient: "Robert Williams", caregiver: "James Miller", type: "Physical Therapy", status: "Scheduled" },
  { time: "10:00 AM", patient: "Dorothy Brown", caregiver: "Maria Garcia", type: "Aide Visit", status: "Scheduled" },
  { time: "11:00 AM", patient: "Harold Davis", caregiver: "Sarah Chen", type: "Wound Care", status: "Scheduled" },
  { time: "1:00 PM", patient: "Betty Wilson", caregiver: "Unassigned", type: "Nursing Visit", status: "Open" },
];

const alerts = [
  { text: "EVV exception: Maria Garcia missed check-in for 9 AM visit", type: "warning" },
  { text: "Credential expiring: James Miller CPR cert expires in 5 days", type: "warning" },
  { text: "New referral: Patient intake pending for Angela Torres", type: "info" },
];

export default function Dashboard() {
  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground">Good morning, Admin</h1>
        <p className="text-muted-foreground mt-1">Here's what's happening across your locations today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 lg:gap-4">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Upcoming Visits */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 bg-card rounded-xl border border-border shadow-card">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-display font-semibold text-card-foreground">Today's Schedule</h2>
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">Main St. Location</span>
          </div>
          <div className="divide-y divide-border">
            {upcomingVisits.map((v, i) => (
              <div key={i} className="px-5 py-3 flex items-center gap-4 hover:bg-secondary/50 transition-colors">
                <span className="text-sm font-medium text-muted-foreground w-16 flex-shrink-0">{v.time}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-card-foreground truncate">{v.patient}</p>
                  <p className="text-xs text-muted-foreground truncate">{v.type} · {v.caregiver}</p>
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${
                    v.status === "In Progress"
                      ? "bg-success/10 text-success"
                      : v.status === "Open"
                      ? "bg-destructive/10 text-destructive"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {v.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Alerts */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-xl border border-border shadow-card">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-display font-semibold text-card-foreground">Alerts & Notifications</h2>
          </div>
          <div className="p-4 space-y-3">
            {alerts.map((a, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg text-sm ${
                  a.type === "warning" ? "bg-warning/10 text-accent-foreground" : "bg-info/10 text-info"
                }`}
              >
                {a.text}
              </div>
            ))}
          </div>
          <div className="px-5 py-3 border-t border-border">
            <button className="text-sm text-primary font-medium hover:underline">View all notifications</button>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "New Visit", icon: Calendar, desc: "Schedule a home health visit" },
          { label: "Check In Client", icon: UserCheck, desc: "Daycare attendance" },
          { label: "Log Incident", icon: AlertTriangle, desc: "Report an incident" },
          { label: "View Reports", icon: TrendingUp, desc: "Utilization & compliance" },
        ].map((action, i) => (
          <button
            key={i}
            className="bg-card border border-border rounded-xl p-4 text-left hover:shadow-card-hover hover:border-primary/30 transition-all group"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <action.icon className="w-4.5 h-4.5 text-primary" />
            </div>
            <p className="text-sm font-semibold text-card-foreground">{action.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{action.desc}</p>
          </button>
        ))}
      </motion.div>
    </div>
  );
}
