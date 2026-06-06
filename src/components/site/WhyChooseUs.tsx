export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-section-gap bg-primary text-on-primary relative overflow-hidden">
      {/* Abstract Glows */}
      <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary-container/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto text-center mb-16">
        <h3 className="font-headline-lg text-headline-lg">Why Choose Triplio?</h3>
        <p className="text-on-primary/60 max-w-2xl mx-auto mt-4 text-body-lg">
          We combine technological precision with a human touch to curate travel experiences that transcend the ordinary.
        </p>
      </div>

      <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="glass p-12 rounded-[40px] group hover:bg-white/20 transition-all duration-500">
          <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center mb-8 shadow-lg shadow-secondary/20">
            <span className="material-symbols-outlined text-[32px]">verified_user</span>
          </div>
          <h4 className="font-headline-md text-headline-md mb-4">Expert Guides</h4>
          <p className="text-on-primary/60 leading-relaxed">Our local experts provide deep insights into hidden gems that aren't on any standard tourist map.</p>
        </div>

        {/* Card 2 */}
        <div className="glass p-12 rounded-[40px] group hover:bg-white/20 transition-all duration-500">
          <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center mb-8 shadow-lg shadow-secondary/20">
            <span className="material-symbols-outlined text-[32px]">payments</span>
          </div>
          <h4 className="font-headline-md text-headline-md mb-4">Best Price</h4>
          <p className="text-on-primary/60 leading-relaxed">Luxury shouldn't be unreachable. We negotiate exclusive rates with our premium partners just for you.</p>
        </div>

        {/* Card 3 */}
        <div className="glass p-12 rounded-[40px] group hover:bg-white/20 transition-all duration-500">
          <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center mb-8 shadow-lg shadow-secondary/20">
            <span className="material-symbols-outlined text-[32px]">3d_rotation</span>
          </div>
          <h4 className="font-headline-md text-headline-md mb-4">Immersive View</h4>
          <p className="text-on-primary/60 leading-relaxed">Experience your destination in full 3D fidelity before you even book your flight ticket.</p>
        </div>
      </div>
    </section>
  );
}
