import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

/* Muncul saat masuk viewport — nonaktif otomatis bila reduced-motion */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

/* Angka berhitung naik saat terlihat */
export function CountUp({ to, suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (started.current) return;
      started.current = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setVal(to);
        return;
      }
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {val.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}

/* Bilah progres baca di paling atas */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-gov-800 transition-[width] duration-150"
        style={{ width: `${p * 100}%` }}
      />
    </div>
  );
}

/* Tombol kembali ke atas */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Kembali ke atas halaman"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gov-900 text-white shadow-xl transition-all duration-300 hover:bg-gov-800 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
}

/* Ticker info berjalan */
export function InfoTicker({ items }) {
  const row = [...items, ...items];
  return (
    <div
      className="ticker overflow-hidden border-y border-orange-200 bg-orange-50"
      role="marquee"
      aria-label="Informasi penting berjalan"
    >
      <div className="ticker-track flex w-max items-center gap-10 px-6 py-2.5">
        {row.map((t, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-2.5 whitespace-nowrap text-[13.5px] font-semibold text-orange-800"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
