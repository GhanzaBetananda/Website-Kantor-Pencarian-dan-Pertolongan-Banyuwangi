import { useEffect, useState } from "react";
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
} from "react-icons/fa";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Beranda", href: "#beranda" },
    { label: "Profil", href: "#profil" },
    { label: "Wilayah Kerja", href: "#wilayah-kerja" },
    { label: "Fasilitas", href: "#fasilitas" },
    { label: "Kontak Darurat", href: "#kontak-darurat" },
    { label: "Dokumentasi", href: "#dokumentasi" },
  ];

  const strukturOrganisasi = [
    {
      nama: "I Made Oka Astawa, S.H., M.S.I.",
      jabatan: "Kepala Kantor SAR Banyuwangi",
      isMain: true,
    },
    {
      nama: "Muhammad Robby Saputra, S.E.",
      jabatan: "Kepala Urusan Umum",
      isMain: false,
    },
    {
      nama: "Novix Heriyadi, S.Sos.",
      jabatan: "Kepala Sub Seksi Operasi dan Siaga",
      isMain: false,
    },
    {
      nama: "Kelompok Jabatan Fungsional",
      jabatan: "",
      isMain: false,
    },
  ];

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
    kendaraanAir: [
      "Rescue Boat",
      "Rubber Boat",
      "Jet Ski SAR",
      "Kapal Patroli",
    ],
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

  const kontakDarurat = {
    callCenter: "115",
    posko: "0333 - 2815 115",
    whatsapp: "0811 3333 115",
    radio: "13.542,5 MHz",
    alamat: "Jl. Gatot Subroto no. 181 Ketapang - Banyuwangi",
    medsos: {
      instagram: "@kantorsar_banyuwangi",
      facebook: "Basarnas Bwi",
      twitter: "Basarnas Banyuwangi",
      email: "BasarnasBanyuwangi@gmail.com",
    },
  };

  const quickAccess = [
    {
      number: "01",
      title: "Profil Kantor",
      description:
        "Informasi lengkap tentang Kantor Pencarian dan Pertolongan Banyuwangi.",
      href: "#profil",
    },
    {
      number: "02",
      title: "Wilayah Kerja",
      description: "Cakupan wilayah operasi SAR BASARNAS Banyuwangi.",
      href: "#wilayah-kerja",
    },
    {
      number: "03",
      title: "Fasilitas & Sarana",
      description:
        "Peralatan dan sarana pendukung operasi pencarian dan pertolongan.",
      href: "#fasilitas",
    },
    {
      number: "04",
      title: "Kontak Darurat",
      description: "Hubungi kami melalui kanal komunikasi resmi BASARNAS.",
      href: "#kontak-darurat",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header
        className={`absolute left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "fixed bg-white/95 shadow-md backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}
          <a href="#beranda" className="group flex items-center gap-3">
            <div
              className={`flex h-11 items-center gap-2 transition-all duration-300 ${
                scrolled ? "bg-transparent" : "bg-transparent"
              }`}
            >
              <img
                src="/sar1.png"
                alt="Logo 1"
                className="h-9 w-auto object-contain"
              />
              <img
                src="/sar2.png"
                alt="Logo 2"
                className="h-9 w-auto object-contain"
              />
              <img
                src="/sar3.png"
                alt="Logo 3"
                className="h-9 w-auto object-contain"
              />
            </div>

            <div>
              <p
                className={`text-sm font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Badan Nasional Pencarian dan Pertolongan
              </p>

              <p
                className={`text-[11px] font-medium transition-colors duration-300 ${
                  scrolled ? "text-slate-500" : "text-white/70"
                }`}
              >
                Banyuwangi
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="ml-auto hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm font-semibold transition-colors duration-300 ${
                  scrolled
                    ? "text-slate-600 hover:text-orange-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}

                {/* Hover underline */}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* MOBILE MENU */}
            <button
              type="button"
              className={`rounded-lg border p-2 transition-all duration-300 lg:hidden ${
                scrolled
                  ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
              aria-label="Buka menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section
          id="beranda"
          className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <img
            src="/hero.png"
            alt="Kegiatan BASARNAS Banyuwangi"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Additional Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

          {/* HERO CONTENT */}
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-20 text-center">
            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
                Kantor Pencarian dan Pertolongan Kelas B Banyuwangi
              </span>

              <span className="h-px w-10 bg-orange-500" />
            </div>

            {/* TITLE */}
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Hadir untuk
              <span className="block text-orange-500">
                keselamatan masyarakat.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Pusat informasi digital Kantor Pencarian dan Pertolongan
              Banyuwangi yang menghadirkan informasi profil, wilayah kerja,
              fasilitas, kontak darurat, dan dokumentasi kegiatan.
            </p>

            {/* CTA */}
            <div className="mt-9 mb-16 flex flex-wrap justify-center gap-4">
              <a
                href="#profil"
                className="rounded-full bg-orange-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-xl"
              >
                Lihat Profil Kami
              </a>

              <a
                href="#kontak-darurat"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-slate-900"
              >
                Kontak Darurat
              </a>
            </div>
          </div>

          {/* BOTTOM GRADIENT */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </section>
        {/* =====================================================
            PROFIL
        ====================================================== */}
        <section id="profil" className="scroll-mt-24 bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Visual */}
              <div className="relative">
                <div className="aspect-[16/16] overflow-hidden rounded-[2rem] bg-slate-900 relative">
                  {/* Background Image */}
                  <img
                    src="/sar5.jpg"
                    alt="KPP Banyuwangi"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Overlay gelap untuk readability teks */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/40" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-8">
                    <span className="text-sm font-bold uppercase tracking-widest text-orange-400">
                      KPP Banyuwangi
                    </span>

                    <h3 className="mt-3 text-3xl font-black text-white">
                      Pencarian dan Pertolongan
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      bagi masyarakat dalam kondisi yang membutuhkan
                      pertolongan.
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-5 hidden rounded-2xl bg-orange-600 p-6 shadow-xl sm:block">
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange-100">
                    Prinsip
                  </p>
                  <p className="mt-2 text-2xl font-black text-white">
                    Siaga.
                    <br />
                    Cepat.
                    <br />
                    Tepat.
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                  Tentang Kami
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                  Melayani masyarakat dalam setiap keadaan.
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  Kantor Pencarian dan Pertolongan Banyuwangi merupakan unit
                  pelaksana teknis Badan Nasional Pencarian dan Pertolongan
                  (BASARNAS) yang menyelenggarakan tugas pencarian dan
                  pertolongan di wilayah kerjanya. Sebagai Kantor Pencarian dan
                  Pertolongan Kelas B, kantor ini melaksanakan operasi SAR,
                  kesiapsiagaan, koordinasi, serta pembinaan potensi pencarian
                  dan pertolongan.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Kantor Pencarian dan Pertolongan Banyuwangi juga menaungi Pos
                  Pencarian dan Pertolongan Jember sebagai unsur pendukung
                  operasional. Bersama berbagai unsur seperti TNI, Polri,
                  pemerintah daerah, BPBD, PMI, relawan, dan masyarakat,
                  keberadaan kantor dan pos tersebut mendukung penyelenggaraan
                  pencarian dan pertolongan yang andal, efektif, dan
                  terintegrasi.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* =====================================================
            WILAYAH KERJA
        ====================================================== */}

        <section id="wilayah-kerja" className="scroll-mt-24 bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-orange-500"></span>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                  Wilayah Operasi
                </p>
              </div>

              <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Cakupan Wilayah Kerja
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
                Wilayah operasi pencarian dan pertolongan BASARNAS Banyuwangi
                mencakup 6 kabupaten dan 1 kotamadya dengan cakupan darat, laut,
                dan udara.
              </p>
            </div>

            {/* Main Content */}
            <div className="mt-14 grid gap-6 lg:grid-cols-12">
              {/* Left - Statistics */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white lg:col-span-5">
                {/* Decorative */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/10"></div>
                <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-orange-500/5"></div>

                <div className="relative">
                  <p className="text-sm font-semibold text-slate-400">
                    Cakupan Operasi
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {/* Luas */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 6.5L9 3l6 3 6-3v14l-6 3-6-3-6 3v-14z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 3v14M15 6v14"
                          />
                        </svg>
                      </div>

                      <p className="text-3xl font-black tracking-tight">
                        {wilayahKerja.luas}
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        Luas Wilayah
                      </p>
                    </div>

                    {/* Penduduk */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                          />
                          <circle cx="9" cy="7" r="4" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                          />
                        </svg>
                      </div>

                      <p className="text-3xl font-black tracking-tight">
                        {wilayahKerja.penduduk}
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        Jumlah Penduduk
                      </p>
                    </div>
                  </div>

                  {/* Wilayah */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">
                        Kabupaten / Kota
                      </h4>

                      <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400">
                        {wilayahKerja.kabupaten.length} Wilayah
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {wilayahKerja.kabupaten.map((kab) => (
                        <span
                          key={kab}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300"
                        >
                          {kab}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Boundary */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-orange-600">
                      Area Coverage
                    </p>

                    <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
                      Batas Wilayah Kerja
                    </h3>
                  </div>

                  <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600 sm:flex">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s7-5.2 7-12a7 7 0 10-14 0c0 6.8 7 12 7 12z"
                      />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                </div>

                {/* Boundary Grid */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      label: "Utara",
                      value: wilayahKerja.batas.utara,
                    },
                    {
                      label: "Timur",
                      value: wilayahKerja.batas.timur,
                    },
                    {
                      label: "Selatan",
                      value: wilayahKerja.batas.selatan,
                    },
                    {
                      label: "Barat",
                      value: wilayahKerja.batas.barat,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-black text-orange-600 shadow-sm">
                          {item.label === "Utara" && "U"}
                          {item.label === "Timur" && "T"}
                          {item.label === "Selatan" && "S"}
                          {item.label === "Barat" && "B"}
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-semibold leading-5 text-slate-800">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coordinates */}
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Lokasi Operasional
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-medium text-slate-400">
                        Koordinat Kantor
                      </p>
                      <p className="mt-2 break-all text-sm font-bold text-slate-800">
                        {wilayahKerja.koordinat.kantor}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-medium text-slate-400">
                        Koordinat Pos Jember
                      </p>
                      <p className="mt-2 break-all text-sm font-bold text-slate-800">
                        {wilayahKerja.koordinat.posJember}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
    DESTINASI WISATA UNGGULAN
========================================================= */}
          <div className="mt-28">
            {/* Section Header */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-[2px] w-10 bg-orange-500"></span>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                  Destinasi Wisata
                </p>

                <span className="h-[2px] w-10 bg-orange-500"></span>
              </div>

              <h3 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Wisata Unggulan di Wilayah Kerja
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-500">
                Beragam destinasi wisata unggulan tersebar di wilayah kerja KPP
                Banyuwangi, mulai dari pesona alam, pantai, hingga kawasan
                wisata yang menjadi tujuan favorit masyarakat dan wisatawan.
              </p>
            </div>

            {/* Gallery */}
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Kawah Ijen",
                  image: "/ijen.jpg",
                },
                {
                  name: "Pantai Pulau Merah",
                  image: "/pm.jpg",
                },
                {
                  name: "Taman Nasional Alas Purwo",
                  image: "/alaspurwo.jpg",
                },
                {
                  name: "Pantai Plengkung",
                  image: "/plengkung.jpeg",
                },
                {
                  name: "De Djawatan",
                  image: "/jawatan.jpg",
                },
                {
                  name: "Pantai Boom",
                  image: "/boom.jpg",
                },
                {
                  name: "Teluk Hijau",
                  image: "/telukhijau.jpg",
                },
                {
                  name: "Pantai Sukamade",
                  image: "/sukamade.jpg",
                },
                {
                  name: "Taman Nasional Baluran",
                  image: "/baluran.jpeg",
                },
                {
                  name: "Pantai Watu Dodol",
                  image: "/watudodol.jpg",
                },
                {
                  name: "Green Island",
                  image: "/gland.jpg",
                },
                {
                  name: "Air Terjun Jagir",
                  image: "/jagir.jpg",
                },
              ].map((wisata) => (
                <div
                  key={wisata.name}
                  className="group relative h-72 overflow-hidden rounded-2xl bg-slate-200 shadow-sm"
                >
                  {/* Image */}
                  <img
                    src={wisata.image}
                    alt={wisata.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition duration-300 group-hover:from-black/90" />

                  {/* Location Icon */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition duration-300 group-hover:bg-orange-500">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s7-5.2 7-12a7 7 0 10-14 0c0 6.8 7 12 7 12z"
                      />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>

                  {/* Destination Name */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-lg font-black tracking-tight text-white">
                      {wisata.name}
                    </p>

                    <div className="mt-2 h-[2px] w-8 bg-orange-500 transition-all duration-300 group-hover:w-14" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
    FASILITAS - SARANA & PRASARANA
====================================================== */}
        <section id="fasilitas" className="scroll-mt-24 bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                Sarana & Prasarana
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Fasilitas Pendukung Operasi SAR
              </h2>
              <div className="mt-4 h-1 w-20 bg-orange-600 mx-auto rounded-full" />
              <p className="mt-5 leading-7 text-slate-500">
                Berbagai fasilitas dan peralatan yang dimiliki untuk mendukung
                operasi pencarian dan pertolongan BASARNAS Banyuwangi.
              </p>
            </div>

            {/* 2 Kolom: Kiri Daftar Fasilitas | Kanan Galeri Gambar */}
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* =====================================================
      KOLOM KIRI - DAFTAR FASILITAS
  ====================================================== */}
              <div className="space-y-4">
                {/* Kendaraan Darat */}
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-orange-300 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">
                      Kendaraan Darat
                    </h3>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                      {fasilitas.kendaraan.length} Unit
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {fasilitas.kendaraan.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[10px] font-bold text-orange-600">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kendaraan Air */}
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-orange-300 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">
                      Kendaraan Air
                    </h3>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                      {fasilitas.kendaraanAir.length} Unit
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {fasilitas.kendaraanAir.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[10px] font-bold text-orange-600">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alat Komunikasi */}
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-orange-300 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">
                      Alat Komunikasi
                    </h3>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                      {fasilitas.komunikasi.length} Unit
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {fasilitas.komunikasi.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[10px] font-bold text-orange-600">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Peralatan Medis */}
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-orange-300 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">
                      Peralatan Medis
                    </h3>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                      {fasilitas.medis.length} Unit
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {fasilitas.medis.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[10px] font-bold text-orange-600">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Peralatan Khusus */}
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-orange-300 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">
                      Peralatan Khusus
                    </h3>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                      {fasilitas.lainnya.length} Unit
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {fasilitas.lainnya.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[10px] font-bold text-orange-600">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* =====================================================
      KOLOM KANAN - GALERI
  ====================================================== */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
                  {/* Header Gallery */}
                  <div className="flex items-center justify-between px-3 pb-4 pt-2">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">
                        Operational Equipment
                      </p>

                      <h3 className="mt-1 text-xl font-black text-slate-900">
                        Sarana Operasi SAR
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100">
                      <svg
                        className="h-5 w-5 text-orange-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16l4.586-4.586a2 2 0 015.828 0L19 16m-2-2l1.586-1.586a2 2 0 012.828 0L22 14"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* =================================================
          MAIN GALLERY
      ================================================== */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* FOTO UTAMA */}
                    <div className="group relative col-span-2 h-[300px] overflow-hidden rounded-2xl bg-slate-900">
                      <img
                        src="/fasilitas/kendaraan-1.jpg"
                        alt="Kendaraan Operasional BASARNAS Banyuwangi"
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-800 backdrop-blur-sm">
                          Kendaraan Darat
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="text-xl font-black tracking-tight text-white">
                              Kendaraan Operasional
                            </p>

                            <p className="mt-1 text-sm text-white/70">
                              Mendukung mobilisasi tim dalam operasi pencarian
                              dan pertolongan
                            </p>
                          </div>

                          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white sm:flex">
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14M13 6l6 6-6 6"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* KENDARAAN DARAT 2 */}
                    <div className="group relative h-44 overflow-hidden rounded-2xl bg-slate-900">
                      <img
                        src="/fasilitas/kendaraan-2.jpg"
                        alt="Kendaraan Darat BASARNAS"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-sm font-bold text-white">
                          Kendaraan Darat
                        </p>

                        <p className="mt-1 text-xs text-white/60">
                          Unit operasional
                        </p>
                      </div>
                    </div>

                    {/* KENDARAAN DARAT 3 */}
                    <div className="group relative h-44 overflow-hidden rounded-2xl bg-slate-900">
                      <img
                        src="/fasilitas/kendaraan-3.jpg"
                        alt="Kendaraan Darat BASARNAS"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-sm font-bold text-white">
                          Kendaraan Darat
                        </p>

                        <p className="mt-1 text-xs text-white/60">
                          Unit operasional
                        </p>
                      </div>
                    </div>

                    {/* KENDARAAN AIR */}
                    <div className="group relative h-52 overflow-hidden rounded-2xl bg-slate-900">
                      <img
                        src="/fasilitas/kendaraan-air.jpg"
                        alt="Kendaraan Air BASARNAS Banyuwangi"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                          Marine Rescue
                        </span>

                        <p className="mt-1 text-base font-black text-white">
                          Kendaraan Air
                        </p>

                        <p className="mt-1 text-xs text-white/60">
                          {fasilitas.kendaraanAir.length} Unit
                        </p>
                      </div>
                    </div>

                    {/* ALAT KOMUNIKASI */}
                    <div className="group relative h-52 overflow-hidden rounded-2xl bg-slate-900">
                      <img
                        src="/fasilitas/komunikasi.jpg"
                        alt="Alat Komunikasi BASARNAS Banyuwangi"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                          Communication
                        </span>

                        <p className="mt-1 text-base font-black text-white">
                          Alat Komunikasi
                        </p>

                        <p className="mt-1 text-xs text-white/60">
                          {fasilitas.komunikasi.length} Unit
                        </p>
                      </div>
                    </div>

                    {/* MEDIS */}
                    <div className="group relative h-40 overflow-hidden rounded-2xl bg-slate-900">
                      <img
                        src="/fasilitas/medis.jpg"
                        alt="Peralatan Medis BASARNAS Banyuwangi"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-sm font-black text-white">
                          Peralatan Medis
                        </p>

                        <p className="mt-1 text-xs text-white/60">
                          {fasilitas.medis.length} Unit
                        </p>
                      </div>
                    </div>

                    {/* PERALATAN KHUSUS */}
                    <div className="group relative h-40 overflow-hidden rounded-2xl bg-slate-900">
                      <img
                        src="/fasilitas/khusus.jpg"
                        alt="Peralatan Khusus BASARNAS Banyuwangi"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-sm font-black text-white">
                          Peralatan Khusus
                        </p>

                        <p className="mt-1 text-xs text-white/60">
                          {fasilitas.lainnya.length} Unit
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gallery Footer */}
                  <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-orange-500" />

                      <span className="text-xs font-semibold text-slate-600">
                        Peralatan pendukung operasi SAR
                      </span>
                    </div>

                    <span className="text-xs font-bold text-slate-400">
                      BASARNAS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistik Total Fasilitas */}
            <div className="mt-12 grid gap-4 sm:grid-cols-5">
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center hover:shadow-lg transition">
                <p className="text-3xl font-black text-orange-600">
                  {fasilitas.kendaraan.length +
                    fasilitas.kendaraanAir.length +
                    fasilitas.komunikasi.length +
                    fasilitas.medis.length +
                    fasilitas.lainnya.length}
                </p>
                <p className="text-sm text-slate-500">Total Fasilitas</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center hover:shadow-lg transition">
                <p className="text-3xl font-black text-orange-600">
                  {fasilitas.kendaraan.length}
                </p>
                <p className="text-sm text-slate-500">Kendaraan Darat</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center hover:shadow-lg transition">
                <p className="text-3xl font-black text-orange-600">
                  {fasilitas.kendaraanAir.length}
                </p>
                <p className="text-sm text-slate-500">Kendaraan Air</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center hover:shadow-lg transition">
                <p className="text-3xl font-black text-orange-600">
                  {fasilitas.komunikasi.length}
                </p>
                <p className="text-sm text-slate-500">Alat Komunikasi</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center hover:shadow-lg transition">
                <p className="text-3xl font-black text-orange-600">
                  {fasilitas.medis.length + fasilitas.lainnya.length}
                </p>
                <p className="text-sm text-slate-500">Medis & Khusus</p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EMERGENCY CTA
        ====================================================== */}
        <section id="kontak-darurat" className="bg-orange-600 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              {/* Text */}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-100">
                  Emergency Call 115
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Butuh Pertolongan Darurat?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-orange-50">
                  Segera hubungi{" "}
                  <span className="font-bold text-white">115</span>, layanan
                  darurat BASARNAS yang siap menerima laporan dan membantu dalam
                  kondisi pencarian dan pertolongan.
                </p>
              </div>

              {/* CTA */}
              <a
                href="tel:115"
                className="group flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-center text-sm font-black text-orange-600 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-orange-50 hover:shadow-xl"
              >
                <FaPhoneAlt className="text-lg transition group-hover:scale-110" />

                <span>Hubungi 115</span>
              </a>
            </div>
          </div>
        </section>
        {/* =====================================================
    KONTAK DARURAT & EMERGENCY CALL 115
====================================================== */}
        <section className="scroll-mt-24 bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                Kontak Darurat
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900">
                Hubungi Kami Segera
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-500">
                Gunakan kanal komunikasi resmi untuk mendapatkan bantuan dalam
                kondisi darurat atau informasi lainnya.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {/* Call Center */}
              <div className="group rounded-2xl border border-slate-200 bg-orange-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 transition group-hover:bg-orange-600">
                  <FaPhoneAlt className="text-2xl text-orange-600 transition group-hover:text-white" />
                </div>

                <h3 className="mt-3 text-sm font-bold uppercase text-slate-600">
                  Call Center
                </h3>

                <p className="mt-1 text-2xl font-black text-orange-600">115</p>

                <p className="text-xs text-slate-500">24 Jam Nonstop</p>
              </div>

              {/* WhatsApp */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 transition group-hover:bg-green-500">
                  <FaWhatsapp className="text-3xl text-green-500 transition group-hover:text-white" />
                </div>

                <h3 className="mt-3 text-sm font-bold uppercase text-slate-600">
                  WhatsApp
                </h3>

                <p className="mt-1 text-lg font-bold text-orange-600">
                  0811 3333 115
                </p>

                <p className="text-xs text-slate-500">Pengaduan & Informasi</p>
              </div>

              {/* Radio */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 transition group-hover:bg-orange-600">
                  <FaBroadcastTower className="text-2xl text-orange-600 transition group-hover:text-white" />
                </div>

                <h3 className="mt-3 text-sm font-bold uppercase text-slate-600">
                  Frekuensi Radio
                </h3>

                <p className="mt-1 text-lg font-bold text-orange-600">
                  13.542,5 MHz
                </p>

                <p className="text-xs text-slate-500">VHF/HF</p>
              </div>

              {/* Posko Siaga */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 transition group-hover:bg-orange-600">
                  <FaBuilding className="text-2xl text-orange-600 transition group-hover:text-white" />
                </div>

                <h3 className="mt-3 text-sm font-bold uppercase text-slate-600">
                  Posko Siaga
                </h3>

                <p className="mt-1 text-lg font-bold text-orange-600">
                  0333 - 2815 115
                </p>

                <p className="text-xs text-slate-500">24 Jam</p>
              </div>
            </div>

            {/* =====================================================
        ALAMAT & MEDIA SOSIAL
    ====================================================== */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Alamat */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-orange-200 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                    <FaMapMarkerAlt className="text-xl text-orange-600" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
                      Alamat
                    </p>

                    <p className="mt-1 font-semibold text-slate-800">
                      Jl. Gatot Subroto no. 181 Ketapang - Banyuwangi
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Banyuwangi, Jawa Timur, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              {/* Media Sosial */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-orange-200 hover:shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
                  Media Sosial
                </p>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  {/* Instagram */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-50">
                      <FaInstagram className="text-lg text-pink-500" />
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-slate-500">
                        Instagram
                      </span>

                      <p className="text-sm font-medium text-slate-800">
                        @kantorsar_banyuwangi
                      </p>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                      <FaFacebookF className="text-lg text-blue-600" />
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-slate-500">
                        Facebook
                      </span>

                      <p className="text-sm font-medium text-slate-800">
                        Basarnas Bwi
                      </p>
                    </div>
                  </div>

                  {/* X */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                      <FaTwitter className="text-lg text-slate-900" />
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-slate-500">
                        X (Twitter)
                      </span>

                      <p className="text-sm font-medium text-slate-800">
                        Basarnas Banyuwangi
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50">
                      <FaEnvelope className="text-lg text-orange-600" />
                    </div>

                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-slate-500">
                        Email
                      </span>

                      <p className="break-all text-xs font-medium text-slate-800">
                        BasarnasBanyuwangi@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tambahan Informasi */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
                    Layanan
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    24/7
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
                    Gratis
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    Untuk Semua
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
                    Cepat
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    Respons Tanggap
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DOKUMENTASI
        ====================================================== */}
        {/* =====================================================
    PERSONIL & DOKUMENTASI
====================================================== */}
        <section id="dokumentasi" className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* =============================================
        PERSONIL BASARNAS
    ============================================= */}
            <div>
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                  Personil
                </p>
                <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
                  Personil BASARNAS Banyuwangi
                </h2>
                <p className="mt-3 text-slate-500">
                  Seluruh personil yang siap siaga dalam setiap operasi
                  pencarian dan pertolongan.
                </p>
              </div>

              <div className="mt-10 space-y-10">
                {/* BARIS 1: Kepala Kantor */}
                <div>
                  <p className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-orange-600">
                    Kepala Kantor
                  </p>
                  <div className="flex justify-center">
                    <div className="w-32 sm:w-40">
                      <div className="aspect-square overflow-hidden rounded-full bg-slate-200">
                        <img
                          src="/personil/kepala.jpg"
                          alt="Kepala Kantor"
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.target.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23e2e8f0'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-size='12' fill='%2394756b'%3EKepala%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                      <p className="mt-2 text-center text-sm font-semibold text-slate-800">
                        I Made Oka Astawa, S.H., M.S.I.
                      </p>
                      <p className="text-center text-xs text-slate-500">
                        Kepala Kantor SAR Banyuwangi
                      </p>
                      <p className="text-center text-xs font-semibold text-orange-600">
                        Pembina Utama Muda (IV/c)
                      </p>
                    </div>
                  </div>
                </div>

                {/* BARIS 2: 5 Kepala Divisi */}
                <div>
                  <p className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-orange-600">
                    Kepala Divisi
                  </p>
                  <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12">
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
                    ].map((person, index) => (
                      <div key={index} className="w-24 sm:w-28">
                        <div className="aspect-square overflow-hidden rounded-full bg-slate-200">
                          <img
                            src={`/personil/divisi-${index + 1}.jpg`}
                            alt={person.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.target.src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23e2e8f0'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-size='10' fill='%2394756b'%3EDivisi%3C/text%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                        <p className="mt-1 text-center text-xs font-semibold text-slate-800 leading-tight">
                          {person.name}
                        </p>
                        <p className="text-center text-[10px] text-slate-500 leading-tight">
                          {person.position}
                        </p>
                        <p className="text-center text-[10px] font-semibold text-orange-600 leading-tight">
                          {person.rank}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BARIS 3-6: 24 Anggota - 4 baris x 6 lingkaran */}
                <div>
                  <p className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-orange-600">
                    Anggota
                  </p>
                  <div className="space-y-6">
                    {/* Baris 1 */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                      {Array.from({ length: 6 }, (_, index) => (
                        <div key={index} className="w-24 sm:w-28">
                          <div className="aspect-square overflow-hidden rounded-full bg-slate-200">
                            <img
                              src={`/personil/anggota-${index + 1}.jpg`}
                              alt={`Anggota ${index + 1}`}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.target.src =
                                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23e2e8f0'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-size='14' fill='%2394756b'%3E👤%3C/text%3E%3C/svg%3E";
                              }}
                            />
                          </div>
                          <p className="mt-1 text-center text-xs font-semibold text-slate-800 leading-tight">
                            Nama Anggota {index + 1}
                          </p>
                          <p className="text-center text-[10px] text-slate-500 leading-tight">
                            Anggota SAR
                          </p>
                          <p className="text-center text-[10px] font-semibold text-orange-600 leading-tight">
                            Pengatur (II/c)
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Baris 2 */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                      {Array.from({ length: 6 }, (_, index) => (
                        <div key={index + 6} className="w-24 sm:w-28">
                          <div className="aspect-square overflow-hidden rounded-full bg-slate-200">
                            <img
                              src={`/personil/anggota-${index + 7}.jpg`}
                              alt={`Anggota ${index + 7}`}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.target.src =
                                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23e2e8f0'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-size='14' fill='%2394756b'%3E👤%3C/text%3E%3C/svg%3E";
                              }}
                            />
                          </div>
                          <p className="mt-1 text-center text-xs font-semibold text-slate-800 leading-tight">
                            Nama Anggota {index + 7}
                          </p>
                          <p className="text-center text-[10px] text-slate-500 leading-tight">
                            Anggota SAR
                          </p>
                          <p className="text-center text-[10px] font-semibold text-orange-600 leading-tight">
                            Pengatur (II/c)
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Baris 3 */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                      {Array.from({ length: 6 }, (_, index) => (
                        <div key={index + 12} className="w-24 sm:w-28">
                          <div className="aspect-square overflow-hidden rounded-full bg-slate-200">
                            <img
                              src={`/personil/anggota-${index + 13}.jpg`}
                              alt={`Anggota ${index + 13}`}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.target.src =
                                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23e2e8f0'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-size='14' fill='%2394756b'%3E👤%3C/text%3E%3C/svg%3E";
                              }}
                            />
                          </div>
                          <p className="mt-1 text-center text-xs font-semibold text-slate-800 leading-tight">
                            Nama Anggota {index + 13}
                          </p>
                          <p className="text-center text-[10px] text-slate-500 leading-tight">
                            Anggota SAR
                          </p>
                          <p className="text-center text-[10px] font-semibold text-orange-600 leading-tight">
                            Pengatur (II/c)
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Baris 4 */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                      {Array.from({ length: 6 }, (_, index) => (
                        <div key={index + 18} className="w-24 sm:w-28">
                          <div className="aspect-square overflow-hidden rounded-full bg-slate-200">
                            <img
                              src={`/personil/anggota-${index + 19}.jpg`}
                              alt={`Anggota ${index + 19}`}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.target.src =
                                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23e2e8f0'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-size='14' fill='%2394756b'%3E👤%3C/text%3E%3C/svg%3E";
                              }}
                            />
                          </div>
                          <p className="mt-1 text-center text-xs font-semibold text-slate-800 leading-tight">
                            Nama Anggota {index + 19}
                          </p>
                          <p className="text-center text-[10px] text-slate-500 leading-tight">
                            Anggota SAR
                          </p>
                          <p className="text-center text-[10px] font-semibold text-orange-600 leading-tight">
                            Pengatur (II/c)
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-slate-500">
                  Total <span className="font-bold text-orange-600">30</span>{" "}
                  Personil Siap Siaga
                </p>
              </div>
            </div>

            {/* =============================================
        PEMISAH
    ============================================= */}
            <div className="my-16 border-t border-slate-200" />

            {/* =============================================
        DOKUMENTASI
    ============================================= */}
            <div>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                    Visual
                  </p>

                  <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900">
                    Dokumentasi
                  </h2>

                  <p className="mt-4 max-w-xl text-slate-500">
                    Rekam kegiatan dan aktivitas pencarian dan pertolongan
                    BASARNAS Banyuwangi.
                  </p>
                </div>

                <button
                  type="button"
                  className="w-fit text-sm font-bold text-orange-600 hover:text-orange-700 transition"
                >
                  Lihat galeri →
                </button>
              </div>

              {/* Gallery */}
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {/* =============================================
      KLASIFIKASI 1: OPERASI SAR
  ============================================= */}
                {/* Operasi SAR 1 */}
                <div className="group relative flex aspect-square items-end rounded-2xl bg-slate-900 p-4 overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src="/OSAR1.jpg"
                    alt="Operasi SAR 1"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-orange-400">
                      OPERASI SAR
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white leading-tight">
                      Operasi Pencarian
                    </p>
                  </div>
                </div>

                {/* Operasi SAR 2 */}
                <div className="group relative flex aspect-square items-end rounded-2xl bg-slate-800 p-4 overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src="/OSAR2.jpeg"
                    alt="Operasi SAR 2"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-orange-400">
                      OPERASI SAR
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white leading-tight">
                      Operasi Pertolongan
                    </p>
                  </div>
                </div>

                {/* Operasi SAR 3 */}
                <div className="group relative flex aspect-square items-end rounded-2xl bg-slate-700 p-4 overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src="/OSAR3.jpg"
                    alt="Operasi SAR 3"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-orange-400">
                      OPERASI SAR
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white leading-tight">
                      Evakuasi Korban
                    </p>
                  </div>
                </div>

                {/* Operasi SAR 4 */}
                <div className="group relative flex aspect-square items-end rounded-2xl bg-slate-700 p-4 overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src="/OSAR4.jpg"
                    alt="Operasi SAR 4"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-orange-400">
                      OPERASI SAR
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white leading-tight">
                      Evakuasi Korban
                    </p>
                  </div>
                </div>

                {/* =============================================
      KLASIFIKASI 2: PELATIHAN DAN LATIHAN
  ============================================= */}
                {/* Pelatihan 1 */}
                <div className="group relative flex aspect-square items-end rounded-2xl bg-blue-900 p-4 overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src="/PSAR1.jpeg"
                    alt="Pelatihan SAR 1"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-blue-300">
                      PELATIHAN
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white leading-tight">
                      Latihan Dasar SAR
                    </p>
                  </div>
                </div>

                {/* Pelatihan 2 */}
                <div className="group relative flex aspect-square items-end rounded-2xl bg-blue-800 p-4 overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src="/PSAR2.jpeg"
                    alt="Pelatihan SAR 2"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-blue-300">
                      PELATIHAN
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white leading-tight">
                      Latihan Kesiapsiagaan
                    </p>
                  </div>
                </div>

                {/* Pelatihan 3 */}
                <div className="group relative flex aspect-square items-end rounded-2xl bg-blue-700 p-4 overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src="/PSAR3.jpg"
                    alt="Pelatihan SAR 3"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-blue-300">
                      PELATIHAN
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white leading-tight">
                      Simulasi Operasi
                    </p>
                  </div>
                </div>
                {/* Pelatihan 4 */}
                <div className="group relative flex aspect-square items-end rounded-2xl bg-blue-800 p-4 overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src="/PSAR4.jpg"
                    alt="Pelatihan SAR 4"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-blue-300">
                      PELATIHAN
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white leading-tight">
                      Latihan Kesiapsiagaan
                    </p>
                  </div>
                </div>

                {/* =============================================
      KLASIFIKASI 3: KERJA SAMA DAN KOORDINASI
  ============================================= */}
                {/* Kerja Sama 1 */}
                <div className="group relative flex aspect-square items-end rounded-2xl bg-green-900 p-4 overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src="/ksar1.jpg"
                    alt="Kerja Sama 1"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-green-300">
                      KERJA SAMA
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white leading-tight">
                      Koordinasi dengan TNI
                    </p>
                  </div>
                </div>

                {/* Kerja Sama 2 */}
                <div className="group relative flex aspect-square items-end rounded-2xl bg-green-800 p-4 overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src="/ksar2.jpg"
                    alt="Kerja Sama 2"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-green-300">
                      KERJA SAMA
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white leading-tight">
                      Koordinasi dengan Polri
                    </p>
                  </div>
                </div>

                {/* Kerja Sama 3 */}
                <div className="group relative flex aspect-square items-end rounded-2xl bg-green-700 p-4 overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src="/ksar3.jpg"
                    alt="Kerja Sama 3"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-green-300">
                      KERJA SAMA
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white leading-tight">
                      Koordinasi dengan Masyarakat
                    </p>
                  </div>
                </div>

                {/* Kerja Sama 4 */}
                <div className="group relative flex aspect-square items-end rounded-2xl bg-green-600 p-4 overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src="/ksar4.jpg"
                    alt="Kerja Sama 4"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-green-300">
                      KERJA SAMA
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white leading-tight">
                      Koordinasi dengan BASARNAS Pusat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="border-t border-slate-200 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="font-bold text-white">BASARNAS Banyuwangi</p>
            <p className="mt-1 text-sm text-slate-500">
              Kantor Pencarian dan Pertolongan Banyuwangi
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 BASARNAS. Informasi resmi.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
