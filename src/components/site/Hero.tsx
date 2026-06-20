import { useState, useEffect, useRef } from "react";
import mountainHeroImg from "@/assets/mountain-hero.png";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export function Hero() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Trigger once, no loop
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const letters = "TRIPLIO".split("");

  return (
    <section id="top" className="relative min-h-screen pt-24 pb-8 md:pt-0 md:pb-0 md:h-[839px] w-full flex flex-col md:block overflow-hidden bg-slate-950">
      {/* Hero Background Image - Base Layer (Sky & Back Mountains) */}
      <div className="absolute inset-0 z-0 scale-110" data-parallax="0.3">
        <img
          alt="Mountain Hero"
          className="w-full h-full object-cover animate-[pulse_10s_ease-in-out_infinite]"
          src={mountainHeroImg}
        />
        {/* Darker Gradients to blend background and guarantee readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/45 to-primary/95"></div>
      </div>

      {/* Centered Giant Word - Watermark Layer with thicker high-contrast outline */}
      <h1
        ref={containerRef}
        className="absolute left-1/2 top-[22%] -translate-x-1/2 -translate-y-1/2 w-full text-center font-display-xl font-extrabold text-[15vw] leading-none uppercase tracking-[-0.04em] select-none z-10 pointer-events-none hidden md:flex justify-center overflow-hidden"
      >
        {letters.map((char, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              animation: isIntersecting
                ? `drop-blur-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s forwards`
                : "none",
              opacity: 0,
              color: "rgba(255, 255, 255, 0.08)",
              WebkitTextStroke: "2.5px rgba(255, 255, 255, 0.65)",
            }}
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Hero overlay content */}
      <div
        className="relative md:absolute md:left-0 md:right-0 md:mx-auto md:bottom-[240px] z-20 w-full max-w-container-max px-margin-mobile md:px-margin-desktop text-left md:text-center animate-hero-text mt-auto mb-8 md:mt-0 md:mb-0"
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-12 text-left">
          <div className="max-w-md">
            <h2 className="font-headline-lg text-headline-lg font-bold text-white text-shadow-lg leading-tight mb-4">
              Uncover the World's Natural Wonders.
            </h2>
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-surface-container">
                  <img
                    alt="User"
                    className="w-full h-full object-cover"
                    src={avatar1}
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-surface-container">
                  <img
                    alt="User"
                    className="w-full h-full object-cover"
                    src={avatar2}
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-surface-container">
                  <img
                    alt="User"
                    className="w-full h-full object-cover"
                    src={avatar3}
                  />
                </div>
              </div>
              <p className="text-white font-label-bold text-shadow-sm">300+ Iconic Spots Included</p>
            </div>
          </div>
          <div className="max-w-sm">
            <p className="text-white/95 text-body-md font-medium leading-relaxed text-shadow-sm">
              Discover Nature's Finest Places, breathtaking landscapes, untouched beauty, and nature at its purest. Discover the most pristine, high-end destinations across the globe.
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar Floating */}
      <div
        className="relative md:absolute md:bottom-12 md:left-0 md:right-0 md:mx-auto w-full max-w-4xl px-margin-mobile z-20 animate-hero-search mb-4 md:mb-0"
      >
        <div className="bg-white rounded-3xl md:rounded-full p-4 md:p-2 shadow-2xl flex flex-col md:flex-row items-center gap-4 md:gap-2">
          <div className="flex-1 px-6 md:px-8 py-1 md:py-2 border-b md:border-b-0 md:border-r border-outline-variant/20 flex flex-col w-full md:w-auto pb-3 md:pb-2">
            <label className="text-[10px] uppercase tracking-widest text-outline font-bold mb-1 md:mb-0">Location</label>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
              <input
                className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-semibold placeholder:text-outline-variant w-full outline-none text-sm md:text-base"
                placeholder="Bali, Indonesia"
                defaultValue="Bali, Indonesia"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 px-6 md:px-8 py-1 md:py-2 border-b md:border-b-0 md:border-r border-outline-variant/20 flex flex-col w-full md:w-auto pb-3 md:pb-2">
            <label className="text-[10px] uppercase tracking-widest text-outline font-bold mb-1 md:mb-0">Date</label>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-secondary">calendar_today</span>
              <input
                className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-semibold placeholder:text-outline-variant w-full outline-none text-sm md:text-base"
                placeholder="Sunday, 15 Aug 2024"
                defaultValue="Sunday, 15 Aug 2024"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 px-6 md:px-8 py-1 md:py-2 flex flex-col w-full md:w-auto pb-3 md:pb-0">
            <label className="text-[10px] uppercase tracking-widest text-outline font-bold mb-1 md:mb-0">Guest</label>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-secondary">group</span>
              <select className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-semibold cursor-pointer outline-none w-full text-sm md:text-base">
                <option>2 People</option>
                <option>4 People</option>
                <option>Family</option>
              </select>
            </div>
          </div>
          <button className="bg-primary text-on-primary px-8 md:px-10 py-3.5 md:py-4 rounded-full font-label-bold transition-all hover:scale-102 cursor-pointer w-full md:w-auto text-sm md:text-base shrink-0">
            Book schedule
          </button>
        </div>
      </div>
    </section>
  );
}
