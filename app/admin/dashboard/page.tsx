import { getSession } from "@/lib/admin/auth";
import { redirect } from "next/navigation";
import AdminShell from "@/lib/admin/AdminShell";
import Link from "next/link";
import {
  Users,
  Calendar,
  MessageSquare,
  Image,
  ArrowRight,
} from "lucide-react";

export default async function AdminDashboardPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  // Placeholder stats – will be live once Prisma is connected
  const stats = [
    { label: "Coaches", value: "—", href: "/admin/coaches", icon: Users, color: "from-blue-600 to-blue-500" },
    { label: "Upcoming Events", value: "—", href: "/admin/events", icon: Calendar, color: "from-purple-600 to-purple-500" },
    { label: "New Enquiries", value: "—", href: "/admin/enquiries", icon: MessageSquare, color: "from-amber-600 to-amber-500" },
    { label: "Gallery Photos", value: "—", href: "/admin/gallery", icon: Image, color: "from-emerald-600 to-emerald-500" },
  ];

  return (
    <AdminShell>
      <div className="max-w-6xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-white/50 text-sm mt-1">
            Welcome back. Manage your academy content here.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Link
                key={stat.label}
                href={stat.href}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#12121a] p-5 hover:border-white/15 transition"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl group-hover:opacity-20 transition`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/50 mt-0.5">{stat.label}</div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick actions */}
        <div className="rounded-2xl border border-white/8 bg-[#12121a] p-6">
          <h2 className="font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/coaches"
              className="px-4 py-2 rounded-lg bg-red-600/15 text-red-400 text-sm font-medium hover:bg-red-600/25 transition"
            >
              Manage Coaches
            </Link>
            <Link
              href="/admin/events"
              className="px-4 py-2 rounded-lg bg-white/5 text-white/70 text-sm font-medium hover:bg-white/10 transition"
            >
              Add Event
            </Link>
            <Link
              href="/admin/enquiries"
              className="px-4 py-2 rounded-lg bg-white/5 text-white/70 text-sm font-medium hover:bg-white/10 transition"
            >
              View Enquiries
            </Link>
            <Link
              href="/"
              target="_blank"
              className="px-4 py-2 rounded-lg bg-white/5 text-white/70 text-sm font-medium hover:bg-white/10 transition"
            >
              View Public Site →
            </Link>
          </div>
        </div>

        <p className="text-white/30 text-xs mt-8">
          Database connection and live stats will appear once Prisma is set up and seeded.
        </p>
      </div>
    </AdminShell>
  );
}
