import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "竹怀淼 · 简历",
  description: "竹怀淼，机器人硬件与ROS系统开发，国赛双一等奖，SCI论文第二作者，大二在读。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Sidebar />
        <main className="ml-[220px]">
          {children}
        </main>
      </body>
    </html>
  );
}
