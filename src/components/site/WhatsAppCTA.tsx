export function WhatsAppCTA() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-navy via-midnight to-navy p-10 md:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-saffron/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid items-center gap-12 md:grid-cols-2">
            <div className="reveal">
              <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold/80">
                <span className="h-px w-10 bg-gold/60" /> Speak with a Curator
              </p>
              <h3 className="font-display text-4xl font-light leading-tight text-ivory md:text-5xl">
                Your journey begins with a <span className="italic text-gradient-gold">message.</span>
              </h3>
              <p className="mt-6 max-w-md text-ivory/70">
                Reach a senior travel designer on WhatsApp — typical reply in
                under 14 minutes, 9 AM to 11 PM IST.
              </p>
            </div>

            <div className="reveal flex flex-col gap-4">
              <a
                href="https://wa.me/919810000000?text=Hello%2C%20I'd%20like%20to%20plan%20a%20voyage."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-full bg-gradient-to-r from-saffron to-gold px-7 py-5 font-semibold text-midnight transition hover:shadow-[0_20px_60px_-15px_oklch(0.78_0.17_62_/_0.6)]"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-midnight/10 text-lg">
                    ✦
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.3em] opacity-70">
                      WhatsApp Concierge
                    </span>
                    <span className="block text-base">+91 98100 00000</span>
                  </span>
                </span>
                <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="mailto:atelier@maharajavoyages.in"
                className="group flex items-center justify-between rounded-full border border-ivory/20 bg-midnight/40 px-7 py-5 text-ivory backdrop-blur transition hover:border-gold/60"
              >
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-gold/80">
                    Or write to the Atelier
                  </span>
                  <span className="block text-base">atelier@maharajavoyages.in</span>
                </span>
                <span className="text-xl text-ivory/60 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-7xl border-t border-border px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-ivory/50">
          <p>© 1974 – 2026 Mahārāja Voyages Pvt. Ltd. · Mumbai · Jaipur · London</p>
          <p className="uppercase tracking-[0.3em] text-gold/70">IATA · ASTA · Virtuoso</p>
        </div>
      </footer>
    </section>
  );
}
