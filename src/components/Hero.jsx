import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-emerald-50">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 20%, #fbbf24 0, transparent 35%), radial-gradient(circle at 80% 30%, #065f46 0, transparent 25%)'}}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="tracking-[0.35em] text-amber-300/90 uppercase text-xs mb-4">Since 1954</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight text-amber-200">
            Old Money Elegance meets South Indian Soul
          </h1>
          <p className="mt-6 text-emerald-100/90 max-w-xl">
            A culinary homage to the Coasts of the South — delicate, spice-forward, and lovingly slow-cooked. Experience tiffin by dawn and thali by dusk, served with quiet luxury.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#reserve" className="px-6 py-3 rounded border border-amber-400 bg-amber-300/10 text-amber-200 hover:bg-amber-300/20 transition">Reserve a Table</a>
            <a href="#menu" className="px-6 py-3 rounded border border-emerald-700 text-emerald-100 hover:bg-emerald-800/50 transition">View Menu</a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-amber-200/90">
            <Star className="fill-amber-300 text-amber-300" size={16} />
            <span className="text-sm">House Special: Madras Masala Dosa with A2 ghee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
