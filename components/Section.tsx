"use client";

import { useEffect, useRef } from "react";

// A page section with a terminal-style heading and a fade-in on scroll.
export default function Section({
  id,
  command,
  title,
  children,
}: {
  id: string;
  command: string;
  title: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="reveal mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <p className="font-mono text-sm text-muted">
        <span className="text-accent">~/prosper $</span> {command}
      </p>
      <h2 className="mt-2 mb-10 font-mono text-3xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
