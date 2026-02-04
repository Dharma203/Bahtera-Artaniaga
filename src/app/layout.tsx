import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bahtera Arta Niaga",
    template: "%s | Bahtera Arta Niaga",
  },
  description:
    "Bahtera Arta Niaga adalah perusahaan perdagangan dan distribusi yang berfokus pada efisiensi, kualitas, dan kemitraan jangka panjang.",
  keywords: [
    "bahtera arta niaga",
    "perusahaan distribusi",
    "perdagangan",
    "logistik",
    "rantai pasok",
  ],
  metadataBase: new URL("https://bahtera-arta-niaga.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased text-neutral-900 bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
