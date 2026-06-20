import lashes from "@/assets/hero-lashes.jpg";
import brows from "@/assets/treat-brows.jpg";
import toothgems from "@/assets/treat-toothgems.jpg";
import nails from "@/assets/treat-nails.jpg";
import rf from "@/assets/treat-rf.jpg";

export type Treatment = {
  slug: string;
  title: string;
  short: string;
  description: string;
  img: string;
  duration: string;
};

export const treatments: Treatment[] = [
  {
    slug: "lashes",
    title: "Lash Extensions",
    short: "Volle, natuurlijke of dramatische wimpers — volledig op maat.",
    description:
      "Van een natuurlijke classic set tot luxe volume lashes. We kiezen samen de lengte, krul en dikte die bij jouw ogen passen, voor een wakkere en verzorgde look.",
    img: lashes,
    duration: "30–45 min",
  },
  {
    slug: "brows",
    title: "Brows",
    short: "Brow styling, lamination en verven voor perfect gevormde wenkbrauwen.",
    description:
      "Strakke, vol ogende wenkbrauwen die je gezicht in balans brengen. Inclusief epileren, verven en stylen volledig afgestemd op jouw gezichtsvorm.",
    img: brows,
    duration: "30–45 min",
  },
  {
    slug: "toothgems",
    title: "Toothgems",
    short: "Een subtiele sparkle op je tand — pijnloos en tijdelijk.",
    description:
      "Een klein Swarovski kristalletje op je tand voor die extra sprankeling in je glimlach. Veilig aangebracht zonder boren en eenvoudig te verwijderen.",
    img: toothgems,
    duration: "30 min",
  },
  {
    slug: "nails",
    title: "Nails",
    short: "Verzorgde, stijlvolle nagels in nude of jouw favoriete kleur.",
    description:
      "Van een nette manicure tot gellak en nail art. We zorgen voor sterke, mooi gevormde nagels die er weken stralend uitzien.",
    img: nails,
    duration: "45 min",
  },
  {
    slug: "rf-tightening",
    title: "RF Tightening Treatment",
    short: "Radiofrequentie behandeling voor een stevigere, gladdere huid.",
    description:
      "Een verwarmende radiofrequentie behandeling die de collageenaanmaak stimuleert. De huid voelt strakker en oogt egaler — ontspannend en niet-invasief.",
    img: rf,
    duration: "45 min",
  },
];
