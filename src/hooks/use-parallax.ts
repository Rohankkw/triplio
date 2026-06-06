import { useEffect } from "react";

// Simple rAF-driven parallax for elements with data-parallax="<speed>"
export function useParallax() {
  useEffect(() => {
    let raf = 0;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const update = () => {
      const y = window.scrollY;
      for (const el of els) {
        const s = parseFloat(el.dataset.parallax || "0.2");
        el.style.transform = `translate3d(0, ${y * s}px, 0)`;
      }
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
