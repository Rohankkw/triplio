import udaipur from "@/assets/dest-udaipur.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";

const packages = [
  {
    img: udaipur,
    name: "Royal Rajasthan",
    nights: "9 Nights · 4 Cities",
    inr: "2,84,000",
    emi: "₹ 23,667 / month · No-cost EMI",
    badge: "Only 3 suites left · Oct",
    perks: ["Taj Lake Palace · Lake-view Suite", "Private vintage car & chauffeur", "Royal heritage dinner at Mehrangarh"],
  },
  {
    img: kerala,
    name: "Kerala in Bloom",
    nights: "7 Nights · Backwaters & Coast",
    inr: "1,92,500",
    emi: "₹ 16,041 / month · No-cost EMI",
    badge: "Monsoon special · Save 18%",
    perks: ["Private double-decker houseboat", "Ayurvedic retreat at Coconut Lagoon", "Sunset chef-table at Marari Beach"],
  },
  {
    img: ladakh,
    name: "Himalayan Silence",
    nights: "10 Nights · Ladakh & Spiti",
    inr: "3,48,000",
    emi: "₹ 29,000 / month · No-cost EMI",
    badge: "Summer window · Jun – Aug",
    perks: ["Glamping by Pangong Tso", "Monastery breakfasts with monks", "Private SUV with high-altitude oxygen"],
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold/80">
              <span className="h-px w-10 bg-gold/60" /> Curated Sojourns
            </p>
            <h2 className="font-display text-5xl font-light leading-tight md:text-6xl">
              Hand-picked voyages, <span className="italic text-gradient-gold">ready to depart.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ivory/60">
            Prices in INR, all-inclusive — flights, palaces, private guides, every taxi, every tip.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((p, i) => (
            <article
              key={p.name}
              className="reveal glass-panel group relative flex flex-col overflow-hidden rounded-lg"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-saffron/60 bg-midnight/60 px-3 py-1 text-[10px] uppercase tracking-widest text-saffron backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse-gold" />
                  {p.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold/80">{p.nights}</p>
                <h3 className="mt-2 font-display text-3xl font-light text-ivory">{p.name}</h3>

                <ul className="mt-5 space-y-2.5 text-sm text-ivory/75">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-gold/60" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="hairline my-6 h-px" />

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-ivory/50">From</p>
                    <p className="font-display text-3xl text-gradient-gold">₹ {p.inr}</p>
                    <p className="mt-1 text-[11px] text-ivory/60">{p.emi}</p>
                  </div>
                  <a
                    href="#contact"
                    className="group/btn inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2.5 text-xs uppercase tracking-widest text-ivory transition hover:border-saffron hover:bg-saffron/10 hover:text-saffron"
                  >
                    Enquire
                    <span className="transition-transform group-hover/btn:translate-x-0.5">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
