import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { treatments } from "@/lib/treatments";

export const Route = createFileRoute("/behandelingen")({
  head: () => ({
    meta: [
      { title: "Behandelingen | Michaela's Beauty Bar Amsterdam Noord" },
      {
        name: "description",
        content:
          "Ontdek alle behandelingen van Michaela's Beauty Bar: lash extensions, brows, toothgems, nails en RF tightening. Gemiddeld 30–45 minuten.",
      },
      { property: "og:title", content: "Behandelingen — Michaela's Beauty Bar" },
      {
        property: "og:description",
        content: "Lash extensions, brows, toothgems, nails en RF tightening in Amsterdam Noord.",
      },
    ],
  }),
  component: Treatments,
});

function Treatments() {
  return (
    <Layout>
      <section className="container-x py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Behandelingen</p>
          <h1 className="mt-4 text-5xl text-primary md:text-6xl">Onze behandelingen</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Elke behandeling is persoonlijk en wordt met aandacht uitgevoerd. De meeste
            behandelingen duren tussen de 30 en 45 minuten.
          </p>
        </div>
      </section>

      <section className="container-x space-y-16 pb-8">
        {treatments.map((t, i) => (
          <article
            key={t.slug}
            className={`grid items-center gap-8 md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-[2rem] shadow-lg">
              <img
                src={t.img}
                alt={t.title}
                width={1000}
                height={1000}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs uppercase tracking-widest text-secondary-foreground">
                <Clock className="h-3.5 w-3.5" /> {t.duration}
              </span>
              <h2 className="mt-4 text-4xl text-primary">{t.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{t.description}</p>
              <Link
                to="/boeken"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary hover:underline"
              >
                Boek deze behandeling <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="container-x pb-8">
        <div className="rounded-[2rem] bg-primary px-8 py-14 text-center text-primary-foreground">
          <h2 className="text-4xl text-primary-foreground">Klaar om te boeken?</h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
            Kies je behandeling en datum in onze online agenda.
          </p>
          <Link
            to="/boeken"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary transition-opacity hover:opacity-90"
          >
            Boek online <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
