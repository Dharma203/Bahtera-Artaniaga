import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Section className="pt-44 pb-56 bg-gradient-to-b from-slate-100 via-white to-white">
        <Container className="text-center">
          <p className="text-xs tracking-[0.3em] text-slate-400 uppercase">
            Bahtera Arta Niaga
          </p>

          <h1 className="mt-8 text-5xl md:text-6xl font-semibold text-slate-950 leading-tight max-w-4xl mx-auto">
            Solusi Distribusi Modern
            <br />
            untuk Bisnis Anda
          </h1>

          <p className="mt-10 text-slate-500 text-lg max-w-2xl mx-auto">
            Profesional, efisien, dan terpercaya dalam mendukung rantai pasok
            serta perdagangan.
          </p>
        </Container>
      </Section>

      <Section className="pt-0 pb-52 bg-white">
        <Container>
          <div className="relative h-[520px] rounded-[2.5rem] overflow-hidden shadow-lg">
            <Image
              src="/warehouse.jpg"
              alt="Distribusi Modern Bahtera Arta Niaga"
              fill
              priority
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Efisiensi dalam Setiap Proses
              </h2>

              <p className="mt-6 text-slate-500 leading-relaxed max-w-md">
                Kami mengelola rantai distribusi dengan sistem yang terstruktur
                dan terukur, memastikan kelancaran operasional bisnis mitra
                kami.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Standar Profesional Tinggi
              </h2>

              <p className="mt-6 text-slate-500 leading-relaxed max-w-md">
                Komitmen terhadap kualitas dan integritas menjadikan kami mitra
                terpercaya dalam bidang distribusi dan perdagangan.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="text-center bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Siap Bekerja Sama dengan Kami?
          </h2>

          <p className="mt-6 text-slate-500 max-w-xl mx-auto">
            Hubungi Bahtera Arta Niaga untuk solusi distribusi dan perdagangan
            yang profesional dan berkelanjutan.
          </p>

          <a
            href="/kontak"
            className="inline-block mt-12 px-10 py-4 bg-slate-950 text-white rounded-full text-sm tracking-wide transition-transform hover:scale-105"
          >
            Hubungi Kami
          </a>
        </Container>
      </Section>
    </main>
  );
}
