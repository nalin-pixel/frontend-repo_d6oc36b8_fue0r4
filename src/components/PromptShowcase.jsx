import { Copy, Sparkles } from 'lucide-react';
import { useState } from 'react';

const prompts = [
  {
    title: 'Grainy Amorphous Blob on Peach',
    model: 'Stable Diffusion XL',
    text:
      'abstract amorphous blob, grainy film texture, glossy specular highlight, soft peach background, modern digital art, studio lighting, 8k, high detail, minimal composition, by studio ghibli color sensibility, editorial art',
  },
  {
    title: 'Neon Vaporwave Landscape',
    model: 'Midjourney v6',
    text:
      'vaporwave neon sunset, reflective chrome grid, mountains silhouette, pink and cyan glow, cinematic lighting, 32-bit color depth, ultrawide wallpaper, crisp details, analog grain',
  },
  {
    title: 'Paper Cutout Collage',
    model: 'DALL·E 3',
    text:
      'paper cutout collage, layered shapes with torn edges, tactile shadows, vibrant gouache palette, museum poster style, negative space, editorial layout, soft grain texture',
  },
];

export default function PromptShowcase() {
  return (
    <section id="prompts" className="py-16 md:py-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Prompt recipes</h2>
        <div className="inline-flex items-center gap-2 text-rose-600">
          <Sparkles className="h-5 w-5" />
          <span className="font-medium">Curated & copy-ready</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prompts.map((p, i) => (
          <PromptCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

function PromptCard({ title, model, text }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="group relative rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="text-xs text-zinc-500">{model}</p>
        </div>
        <button
          onClick={onCopy}
          className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition border ${
            copied
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : 'bg-zinc-50 text-zinc-700 hover:bg-zinc-100 border-zinc-200'
          }`}
          aria-label="Copy prompt"
        >
          <Copy className="h-4 w-4" /> {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <p className="text-zinc-700 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
