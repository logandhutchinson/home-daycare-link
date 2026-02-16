import { DollarSign, FileText, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const invoices = [
  { id: "INV-001", client: "Martha Johnson", amount: "$2,450.00", status: "Paid", date: "Feb 1, 2026" },
  { id: "INV-002", client: "Robert Williams", amount: "$1,800.00", status: "Pending", date: "Feb 5, 2026" },
  { id: "INV-003", client: "Dorothy Brown", amount: "$3,200.00", status: "Overdue", date: "Jan 28, 2026" },
  { id: "INV-004", client: "Harold Davis", amount: "$1,200.00", status: "Paid", date: "Feb 10, 2026" },
  { id: "INV-005", client: "Eleanor Taylor (Daycare)", amount: "$950.00", status: "Pending", date: "Feb 12, 2026" },
];

export default function Billing() {
  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Billing & Payroll</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Revenue (Month)", value: "$48,200", icon: DollarSign },
          { label: "Outstanding", value: "$5,950", icon: Clock },
          { label: "Invoices Sent", value: "23", icon: FileText },
          { label: "Paid", value: "18", icon: CheckCircle2 },
        ].map((s, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-4 shadow-card">
            <s.icon className="w-5 h-5 text-primary mb-2" />
            <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
            <p className="text-xl font-display font-bold text-foreground mt-0.5">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="font-display font-semibold">Recent Invoices</h2>
        </div>
        <table className="w-full">
          <thead><tr className="border-b border-border">
            <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Invoice</th>
            <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Client</th>
            <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3 hidden sm:table-cell">Date</th>
            <th className="text-right text-xs font-medium text-muted-foreground px-5 py-3">Amount</th>
            <th className="text-right text-xs font-medium text-muted-foreground px-5 py-3">Status</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            {invoices.map((inv, i) => (
              <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }} className="hover:bg-secondary/50 cursor-pointer transition-colors">
                <td className="px-5 py-3 text-sm font-medium text-primary">{inv.id}</td>
                <td className="px-5 py-3 text-sm text-foreground">{inv.client}</td>
                <td className="px-5 py-3 text-sm text-muted-foreground hidden sm:table-cell">{inv.date}</td>
                <td className="px-5 py-3 text-sm font-semibold text-foreground text-right">{inv.amount}</td>
                <td className="px-5 py-3 text-right">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    inv.status === "Paid" ? "bg-success/10 text-success" :
                    inv.status === "Overdue" ? "bg-destructive/10 text-destructive" :
                    "bg-warning/10 text-accent-foreground"
                  }`}>{inv.status}</span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
