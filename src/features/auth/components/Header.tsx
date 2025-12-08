"use client";

import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Logo from "./Logo";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="dashboard-header sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 h-16">
      <div className="flex items-center justify-between h-full px-4 gap-4">
        {/* logo - visible on mobile, hidden on desktop */}
        <div className="md:hidden">
          <Logo href="/dashboard" />
        </div>

        {/* search bar - visible on desktop */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10! h-10 w-full rounded-full! lg:rounded-md!"
          />
        </div>

        <div className="ml-auto">
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
