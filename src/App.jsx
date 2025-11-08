import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Story from './components/Story';
import Reservation from './components/Reservation';

function App() {
  return (
    <div className="min-h-screen bg-emerald-950 font-sans text-emerald-50">
      <Navbar />
      <Hero />
      <Menu />
      <Story />
      <Reservation />
      <footer className="border-t border-emerald-800/60 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-emerald-100/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Dakshin & Co. All rights reserved.</p>
          <p className="text-amber-200/90">Old money charm. South Indian heart.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
