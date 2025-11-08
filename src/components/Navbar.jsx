import { useState } from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-emerald-950/70 text-emerald-50 border-b border-emerald-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-emerald-700/40 border border-amber-400/50" />
            <span className="font-semibold tracking-widest text-amber-300 uppercase">Dakshin & Co.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#menu" className="hover:text-amber-300 transition">Menu</a>
            <a href="#story" className="hover:text-amber-300 transition">Our Story</a>
            <a href="#reserve" className="hover:text-amber-300 transition">Reservations</a>
          </nav>

          <div className="hidden md:flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-amber-200/90">
              <Phone size={16} />
              <span>+1 (555) 016-9090</span>
            </div>
            <div className="flex items-center gap-1 text-amber-200/90">
              <MapPin size={16} />
              <span>Heritage Row, Old Town</span>
            </div>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded border border-emerald-700/70 text-emerald-100 hover:bg-emerald-800/50">
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-amber-300"></span>
              <span className="block h-0.5 w-6 bg-amber-300"></span>
              <span className="block h-0.5 w-6 bg-amber-300"></span>
            </div>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-emerald-800/60">
            <div className="flex flex-col gap-3">
              <a onClick={() => setOpen(false)} href="#menu" className="py-2">Menu</a>
              <a onClick={() => setOpen(false)} href="#story" className="py-2">Our Story</a>
              <a onClick={() => setOpen(false)} href="#reserve" className="py-2">Reservations</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
