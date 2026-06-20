import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/policy")({
  head: () => ({
    meta: [
      { title: "Policy & Voorwaarden | Michaela's Beauty Bar" },
      {
        name: "description",
        content:
          "Lees de afspraak-, annulerings- en hygiënevoorwaarden van Michaela's Beauty Bar in Amsterdam Noord.",
      },
      { property: "og:title", content: "Policy — Michaela's Beauty Bar" },
      {
        property: "og:description",
        content: "Afspraak-, annulerings- en hygiënevoorwaarden.",
      },
    ],
  }),
  component: Policy,
});

const sections = [
  {
    title: "Afspraken",
    body: "Een behandeling duurt gemiddeld 30 tot 45 minuten. Kom op tijd zodat we voldoende tijd hebben voor jouw behandeling. Ben je meer dan 15 minuten te laat, dan kan de behandeling helaas korter of verzet worden.",
  },
  {
    title: "Annuleren & verzetten",
    body: "Kun je niet komen? Laat het ons minimaal 24 uur van tevoren weten via WhatsApp of telefoon, dan plannen we kosteloos opnieuw. Bij niet (tijdig) annuleren kunnen er kosten in rekening worden gebracht.",
  },
  {
    title: "Hygiëne & veiligheid",
    body: "Wij werken volgens strenge hygiëne-eisen met steriele materialen. Heb je een allergie, oogontsteking of andere klacht? Meld dit vooraf zodat we de behandeling veilig kunnen uitvoeren of aanpassen.",
  },
  {
    title: "Lash- & browbehandelingen",
    body: "Kom met schone, make-upvrije ogen naar je afspraak. Vermijd cafeïne vlak voor je behandeling. Voor het beste resultaat volg je het nazorgadvies dat je van ons meekrijgt.",
  },
  {
    title: "Betalingen",
    body: "Betalen kan ter plaatse. Voor cursussen en de online masterclass gelden aparte voorwaarden die je bij aanmelding ontvangt.",
  },
];

function Policy() {
  return (
    <Layout>
      <section className="container-x py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Policy</p>
          <h1 className="mt-4 text-5xl text-primary md:text-6xl">Voorwaarden</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Zodat jouw bezoek soepel en fijn verloopt, hanteren we een paar duidelijke afspraken.
          </p>
        </div>

        <div className="mt-12 max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-2xl text-primary">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
