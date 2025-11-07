import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium">Wallpaper Prompt</p>
          <p className="text-xs text-zinc-500">A curated collection of AI art prompts and graphic assets.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
