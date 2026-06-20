import daniqueAsset from "@/assets/danique.jpg.asset.json";
import kaoutarAsset from "@/assets/kaoutar.jpg.asset.json";
import michaelaAsset from "@/assets/michaela.jpg.asset.json";
import ninaAsset from "@/assets/nina.jpg.asset.json";

export const site = {
  name: "Michaela's Beauty Bar",
  tagline: "Amsterdam Noord — Lashes, Brows, Toothgems & Nails",
  phone: "+31 6 84 92 79 88",
  phoneHref: "tel:+31684927988",
  whatsapp: "https://wa.me/31684927988",
  email: "info@lashesbymickey.nl",
  instagram: "https://www.instagram.com/michaelasbeautybar/",
  facebook: "https://www.facebook.com/Michaelasbeautybarr/",
  tiktok: "https://www.tiktok.com/@michaelasbeautybar",
  address: {
    street: "Johan van Hasseltweg 112",
    zip: "1022 WZ Amsterdam",
    region: "Noord-Holland — Nederland",
  },
  bookingWidget:
    "https://widget.salonized.com/widget?color=%234b4037&language=nl&company=Ry7Cm9Ff5ekEQDp4B8xcbWdc&inline=true",
};

export const team = [
  { name: "Michaela", role: "Schoonheidsspecialiste & oprichter", img: michaelaAsset.url },
  { name: "Danique", role: "Lash & brow specialist", img: daniqueAsset.url },
  { name: "Kaoutar", role: "Nail & beauty specialist", img: kaoutarAsset.url },
  { name: "Nina", role: "Lash & beauty specialist", img: ninaAsset.url },
];
