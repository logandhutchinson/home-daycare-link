import { FileText, Plus, Search, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const documents = [
  { name: "Care Plan - Martha Johnson", type: "Care Plan", status: "Active", updated: "Feb 14, 2026", reviewer: "Dr. Patel" },
  { name: "Assessment - Robert Williams", type: "Assessment", status: "Pending Review", updated: "Feb 13, 2026", reviewer: "Sarah Chen" },
  { name: "Consent Form - Dorothy Brown", type: "Consent", status: "Signed", updated: "Feb 12, 2026", reviewer: "—" },
  { name: "Visit Note - Harold Davis", type: "Visit Note", status: "Draft", updated: "Feb 14, 2026", reviewer: "Sarah Chen" },
  { name: "Care Plan - Arthur Thomas", type: "Care Plan", status: "Active", updated: "Feb 10, 2026", reviewer: "Dr. Patel" },
  { name: "Incident Report #47", type: "Incident", status: "Under Review", updated: "Feb 13, 2026", reviewer: "QA Team" },
];

export default function CarePlans() {
  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-5">
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="flex-1">
          <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Care Plans & Documentation</h1>
          <p className="text-sm text-muted-foreground">Manage care plans, visit notes, and clinical documents</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-primary-foreground gradient-primary rounded-lg hover:opacity-90 transition-opacity self-start">
          <Plus className="w-4 h-4" /> New Document
        </button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input placeholder="Search documents..." className="w-full pl-9 pr-3 py-2 text-sm bg-secondary rounded-lg text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="bg-card rounded-xl border border-border p-4 hover:shadow-card-hover transition-shadow cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{doc.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{doc.type} · {doc.updated}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className={`text-xs font-medium flex items-center gap-1 ${
                doc.status === "Active" || doc.status === "Signed" ? "text-success" :
                doc.status === "Draft" ? "text-muted-foreground" : "text-warning"
              }`}>
                {doc.status === "Active" || doc.status === "Signed" ? <CheckCircle2 className="w-3 h-3" /> :
                 doc.status === "Draft" ? <Clock className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                {doc.status}
              </span>
              <span className="text-xs text-muted-foreground">{doc.reviewer}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
