"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sun, Moon, House, User, Briefcase, Envelope, GithubLogo, LinkedinLogo, FileText, Phone, At } from "@phosphor-icons/react";

export function Sidebar() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
  }

  return (
    <aside className="fixed left-0 top-0 h-full w-[220px] bg-sidebar flex flex-col py-8 px-5 z-10 border-r border-border overflow-y-auto">
      {/* Profile */}
      <div className="flex flex-col items-center mb-8">
        <Image src="/photo.jpg" alt="竹怀淼" width={104} height={138}
          className="w-[68px] h-[90px] rounded-lg object-cover mb-3 ring-2 ring-accent/30" />
        <h2 className="text-sm font-bold text-text">竹怀淼</h2>
        <p className="text-[10px] text-text-muted mt-0.5">Robotics Engineer</p>

        {/* Contact */}
        <div className="mt-4 space-y-1.5 w-full">
          <a href="tel:15290249135" className="flex items-center gap-2 text-[10px] text-text-muted hover:text-text transition-colors">
            <Phone size={12} weight="light" />
            152-9024-9135
          </a>
          <a href="mailto:1813951863@qq.com" className="flex items-center gap-2 text-[10px] text-text-muted hover:text-text transition-colors">
            <At size={12} weight="light" />
            1813951863@qq.com
          </a>
        </div>

        <button onClick={toggle} className="mt-4 p-1.5 rounded-lg hover:bg-card transition-colors text-text-muted hover:text-text">
          {light ? <Moon size={16} weight="light" /> : <Sun size={16} weight="light" />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 mb-auto">
        {(["首页", "关于", "项目", "联系"] as const).map((label) => {
          const icons: Record<string, React.ElementType> = { 首页: House, 关于: User, 项目: Briefcase, 联系: Envelope };
          const Icon = icons[label];
          return (
            <a key={label} href="#" className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs text-text-dim hover:text-text hover:bg-card transition-colors">
              <Icon size={16} weight="light" />{label}
            </a>
          );
        })}
      </nav>

      {/* Social */}
      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-[10px] text-text-muted mb-3 font-mono tracking-[0.06em] uppercase">Socials</p>
        <div className="flex gap-3">
          <a href="#" className="text-text-muted hover:text-text transition-colors"><GithubLogo size={16} weight="light" /></a>
          <a href="#" className="text-text-muted hover:text-text transition-colors"><LinkedinLogo size={16} weight="light" /></a>
        </div>
      </div>

      {/* CTA */}
      <a href="#" className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-white text-[#0b1121] text-xs font-semibold hover:bg-gray-200 transition-colors">
        <FileText size={14} weight="bold" />Read Resume
      </a>
    </aside>
  );
}
