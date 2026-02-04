"use client";
import { useEffect } from "react";

export default function Parallax() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".parallax").forEach((el) => {
        const speed = 0.15;
        const yPos = window.scrollY * speed;
        (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
