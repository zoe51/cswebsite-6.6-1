import { Hero } from './components/Hero';
import { Discovery } from './components/Discovery';
import { Community } from './components/Community';
import { Vision } from './components/Vision';
import { Footer } from './components/Footer';

function Header() {
  return (
    <header className="flex justify-between items-center px-8 md:px-16 h-20 border-b-2 border-black bg-white sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 bg-brand"></div>
        <span className="font-black tracking-tighter text-xl uppercase">Spark Lab / 创客厅</span>
      </div>
      <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em]">
        <a href="#" className="hover:text-brand transition-colors">Philosophy</a>
        <a href="#" className="hover:text-brand transition-colors">Spaces</a>
        <a href="#" className="hover:text-brand transition-colors">Community</a>
        <a href="#" className="text-brand">Contact</a>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-black overflow-x-hidden flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Discovery />
        <Community />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}
