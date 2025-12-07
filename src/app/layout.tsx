import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import ConditionalHeader from "@/features/auth/components/ConditionalHeader";
import ConditionalBottomNav from "@/features/navigation/components/ConditionalBottomNav";
import ConditionalSidebar from "@/features/navigation/components/ConditionalSidebar";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowSpend - Track Your Money, Control Your Flow",
  description:
    "Track your expenses, analyze spending patterns, and make smarter financial decisions with FlowSpend. Beautiful, mobile-first expense tracking.",
  // openGraph: {
  //   title: "FlowSpend - Track Your Money, Control Your Flow",
  //   description:
  //     "Track your expenses, analyze spending patterns, and make smarter financial decisions with FlowSpend. Beautiful, mobile-first expense tracking.",
  //   url: "https://flowspend.vercel.app", // Update with your actual domain
  //   siteName: "FlowSpend",
  //   images: [
  //     {
  //       url: "/og-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "FlowSpend - Expense Tracker",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "FlowSpend - Track Your Money, Control Your Flow",
  //   description:
  //     "Track your expenses, analyze spending patterns, and make smarter financial decisions with FlowSpend.",
  //   images: ["/og-image.png"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={`${inter.variable} font-sans antialiased`}>
          <ConditionalSidebar />
          <ConditionalHeader />
          <main className="md:ml-64">{children}</main>
          <ConditionalBottomNav />
          <Toaster position="top-right" richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
