import { redirect } from "next/navigation";
import { getSession } from "@/lib/admin/auth";

export default async function AdminIndexPage() {
  const session = await getSession();
  if (session) {
    redirect("/admin/dashboard");
  }
  redirect("/admin/login");
}
