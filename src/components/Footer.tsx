export default function Footer() {
  return (
    <footer className="mt-24 py-10 border-t border-slate-200 text-sm text-slate-500">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="font-semibold text-slate-700">Bahtera Arta Niaga</h3>
          <p className="mt-2 max-w-xs">
            Perusahaan distribusi dan perdagangan yang menghadirkan solusi
            bisnis profesional dan terpercaya.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-700">Navigasi</h4>
          <ul className="mt-2 space-y-1">
            <li>Beranda</li>
            <li>Tentang</li>
            <li>Layanan</li>
            <li>Kontak</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-700">Kontak</h4>
          <p className="mt-2">
            Email: info@bahteraartaniaga.com <br />
            Telp: +62 812 0000 0000
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Bahtera Arta Niaga. All rights reserved.
      </div>
    </footer>
  );
}
