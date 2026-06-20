import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Instagram, Facebook } from "lucide-react";
import { Layout } from "@/components/Layout";
import { site } from "@/lib/site";
import buildingAsset from "@/assets/mbbuiten.png.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Michaela's Beauty Bar Amsterdam Noord" },
      {
        name: "description",
        content:
          "Neem contact op met Michaela's Beauty Bar in Amsterdam Noord via WhatsApp, telefoon of e-mail. Johan van Hasseltweg 112, 1022 WZ Amsterdam.",
      },
      { property: "og:title", content: "Contact — Michaela's Beauty Bar" },
      {
        property: "og:description",
        content: "Bereik ons via WhatsApp, telefoon of e-mail in Amsterdam Noord.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <section className="container-x py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-5xl text-primary md:text-6xl">Even contact?</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Neem gerust contact met ons op via e-mail of WhatsApp. We helpen je graag met vragen
            over behandelingen of de classes.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm uppercase tracking-widest text-muted-foreground">
                  WhatsApp
                </span>
                <span className="text-lg text-primary">{site.phone}</span>
              </span>
            </a>

            <a
              href={site.phoneHref}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm uppercase tracking-widest text-muted-foreground">
                  Bel ons
                </span>
                <span className="text-lg text-primary">{site.phone}</span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm uppercase tracking-widest text-muted-foreground">
                  E-mail
                </span>
                <span className="text-lg text-primary">{site.email}</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm uppercase tracking-widest text-muted-foreground">
                  Adres
                </span>
                <span className="text-lg text-primary">{site.address.street}</span>
                <span className="block text-sm text-muted-foreground">
                  {site.address.zip} · {site.address.region}
                </span>
              </span>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-lg">
            <img
              src={buildingAsset.url}
              alt="Michaela's Beauty Bar in Amsterdam Noord"
              loading="lazy"
              className="h-72 w-full object-cover"
            />
            <iframe
              title="Locatie Michaela's Beauty Bar"
              className="h-72 w-full border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=Johan%20van%20Hasseltweg%20112%2C%201022%20WZ%20Amsterdam&output=embed"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
