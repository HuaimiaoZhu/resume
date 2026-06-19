"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.9, delay,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce, delay]);

  return <div ref={ref} className={className}>{children}</div>;
}

export function StaggerReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current!.children, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 82%", toggleActions: "play none none none" },
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return <div ref={ref} className={className}>{children}</div>;
}

export function ParallaxGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: 120, scale: 1.1, opacity: 0.6, ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1 },
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  if (reduce) return null;
  return (
    <div ref={ref} className="fixed top-[-30vh] left-1/2 -translate-x-1/2 w-[140vw] h-[70vh] pointer-events-none z-0"
      style={{ background: "radial-gradient(ellipse at 50% 0%, rgb(245 158 11 / .05) 0%, transparent 60%)" }} />
  );
}

export function GlassReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { opacity: 0, y: 50, filter: "blur(8px)" }, {
        opacity: 1, y: 0, filter: "blur(0px)", duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return <div ref={ref} className={className}>{children}</div>;
}
