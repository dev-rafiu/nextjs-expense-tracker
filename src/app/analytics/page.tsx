import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { BarChart3 } from "lucide-react";

export default async function AnalyticsPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center space-y-6 w-full max-w-md">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center">
            <BarChart3 className="w-10 h-10 text-slate-400" />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Analytics
          </h2>
          <p className="text-sm md:text-base uppercase tracking-wider font-medium text-slate-500">
            Coming Soon
          </p>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          We&apos;re working on bringing you detailed insights and analytics
          about your spending patterns. Check back soon!
        </p>
      </div>
    </div>
  );
}
