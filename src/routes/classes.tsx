import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, GraduationCap, Laptop } from "lucide-react";
import { Layout } from "@/components/Layout";
import classesImg from "@/assets/classes.jpg";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Classes & Wimperextensions Cursus | Michaela's Beauty Bar" },
      {
        name: "description",
        content:
          "Word lash artist met de wimperextensions cursus van Michaela's Beauty Bar (vanaf €850) of volg onze online masterclass vanuit huis.",
      },
      { property: "og:title", content: "Classes — Michaela's Beauty Bar" },
      {
        property: "og:description",
        content: "Wimperextensions cursus vanaf €850 en online masterclass.",
      },
      { property: "og:image", content: classesImg },
    ],
  }),
  component: Classes,
});

const inPerson = [
  "Complete theorie & hygiëne",
  "Persoonlijke begeleiding (kleine groepen)",
  "Werken met classic & volume technieken",
  "Oefenmateriaal & starterskit",
  "Certificaat na afronding",
];




function Classes() {
  return (
    <Layout>
      <section className="container-x grid items-center gap-12 py-16 md:grid-cols-2 md:py-20">
        <div>
          <p className="eyebrow">Classes</p>
          <h1 className="mt-4 text-5xl text-primary md:text-6xl">Leer het vak bij ons</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Wil je zelf aan de slag als lash artist? Of je nu helemaal nieuw bent of je skills wil
            aanscherpen — wij delen graag alles wat we weten.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-lg">
          <img
            src={classesImg}
            alt="Wimperextensions cursus bij Michaela's Beauty Bar"
            width={1500}
            height={1100}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      <section className="container-x grid gap-6 pb-8 md:grid-cols-2">
        <div className="flex flex-col rounded-[2rem] border border-border bg-card p-8">
          <GraduationCap className="h-9 w-9 text-primary" />
          <h2 className="mt-4 text-3xl text-primary">Wimperextensions cursus</h2>
          <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
            Op locatie · vanaf €850
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Een complete opleiding waarin je alles leert om zelf prachtige sets te zetten — van
            theorie tot praktijk, met persoonlijke aandacht.
          </p>
          <ul className="mt-6 space-y-3">
            {inPerson.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Aanmelden &amp; info <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col rounded-[2rem] border border-border bg-secondary/50 p-8">
          <Laptop className="h-9 w-9 text-primary" />
          <h2 className="mt-4 text-3xl text-primary">Online masterclass</h2>
          <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
            Vanuit huis · eigen tempo
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Liever thuis leren? In onze online masterclass nemen we je mee in onze werkwijze met
            heldere video&apos;s die je zo vaak kunt terugkijken als je wilt.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3 text-sm text-foreground/90">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Volg op je eigen tempo,
              vanuit huis
            </li>
            <li className="flex items-start gap-3 text-sm text-foreground/90">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Stap-voor-stap video&apos;s
            </li>
            <li className="flex items-start gap-3 text-sm text-foreground/90">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Tips &amp; tricks van het
              team
            </li>
            <li className="flex items-start gap-3 text-sm text-foreground/90">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Levenslang toegang tot de
              lessen
            </li>
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Vraag de masterclass aan <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
