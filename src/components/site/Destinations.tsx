import saharaDawnImg from "@/assets/sahara-dawn.png";
import oasisMirageImg from "@/assets/oasis-mirage.png";
import crimsonDunesImg from "@/assets/crimson-dunes.png";

const destinations = [
  {
    name: "Sahara Dawn",
    price: "$ 85 / per person",
    img: saharaDawnImg,
    alt: "Sahara",
  },
  {
    name: "Oasis Mirage",
    price: "$ 55 / per person",
    img: oasisMirageImg,
    alt: "Oasis",
  },
  {
    name: "Crimson Dunes",
    price: "$ 60 / per person",
    img: crimsonDunesImg,
    alt: "Dunes",
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-white dark:bg-primary text-slate-900 dark:text-white transition-colors duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6">
        <div className="space-y-2">
          <span className="text-secondary dark:text-secondary-fixed-dim font-label-bold tracking-widest uppercase text-[12px]">Our Destination</span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface dark:text-white leading-tight">
            Your Journey to the Perfect <br className="hidden sm:inline" />Destination Begins Here
          </h3>
        </div>
        <button className="flex items-center gap-3 font-label-bold group cursor-pointer">
          <span className="border border-outline-variant dark:border-white/10 px-6 py-3 rounded-full group-hover:bg-primary dark:group-hover:bg-white group-hover:text-on-primary dark:group-hover:text-primary transition-all">
            See All Destination
          </span>
          <span className="w-12 h-12 rounded-full bg-primary dark:bg-white text-on-primary dark:text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">north_east</span>
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {destinations.map((d) => (
          <div key={d.name} className="group relative aspect-[3/4] rounded-[32px] overflow-hidden cursor-pointer">
            <img
              alt={d.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={d.img}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute top-6 right-6">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-transform group-hover:rotate-45 duration-300">
                <span className="material-symbols-outlined text-[20px]">north_east</span>
              </div>
            </div>
            <div className="absolute bottom-8 left-8">
              <h4 className="text-on-primary font-headline-md text-headline-md">{d.name}</h4>
              <p className="text-on-primary/70 font-label-bold">{d.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <button className="w-10 h-10 rounded-full border border-outline-variant dark:border-white/10 flex items-center justify-center bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-surface-container transition-all cursor-pointer">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 rounded-full border border-outline-variant dark:border-white/10 flex items-center justify-center bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-surface-container transition-all cursor-pointer">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </section>
  );
}
