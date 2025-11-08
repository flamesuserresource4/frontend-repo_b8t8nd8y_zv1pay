export default function Story() {
  return (
    <section id="story" className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl text-amber-200">Our Story</h2>
            <p className="mt-6 text-emerald-100/90 leading-relaxed">
              Born out of a family kitchen in 1954, our recipes carry the hush of old verandas, the clink of brassware, and the comfort of filter coffee at dawn. We cook slow, season with restraint, and let heritage speak.
            </p>
            <p className="mt-4 text-emerald-100/90 leading-relaxed">
              From temple-town tiffins to coastal feasts, our cuisine is a love letter to the South — refined, soulful, and quietly luxurious.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-emerald-800 bg-emerald-900/40">
            <div className="aspect-[4/3] w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI0OTY0MjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="p-3 rounded border border-emerald-800/60 bg-emerald-900/30">
                <div className="font-serif text-amber-200 text-xl">1954</div>
                <div className="text-emerald-100/80">Established</div>
              </div>
              <div className="p-3 rounded border border-emerald-800/60 bg-emerald-900/30">
                <div className="font-serif text-amber-200 text-xl">100%</div>
                <div className="text-emerald-100/80">Stone-ground</div>
              </div>
              <div className="p-3 rounded border border-emerald-800/60 bg-emerald-900/30">
                <div className="font-serif text-amber-200 text-xl">7</div>
                <div className="text-emerald-100/80">Regional menus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
