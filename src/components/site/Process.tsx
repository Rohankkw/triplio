const steps = [
  {
    n: "I",
    title: "The Conversation",
    body:
      "A complimentary call with a senior travel curator. We listen for the journey hidden inside your wishlist — the textures, the silences, the moments worth flying for.",
  },
  {
    n: "II",
    title: "The Atelier",
    body:
      "Within 72 hours you receive a hand-illustrated itinerary — palaces, private guides, hidden temples, chef's-table dinners. Every hour designed, none scheduled.",
  },
  {
    n: "III",
    title: "The Concierge",
    body:
      "A dedicated 24/7 manager travels with you in spirit — meeting flights, anticipating monsoons, arranging the unscheduled detour you didn't know you needed.",
  },
  {
    n: "IV",
    title: "The Return",
    body:
      "You come home with a leather-bound journal of the voyage and an open invitation: every guest becomes part of our family for life.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto mb-24 max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-gold/80">
            <span className="h-px w-10 bg-gold/60" /> The Craft
          </p>
          <h2 className="font-display text-5xl font-light leading-tight md:text-6xl">
            How we <span className="italic text-gradient-gold">compose</span> a journey.
          </h2>
        </div>

        <ol className="space-y-24">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`reveal grid items-center gap-12 md:grid-cols-12 ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="md:col-span-5 md:[direction:ltr]">
                <div className="relative inline-grid h-32 w-32 place-items-center rounded-full border border-gold/40">
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-saffron/15 to-transparent" />
                  <span className="relative font-display text-5xl text-gradient-gold">
                    {s.n}
                  </span>
                </div>
              </div>
              <div className="md:col-span-7 md:[direction:ltr]">
                <h3 className="font-display text-4xl font-light text-ivory md:text-5xl">
                  {s.title}
                </h3>
                <div className="hairline mt-5 h-px w-24" />
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 md:text-lg">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
