import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Tentang Kami | Bahtera Arta Niaga",
  description:
    "Profil Bahtera Arta Niaga sebagai perusahaan distribusi dan perdagangan yang profesional dan terpercaya.",
};

export default function Tentang() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">
          Tentang Bahtera Arta Niaga
        </h1>
        <p className="mt-6 max-w-2xl text-neutral-600 leading-relaxed">
          Bahtera Arta Niaga adalah perusahaan yang berfokus pada perdagangan dan
          distribusi dengan pendekatan profesional, transparan, dan berorientasi
          jangka panjang.
        </p>

        <section className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800">Visi</h2>
            <p className="mt-4 text-slate-500 text-sm leading-relaxed">
              Menjadi perusahaan distribusi dan perdagangan yang unggul,
              inovatif, dan terpercaya dalam mendukung pertumbuhan bisnis mitra
              kami.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800">Misi</h2>
            <ul className="mt-4 text-slate-500 text-sm space-y-2 list-disc list-inside">
              <li>Menyediakan layanan distribusi yang efisien</li>
              <li>Menjaga kualitas produk dan layanan</li>
              <li>Membangun kemitraan jangka panjang</li>
              <li>Mengutamakan profesionalisme dan integritas</li>
            </ul>
          </div>
        </section>
      </Container>
    </Section>
  );
}
