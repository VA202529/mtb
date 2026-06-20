import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { Layout } from "@/components/Layout";
import { BookingWidget } from "@/components/BookingWidget";
import { site } from "@/lib/site";

export const Route = createFileRoute("/boeken")({
  head: () => ({
    meta: [
      { title: "Boek online | Michaela's Beauty Bar Amsterdam Noord" },
      {
        name: "description",
        content:
          "Maak eenvoudig online een afspraak bij Michaela's Beauty Bar in Amsterdam Noord voor lashes, brows, toothgems of nails.",
      },
      { property: "og:title", content: "Boek online — Michaela's Beauty Bar" },
      {
        property: "og:description",
        content: "Maak eenvoudig online een afspraak in Amsterdam Noord.",
      },
    ],
  }),
  component: Booking,
});

function Booking() {
  return (
    <Layout>
      <section className="container-x py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Afspraak maken</p>
          <h1 className="mt-4 text-5xl text-primary md:text-6xl">Boek je moment</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Kies hieronder je behandeling, dag en tijd. Je ontvangt direct een bevestiging.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" /> {site.address.street}, {site.address.zip}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" /> Behandeling 30–45 min
          </span>
          <a href={site.phoneHref} className="flex items-center gap-2 hover:text-primary">
            <Phone className="h-4 w-4 text-primary" /> {site.phone}
          </a>
        </div>

        <div className="mt-10">
          <BookingWidget />
        </div>
      </section>
    </Layout>
  );
}
