import { useState } from "react";
import { Search, Plus, Filter, Users, Home, Sun } from "lucide-react";
import { motion } from "framer-motion";

type Tab = "all" | "home_health" | "daycare";

const clients = [
  { name: "Martha Johnson", type: "Home Health", status: "Active", age: 78, caregiver: "Sarah Chen", nextVisit: "Today 8 AM", phone: "(555) 123-4567" },
  { name: "Robert Williams", type: "Home Health", status: "Active", age: 82, caregiver: "James Miller", nextVisit: "Today 9:30 AM", phone: "(555) 234-5678" },
  { name: "Dorothy Brown", type: "Both", status: "Active", age: 75, caregiver: "Maria Garcia", nextVisit: "Today 10 AM", phone: "(555) 345-6789" },
  { name: "Harold Davis", type: "Home Health", status: "Active", age: 88, caregiver: "Sarah Chen", nextVisit: "Tomorrow 11 AM", phone: "(555) 456-7890" },
  { name: "Betty Wilson", type: "Home Health", status: "Pending Intake", age: 71, caregiver: "Unassigned", nextVisit: "—", phone: "(555) 567-8901" },
  { name: "Eleanor Taylor", type: "Daycare", status: "Active", age: 79, caregiver: "Floor Staff", nextVisit: "Mon/Wed/Fri", phone: "(555) 678-9012" },
  { name: "George Anderson", type: "Daycare", status: "Active", age: 84, caregiver: "Floor Staff", nextVisit: "Mon–Fri", phone: "(555) 789-0123" },
  { name: "Frances Martinez", type: "Daycare", status: "Active", age: 77, caregiver: "Floor Staff", nextVisit: "Tue/Thu", phone: "(555) 890-1234" },
  { name: "Arthur Thomas", type: "Home Health", status: "Active", age: 90, caregiver: "James Miller", nextVisit: "Wed 2 PM", phone: "(555) 901-2345" },
  { name: "Lillian Moore", type: "Daycare", status: "On Hold", age: 73, caregiver: "—", nextVisit: "—", phone: "(555) 012-3456" },
];

export default function Clients() {
  const [tab, setTab] = useState<Tab>("all");
  const [search, setSearch] = useState("");

  const filtered = clients.filter((c) => {
    const matchesTab = tab === "all" || (tab === "home_health" ? c.type.includes("Home") : c.type.includes("Daycare") || c.type === "Both");
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-5">
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="flex-1">
          <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Clients & Patients</h1>
          <p className="text-sm text-muted-foreground">{clients.length} total across all service lines</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-primary-foreground gradient-primary rounded-lg hover:opacity-90 transition-opacity self-start">
          <Plus className="w-4 h-4" /> Add Client
        </button>
      </div>

      {/* Tabs + Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center bg-secondary rounded-lg p-0.5">
          {([
            { key: "all", label: "All", icon: Users },
            { key: "home_health", label: "Home Health", icon: Home },
            { key: "daycare", label: "Daycare", icon: Sun },
          ] as const).map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                tab === t.key ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <t.icon className="w-3.5 h-3.5" /> {t.label}
            </button>
          ))}
        </div>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search clients..."
            className="w-full pl-9 pr-3 py-2 text-sm bg-secondary rounded-lg text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Name</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3 hidden md:table-cell">Service</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Status</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3 hidden lg:table-cell">Caregiver</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3 hidden lg:table-cell">Next Visit</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3 hidden xl:table-cell">Phone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((c, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                  className="hover:bg-secondary/50 transition-colors cursor-pointer"
                >
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                        {c.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{c.name}</p>
                        <p className="text-xs text-muted-foreground md:hidden">{c.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      c.type === "Home Health" ? "bg-info/10 text-info"
                      : c.type === "Daycare" ? "bg-success/10 text-success"
                      : "bg-primary/10 text-primary"
                    }`}>{c.type}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-medium ${
                      c.status === "Active" ? "text-success" : c.status === "Pending Intake" ? "text-warning" : "text-muted-foreground"
                    }`}>{c.status}</span>
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden lg:table-cell">{c.caregiver}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden lg:table-cell">{c.nextVisit}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground hidden xl:table-cell">{c.phone}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
