import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import LogoLarge from "@/features/auth/components/LogoLarge";

export default async function TempPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 min-h-[calc(100vh-200px)] flex items-center justify-center">
      <LogoLarge />
    </div>
  );
}

