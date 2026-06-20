import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/behandelingen", label: "Behandelingen" },
  { to: "/classes", label: "Classes" },
  { to: "/contact", label: "Contact" },
  { to: "/policy", label: "Policy" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="wordmark text-lg text-primary" onClick={() => setOpen(false)}>
          Michaela&apos;s
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary [&.active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/boeken"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Boek nu
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-wide text-foreground/80 [&.active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/boeken"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium uppercase tracking-widest text-primary-foreground"
            >
              Boek nu
            </Link>
            <a href={site.phoneHref} className="py-3 text-sm text-muted-foreground">
              {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
