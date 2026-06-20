import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Sparkles, Star, GraduationCap } from "lucide-react";
import { Layout } from "@/components/Layout";
import { treatments } from "@/lib/treatments";
import { team, site } from "@/lib/site";
import heroImg from "@/assets/hero-lashes.jpg";
import heroPhotoAsset from "@/assets/hero-michaela.png.asset.json";
import aboutImg from "@/assets/about-tools.jpg";
import buildingAsset from "@/assets/mbbuiten.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michaela's Beauty Bar | Lashes, Brows & Nails — Amsterdam Noord" },
      {
        name: "description",
        content:
          "Verwen jezelf bij Michaela's Beauty Bar in Amsterdam Noord. Lash extensions, brows, toothgems & nails. Boek eenvoudig je behandeling online.",
      },
      { property: "og:title", content: "Michaela's Beauty Bar — Amsterdam Noord" },
      {
        property: "og:description",
        content: "Lashes, Brows, Toothgems & Nails in Amsterdam Noord.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow">Beauty bar · Amsterdam Noord</p>
            <h1 className="mt-5 text-5xl leading-[1.05] text-primary md:text-7xl">
              Lashes, brows &amp; nails met liefde gemaakt.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Een rustige plek waar je even helemaal verwend wordt. Lash extensions, brows,
              toothgems en nails — afgestemd op jou.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/boeken"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
              >
                Boek je afspraak <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/behandelingen"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary transition-colors hover:bg-secondary"
              >
                Behandelingen
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Behandeling 30–45 min
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Amsterdam Noord
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src={heroPhotoAsset.url}
                alt="Behandeling bij Michaela's Beauty Bar in Amsterdam Noord"
                width={1600}
                height={1200}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-6 py-4 shadow-lg sm:block">
              <div className="flex items-center gap-1 text-accent-foreground">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-sm font-medium text-primary">Geliefd in Amsterdam Noord</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="container-x py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Onze behandelingen</p>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">Alles voor jouw glow</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Van wakkere wimpers tot een stralende glimlach. Elke behandeling duurt gemiddeld
            30–45 minuten.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <article
              key={t.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={t.img}
                  alt={t.title}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl text-primary">{t.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {t.duration}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.short}</p>
              </div>
            </article>
          ))}
          <Link
            to="/boeken"
            className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-primary p-6 text-center text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Sparkles className="h-8 w-8" />
            <span className="text-2xl font-display">Klaar voor jouw moment?</span>
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest">
              Boek online <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="bg-secondary/50">
        <div className="container-x grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="overflow-hidden rounded-[2rem] shadow-lg">
            <img
              src={aboutImg}
              alt="Beauty tools bij Michaela's Beauty Bar"
              width={1400}
              height={1200}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Over ons</p>
            <h2 className="mt-4 text-4xl text-primary md:text-5xl">
              Een warme plek in Amsterdam Noord
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Michaela&apos;s Beauty Bar is opgericht door Michaela (Lashes by Mickey). Wat begon
              als een passie voor wimpers groeide uit tot een gezellige beauty bar met een fijn,
              ervaren team. Bij ons draait alles om kwaliteit, hygiëne en jij die stralend de deur
              uit gaat.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Naast behandelingen geven we ook lessen: van een complete wimperextensions cursus
              tot een online masterclass.
            </p>
            <Link
              to="/classes"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary hover:underline"
            >
              Bekijk onze classes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Het team</p>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">De handen achter de glow</h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <div className="mx-auto overflow-hidden rounded-2xl border border-border">
                <img
                  src={m.img}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-2xl text-primary">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Classes CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
              Leer het vak
            </p>
            <h2 className="mt-4 text-4xl text-primary-foreground md:text-5xl">
              Wimperextensions cursus vanaf €850
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-primary-foreground/80">
              Word zelf lash artist met een complete, persoonlijke opleiding. Of volg onze online
              masterclass vanuit huis, in je eigen tempo.
            </p>
            <Link
              to="/classes"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary transition-opacity hover:opacity-90"
            >
              <GraduationCap className="h-4 w-4" /> Meer over de classes
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={buildingAsset.url}
              alt="Michaela's Beauty Bar gebouw in Amsterdam Noord"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
