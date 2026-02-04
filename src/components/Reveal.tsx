"use client";
import { useEffect, useRef } from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("show");
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
