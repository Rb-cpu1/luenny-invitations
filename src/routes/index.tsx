import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import luenny1 from "@/assets/luenny1.jpeg.asset.json";
import luenny2 from "@/assets/luenny2.jpeg.asset.json";
import luenny3 from "@/assets/luenny3.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "1º Aniversário da Luenny — 25 de Julho" },
      { name: "description", content: "Convite para o primeiro aniversário de Luenny Eric Mulungo, 25 de Julho em Cumbeza." },
      { property: "og:title", content: "1º Aniversário da Luenny" },
      { property: "og:description", content: "25 de Julho · 11h00 · Casa dos Avós, Cumbeza" },
      { property: "og:image", content: luenny1.url },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Invite,
});

const EVENT_DATE = new Date("2026-07-25T11:00:00");

function useCountdown() {
  const [now, setNow] = useState(() => EVENT_DATE);
  useEffect(() => {
    setNow(new Date());
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  const diff = Math.max(0, EVENT_DATE.getTime() - now.getTime());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

function Petal({ left, delay, size }: { left: string; delay: string; size: number }) {
  return (
    <div
      className="absolute top-0 animate-gentle-float"
      style={{ left, animationDelay: delay, width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 40 40" className="w-full h-full opacity-60">
        <path d="M20 4 C28 12, 28 20, 20 36 C12 20, 12 12, 20 4 Z" fill="oklch(0.82 0.12 20)" />
      </svg>
    </div>
  );
}

function Invite() {
  const { d, h, m, s } = useCountdown();

  return (
    <main className="relative overflow-hidden">
      {/* floating decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Petal left="8%" delay="0s" size={28} />
        <Petal left="22%" delay="1.4s" size={20} />
        <Petal left="78%" delay="0.8s" size={32} />
        <Petal left="92%" delay="2.1s" size={22} />
        <Petal left="55%" delay="3s" size={18} />
      </div>

      <section className="relative mx-auto max-w-4xl px-6 py-16 sm:py-24">
        {/* Card */}
        <article
          className="relative rounded-[2.5rem] bg-card/90 backdrop-blur-sm p-8 sm:p-14 animate-float-up"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          {/* ornamental border */}
          <div className="pointer-events-none absolute inset-3 rounded-[2.2rem] border border-primary/20" />
          <div className="pointer-events-none absolute inset-5 rounded-[2rem] border border-accent/30" />

          <header className="text-center relative">
            <p className="text-sm uppercase tracking-[0.4em] text-primary/80 animate-shimmer">
              ✦ Convite Especial ✦
            </p>
            <p className="mt-6 font-[var(--font-display)] italic text-muted-foreground">
              Com muito amor, celebramos
            </p>
            <h1
              className="mt-2 text-6xl sm:text-8xl leading-none text-primary"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Luenny
            </h1>
            <p
              className="mt-1 text-lg sm:text-xl text-foreground/70"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Eric Mulungo
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-primary/40" />
              <span
                className="text-7xl sm:text-8xl text-accent-foreground"
                style={{ fontFamily: "var(--font-script)" }}
              >
                1
              </span>
              <span className="h-px w-16 bg-primary/40" />
            </div>
            <p
              className="mt-2 uppercase tracking-[0.35em] text-sm text-foreground/60"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Aninho de Vida
            </p>
          </header>

          {/* Photos */}
          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-5">
            {[luenny1, luenny2, luenny3].map((img, i) => (
              <div
                key={i}
                className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-primary/20"
                style={{
                  boxShadow: "var(--shadow-card)",
                  transform: i === 1 ? "translateY(-12px) rotate(0deg)" : i === 0 ? "rotate(-2deg)" : "rotate(2deg)",
                }}
              >
                <img
                  src={img.url}
                  alt={`Luenny foto ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Message */}
          <p
            className="mt-12 text-center text-lg sm:text-xl leading-relaxed text-foreground/80 italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            “Um ano cheio de sorrisos, abraços e descobertas.
            <br className="hidden sm:block" />
            Venha celebrar connosco este momento tão especial.”
          </p>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            — Mamã Gércia Jenny
          </p>

          {/* Details */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <DetailCard label="Data" value="25" sub="de Julho" />
            <DetailCard label="Hora" value="11:00" sub="da manhã" />
            <DetailCard label="Local" value="Cumbeza" sub="Casa dos Avós" />
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.app.goo.gl/3onV8hFseBrsP7Sy8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Ver Localização no Mapa
            </a>
          </div>

          {/* Countdown */}
          <div className="mt-12 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Faltam
            </p>
            <div className="mt-4 flex justify-center gap-3 sm:gap-5">
              {[
                { v: d, l: "Dias" },
                { v: h, l: "Horas" },
                { v: m, l: "Min" },
                { v: s, l: "Seg" },
              ].map((c) => (
                <div
                  key={c.l}
                  className="min-w-[68px] sm:min-w-[88px] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 px-3 py-4 border border-primary/15"
                >
                  <div
                    className="text-3xl sm:text-4xl text-primary font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {String(c.v).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                    {c.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RSVP */}
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/?text=Confirmo%20a%20minha%20presen%C3%A7a%20no%201%C2%BA%20anivers%C3%A1rio%20da%20Luenny%20%F0%9F%8E%89"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-primary-foreground text-sm uppercase tracking-[0.25em] transition-transform hover:scale-[1.03]"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span>Confirmar Presença</span>
              <span>→</span>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              A sua presença é o nosso melhor presente 🎀
            </p>
          </div>

          <footer className="mt-12 pt-8 border-t border-primary/15 text-center">
            <p
              className="text-2xl text-primary"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Esperamos por si!
            </p>
          </footer>
        </article>
      </section>
    </main>
  );
}

function DetailCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="text-center rounded-2xl bg-secondary/40 px-4 py-6 border border-primary/10">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
      <p
        className="mt-2 text-4xl text-primary"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
      </p>
      <p className="mt-1 text-sm text-foreground/70" style={{ fontFamily: "var(--font-script)" }}>
        {sub}
      </p>
    </div>
  );
}
