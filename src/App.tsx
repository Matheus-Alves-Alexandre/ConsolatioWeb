import React from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-dark">
      <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-blackletter text-2xl text-gold">Consolatio</h1>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            <Navigation />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-dark/95 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Navigation />
            </nav>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;