import Hero from './components/Hero.jsx';
import AssetGallery from './components/AssetGallery.jsx';
import PromptShowcase from './components/PromptShowcase.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 text-zinc-900">
      <Hero />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PromptShowcase />
        <AssetGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
