import { useMemo, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaNewspaper,
  FaSearch,
  FaShareAlt,
  FaUser,
  FaPhoneAlt,
  FaChevronRight,
} from "react-icons/fa";
import {
  daftarBerita,
  getBeritaById,
  getBeritaTerkait,
  kategoriBerita,
} from "../data/berita";
import { KategoriBadge } from "../components/gov";
import { Reveal } from "../components/motion";

function BeritaCard({ berita, onBuka }) {
  return (
    <button
      type="button"
      onClick={() => onBuka(berita.id)}
      aria-label={`Baca berita: ${berita.judul}`}
      className="gov-card lift zoom-img group h-full overflow-hidden text-left hover:border-gov-800"
    >
      <span className="block overflow-hidden">
        <img
          src={berita.gambar}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-48 w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </span>
      <span className="block p-5">
        <span className="flex flex-wrap items-center gap-2">
          <KategoriBadge kategori={berita.kategori} />
        </span>
        <span className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-medium text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <FaCalendarAlt aria-hidden="true" className="text-orange-700" />
            {berita.tanggal}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FaMapMarkerAlt aria-hidden="true" className="text-orange-700" />
            {berita.lokasi}
          </span>
        </span>
        <span className="mt-2 line-clamp-2 block text-[17px] font-bold leading-snug text-gov-900 group-hover:underline group-hover:decoration-orange-300 group-hover:underline-offset-4">
          {berita.judul}
        </span>
        <span className="mt-2 line-clamp-2 block text-[14px] leading-6 text-slate-600">
          {berita.ringkasan}
        </span>
        <span className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3.5">
          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500">
            <FaUser aria-hidden="true" />
            {berita.penulis}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-700">
            Baca <FaArrowRight aria-hidden="true" className="text-xs" />
          </span>
        </span>
      </span>
    </button>
  );
}

function BeritaDetail({ id, onKembali, onBuka }) {
  const berita = getBeritaById(id);
  const terkait = getBeritaTerkait(id, 3);

  if (!berita) {
    return (
      <div className="mx-auto max-w-2xl py-14 text-center">
        <h2 className="text-2xl font-extrabold text-gov-900">Berita tidak ditemukan</h2>
        <p className="mt-2 text-slate-600">
          Tautan mungkin sudah berubah. Silakan kembali ke daftar berita.
        </p>
        <button
          type="button"
          onClick={onKembali}
          className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-xl bg-gov-900 px-6 py-3 text-sm font-bold text-white hover:bg-gov-800"
        >
          <FaArrowLeft aria-hidden="true" className="text-xs" /> Kembali ke daftar
        </button>
      </div>
    );
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: berita.judul,
          text: berita.ringkasan,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Tautan berita disalin!");
      }
    } catch {
      /* dibatalkan */
    }
  };

  return (
    <div className="page-in mx-auto max-w-3xl">
      <button
        type="button"
        onClick={onKembali}
        className="group inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:-translate-x-0.5 hover:bg-slate-100 active:translate-x-0"
      >
        <FaArrowLeft aria-hidden="true" className="text-xs transition-transform group-hover:-translate-x-0.5" />
        Semua berita
      </button>

      <div className="mt-6">
        <KategoriBadge kategori={berita.kategori} />
      </div>
      <h1 className="gov-title text-3xl sm:text-4xl">{berita.judul}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-slate-200 py-4 text-[14px] text-slate-600">
        <span className="inline-flex items-center gap-1.5">
          <FaUser aria-hidden="true" className="text-orange-700" /> {berita.penulis}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FaCalendarAlt aria-hidden="true" className="text-orange-700" /> {berita.tanggal}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FaMapMarkerAlt aria-hidden="true" className="text-orange-700" /> {berita.lokasi}
        </span>
        <button
          type="button"
          onClick={handleShare}
          className="ml-auto inline-flex min-h-10 items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-[13px] font-bold text-slate-700 transition hover:bg-slate-200 active:scale-95"
        >
          <FaShareAlt aria-hidden="true" /> Bagikan
        </button>
      </div>

      <figure className="gov-card zoom-img mt-6 overflow-hidden">
        <img
          src={berita.gambar}
          alt={berita.judul}
          className="max-h-[440px] w-full object-cover"
        />
      </figure>

      <div className="mt-6 space-y-5">
        <p className="rounded-xl border-l-4 border-orange-600 bg-orange-50 px-5 py-4 text-[16px] font-medium leading-8 text-slate-800">
          {berita.ringkasan}
        </p>
        {berita.isi.map((p, i) => (
          <p key={i} className="text-[16px] leading-8 text-slate-700">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-9 flex flex-col gap-3 rounded-2xl bg-gradient-to-br from-gov-900 to-gov-700 p-6 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-slate-300">
            Kondisi darurat?
          </p>
          <p className="mt-1 text-xl font-extrabold">
            Hubungi 115 — siaga 24 jam, gratis.
          </p>
        </div>
        <a
          href="tel:115"
          className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-[15px] font-extrabold text-gov-900 transition hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0"
        >
          <FaPhoneAlt aria-hidden="true" /> Hubungi 115
        </a>
      </div>

      <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-gov-900">
        Berita terkait
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {terkait.map((t, i) => (
          <Reveal key={t.id} delay={i * 80}>
            <BeritaCard berita={t} onBuka={onBuka} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function BeritaPage({ onHome }) {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [kataKunci, setKataKunci] = useState("");
  const [beritaAktifId, setBeritaAktifId] = useState(null);
  const [jumlahTampil, setJumlahTampil] = useState(6);

  const hasilFilter = useMemo(() => {
    const keyword = kataKunci.trim().toLowerCase();
    return daftarBerita
      .filter((b) => (kategoriAktif === "Semua" ? true : b.kategori === kategoriAktif))
      .filter((b) =>
        keyword === ""
          ? true
          : `${b.judul} ${b.ringkasan} ${b.lokasi}`.toLowerCase().includes(keyword)
      )
      .sort((a, b) => (a.tanggalSort < b.tanggalSort ? 1 : -1));
  }, [kategoriAktif, kataKunci]);

  const beritaUtama = hasilFilter[0];
  const sisaBerita = hasilFilter.slice(1, 1 + jumlahTampil);

  const bukaBerita = (id) => {
    setBeritaAktifId(id);
    window.scrollTo({ top: 0 });
  };
  const kembaliKeDaftar = () => {
    setBeritaAktifId(null);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="bg-white">
      {/* Kepala halaman terang */}
      <div className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute -top-20 right-[-4rem] h-64 w-64 rounded-full bg-orange-100 blur-3xl" />
        </div>
        <div className="gov-container relative py-10">
          <nav aria-label="Jalur navigasi" className="flex items-center gap-1.5 text-[13.5px] font-medium text-slate-500">
            <button
              type="button"
              onClick={onHome}
              className="rounded px-1 py-1 underline-offset-4 hover:text-gov-900 hover:underline"
            >
              Beranda
            </button>
            <FaChevronRight aria-hidden="true" className="text-[10px]" />
            <span aria-current="page" className="text-slate-800">Berita</span>
          </nav>
          <p className="gov-eyebrow mt-4">
            <FaNewspaper aria-hidden="true" /> Kabar resmi
          </p>
          <h1 className="gov-title text-4xl sm:text-5xl">Berita & informasi</h1>
          <p className="gov-desc">
            Operasi SAR, siaga wisata, pelatihan personel, dan kerja sama
            Kantor SAR Banyuwangi — ditulis ringkas dan mudah dibaca.
          </p>

          {!beritaAktifId && (
            <form
              role="search"
              aria-label="Pencarian berita"
              className="mt-6 max-w-xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="cari-berita" className="text-sm font-bold text-gov-900">
                Cari berita
              </label>
              <span className="mt-2 flex items-center gap-2 rounded-xl border border-slate-300 bg-white p-2 pl-4 transition focus-within:border-gov-800 focus-within:shadow-lg focus-within:ring-2 focus-within:ring-blue-600">
                <FaSearch aria-hidden="true" className="shrink-0 text-slate-400" />
                <input
                  id="cari-berita"
                  type="search"
                  value={kataKunci}
                  onChange={(e) => {
                    setKataKunci(e.target.value);
                    setBeritaAktifId(null);
                  }}
                  placeholder="Contoh: nelayan, Ijen, latihan…"
                  className="h-11 w-full bg-transparent text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                {kataKunci && (
                  <button
                    type="button"
                    onClick={() => setKataKunci("")}
                    className="mr-1 shrink-0 rounded-lg bg-slate-100 px-4 py-2 text-[13px] font-bold text-slate-700 hover:bg-slate-200"
                  >
                    Hapus
                  </button>
                )}
              </span>
            </form>
          )}
        </div>
      </div>

      <div className="gov-container py-10">
        {beritaAktifId ? (
          <BeritaDetail id={beritaAktifId} onKembali={kembaliKeDaftar} onBuka={bukaBerita} />
        ) : (
          <>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori berita">
              {kategoriBerita.map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => {
                    setKategoriAktif(k);
                    setJumlahTampil(6);
                  }}
                  aria-pressed={kategoriAktif === k}
                  className={`min-h-11 rounded-full px-5 py-2.5 text-sm font-bold transition active:scale-95 ${
                    kategoriAktif === k
                      ? "bg-gov-900 text-white shadow-lg"
                      : "border border-slate-300 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-gov-800 hover:text-gov-900 hover:shadow-md"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>

            <p className="mt-4 text-[14.5px] text-slate-600" aria-live="polite">
              Menampilkan <strong className="text-gov-900">{hasilFilter.length}</strong> berita
              {kategoriAktif !== "Semua" && (
                <>
                  {" "}kategori <strong className="text-orange-700">{kategoriAktif}</strong>
                </>
              )}
            </p>

            {hasilFilter.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
                <span className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl bg-white p-3.5 text-xl text-slate-400" aria-hidden="true">
                  <FaSearch />
                </span>
                <h2 className="mt-4 text-xl font-extrabold text-gov-900">Tidak ada hasil</h2>
                <p className="mx-auto mt-2 max-w-md text-[15px] text-slate-600">
                  Coba kata kunci lain atau pilih kategori berbeda.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setKataKunci("");
                    setKategoriAktif("Semua");
                  }}
                  className="mt-5 inline-flex min-h-12 items-center rounded-xl bg-gov-900 px-6 py-3 text-sm font-bold text-white hover:bg-gov-800"
                >
                  Tampilkan semua berita
                </button>
              </div>
            ) : (
              <>
                {beritaUtama && (
                  <Reveal>
                  <button
                    type="button"
                    onClick={() => bukaBerita(beritaUtama.id)}
                    aria-label={`Baca berita utama: ${beritaUtama.judul}`}
                    className="gov-card lift zoom-img group mt-7 grid w-full overflow-hidden text-left hover:border-gov-800 lg:grid-cols-2"
                  >
                    <span className="block overflow-hidden">
                    <img
                      src={beritaUtama.gambar}
                      alt=""
                      aria-hidden="true"
                      className="h-64 w-full object-cover lg:h-full lg:min-h-[340px]"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    </span>
                    <span className="flex flex-col justify-center p-7 sm:p-9">
                      <span className="flex flex-wrap items-center gap-2">
                        <KategoriBadge kategori={beritaUtama.kategori} />
                        <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
                          Terbaru
                        </span>
                      </span>
                      <span className="mt-3 block text-2xl font-extrabold leading-tight tracking-tight text-gov-900 group-hover:underline group-hover:decoration-orange-300 group-hover:underline-offset-4 sm:text-[28px]">
                        {beritaUtama.judul}
                      </span>
                      <span className="mt-3 block text-[15px] leading-7 text-slate-600">
                        {beritaUtama.ringkasan}
                      </span>
                      <span className="mt-3 flex items-center gap-3 text-[13px] font-medium text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <FaCalendarAlt aria-hidden="true" className="text-orange-700" />
                          {beritaUtama.tanggal}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <FaMapMarkerAlt aria-hidden="true" className="text-orange-700" />
                          {beritaUtama.lokasi}
                        </span>
                      </span>
                      <span className="mt-5 inline-flex min-h-12 w-fit items-center gap-2 rounded-xl bg-gov-900 px-5 py-3 text-sm font-bold text-white transition group-hover:bg-gov-800">
                        Baca selengkapnya <FaArrowRight aria-hidden="true" className="text-xs transition-transform group-hover:translate-x-1" />
                      </span>
                    </span>
                  </button>
                  </Reveal>
                )}

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {sisaBerita.map((b, i) => (
                    <Reveal key={b.id} delay={Math.min(i % 3, 2) * 80}>
                      <BeritaCard berita={b} onBuka={bukaBerita} />
                    </Reveal>
                  ))}
                </div>

                {hasilFilter.length - 1 > sisaBerita.length && (
                  <div className="mt-9 text-center">
                    <button
                      type="button"
                      onClick={() => setJumlahTampil((v) => v + 6)}
                      className="inline-flex min-h-12 items-center rounded-xl border border-slate-300 bg-white px-7 py-3 text-sm font-bold text-gov-900 transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md active:translate-y-0"
                    >
                      Muat {hasilFilter.length - 1 - sisaBerita.length} berita lainnya
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
