import { Download } from 'lucide-react';

const items = [
  {
    title: 'Peach Grain Blob',
    tag: 'Abstract Wallpaper',
    img: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92a6a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Neon Grid Horizon',
    tag: 'Vaporwave',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Cutout Collage',
    tag: 'Paper Art',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Iridescent Sphere',
    tag: '3D Render',
    img: 'https://images.unsplash.com/photo-1544672259-902fc9d91d06?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function AssetGallery() {
  return (
    <section id="gallery" className="py-16 md:py-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured assets</h2>
          <p className="text-zinc-600 mt-1">High‑res wallpapers and design elements you can download.</p>
        </div>
        <a href="#" className="text-rose-600 font-semibold hover:underline">View all</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <figure key={i} className="group rounded-xl overflow-hidden border border-zinc-200 bg-white shadow-sm">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src={item.img} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <figcaption className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold leading-tight">{item.title}</p>
                <p className="text-xs text-zinc-500">{item.tag}</p>
              </div>
              <a
                className="inline-flex items-center gap-2 rounded-md bg-rose-600 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-rose-700 transition"
                href={item.img}
                download
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
