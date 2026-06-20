import { useEffect, useState } from "react";

export function Nav() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkTheme = document.documentElement.classList.contains("dark") || localStorage.getItem("theme") === "dark";
    setIsDark(isDarkTheme);
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max bg-white/15 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-on-primary">language</span>
        <span className="text-headline-md font-headline-md font-extrabold tracking-tighter text-on-primary">triplio</span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a className="font-label-bold text-label-bold text-on-primary border-b-2 border-secondary-container pb-1" href="#top">Home</a>
        <a className="font-label-bold text-label-bold text-on-primary/70 hover:text-on-primary transition-colors" href="#destinations">Destination</a>
        <a className="font-label-bold text-label-bold text-on-primary/70 hover:text-on-primary transition-colors" href="#why-choose-us">About</a>
        <a className="font-label-bold text-label-bold text-on-primary/70 hover:text-on-primary transition-colors" href="#why-choose-us">Testimonials</a>
        <a className="font-label-bold text-label-bold text-on-primary/70 hover:text-on-primary transition-colors" href="#why-choose-us">FAQ</a>
        <a className="font-label-bold text-label-bold text-on-primary/70 hover:text-on-primary transition-colors" href="#why-choose-us">Blog</a>
      </nav>
      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-on-primary hover:bg-white/20 transition-all duration-300 cursor-pointer"
          aria-label="Toggle Theme"
        >
          <span className="material-symbols-outlined text-[18px] md:text-[20px]">
            {isDark ? "light_mode" : "dark_mode"}
          </span>
        </button>

        <button className="bg-secondary-container text-on-secondary-container font-label-bold text-xs md:text-label-bold px-4 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2 cursor-pointer shrink-0">
          <span className="hidden sm:inline">Book schedule</span>
          <span className="sm:hidden">Book</span>
          <span className="material-symbols-outlined text-[16px] md:text-[18px]">north_east</span>
        </button>
      </div>
    </header>
  );
}
