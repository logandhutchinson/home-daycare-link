import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { ChatAssistantButton } from "../chat/ChatAssistantButton";

export function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto pt-14 lg:pt-0">
        <Outlet />
      </main>
      <ChatAssistantButton />
    </div>
  );
}
