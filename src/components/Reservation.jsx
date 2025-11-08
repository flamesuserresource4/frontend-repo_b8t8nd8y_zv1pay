import { useState } from 'react';

export default function Reservation() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: 2 });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="reserve" className="bg-emerald-950 text-emerald-50 border-t border-emerald-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl text-amber-200">Reserve a Table</h2>
            <p className="mt-4 text-emerald-100/90">We hold limited covers to preserve an intimate dining room. Book ahead for a leisurely meal.</p>
            <ul className="mt-6 space-y-2 text-sm text-emerald-100/80 list-disc list-inside">
              <li>Lunch: 12:00 PM – 3:00 PM</li>
              <li>Dinner: 7:00 PM – 11:00 PM</li>
              <li>Dress code: Smart casual</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-emerald-800 bg-emerald-900/40">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-emerald-100/80">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full px-3 py-2 rounded bg-emerald-950 border border-emerald-800 text-emerald-50 focus:outline-none focus:ring-1 focus:ring-amber-300" />
              </div>
              <div>
                <label className="text-sm text-emerald-100/80">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full px-3 py-2 rounded bg-emerald-950 border border-emerald-800 text-emerald-50 focus:outline-none focus:ring-1 focus:ring-amber-300" />
              </div>
              <div>
                <label className="text-sm text-emerald-100/80">Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required className="mt-1 w-full px-3 py-2 rounded bg-emerald-950 border border-emerald-800 text-emerald-50 focus:outline-none focus:ring-1 focus:ring-amber-300" />
              </div>
              <div>
                <label className="text-sm text-emerald-100/80">Time</label>
                <input type="time" name="time" value={form.time} onChange={handleChange} required className="mt-1 w-full px-3 py-2 rounded bg-emerald-950 border border-emerald-800 text-emerald-50 focus:outline-none focus:ring-1 focus:ring-amber-300" />
              </div>
              <div>
                <label className="text-sm text-emerald-100/80">Guests</label>
                <select name="guests" value={form.guests} onChange={handleChange} className="mt-1 w-full px-3 py-2 rounded bg-emerald-950 border border-emerald-800 text-emerald-50 focus:outline-none focus:ring-1 focus:ring-amber-300">
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
            <button type="submit" className="mt-6 w-full px-4 py-3 rounded border border-amber-400 bg-amber-300/10 text-amber-200 hover:bg-amber-300/20 transition">Request Booking</button>
            {sent && <p className="mt-3 text-emerald-100/80">Thank you. Our concierge will call to confirm.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
