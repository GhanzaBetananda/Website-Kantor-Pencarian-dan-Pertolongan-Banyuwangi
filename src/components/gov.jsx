import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaUniversalAccess,
} from "react-icons/fa";

/* Tautan lewati — penting untuk pengguna keyboard & pembaca layar */
export function SkipLink() {
  return (
    <a href="#konten-utama" className="skip-link">
      Lewati ke konten utama
    </a>
  );
}

/* Kepala seksi yang konsisten */
export function SectionHeading({ eyebrow, title, desc, align = "left", dark = false }) {
  const alignCls =
    align === "center" ? "mx-auto items-center text-center" : "items-start text-left";
  return (
    <div className={`flex max-w-3xl flex-col ${alignCls}`}>
      <span className="gov-eyebrow">{eyebrow}</span>
      <h2
        className={`gov-title text-3xl sm:text-4xl ${dark ? "!text-white" : ""}`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`gov-desc ${dark ? "!text-slate-300" : ""}`}>{desc}</p>
      )}
    </div>
  );
}

/* Lencana kategori berita yang kontras */
export function KategoriBadge({ kategori }) {
  const map = {
    "Operasi SAR": "bg-orange-100 text-orange-800 border-orange-200",
    Pelatihan: "bg-blue-100 text-blue-800 border-blue-200",
    "Siaga Wisata": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "Kerja Sama": "bg-teal-100 text-teal-800 border-teal-200",
    Pengumuman: "bg-slate-800 text-white border-slate-800",
  };
  const cls = map[kategori] || "bg-slate-100 text-slate-700 border-slate-200";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${cls}`}
    >
      {kategori}
    </span>
  );
}

/* Footer portal */
export function SiteFooter({ onBeranda, onBerita, onSection }) {
  return (
    <footer className="bg-gov-950 text-slate-300" aria-label="Kaki halaman">
      <div className="gov-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/sar3.png" alt="Logo BASARNAS" className="h-11 w-auto" />
            <div>
              <p className="text-[15px] font-bold leading-tight text-white">
                BASARNAS Banyuwangi
              </p>
              <p className="text-[13px] text-slate-400">
                Kantor Pencarian dan Pertolongan Kelas B
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-[14px] leading-7 text-slate-400">
            Portal informasi resmi layanan pencarian dan pertolongan yang cepat,
            inklusif, dan dapat diakses semua orang.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-300">
            <FaUniversalAccess aria-hidden="true" className="text-emerald-400" />
            Komitmen aksesibilitas WCAG 2.1 AA
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Jelajahi
          </h3>
          <ul className="mt-4 space-y-1 text-[14px]">
            {[
              { label: "Beranda", act: onBeranda },
              { label: "Profil", act: () => onSection("#profil") },
              { label: "Wilayah Kerja", act: () => onSection("#wilayah-kerja") },
              { label: "Fasilitas", act: () => onSection("#fasilitas") },
              { label: "Berita", act: onBerita },
              { label: "Dokumentasi", act: () => onSection("#dokumentasi") },
            ].map((l) => (
              <li key={l.label}>
                <button
                  type="button"
                  onClick={l.act}
                  className="rounded px-1 py-1.5 text-left text-slate-300 transition hover:text-white hover:underline hover:underline-offset-4"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Kontak Darurat
          </h3>
          <ul className="mt-4 space-y-3 text-[14px]">
            <li>
              <a
                href="tel:115"
                className="inline-flex items-center gap-2 rounded-lg bg-red-700 px-4 py-2.5 font-bold text-white transition hover:bg-red-600"
              >
                <FaPhoneAlt aria-hidden="true" /> Call Center 115
              </a>
            </li>
            <li className="flex gap-2.5">
              <FaMapMarkerAlt aria-hidden="true" className="mt-1 shrink-0 text-slate-400" />
              <span>Jl. Gatot Subroto No. 181 Ketapang, Banyuwangi</span>
            </li>
            <li className="flex gap-2.5">
              <FaEnvelope aria-hidden="true" className="mt-1 shrink-0 text-slate-400" />
              <span>BasarnasBanyuwangi@gmail.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Kanal Resmi
          </h3>
          <ul className="mt-4 space-y-2.5 text-[14px]">
            <li className="flex items-center gap-2.5">
              <FaInstagram aria-hidden="true" className="text-slate-400" />
              @kantorsar_banyuwangi
            </li>
            <li className="flex items-center gap-2.5">
              <FaFacebookF aria-hidden="true" className="text-slate-400" />
              Basarnas Bwi
            </li>
            <li className="flex items-center gap-2.5">
              <FaTwitter aria-hidden="true" className="text-slate-400" />
              Basarnas Banyuwangi
            </li>
          </ul>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-[13px] leading-6 text-slate-300">
            Layanan darurat <strong className="text-white">gratis 24/7</strong>{" "}
            untuk seluruh masyarakat tanpa terkecuali.
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="gov-container flex flex-col gap-1 py-5 text-[13px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kantor SAR Banyuwangi. Informasi resmi pemerintah.</p>
          <p>Siaga • Cepat • Tepat — inklusif untuk semua.</p>
        </div>
      </div>
    </footer>
  );
}
