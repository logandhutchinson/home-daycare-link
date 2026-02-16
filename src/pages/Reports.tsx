import { BarChart3, TrendingUp, Users, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const visitData = [
  { day: "Mon", completed: 18, missed: 2 },
  { day: "Tue", completed: 22, missed: 1 },
  { day: "Wed", completed: 20, missed: 3 },
  { day: "Thu", completed: 24, missed: 1 },
  { day: "Fri", completed: 19, missed: 2 },
];

const attendanceData = [
  { day: "Mon", count: 22 },
  { day: "Tue", count: 18 },
  { day: "Wed", count: 24 },
  { day: "Thu", count: 20 },
  { day: "Fri", count: 23 },
];

export default function Reports() {
  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Reports</h1>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border shadow-card p-5">
          <h2 className="font-display font-semibold text-foreground mb-4">Home Health Visits (This Week)</h2>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={visitData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 20%, 90%)" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="completed" fill="hsl(174, 62%, 38%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="missed" fill="hsl(0, 72%, 51%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card rounded-xl border border-border shadow-card p-5">
          <h2 className="font-display font-semibold text-foreground mb-4">Daycare Attendance (This Week)</h2>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 20%, 90%)" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="hsl(210, 80%, 55%)" strokeWidth={2} dot={{ fill: "hsl(210, 80%, 55%)" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Visit Completion", value: "94%", sub: "↑ 2% from last week", icon: TrendingUp },
          { label: "Avg Capacity", value: "78%", sub: "Daycare utilization", icon: Users },
          { label: "Fill Rate", value: "91%", sub: "Shifts covered", icon: Calendar },
          { label: "Doc Compliance", value: "87%", sub: "Notes within 24h", icon: BarChart3 },
        ].map((s, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-4 shadow-card">
            <s.icon className="w-5 h-5 text-primary mb-2" />
            <p className="text-xl font-display font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            <p className="text-[10px] text-success mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
