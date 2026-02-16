import { Building2, Users, Shield, Clock, Globe, Bell } from "lucide-react";

const settingsSections = [
  { title: "Organization", desc: "Company info, locations, operating hours", icon: Building2 },
  { title: "Users & Roles", desc: "Manage users, assign roles, permissions matrix", icon: Users },
  { title: "Security Policies", desc: "Password policy, session timeout, MFA settings", icon: Shield },
  { title: "Scheduling Defaults", desc: "Visit types, duration defaults, travel buffers", icon: Clock },
  { title: "Integrations", desc: "API keys, external services, webhooks", icon: Globe },
  { title: "Notifications", desc: "Email, SMS, push notification preferences", icon: Bell },
];

export default function SettingsPage() {
  return (
    <div className="p-4 lg:p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground">Settings</h1>

      <div className="grid gap-3 sm:grid-cols-2">
        {settingsSections.map((s, i) => (
          <button
            key={i}
            className="bg-card rounded-xl border border-border p-5 text-left hover:shadow-card-hover hover:border-primary/20 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">{s.title}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
