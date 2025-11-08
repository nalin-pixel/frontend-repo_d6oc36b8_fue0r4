import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[72vh] md:h-[80vh] overflow-hidden">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient frosting so text stays legible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-sm font-medium shadow-sm">
              <Star className="h-4 w-4" />
              Curated AI art & graphic assets
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900">
              Wallpapers, prompts, and design elements that inspire
            </h1>
            <p className="mt-4 text-lg md:text-xl text-zinc-700">
              Explore a modern library of high‑resolution AI wallpapers and meticulously crafted prompt recipes. Download assets or copy prompts to spark your next creation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#gallery" className="inline-flex items-center gap-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white px-5 py-3 font-semibold shadow-lg shadow-rose-600/20 transition">
                <Rocket className="h-5 w-5" />
                Explore Gallery
              </a>
              <a href="#prompts" className="inline-flex items-center gap-2 rounded-lg bg-white/80 hover:bg-white text-zinc-900 ring-1 ring-zinc-200 px-5 py-3 font-semibold backdrop-blur-md transition">
                Browse Prompts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
