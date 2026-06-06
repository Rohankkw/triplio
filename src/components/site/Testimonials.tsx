import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const stories = [
  {
    avatar: a1,
    name: "Anaïs Mehta",
    role: "Mumbai · returned from Udaipur",
    quote:
      "They arranged a private boat at dawn on Lake Pichola, with our chai already steeping. Twelve trips later, I still cry telling the story.",
  },
  {
    avatar: a2,
    name: "Vikram Iyer",
    role: "Bengaluru · returned from Ladakh",
    quote:
      "Every detail — even the altitude headache we didn't get — was anticipated. This is the only travel team I trust with my parents.",
  },
  {
    avatar: a3,
    name: "Rohan & Sameer",
    role: "Delhi · returned from Kerala",
    quote:
      "We asked for 'quiet'. They gave us a wooden bungalow on a lagoon, a chef who cooked from a single banana leaf, and an empty beach at sunset.",
  },
];

export function Testimonials() {
  return (
    <section id="stories" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-gold/80">
            <span className="h-px w-10 bg-gold/60" /> The Guestbook
          </p>
          <h2 className="font-display text-5xl font-light leading-tight md:text-6xl">
            Travellers who became <span className="italic text-gradient-gold">family.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((s, i) => (
            <figure
              key={s.name}
              className="reveal glass-panel relative flex flex-col gap-6 rounded-lg p-8"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="absolute right-6 top-2 font-display text-7xl text-gold/30">"</span>
              <blockquote className="font-display text-2xl leading-snug text-ivory/90">
                {s.quote}
              </blockquote>
              <div className="hairline h-px w-16" />
              <figcaption className="flex items-center gap-4">
                <img
                  src={s.avatar}
                  alt={s.name}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-14 w-14 rounded-full border border-gold/40 object-cover"
                />
                <div>
                  <div className="font-display text-lg text-ivory">{s.name}</div>
                  <div className="text-xs uppercase tracking-widest text-gold/80">{s.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
