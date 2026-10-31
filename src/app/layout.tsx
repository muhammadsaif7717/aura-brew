import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#d97706",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Gourmet Dining & Artisanal Cafe Showcase — Powered by Axiovyn Technologies",
  description:
    "Sub-second Next.js digital menu, 1-click WhatsApp food ordering, and bespoke table reservations for premier restaurants and cafes in Dhaka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
