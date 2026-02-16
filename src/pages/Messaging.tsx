import { useState } from "react";
import { Search, Send, Phone, Video, MoreVertical } from "lucide-react";

const threads = [
  { name: "Sarah Chen", lastMsg: "Visit note for Martha J. is ready for review", time: "2m", unread: 2, online: true },
  { name: "Scheduling Team", lastMsg: "Need coverage for tomorrow 3 PM slot", time: "15m", unread: 1, online: false },
  { name: "James Miller", lastMsg: "CPR recert scheduled for next week", time: "1h", unread: 0, online: true },
  { name: "Maria Garcia", lastMsg: "Dorothy Brown's family called about meal preferences", time: "2h", unread: 0, online: false },
  { name: "Admin Announcements", lastMsg: "New HIPAA training module available", time: "1d", unread: 0, online: false },
];

const messages = [
  { sender: "Sarah Chen", text: "Hi, I've completed the assessment for Martha Johnson. The care plan needs updating.", time: "10:32 AM", self: false },
  { sender: "You", text: "Great, can you highlight the key changes needed?", time: "10:34 AM", self: true },
  { sender: "Sarah Chen", text: "Yes — wound care protocol needs adjustment, and we should add fall prevention measures. I've drafted the visit note with details.", time: "10:35 AM", self: false },
  { sender: "Sarah Chen", text: "Visit note for Martha J. is ready for review", time: "10:36 AM", self: false },
];

export default function Messaging() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex h-full">
      {/* Thread list */}
      <div className="w-full md:w-80 border-r border-border bg-card flex flex-col">
        <div className="p-3 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input placeholder="Search messages..." className="w-full pl-9 pr-3 py-2 text-sm bg-secondary rounded-lg text-foreground placeholder:text-muted-foreground outline-none" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {threads.map((t, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full px-4 py-3 flex items-start gap-3 text-left transition-colors ${
                selected === i ? "bg-primary/5" : "hover:bg-secondary/50"
              }`}
            >
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                {t.online && <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success rounded-full border-2 border-card" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground truncate">{t.name}</p>
                  <span className="text-[10px] text-muted-foreground flex-shrink-0">{t.time}</span>
                </div>
                <p className="text-xs text-muted-foreground truncate mt-0.5">{t.lastMsg}</p>
              </div>
              {t.unread > 0 && (
                <span className="w-5 h-5 rounded-full gradient-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-1">
                  {t.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="hidden md:flex flex-col flex-1">
        <div className="px-5 py-3 border-b border-border flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">{threads[selected].name}</p>
            <p className="text-xs text-success">Online</p>
          </div>
          <button className="p-2 rounded-lg hover:bg-secondary"><Phone className="w-4 h-4 text-muted-foreground" /></button>
          <button className="p-2 rounded-lg hover:bg-secondary"><Video className="w-4 h-4 text-muted-foreground" /></button>
          <button className="p-2 rounded-lg hover:bg-secondary"><MoreVertical className="w-4 h-4 text-muted-foreground" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.self ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[70%] rounded-2xl px-4 py-2.5 ${
                m.self ? "gradient-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
              }`}>
                <p className="text-sm">{m.text}</p>
                <p className={`text-[10px] mt-1 ${m.self ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{m.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-2 bg-secondary rounded-xl px-4 py-2.5">
            <input placeholder="Type a message..." className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none" />
            <button className="text-primary hover:text-primary/80"><Send className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
