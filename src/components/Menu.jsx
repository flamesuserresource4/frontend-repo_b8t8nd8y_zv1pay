export default function Menu() {
  const specials = [
    {
      title: 'Madras Masala Dosa',
      desc: 'Golden crisp crepe of fermented rice & lentils, filled with spiced potato, served with coconut & tomato chutneys and sambar.',
      price: '₹ 280',
      badge: 'House Special'
    },
    {
      title: 'Chettinad Pepper Chicken',
      desc: 'Roasted black pepper and curry leaf aroma, stone-ground masalas, and a velvety reduction.',
      price: '₹ 520'
    },
    {
      title: 'Malabar Prawn Curry',
      desc: 'Coconut milk, kokum tang, and tempered mustard — a coastal classic.',
      price: '₹ 740'
    },
    {
      title: 'Podi Idli with Ghee',
      desc: 'Mini idlis tossed in gunpowder and warm ghee — simple, nostalgic, addictive.',
      price: '₹ 240'
    }
  ];

  return (
    <section id="menu" className="bg-emerald-950 text-emerald-50 border-t border-emerald-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl md:text-5xl text-amber-200">The Menu</h2>
          <p className="mt-4 text-emerald-100/90">Regional staples, time-honoured techniques, ingredients sourced with reverence. South Indian, without compromise.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {specials.map((item) => (
            <div key={item.title} className="p-6 rounded-lg border border-emerald-800 bg-emerald-900/40 hover:bg-emerald-900/60 transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl text-amber-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-emerald-100/80">{item.desc}</p>
                </div>
                <div className="text-amber-300 font-semibold whitespace-nowrap">{item.price}</div>
              </div>
              {item.badge && (
                <span className="inline-block mt-4 text-xs tracking-widest uppercase text-amber-300/90 border border-amber-300/50 px-2 py-1 rounded">{item.badge}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
