export const metadata = {
  title: "Kontak | Bahtera Arta Niaga",
  description:
    "Hubungi Bahtera Arta Niaga untuk informasi layanan distribusi dan perdagangan.",
};

export default function Kontak() {
  return (
    <main className="py-20">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
          Hubungi Kami
        </h1>
        <p className="mt-6 text-slate-500">
          Kami siap membantu kebutuhan distribusi dan perdagangan Anda.
        </p>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-12">
        <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm text-sm text-slate-600">
          <p>
            <strong>Alamat:</strong> Jakarta, Indonesia
          </p>
          <p className="mt-2">
            <strong>Email:</strong> info@bahteraartaniaga.com
          </p>
          <p className="mt-2">
            <strong>Telepon:</strong> +62 812 0000 0000
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps?q=jakarta&output=embed"
            className="w-full h-64"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
