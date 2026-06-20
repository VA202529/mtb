import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";

function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.5 3.5 3.5 3.7V9c-1.2.1-2.4-.2-3.5-.8v6.6c0 3.4-2.7 5.7-5.7 5.2-2.6-.4-4.3-2.7-4-5.3.3-2.3 2.2-4 4.5-4 .3 0 .6 0 .9.1v2.5c-.3-.1-.6-.2-.9-.2-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V3h2.7Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="wordmark text-xl text-primary">Michaela&apos;s</div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Beauty bar in Amsterdam Noord voor lashes, brows, toothgems &amp; nails. Een rustige
            plek waar je even helemaal verwend wordt.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={site.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <TikTok className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Menu</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/behandelingen" className="hover:text-primary">Behandelingen</Link></li>
            <li><Link to="/boeken" className="hover:text-primary">Boeken</Link></li>
            <li><Link to="/classes" className="hover:text-primary">Classes</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/policy" className="hover:text-primary">Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{site.address.street}<br />{site.address.zip}</span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Michaela&apos;s Beauty Bar — Lashes by Mickey.</p>
          <p>KVK 77398181 · Amazonenstraat 61-1, 1076 LH Amsterdam</p>
        </div>
      </div>
    </footer>
  );
}
