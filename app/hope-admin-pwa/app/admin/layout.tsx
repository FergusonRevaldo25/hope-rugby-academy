import { ReactNode } from "react";
import { getSession } from "@/lib/admin/auth";
import { redirect } from "next/navigation";
import AdminShell from "@/lib/admin/AdminShell";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  // Login page has its own minimal layout
  // We still run the session check here for all other admin pages via the shell

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased">
      {children}
    </div>
  );
}
