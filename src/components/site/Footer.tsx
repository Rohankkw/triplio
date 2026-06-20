export function Footer() {
  return (
    <>
      <footer className="w-full py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 border-t border-white/5 bg-primary text-on-primary">
        <div className="space-y-6">
          <span className="text-headline-md font-headline-md font-bold text-on-primary">triplio</span>
          <p className="max-w-xs text-on-primary/50 text-body-md">
            Your portal to the world's most breathtaking natural landscapes and luxury escapes.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all" href="#">
              <span className="material-symbols-outlined text-[18px]">public</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all" href="#">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 w-full md:w-auto">
          <div className="space-y-4">
            <p className="font-label-bold text-label-bold uppercase tracking-widest text-sm">Navigation</p>
            <ul className="space-y-2">
              <li><a className="text-on-primary/60 hover:text-on-primary transition-all hover:underline" href="#top">Home</a></li>
              <li><a className="text-on-primary/60 hover:text-on-primary transition-all hover:underline" href="#destinations">Destination</a></li>
              <li><a className="text-on-primary/60 hover:text-on-primary transition-all hover:underline" href="#why-choose-us">About</a></li>
              <li><a className="text-on-primary/60 hover:text-on-primary transition-all hover:underline" href="#packages">Blog</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-label-bold text-label-bold uppercase tracking-widest text-sm">Support</p>
            <ul className="space-y-2">
              <li><a className="text-on-primary/60 hover:text-on-primary transition-all hover:underline" href="#testimonials">Testimonials</a></li>
              <li><a className="text-on-primary/60 hover:text-on-primary transition-all hover:underline" href="#faq">FAQ</a></li>
              <li><a className="text-on-primary/60 hover:text-on-primary transition-all hover:underline" href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="space-y-4 sm:col-span-3 md:col-span-1">
            <p className="font-label-bold text-label-bold uppercase tracking-widest text-sm">Newsletter</p>
            <div className="flex flex-col gap-4">
              <p className="text-on-primary/60 text-[14px]">Subscribe to get exclusive travel offers.</p>
              <div className="flex">
                <input
                  className="bg-white/10 border-none rounded-l-xl px-4 py-3 focus:ring-1 focus:ring-secondary-container text-white placeholder:text-white/30 w-full outline-none"
                  placeholder="Your email"
                  type="email"
                />
                <button className="bg-secondary-container px-6 rounded-r-xl cursor-pointer">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-primary py-8 px-margin-mobile md:px-margin-desktop border-t border-white/5 text-center text-on-primary/30 text-[12px] font-label-bold">
        © 2024 Triplio Luxury Travel. All rights reserved. <span className="mx-2">•</span> Design by <a href="https://saaryana.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">saaryana</a>
      </div>
    </>
  );
}
