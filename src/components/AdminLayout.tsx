import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, CreditCard, Settings, BarChart3, FileText, LogOut } from "lucide-react";

const navItems = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/courses", icon: BookOpen, label: "Courses" },
  { to: "/admin/payments", icon: CreditCard, label: "Payments" },
  { to: "/admin/reports", icon: BarChart3, label: "Reports" },
  { to: "/admin/content", icon: FileText, label: "Content" },
  { to: "/admin/settings", icon: Settings, label: "Settings" },
];

const AdminLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 flex-col border-r border-sidebar-border bg-sidebar md:flex">
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <span className="text-sm font-bold text-sidebar-primary-foreground">A</span>
          </div>
          <span className="font-display text-sm font-bold text-sidebar-foreground">Admin Portal</span>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-sidebar-border p-4">
          <Link to="/" className="flex items-center gap-2 text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground">
            <LogOut className="h-4 w-4" /> Exit Admin
          </Link>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <h2 className="font-display text-lg font-bold text-foreground">
            {navItems.find((i) => i.to === location.pathname)?.label || "Admin"}
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">AD</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-background p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
