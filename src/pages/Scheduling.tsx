import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Filter, List, Grid3X3, Calendar as CalIcon } from "lucide-react";
import { motion } from "framer-motion";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hours = Array.from({ length: 12 }, (_, i) => `${i + 7}:00`);

type ViewMode = "day" | "week" | "month";

const sampleEvents = [
  { day: 0, startHour: 8, duration: 1, patient: "M. Johnson", caregiver: "S. Chen", type: "Nursing" },
  { day: 0, startHour: 10, duration: 1.5, patient: "R. Williams", caregiver: "J. Miller", type: "PT" },
  { day: 1, startHour: 9, duration: 1, patient: "D. Brown", caregiver: "M. Garcia", type: "Aide" },
  { day: 1, startHour: 13, duration: 1, patient: "H. Davis", caregiver: "S. Chen", type: "Wound Care" },
  { day: 2, startHour: 8, duration: 2, patient: "B. Wilson", caregiver: "Unassigned", type: "Nursing" },
  { day: 2, startHour: 11, duration: 1, patient: "E. Taylor", caregiver: "J. Miller", type: "PT" },
  { day: 3, startHour: 9, duration: 1, patient: "M. Johnson", caregiver: "S. Chen", type: "Nursing" },
  { day: 3, startHour: 14, duration: 1.5, patient: "G. Anderson", caregiver: "M. Garcia", type: "Aide" },
  { day: 4, startHour: 8, duration: 1, patient: "D. Brown", caregiver: "M. Garcia", type: "Aide" },
  { day: 4, startHour: 10, duration: 1, patient: "R. Williams", caregiver: "J. Miller", type: "PT" },
];

const typeColors: Record<string, string> = {
  Nursing: "bg-primary/15 border-primary/30 text-primary",
  PT: "bg-info/15 border-info/30 text-info",
  Aide: "bg-success/15 border-success/30 text-success",
  "Wound Care": "bg-warning/15 border-warning/30 text-accent-foreground",
};

const openShifts = [
  { time: "1:00 PM, Mon", patient: "B. Wilson", type: "Nursing Visit" },
  { time: "3:00 PM, Wed", patient: "L. Thomas", type: "Aide Visit" },
  { time: "9:00 AM, Fri", patient: "C. Moore", type: "PT Eval" },
];

export default function Scheduling() {
  const [view, setView] = useState<ViewMode>("week");

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 lg:px-8 py-4 border-b border-border bg-card flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="flex-1">
          <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Scheduling</h1>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center bg-secondary rounded-lg p-0.5">
            {(["day", "week", "month"] as ViewMode[]).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md capitalize transition-colors ${
                  view === v ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-muted-foreground bg-secondary rounded-lg hover:text-foreground transition-colors">
            <Filter className="w-3.5 h-3.5" /> Filters
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-primary-foreground gradient-primary rounded-lg hover:opacity-90 transition-opacity">
            <Plus className="w-3.5 h-3.5" /> New Visit
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Calendar */}
        <div className="flex-1 overflow-auto">
          {/* Week nav */}
          <div className="flex items-center gap-3 px-4 lg:px-8 py-3 bg-card border-b border-border">
            <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            </button>
            <h2 className="text-sm font-semibold text-foreground">Feb 10 – 16, 2026</h2>
            <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="text-xs text-primary font-medium ml-2">Today</button>
          </div>

          {/* Week grid */}
          <div className="relative min-w-[700px]">
            {/* Day headers */}
            <div className="grid grid-cols-[60px_repeat(7,1fr)] border-b border-border sticky top-0 bg-card z-10">
              <div className="p-2" />
              {days.map((d, i) => (
                <div key={d} className="p-2 text-center border-l border-border">
                  <p className="text-xs text-muted-foreground font-medium">{d}</p>
                  <p className="text-lg font-display font-bold text-foreground">{10 + i}</p>
                </div>
              ))}
            </div>

            {/* Time grid */}
            <div className="relative">
              {hours.map((h) => (
                <div key={h} className="grid grid-cols-[60px_repeat(7,1fr)] h-16 border-b border-border/50">
                  <div className="p-1 text-right pr-3">
                    <span className="text-[10px] text-muted-foreground">{h}</span>
                  </div>
                  {days.map((d) => (
                    <div key={d} className="border-l border-border/50 hover:bg-primary/[0.02] transition-colors" />
                  ))}
                </div>
              ))}

              {/* Events overlay */}
              {sampleEvents.map((evt, i) => {
                const top = (evt.startHour - 7) * 64;
                const height = evt.duration * 64 - 4;
                const left = `calc(60px + ${evt.day} * ((100% - 60px) / 7) + 4px)`;
                const width = `calc((100% - 60px) / 7 - 8px)`;
                const colorClass = typeColors[evt.type] || typeColors["Nursing"];
                const isOpen = evt.caregiver === "Unassigned";

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className={`absolute rounded-lg border px-2 py-1.5 cursor-pointer hover:shadow-md transition-shadow ${colorClass} ${
                      isOpen ? "border-dashed border-destructive/40 bg-destructive/5" : ""
                    }`}
                    style={{ top: `${top}px`, height: `${height}px`, left, width }}
                  >
                    <p className="text-[11px] font-semibold truncate">{evt.patient}</p>
                    <p className="text-[10px] opacity-75 truncate">{evt.caregiver} · {evt.type}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Open Shifts Sidebar */}
        <div className="hidden xl:block w-64 border-l border-border bg-card overflow-y-auto">
          <div className="p-4 border-b border-border">
            <h3 className="font-display font-semibold text-sm text-foreground">Open Shifts</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{openShifts.length} need coverage</p>
          </div>
          <div className="p-3 space-y-2">
            {openShifts.map((s, i) => (
              <div key={i} className="p-3 rounded-lg border border-dashed border-destructive/30 bg-destructive/5">
                <p className="text-xs font-semibold text-foreground">{s.patient}</p>
                <p className="text-[11px] text-muted-foreground">{s.time} · {s.type}</p>
                <button className="mt-2 text-[11px] font-medium text-primary hover:underline">Find Coverage →</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
