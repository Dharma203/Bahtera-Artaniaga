export const metadata = {
  title: "Layanan | Bahtera Arta Niaga",
  description:
    "Layanan distribusi, perdagangan umum, dan kemitraan bisnis dari Bahtera Arta Niaga.",
};

export default function Layanan() {
  return (
    <main className="py-20">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
          Layanan Kami
        </h1>
        <p className="mt-6 text-slate-500">
          Kami menyediakan berbagai layanan untuk mendukung kebutuhan distribusi
          dan perdagangan bisnis Anda.
        </p>
      </section>

      <section className="mt-16 space-y-12">
        <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">
            Distribusi Produk
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            Sistem distribusi yang luas dan terorganisir untuk memastikan produk
            sampai tepat waktu dengan kualitas terjaga.
          </p>
        </div>

        <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">
            Perdagangan Umum
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            Penyediaan berbagai kebutuhan perdagangan dengan standar kualitas
            tinggi serta proses yang transparan dan profesional.
          </p>
        </div>

        <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">
            Kemitraan Bisnis
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            Kami membuka peluang kerja sama jangka panjang yang saling
            menguntungkan dan berorientasi pada pertumbuhan bersama.
          </p>
        </div>
      </section>
    </main>
  );
}
