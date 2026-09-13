import { useEffect, useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaBroadcastTower,
  FaBuilding,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaCalendarAlt,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaUsers,
  FaMapMarkedAlt,
  FaTools,
  FaNewspaper,
  FaChevronRight,
  FaChevronLeft,
  FaClock,
  FaTimes,
  FaExpand,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import BeritaPage from "./pages/BeritaPage";
import { daftarBerita } from "./data/berita";
import { SkipLink, SectionHeading, SiteFooter } from "./components/gov";
import {
  Reveal,
  CountUp,
  ScrollProgress,
  BackToTop,
  InfoTicker,
} from "./components/motion";

/* ================= DATA (dipertahankan) ================= */

const wilayahKerja = {
  luas: "100.960,31 km²",
  penduduk: "8.482.839 Jiwa",
  kabupaten: [
    "Kabupaten Probolinggo",
    "Kota Probolinggo",
    "Kabupaten Lumajang",
    "Kabupaten Jember",
    "Kabupaten Bondowoso",
    "Kabupaten Situbondo",
    "Kabupaten Banyuwangi",
  ],
  batas: {
    utara: "Selat Madura, Kantor SAR Surabaya",
    timur: "Selat Bali, Kantor SAR Denpasar",
    selatan: "Australian Maritime Safety Authority (AMSA)",
    barat: "Kab. Pasuruan, Kab. Malang, Kantor SAR Surabaya",
  },
  koordinat: {
    kantor: "08°8'44.51\"S 114°24'1.46\"T",
    posJember: "08°7'40.20\"S 113°44'38.66\"T",
  },
};

const fasilitas = {
  kendaraan: [
    "Rescue Carrier Vehicle",
    "Rescuer Car Type 2",
    "Rescue Truck Personel",
    "Rescue Car Type 1",
    "Rescue Beach Patrol",
    "Motor Trail",
  ],
  kendaraanAir: ["Rescue Boat", "Rubber Boat", "Jet Ski SAR", "Kapal Patroli"],
  komunikasi: [
    "Starlink Satelite Backbone",
    "Radio HF Base dan Manpack",
    "Radio VHF Base, Mobile dan Handheld",
    "Repeater Portable",
  ],
  medis: [
    "Ruang Medis",
    "Emergency Kit",
    "Medical Check Up Kit",
    "LSB, KED & Neck Collar",
  ],
  lainnya: ["UAV 52 - Drone Thermal"],
};

const daftarWisata = [
  { name: "Kawah Ijen", image: "/ijen.jpg" },
  { name: "Pantai Pulau Merah", image: "/pm.jpg" },
  { name: "Taman Nasional Alas Purwo", image: "/alaspurwo.jpg" },
  { name: "Pantai Plengkung", image: "/plengkung.jpeg" },
  { name: "De Djawatan", image: "/jawatan.jpg" },
  { name: "Pantai Boom", image: "/boom.jpg" },
  { name: "Teluk Hijau", image: "/telukhijau.jpg" },
  { name: "Pantai Sukamade", image: "/sukamade.jpg" },
  { name: "Taman Nasional Baluran", image: "/baluran.jpeg" },
  { name: "Pantai Watu Dodol", image: "/watudodol.jpg" },
  { name: "Green Island", image: "/gland.jpg" },
  { name: "Air Terjun Jagir", image: "/jagir.jpg" },
];

const galeriFasilitas = [
  {
    src: "/type1.jpg",
    label: "Kendaraan Darat",
    desc: "Mobilisasi tim operasi",
  },
  { src: "/widura.jpg", label: "Kendaraan Air", desc: "Operasi laut & selat" },
  { src: "/komunikasi.jpg", label: "Alat Komunikasi", desc: "Radio & satelit" },
  {
    src: "/drone.jpg",
    label: "Peralatan Khusus",
    desc: "Drone thermal UAV 52",
  },
];

const dokumentasiGaleri = [
  { src: "/OSAR1.jpg", kat: "Operasi SAR", judul: "Operasi Pencarian" },
  { src: "/OSAR2.jpeg", kat: "Operasi SAR", judul: "Operasi Pertolongan" },
  { src: "/OSAR3.jpg", kat: "Operasi SAR", judul: "Evakuasi Korban" },
  { src: "/OSAR4.jpg", kat: "Operasi SAR", judul: "Evakuasi Korban" },
  { src: "/PSAR1.jpeg", kat: "Pelatihan", judul: "Latihan Dasar SAR" },
  { src: "/PSAR2.jpeg", kat: "Pelatihan", judul: "Latihan Kesiapsiagaan" },
  { src: "/PSAR3.jpg", kat: "Pelatihan", judul: "Simulasi Operasi" },
  { src: "/PSAR4.jpg", kat: "Pelatihan", judul: "Latihan Kesiapsiagaan" },
  { src: "/ksar1.jpg", kat: "Kerja Sama", judul: "Koordinasi dengan TNI" },
  { src: "/ksar2.jpg", kat: "Kerja Sama", judul: "Koordinasi dengan Polri" },
  { src: "/ksar3.jpg", kat: "Kerja Sama", judul: "Koordinasi Masyarakat" },
  { src: "/ksar4.jpg", kat: "Kerja Sama", judul: "Koordinasi BASARNAS Pusat" },
];

/* ================= APP ================= */

function App() {
  const [currentPage, setCurrentPage] = useState("beranda");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [copied, setCopied] = useState("");
  const wisataRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lightbox: tutup dengan Escape + kunci scroll */
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const goToBerita = () => {
    setCurrentPage("berita");
    setMobileOpen(false);
    window.scrollTo({ top: 0 });
  };
  const goBeranda = () => {
    setCurrentPage("beranda");
    setMobileOpen(false);
    window.scrollTo({ top: 0 });
  };
  const goToSection = (href) => {
    setMobileOpen(false);
    if (currentPage !== "beranda") {
      setCurrentPage("beranda");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollWisata = (dir) => {
    wisataRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const salin = async (teks, kunci) => {
    try {
      await navigator.clipboard.writeText(teks);
      setCopied(kunci);
      setTimeout(() => setCopied(""), 1800);
    } catch {
      /* clipboard tidak tersedia */
    }
  };

  const navItems = [
    { label: "Beranda", href: "#beranda", type: "section" },
    { label: "Profil", href: "#profil", type: "section" },
    { label: "Wilayah Kerja", href: "#wilayah-kerja", type: "section" },
    { label: "Fasilitas", href: "#fasilitas", type: "section" },
    { label: "Berita", href: "berita", type: "page" },
    { label: "Kontak", href: "#kontak-darurat", type: "section" },
    { label: "Dokumentasi", href: "#dokumentasi", type: "section" },
  ];

  const beritaTerbaru = [...daftarBerita]
    .sort((a, b) => (a.tanggalSort < b.tanggalSort ? 1 : -1))
    .slice(0, 3);

  const totalFasilitas =
    fasilitas.kendaraan.length +
    fasilitas.kendaraanAir.length +
    fasilitas.komunikasi.length +
    fasilitas.medis.length +
    fasilitas.lainnya.length;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SkipLink />
      <ScrollProgress />

      {/* ===== Header dinamis ===== */}
      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled
            ? "border-slate-200 shadow-[0_6px_24px_-12px_rgb(14_42_71/0.25)]"
            : "border-transparent"
        }`}
      >
        <div
          className={`gov-container flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "h-16" : "h-[72px]"}`}
        >
          <button
            type="button"
            onClick={goBeranda}
            className="group flex min-h-11 items-center gap-3 rounded-lg text-left"
            aria-label="Ke beranda BASARNAS Banyuwangi"
          >
            <span
              className="flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-[1.03]"
              aria-hidden="true"
            >
              <img src="/sar1.png" alt="" className="h-10 w-auto" />
              <img src="/sar2.png" alt="" className="h-10 w-auto" />
              <img src="/sar3.png" alt="" className="h-10 w-auto" />
            </span>
            <span>
              <span className="block text-[15px] font-extrabold leading-tight tracking-tight text-gov-900">
                BASARNAS Banyuwangi
              </span>
              <span className="block text-xs font-medium text-slate-500">
                Portal Resmi • Pencarian & Pertolongan
              </span>
            </span>
          </button>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Navigasi utama"
          >
            {navItems.map((item) =>
              item.type === "page" ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={goToBerita}
                  aria-current={currentPage === "berita" ? "page" : undefined}
                  className={`relative rounded-lg px-3.5 py-2.5 text-[14.5px] font-semibold transition hover:bg-slate-100 ${
                    currentPage === "berita"
                      ? "bg-orange-50 text-orange-800"
                      : "text-slate-700 hover:text-gov-900"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-orange-600 transition-all duration-300 ${
                      currentPage === "berita" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => goToSection(item.href)}
                  className="rounded-lg px-3.5 py-2.5 text-[14.5px] font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-gov-900 active:scale-95"
                >
                  {item.label}
                </button>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:115"
              className="btn-sheen hidden min-h-11 items-center gap-2 rounded-xl bg-red-700 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-lg sm:inline-flex"
            >
              <FaPhoneAlt aria-hidden="true" className="text-xs" />
              115 Darurat
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="menu-seluler"
              aria-label={
                mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
              }
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-lg text-slate-700 transition hover:bg-slate-100 active:scale-95 lg:hidden"
            >
              <span
                aria-hidden="true"
                className="transition-transform duration-300"
                style={{ transform: mobileOpen ? "rotate(90deg)" : "none" }}
              >
                {mobileOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            id="menu-seluler"
            className="page-in border-t border-slate-200 bg-white lg:hidden"
          >
            <nav
              className="gov-container flex flex-col gap-1 py-3"
              aria-label="Navigasi seluler"
            >
              {navItems.map((item) =>
                item.type === "page" ? (
                  <button
                    key={item.label}
                    type="button"
                    onClick={goToBerita}
                    aria-current={currentPage === "berita" ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-bold transition active:scale-[0.99] ${
                      currentPage === "berita"
                        ? "bg-orange-50 text-orange-800"
                        : "text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                    <FaChevronRight
                      aria-hidden="true"
                      className="text-xs text-slate-400"
                    />
                  </button>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => goToSection(item.href)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-semibold text-slate-800 transition hover:bg-slate-100 active:scale-[0.99]"
                  >
                    {item.label}
                    <FaChevronRight
                      aria-hidden="true"
                      className="text-xs text-slate-400"
                    />
                  </button>
                ),
              )}
              <a
                href="tel:115"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-red-700 px-4 py-3.5 text-[15px] font-bold text-white transition active:scale-[0.99]"
              >
                <FaPhoneAlt aria-hidden="true" /> Hubungi Darurat 115
              </a>
            </nav>
          </div>
        )}
      </header>

      {currentPage === "berita" ? (
        <main id="konten-utama" key="berita" className="page-in">
          <BeritaPage onHome={goBeranda} />
        </main>
      ) : (
        <main id="konten-utama" key="beranda" className="page-in">
          {/* ===== Hero dinamis ===== */}
          <section
            id="beranda"
            aria-labelledby="judul-hero"
            className="relative scroll-mt-24 overflow-hidden bg-white"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="animate-blob absolute -top-24 right-[-6rem] h-80 w-80 rounded-full bg-orange-100 blur-3xl" />
              <div
                className="animate-blob absolute bottom-[-7rem] left-[-5rem] h-72 w-72 rounded-full bg-gov-50 blur-3xl"
                style={{ animationDelay: "-4s" }}
              />
            </div>
            <div className="gov-container relative grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
              <Reveal>
                <nav
                  aria-label="Jalur navigasi"
                  className="text-[13px] font-medium text-slate-500"
                >
                  Beranda <span aria-hidden="true">/</span>{" "}
                  <span className="text-slate-800">Portal Resmi</span>
                </nav>
                <p className="gov-eyebrow mt-4">
                  <span
                    className="relative flex h-2.5 w-2.5"
                    aria-hidden="true"
                  >
                    <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  </span>
                  Kantor SAR Kelas B Banyuwangi • Siaga 24/7
                </p>
                <h1 id="judul-hero" className="gov-title text-4xl sm:text-5xl">
                  Keselamatan masyarakat,{" "}
                  <span className="text-orange-700 underline decoration-orange-200 decoration-8 underline-offset-4">
                    tanggung jawab kami.
                  </span>
                </h1>
                <p className="gov-desc">
                  Portal resmi Kantor Pencarian dan Pertolongan Banyuwangi.
                  Akses informasi profil, wilayah kerja, fasilitas, berita, dan
                  kontak darurat dengan tampilan yang sederhana dan mudah dibaca
                  semua orang.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => goToSection("#profil")}
                    className="group inline-flex min-h-12 items-center gap-2 rounded-xl bg-gov-900 px-6 py-3 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-gov-800 hover:shadow-xl active:translate-y-0"
                  >
                    Jelajahi Profil
                    <FaArrowRight
                      aria-hidden="true"
                      className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                  <a
                    href="tel:115"
                    className="inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-red-700 px-6 py-3 text-[15px] font-bold text-red-800 transition hover:-translate-y-0.5 hover:bg-red-50 hover:shadow-lg active:translate-y-0"
                  >
                    <FaPhoneAlt aria-hidden="true" className="text-sm" />
                    Hubungi 115
                  </a>
                  <button
                    type="button"
                    onClick={goToBerita}
                    className="group inline-flex min-h-12 items-center gap-2 rounded-xl px-4 py-3 text-[15px] font-bold text-gov-800 underline decoration-slate-300 decoration-2 underline-offset-8 transition hover:decoration-gov-800"
                  >
                    Lihat Berita
                    <FaArrowRight
                      aria-hidden="true"
                      className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>

                <dl className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {
                      icon: FaMapMarkedAlt,
                      angka: 7,
                      suffix: "",
                      label: "Kab / Kota",
                    },
                    {
                      icon: FaUsers,
                      angka: 8.4,
                      suffix: " Jt",
                      label: "Jiwa terlayani",
                      desimal: true,
                    },
                    {
                      icon: FaTools,
                      angka: totalFasilitas,
                      suffix: "",
                      label: "Unit sarana",
                    },
                    {
                      icon: FaClock,
                      angka: null,
                      teks: "24/7",
                      label: "Siaga darurat",
                    },
                  ].map((s) => (
                    <div key={s.label} className="gov-card lift p-4">
                      <s.icon
                        aria-hidden="true"
                        className="text-lg text-orange-700"
                      />
                      <dd className="mt-2 text-2xl font-extrabold tracking-tight text-gov-900">
                        {s.angka !== null ? (
                          s.desimal ? (
                            <>
                              {String(s.angka).replace(".", ",")}
                              {s.suffix}
                            </>
                          ) : (
                            <CountUp to={s.angka} suffix={s.suffix} />
                          )
                        ) : (
                          s.teks
                        )}
                      </dd>
                      <dt className="mt-0.5 text-[13px] font-medium text-slate-500">
                        {s.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={120}>
                <figure className="gov-card zoom-img group overflow-hidden">
                  <div className="relative">
                    <img
                      src="/hero.png"
                      alt="Tim BASARNAS Banyuwangi dalam kegiatan operasi pencarian dan pertolongan"
                      className="h-72 w-full object-cover sm:h-80"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({
                          src: "/hero.png",
                          judul: "Tim rescue dalam kesiapsiagaan operasi",
                        })
                      }
                      aria-label="Perbesar foto tim rescue"
                      className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur transition group-hover:opacity-100 focus:opacity-100"
                    >
                      <FaExpand aria-hidden="true" className="text-sm" />
                    </button>
                  </div>
                  <figcaption className="flex items-center justify-between gap-3 border-t border-slate-200 px-5 py-3.5 text-[13.5px]">
                    <span className="font-semibold text-slate-700">
                      Tim rescue dalam kesiapsiagaan operasi
                    </span>
                    <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      <span
                        className="relative flex h-2 w-2"
                        aria-hidden="true"
                      >
                        <span className="animate-ping-soft absolute h-full w-full rounded-full bg-emerald-500" />
                        <span className="relative h-2 w-2 rounded-full bg-emerald-600" />
                      </span>
                      Aktif
                    </span>
                  </figcaption>
                </figure>
                <div className="animate-float-soft mt-4 flex items-center gap-4 rounded-2xl border-2 border-red-200 bg-red-50 p-5">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-700 text-lg text-white"
                    aria-hidden="true"
                  >
                    <FaPhoneAlt />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-wide text-red-800">
                      Kondisi darurat?
                    </p>
                    <p className="text-[15px] font-medium text-slate-700">
                      Telepon{" "}
                      <a
                        href="tel:115"
                        className="font-extrabold text-red-800 underline"
                      >
                        115
                      </a>{" "}
                      — gratis, 24 jam, tanpa pulsa.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <InfoTicker
            items={[
              "Darurat? Telepon 115 — gratis 24 jam",
              "Siaga wisata: Ijen • Pulau Merah • Sukamade",
              "Frekuensi radio 13.542,5 MHz",
              "WhatsApp pengaduan 0811 3333 115",
              "Waspadai cuaca sebelum melaut",
            ]}
          />

          {/* ===== Layanan cepat ===== */}
          <section
            aria-labelledby="judul-layanan"
            className="border-b border-slate-200 bg-slate-50"
          >
            <div className="gov-container py-12">
              <Reveal>
                <SectionHeading
                  eyebrow="Akses Cepat"
                  title="Layanan informasi utama"
                  desc="Empat pintu masuk utama untuk menemukan informasi yang Anda butuhkan dengan cepat."
                />
              </Reveal>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    no: "01",
                    icon: FaShieldAlt,
                    title: "Profil Kantor",
                    desc: "Tugas, fungsi, dan peran KPP Banyuwangi.",
                    href: "#profil",
                  },
                  {
                    no: "02",
                    icon: FaMapMarkedAlt,
                    title: "Wilayah Kerja",
                    desc: "7 kabupaten/kota dan batas operasi.",
                    href: "#wilayah-kerja",
                  },
                  {
                    no: "03",
                    icon: FaTools,
                    title: "Fasilitas",
                    desc: `${totalFasilitas} unit sarana pendukung operasi.`,
                    href: "#fasilitas",
                  },
                  {
                    no: "04",
                    icon: FaNewspaper,
                    title: "Berita",
                    desc: "Kabar operasi, pelatihan, dan siaga.",
                    href: "berita",
                  },
                ].map((l, i) => (
                  <Reveal key={l.no} delay={i * 90}>
                    <button
                      type="button"
                      onClick={() =>
                        l.href === "berita" ? goToBerita() : goToSection(l.href)
                      }
                      className="gov-card lift group h-full w-full p-5 text-left hover:border-gov-800"
                    >
                      <span className="flex items-center justify-between">
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-xl bg-gov-50 text-lg text-gov-800 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                          aria-hidden="true"
                        >
                          <l.icon />
                        </span>
                        <span className="text-sm font-extrabold text-slate-300">
                          {l.no}
                        </span>
                      </span>
                      <span className="mt-4 block text-[16px] font-bold text-gov-900">
                        {l.title}
                      </span>
                      <span className="mt-1 block text-[14px] leading-6 text-slate-600">
                        {l.desc}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-orange-700">
                        Buka{" "}
                        <FaArrowRight
                          aria-hidden="true"
                          className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ===== Profil ===== */}
          <section
            id="profil"
            aria-labelledby="judul-profil"
            className="scroll-mt-24 bg-white"
          >
            <div className="gov-container grid gap-10 py-14 lg:grid-cols-2 lg:py-20">
              <Reveal>
                <figure className="gov-card zoom-img overflow-hidden self-start">
                  <img
                    src="/sar5.jpg"
                    alt="Gedung dan personel Kantor Pencarian dan Pertolongan Banyuwangi"
                    className="h-80 w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="border-t border-slate-200 bg-slate-50 px-6 py-4">
                    <p className="text-sm font-bold text-gov-900">
                      KPP Banyuwangi — Kelas B
                    </p>
                    <p className="text-sm text-slate-600">
                      Menyelenggarakan operasi SAR, kesiapsiagaan, koordinasi,
                      dan pembinaan potensi.
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={120}>
                <SectionHeading
                  eyebrow="Tentang Kami"
                  title="Melayani dengan siaga, cepat, dan tepat"
                  desc="Kantor Pencarian dan Pertolongan Banyuwangi adalah unit pelaksana teknis BASARNAS yang menaungi Pos SAR Jember serta berkoordinasi dengan TNI, Polri, pemerintah daerah, BPBD, PMI, relawan, dan masyarakat."
                />
                <ul className="mt-6 space-y-3">
                  {[
                    "Operasi pencarian dan pertolongan darat, laut, dan udara",
                    "Kesiapsiagaan personel dan sarana 24 jam setiap hari",
                    "Koordinasi lintas instansi yang terpadu dan inklusif",
                    "Pembinaan potensi SAR bersama relawan dan masyarakat",
                  ].map((t, i) => (
                    <Reveal key={t} delay={i * 80}>
                      <li className="flex gap-3 rounded-xl border border-transparent p-2 text-[15px] font-medium text-slate-700 transition hover:border-slate-200 hover:bg-slate-50">
                        <FaCheckCircle
                          aria-hidden="true"
                          className="mt-1.5 shrink-0 text-emerald-700"
                        />
                        {t}
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-gov-900 to-gov-700 px-5 py-4 text-white shadow-lg">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Prinsip kerja
                    </p>
                    <p className="mt-1 text-lg font-extrabold">
                      Siaga • Cepat • Tepat
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => goToSection("#wilayah-kerja")}
                    className="group inline-flex min-h-12 items-center gap-2 self-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-gov-900 transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md"
                  >
                    Lihat wilayah kerja{" "}
                    <FaArrowRight
                      aria-hidden="true"
                      className="text-xs transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ===== Wilayah Kerja ===== */}
          <section
            id="wilayah-kerja"
            aria-labelledby="judul-wilayah"
            className="scroll-mt-24 border-y border-slate-200 bg-white"
          >
            <div className="gov-container py-16 lg:py-24">
              {/* Header */}
              <Reveal>
                <SectionHeading
                  eyebrow="Wilayah Operasi"
                  title="Cakupan wilayah kerja"
                  desc="Operasi pencarian dan pertolongan mencakup 6 kabupaten dan 1 kota di wilayah kerja Kantor SAR Banyuwangi."
                />
              </Reveal>

              {/* Main Information */}
              <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
                {/* Map */}
                <Reveal className="lg:col-span-7">
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: "/wilayah.png",
                        judul: "Peta Wilayah Kerja Kantor SAR Banyuwangi",
                      })
                    }
                    aria-label="Perbesar gambar: peta wilayah kerja"
                    className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left"
                  >
                    <img
                      src="/wilayah.png"
                      alt="Peta wilayah kerja Kantor SAR Banyuwangi"
                      className="h-auto max-h-[560px] w-full object-contain transition duration-500 group-hover:scale-[1.015]"
                      loading="lazy"
                    />

                    <span
                      className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-sm backdrop-blur transition group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <FaExpand className="text-xs" />
                    </span>
                  </button>
                </Reveal>

                {/* Data */}
                <Reveal delay={100} className="lg:col-span-5">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-orange-700">
                      Data wilayah
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-gov-900">
                      Wilayah kerja dalam angka
                    </h3>

                    {/* Statistics */}
                    <div className="mt-7 grid grid-cols-2 gap-x-6 border-y border-slate-200 py-5">
                      <div>
                        <p className="text-sm text-slate-500">Luas wilayah</p>
                        <p className="mt-1 text-2xl font-extrabold text-gov-900">
                          {wilayahKerja.luas}
                        </p>
                      </div>

                      <div className="border-l border-slate-200 pl-6">
                        <p className="text-sm text-slate-500">Penduduk</p>
                        <p className="mt-1 text-2xl font-extrabold text-gov-900">
                          {wilayahKerja.penduduk}
                        </p>
                      </div>
                    </div>

                    {/* Kabupaten */}
                    <div className="mt-7">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-gov-900">
                          Kabupaten / Kota
                        </h4>

                        <span className="text-xs font-semibold text-slate-400">
                          7 wilayah
                        </span>
                      </div>

                      <ul
                        className="mt-4 flex flex-wrap gap-2"
                        aria-label="Daftar kabupaten dan kota"
                      >
                        {wilayahKerja.kabupaten.map((k) => (
                          <li
                            key={k}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-[13px] font-medium text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-800"
                          >
                            {k}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Boundaries */}
              <Reveal delay={120}>
                <div className="mt-16 border-t border-slate-200 pt-10">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-orange-700">
                        Batas Wilayah
                      </p>
                      <h3 className="mt-1 text-xl font-extrabold text-gov-900">
                        Batas wilayah kerja
                      </h3>
                    </div>

                    <p className="text-sm text-slate-500">
                      Kantor SAR Banyuwangi
                    </p>
                  </div>

                  <div className="mt-6 grid divide-y divide-slate-200 border-y border-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                    {[
                      { label: "Utara", value: wilayahKerja.batas.utara },
                      { label: "Timur", value: wilayahKerja.batas.timur },
                      { label: "Selatan", value: wilayahKerja.batas.selatan },
                      { label: "Barat", value: wilayahKerja.batas.barat },
                    ].map((b, index) => (
                      <div
                        key={b.label}
                        className={`p-5 ${
                          index >= 2 ? "sm:border-t sm:border-slate-200" : ""
                        }`}
                      >
                        <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
                          {b.label}
                        </p>
                        <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-700">
                          {b.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Coordinates */}
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-5 py-4">
                      <div>
                        <p className="text-xs text-slate-500">
                          Koordinat Kantor
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-800">
                          {wilayahKerja.koordinat.kantor}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-5 py-4">
                      <div>
                        <p className="text-xs text-slate-500">
                          Koordinat Pos Jember
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-800">
                          {wilayahKerja.koordinat.posJember}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Wisata */}
              <Reveal delay={160}>
                <div className="mt-20 border-t border-slate-200 pt-10">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-orange-700">
                        Area Siaga
                      </p>

                      <h3
                        id="judul-wisata"
                        className="mt-1 text-2xl font-extrabold tracking-tight text-gov-900"
                      >
                        Destinasi wisata
                      </h3>

                      <p className="mt-2 max-w-2xl text-[15px] leading-6 text-slate-500">
                        Beberapa destinasi wisata yang berada dalam area siaga
                        Kantor SAR Banyuwangi.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => scrollWisata(-1)}
                        aria-label="Geser daftar wisata ke kiri"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 active:scale-95"
                      >
                        <FaChevronLeft aria-hidden="true" />
                      </button>

                      <button
                        type="button"
                        onClick={() => scrollWisata(1)}
                        aria-label="Geser daftar wisata ke kanan"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 active:scale-95"
                      >
                        <FaChevronRight aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <ul
                    ref={wisataRef}
                    aria-labelledby="judul-wisata"
                    className="snap-row no-scrollbar -mx-6 mt-7 flex gap-5 overflow-x-auto px-6 pb-2"
                  >
                    {daftarWisata.map((w) => (
                      <li
                        key={w.name}
                        className="group w-64 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="overflow-hidden">
                          <img
                            src={w.image}
                            alt={`Destinasi wisata ${w.name}`}
                            className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>

                        <div className="p-4">
                          <p className="text-[15px] font-bold text-gov-900">
                            {w.name}
                          </p>

                          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                            <FaMapMarkerAlt
                              aria-hidden="true"
                              className="text-orange-700"
                            />
                            Area siaga SAR
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ===== Fasilitas ===== */}
          <section
            id="fasilitas"
            aria-labelledby="judul-fasilitas"
            className="scroll-mt-24 bg-white"
          >
            <div className="gov-container py-14 lg:py-20">
              <Reveal>
                <SectionHeading
                  eyebrow="Sarana & Prasarana"
                  title={`Fasilitas pendukung operasi (${totalFasilitas} unit)`}
                  desc="Sarana darat, laut, komunikasi, medis, dan peralatan khusus yang siap digerakkan kapan pun."
                />
              </Reveal>
              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                <div className="space-y-3">
                  {[
                    { title: "Kendaraan Darat", items: fasilitas.kendaraan },
                    { title: "Kendaraan Air", items: fasilitas.kendaraanAir },
                    { title: "Alat Komunikasi", items: fasilitas.komunikasi },
                    { title: "Peralatan Medis", items: fasilitas.medis },
                    { title: "Peralatan Khusus", items: fasilitas.lainnya },
                  ].map((k, i) => (
                    <Reveal key={k.title} delay={Math.min(i, 3) * 70}>
                      <div className="gov-card lift p-5 hover:border-orange-300">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-[16px] font-bold text-gov-900">
                            {k.title}
                          </h3>
                          <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-800">
                            {k.items.length} unit
                          </span>
                        </div>
                        <ul className="mt-3 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                          {k.items.map((it, j) => (
                            <li
                              key={it}
                              className="flex items-start gap-2 text-[14px] text-slate-700"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-gov-800"
                              >
                                {j + 1}
                              </span>
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={120}>
                  <div className="grid grid-cols-2 gap-3">
                    {galeriFasilitas.map((g) => (
                      <button
                        key={g.label}
                        type="button"
                        onClick={() =>
                          setLightbox({
                            src: g.src,
                            judul: `${g.label} — ${g.desc}`,
                          })
                        }
                        aria-label={`Perbesar foto ${g.label}`}
                        className="gov-card lift zoom-img group overflow-hidden text-left"
                      >
                        <span className="relative block">
                          <img
                            src={g.src}
                            alt={`${g.label} BASARNAS Banyuwangi`}
                            className="h-40 w-full object-cover sm:h-48"
                            loading="lazy"
                          />
                          <span
                            className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"
                            aria-hidden="true"
                          >
                            <FaExpand className="text-xs" />
                          </span>
                        </span>
                        <span className="block p-3.5">
                          <span className="block text-sm font-bold text-gov-900">
                            {g.label}
                          </span>
                          <span className="block text-[13px] text-slate-500">
                            {g.desc}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm font-medium text-emerald-900">
                    <FaCheckCircle
                      aria-hidden="true"
                      className="mr-1.5 inline"
                    />
                    Seluruh sarana dalam kondisi siap operasi dan diperiksa
                    berkala.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ===== Berita teaser ===== */}
          <section
            aria-labelledby="judul-berita"
            className="border-y border-slate-200 bg-slate-50"
          >
            <div className="gov-container py-14 lg:py-20">
              <Reveal>
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                  <SectionHeading
                    eyebrow="Kabar Terkini"
                    title="Berita terbaru"
                    desc="Operasi SAR, siaga wisata, pelatihan, dan kerja sama terbaru."
                  />
                  <button
                    type="button"
                    onClick={goToBerita}
                    className="group inline-flex min-h-12 w-fit shrink-0 items-center gap-2 rounded-xl bg-gov-900 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-gov-800 hover:shadow-xl"
                  >
                    Semua berita{" "}
                    <FaArrowRight
                      aria-hidden="true"
                      className="text-xs transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </Reveal>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {beritaTerbaru.map((b, i) => (
                  <Reveal key={b.id} delay={i * 90}>
                    <article className="gov-card lift zoom-img h-full overflow-hidden">
                      <img
                        src={b.gambar}
                        alt=""
                        aria-hidden="true"
                        className="h-48 w-full object-cover"
                        loading="lazy"
                      />
                      <div className="p-5">
                        <p className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500">
                          <FaCalendarAlt
                            aria-hidden="true"
                            className="text-orange-700"
                          />
                          <time>{b.tanggal}</time>
                          <span aria-hidden="true">•</span> {b.kategori}
                        </p>
                        <h3 className="mt-2 line-clamp-2 text-[17px] font-bold leading-snug text-gov-900">
                          {b.judul}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-[14px] leading-6 text-slate-600">
                          {b.ringkasan}
                        </p>
                        <button
                          type="button"
                          onClick={goToBerita}
                          aria-label={`Baca selengkapnya: ${b.judul}`}
                          className="group mt-4 inline-flex min-h-11 items-center gap-1.5 rounded-lg px-1 py-2 text-sm font-bold text-orange-700 underline decoration-orange-200 decoration-2 underline-offset-4 transition hover:decoration-orange-700"
                        >
                          Baca selengkapnya{" "}
                          <FaArrowRight
                            aria-hidden="true"
                            className="text-xs transition-transform group-hover:translate-x-1"
                          />
                        </button>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ===== Pita darurat ===== */}
          <section
            aria-labelledby="judul-darurat"
            className="relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-900 text-white"
          >
            <div
              aria-hidden="true"
              className="animate-blob pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />
            <div className="gov-container relative flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
              <Reveal>
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red-200">
                  <span
                    className="relative flex h-2.5 w-2.5"
                    aria-hidden="true"
                  >
                    <span className="animate-ping-soft absolute h-full w-full rounded-full bg-white" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                  Layanan Darurat 115 • Gratis • 24 Jam
                </p>
                <h2
                  id="judul-darurat"
                  className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl"
                >
                  Butuh pertolongan sekarang?
                </h2>
                <p className="mt-3 max-w-2xl text-[16px] leading-7 text-red-100">
                  Jangan ragu melapor. Petugas siaga menerima laporan
                  kecelakaan, orang hilang, dan kondisi membahayakan jiwa di
                  darat maupun laut.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:115"
                    className="btn-sheen inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-extrabold text-red-800 transition hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0"
                  >
                    <FaPhoneAlt aria-hidden="true" /> Hubungi 115
                  </a>
                  <a
                    href="https://wa.me/628113333115"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-white/70 px-6 py-3.5 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
                  >
                    <FaWhatsapp aria-hidden="true" /> WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ===== Kontak ===== */}
          <section
            id="kontak-darurat"
            aria-labelledby="judul-kontak"
            className="scroll-mt-24 bg-white"
          >
            <div className="gov-container py-14 lg:py-20">
              <Reveal>
                <SectionHeading
                  align="center"
                  eyebrow="Kontak Darurat"
                  title="Hubungi kanal resmi kami"
                  desc="Gunakan kanal resmi berikut untuk laporan darurat, informasi, dan pengaduan. Ketuk ikon salin untuk menyalin nomor."
                />
              </Reveal>
              <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Reveal>
                  <li className="h-full rounded-2xl border-2 border-red-200 bg-red-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-xl">
                    <span
                      className="mx-auto flex w-fit items-center justify-center rounded-2xl bg-red-700 p-3.5 text-xl text-white"
                      aria-hidden="true"
                    >
                      <FaPhoneAlt />
                    </span>
                    <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-slate-600">
                      Call Center
                    </h3>
                    <p className="mt-1 text-3xl font-extrabold text-red-800">
                      <a href="tel:115" className="transition hover:underline">
                        115
                      </a>
                    </p>
                    <p className="text-sm text-slate-600">24 jam • Gratis</p>
                  </li>
                </Reveal>
                {[
                  {
                    icon: FaWhatsapp,
                    title: "WhatsApp",
                    value: "0811 3333 115",
                    salinVal: "08113333115",
                    note: "Pengaduan & informasi",
                    href: "https://wa.me/628113333115",
                  },
                  {
                    icon: FaBroadcastTower,
                    title: "Frekuensi Radio",
                    value: "13.542,5 MHz",
                    salinVal: "13.542,5 MHz",
                    note: "VHF / HF",
                  },
                  {
                    icon: FaBuilding,
                    title: "Posko Siaga",
                    value: "0333 - 2815 115",
                    salinVal: "03332815115",
                    note: "24 jam",
                  },
                ].map((k, i) => (
                  <Reveal key={k.title} delay={(i + 1) * 80}>
                    <li className="gov-card lift h-full p-6 text-center">
                      <span
                        className="mx-auto flex w-fit items-center justify-center rounded-2xl bg-gov-50 p-3.5 text-xl text-gov-800"
                        aria-hidden="true"
                      >
                        <k.icon />
                      </span>
                      <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-slate-600">
                        {k.title}
                      </h3>
                      <p className="mt-1 text-lg font-extrabold text-gov-900">
                        {k.href ? (
                          <a
                            href={k.href}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            {k.value}
                          </a>
                        ) : (
                          k.value
                        )}
                      </p>
                      <p className="text-sm text-slate-500">{k.note}</p>
                      <button
                        type="button"
                        onClick={() => salin(k.salinVal, k.title)}
                        aria-label={`Salin ${k.title}: ${k.value}`}
                        className="mx-auto mt-3 inline-flex min-h-10 items-center gap-1.5 rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-200 active:scale-95"
                      >
                        {copied === k.title ? (
                          <>
                            <FaCheck
                              aria-hidden="true"
                              className="text-emerald-700"
                            />{" "}
                            Tersalin!
                          </>
                        ) : (
                          <>
                            <FaCopy aria-hidden="true" /> Salin
                          </>
                        )}
                      </button>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Reveal>
                  <div className="gov-card flex h-full gap-4 p-6">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl text-orange-700"
                      aria-hidden="true"
                    >
                      <FaMapMarkerAlt />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-orange-700">
                        Alamat kantor
                      </h3>
                      <p className="mt-1 font-bold text-slate-800">
                        Jl. Gatot Subroto No. 181 Ketapang, Banyuwangi
                      </p>
                      <p className="text-sm text-slate-500">
                        Banyuwangi, Jawa Timur, Indonesia
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div className="gov-card h-full p-6">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-orange-700">
                      Media sosial resmi
                    </h3>
                    <ul className="mt-3 grid grid-cols-1 gap-2.5 text-[14px] sm:grid-cols-2">
                      <li className="flex items-center gap-2.5 rounded-lg p-1.5 transition hover:bg-slate-50">
                        <FaInstagram
                          aria-hidden="true"
                          className="text-pink-700"
                        />{" "}
                        @kantorsar_banyuwangi
                      </li>
                      <li className="flex items-center gap-2.5 rounded-lg p-1.5 transition hover:bg-slate-50">
                        <FaFacebookF
                          aria-hidden="true"
                          className="text-blue-800"
                        />{" "}
                        Basarnas Bwi
                      </li>
                      <li className="flex items-center gap-2.5 rounded-lg p-1.5 transition hover:bg-slate-50">
                        <FaTwitter
                          aria-hidden="true"
                          className="text-slate-700"
                        />{" "}
                        Basarnas Banyuwangi
                      </li>
                      <li className="flex items-center gap-2.5 break-all rounded-lg p-1.5 transition hover:bg-slate-50">
                        <FaEnvelope
                          aria-hidden="true"
                          className="shrink-0 text-orange-700"
                        />{" "}
                        BasarnasBanyuwangi@gmail.com
                      </li>
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ===== Dokumentasi ===== */}
          <section
            id="dokumentasi"
            aria-labelledby="judul-dokumentasi"
            className="scroll-mt-24 border-t border-slate-200 bg-slate-50"
          >
            <div className="gov-container py-14 lg:py-20">
              <Reveal>
                <SectionHeading
                  align="center"
                  eyebrow="Personel & Visual"
                  title="Personel dan dokumentasi"
                  desc="Personel siaga serta rekam kegiatan operasi, pelatihan, dan kerja sama. Ketuk foto untuk memperbesar."
                />
              </Reveal>

              <Reveal>
                <h3 className="mt-10 text-center text-lg font-bold text-gov-900">
                  Pimpinan
                </h3>
                <div className="mt-4 flex justify-center">
                  <div className="gov-card lift w-64 p-5 text-center">
                    <img
                      src="/personil/kepala.jpg"
                      alt="Kepala Kantor SAR Banyuwangi"
                      className="mx-auto h-28 w-28 rounded-full border-2 border-slate-200 object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <p className="mt-3 text-[15px] font-bold text-slate-800">
                      I Made Oka Astawa, S.H., M.S.I.
                    </p>
                    <p className="text-[13px] text-slate-500">
                      Kepala Kantor SAR Banyuwangi
                    </p>
                    <p className="mt-1 text-[13px] font-bold text-orange-700">
                      Pembina Utama Muda (IV/c)
                    </p>
                  </div>
                </div>
              </Reveal>

              <h3 className="mt-10 text-center text-lg font-bold text-gov-900">
                Kepala divisi
              </h3>
              <ul className="mt-4 flex flex-wrap justify-center gap-4">
                {[
                  {
                    name: "Muhammad Robby Saputra, S.E.",
                    position: "Kepala Urusan Umum",
                    rank: "Penata (III/c)",
                  },
                  {
                    name: "Novix Heriyadi, S.Sos.",
                    position: "Kepala Sub Seksi Operasi & Siaga",
                    rank: "Penata (III/c)",
                  },
                  {
                    name: "Divisi Logistik",
                    position: "Kepala Divisi Logistik",
                    rank: "Penata (III/c)",
                  },
                  {
                    name: "Divisi Keuangan",
                    position: "Kepala Divisi Keuangan",
                    rank: "Penata (III/c)",
                  },
                  {
                    name: "Divisi SDM",
                    position: "Kepala Divisi SDM",
                    rank: "Penata (III/c)",
                  },
                ].map((p, i) => (
                  <Reveal key={p.name} delay={i * 70}>
                    <li className="gov-card lift w-40 p-4 text-center sm:w-44">
                      <img
                        src={`/personil/divisi-${i + 1}.jpg`}
                        alt={p.name}
                        className="mx-auto h-20 w-20 rounded-full bg-slate-100 object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <p className="mt-2 text-[13px] font-bold leading-snug text-slate-800">
                        {p.name}
                      </p>
                      <p className="text-xs text-slate-500">{p.position}</p>
                      <p className="text-xs font-bold text-orange-700">
                        {p.rank}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal>
                <details className="gov-card group mx-auto mt-6 max-w-3xl p-5">
                  <summary className="cursor-pointer list-none rounded-lg px-2 py-2 text-center text-[15px] font-bold text-gov-900 transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
                    <span className="inline-flex items-center gap-2">
                      Lihat 24 anggota SAR siaga
                      <FaChevronRight
                        aria-hidden="true"
                        className="text-xs text-slate-400 transition-transform duration-300 group-open:rotate-90"
                      />
                    </span>
                  </summary>
                  <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {Array.from({ length: 12 }, (_, i) => (
                      <li
                        key={i}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <span
                          aria-hidden="true"
                          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg text-slate-400"
                        >
                          <FaUsers />
                        </span>
                        <p className="mt-2 text-[13px] font-bold text-slate-700">
                          Anggota SAR {i + 1}
                        </p>
                        <p className="text-xs text-slate-500">
                          Pengatur (II/c)
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-center text-[13px] text-slate-500">
                    Total 30 personel siaga (1 pimpinan, 5 kepala divisi, 24
                    anggota).
                  </p>
                </details>
              </Reveal>

              <Reveal>
                <div className="mt-12 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                  <h3 className="text-2xl font-extrabold tracking-tight text-gov-900">
                    Galeri kegiatan
                  </h3>
                  <p className="text-sm text-slate-500">
                    Operasi • Pelatihan • Kerja sama — ketuk untuk memperbesar
                  </p>
                </div>
              </Reveal>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {dokumentasiGaleri.map((d, i) => (
                  <Reveal key={d.src} delay={Math.min(i % 4, 3) * 70}>
                    <button
                      type="button"
                      onClick={() => setLightbox(d)}
                      aria-label={`Perbesar foto ${d.kat}: ${d.judul}`}
                      className="gov-card lift zoom-img group w-full overflow-hidden text-left"
                    >
                      <span className="relative block">
                        <img
                          src={d.src}
                          alt={`${d.kat}: ${d.judul}`}
                          className="aspect-square w-full object-cover"
                          loading="lazy"
                        />
                        <span
                          className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"
                          aria-hidden="true"
                        />
                        <span
                          className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"
                          aria-hidden="true"
                        >
                          <FaExpand className="text-xs" />
                        </span>
                      </span>
                      <span className="block p-3">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-orange-700">
                          {d.kat}
                        </span>
                        <span className="block text-[13.5px] font-bold text-slate-800">
                          {d.judul}
                        </span>
                      </span>
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      <SiteFooter
        onBeranda={goBeranda}
        onBerita={goToBerita}
        onSection={goToSection}
      />
      <BackToTop />

      {/* ===== Lightbox ===== */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Pratinjau foto: ${lightbox.judul || "dokumentasi"}`}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="page-in w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-3.5">
              <p className="truncate text-sm font-bold text-gov-900">
                {lightbox.judul || "Pratinjau foto"}
              </p>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Tutup pratinjau foto"
                autoFocus
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 active:scale-95"
              >
                <FaTimes aria-hidden="true" />
              </button>
            </div>
            <img
              src={lightbox.src}
              alt={lightbox.judul || "Foto dokumentasi BASARNAS"}
              className="max-h-[70vh] w-full object-contain bg-slate-100"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
