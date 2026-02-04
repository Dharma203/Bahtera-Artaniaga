"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="space-x-8 text-sm text-slate-600">
        <h1 className="font-medium text-slate-700">Bahtera Arta Niaga</h1>

        <div className="space-x-6 text-sm text-slate-700">
          <Link href="/">Beranda</Link>
          <Link href="/tentang">Tentang Kami</Link>
          <Link href="/layanan">Layanan</Link>
          <Link href="/produk">Produk</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
      </div>
    </nav>
  );
}
