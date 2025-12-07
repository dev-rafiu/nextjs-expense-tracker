"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, List, BarChart3, TestTube } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/dashboard",
      icon: Home,
      label: "Dashboard",
    },
    {
      href: "/transactions",
      icon: List,
      label: "Transactions",
    },
    {
      href: "/analytics",
      icon: BarChart3,
      label: "Analytics",
    },
    {
      href: "/temp",
      icon: TestTube,
      label: "Temp",
    },
  ];

  return (
    <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 flex-col z-40">
      <div className="p-6 border-b border-slate-200">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FS</span>
          </div>
          <span className="text-xl font-semibold text-slate-900">
            FlowSpend
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5",
                  isActive ? "text-slate-900" : "text-slate-500"
                )}
              />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center justify-end">
          <UserButton />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
