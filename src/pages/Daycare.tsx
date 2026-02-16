import { useState } from "react";
import { UserCheck, UserX, Bus, Utensils, Activity, Clock } from "lucide-react";
import { motion } from "framer-motion";

const attendees = [
  { name: "Eleanor Taylor", checkedIn: true, time: "7:45 AM", transport: "Van A", room: "Main Hall" },
  { name: "George Anderson", checkedIn: true, time: "8:00 AM", transport: "Self", room: "Main Hall" },
  { name: "Frances Martinez", checkedIn: true, time: "8:15 AM", transport: "Van B", room: "Activity Room" },
  { name: "Dorothy Brown", checkedIn: false, time: "—", transport: "Van A", room: "—" },
  { name: "Patricia Clark", checkedIn: true, time: "7:50 AM", transport: "Family", room: "Main Hall" },
  { name: "James Wright", checkedIn: true, time: "8:10 AM", transport: "Van A", room: "Activity Room" },
];

const activities = [
  { time: "9:00 AM", name: "Morning Exercise", room: "Main Hall", participants: 12 },
  { time: "10:00 AM", name: "Arts & Crafts", room: "Activity Room", participants: 8 },
  { time: "11:30 AM", name: "Music Therapy", room: "Main Hall", participants: 15 },
  { time: "12:00 PM", name: "Lunch", room: "Dining", participants: 18 },
  { time: "1:00 PM", name: "Rest Period", room: "Quiet Room", participants: 10 },
  { time: "2:00 PM", name: "Board Games", room: "Activity Room", participants: 8 },
];

export default function Daycare() {
  const checkedIn = attendees.filter((a) => a.checkedIn).length;

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Adult Daycare</h1>
        <p className="text-sm text-muted-foreground">Main Street Location · Today, Feb 14, 2026</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Checked In", value: `${checkedIn}/${attendees.length}`, icon: UserCheck, color: "text-success" },
          { label: "Capacity", value: "72%", icon: Activity, color: "text-primary" },
          { label: "Transport Runs", value: "2 active", icon: Bus, color: "text-info" },
          { label: "Meals Served", value: "0/18", icon: Utensils, color: "text-warning" },
        ].map((s, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-4 shadow-card">
            <div className="flex items-center gap-2 mb-1">
              <s.icon className={`w-4 h-4 ${s.color}`} />
              <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
            </div>
            <p className="text-xl font-display font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Attendance */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-xl border border-border shadow-card">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-display font-semibold text-foreground">Attendance</h2>
            <button className="text-xs font-medium text-primary hover:underline">Kiosk Mode →</button>
          </div>
          <div className="divide-y divide-border">
            {attendees.map((a, i) => (
              <div key={i} className="px-5 py-3 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  a.checkedIn ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                }`}>
                  {a.checkedIn ? <UserCheck className="w-4 h-4" /> : <UserX className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{a.name}</p>
                  <p className="text-xs text-muted-foreground">{a.checkedIn ? `In at ${a.time} · ${a.room}` : "Not checked in"}</p>
                </div>
                {!a.checkedIn && (
                  <button className="text-xs font-medium text-primary-foreground gradient-primary px-3 py-1.5 rounded-lg">
                    Check In
                  </button>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Activities */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-xl border border-border shadow-card">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-display font-semibold text-foreground">Today's Activities</h2>
          </div>
          <div className="divide-y divide-border">
            {activities.map((a, i) => (
              <div key={i} className="px-5 py-3 flex items-center gap-3">
                <span className="text-xs font-medium text-muted-foreground w-16 flex-shrink-0">{a.time}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{a.name}</p>
                  <p className="text-xs text-muted-foreground">{a.room} · {a.participants} participants</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
