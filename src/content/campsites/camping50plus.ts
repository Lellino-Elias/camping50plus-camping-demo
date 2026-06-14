import type { CampsiteConfig } from "../types";

/**
 * 50plus Campingpark Fisching — Adults-only Campingpark im Murtal (Steiermark).
 * Inhalte zu 100 % aus raw/digest dieses Leads abgeleitet. Bilder provenance-gebunden.
 * Preise: Quelle nennt keine → Richtpreise + offene Disclosure (pricesArePlaceholder).
 */
const IMG = "/campsites/camping50plus";

const camping50plus: CampsiteConfig = {
  name: "50plus Campingpark Fisching",
  shortName: "Fisching",
  slug: "camping50plus",
  ort: "Fisching",
  region: "Steiermark",
  brandKind: "Adults-Only Camping",
  see: "Schwimmteich",
  regionLong: "Murtal · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Zeit zu zweit im grünen Herzen Österreichs",
  claimEmphasis: "zu zweit",
  emailDetail: "euer Bio-Schwimmteich, eingebettet in Schilf und Seerosen",
  intro:
    "Im grünen Herz Österreichs liegt ein kleiner, familiengeführter Campingpark nur für Erwachsene — mit Bio-Schwimmteich, Zirbenholz-Appartements und Österreichs erstem Radknotensystem direkt vor dem Vorzelt.",

  statement: {
    text: "Bei uns triffst du statt Kindern und Hunden nur andere Paare, die wie du die Ruhe im Grünen suchen.",
    emphasis: "nur andere Paare",
  },

  pillars: [
    {
      title: "Camping nur für Erwachsene",
      text: "Kein Kinderlachen, kein Hundebellen — nur Schilfrauschen, ein gutes Buch und die Hängematte zwischen Blumen. Urlaub, der wirklich Erholung ist.",
      image: { src: `${IMG}/gallery-4d9c277e69.webp`, alt: "Gast entspannt in der Hängematte am Schwimmteich des 50plus Campingparks Fisching" },
    },
    {
      title: "Unser Bio-Schwimmteich",
      text: "Der Schwimmteich liegt mitten im Platz: eingebettet in Schilf und Seerosen, mit Sonnenschirmen und Plätzchen am Wasser für lange Sommertage.",
      image: { src: `${IMG}/activity-fb4e696d96.webp`, alt: "Sonnenschirme und Sessel am Bio-Schwimmteich des Campingparks Fisching" },
    },
    {
      title: "Familie Pfandl",
      text: "Drei Generationen der Familie Pfandl führen den Platz persönlich — aus dem einstigen Gasthaus wurde ein Campingpark mit Komfort-Appartements.",
      image: { src: `${IMG}/kids-08600fc543.webp`, alt: "Die Gastgeberfamilie Pfandl des 50plus Campingparks Fisching" },
    },
  ],

  usps: [
    "Nur für Erwachsene",
    "Kinderfrei & hundefrei",
    "Bio-Schwimmteich am Platz",
    "65 Komfortstellplätze",
    "Eigenes Radknotensystem",
    "Familiengeführt",
  ],

  trust: {
    heading: "Mehrfach ausgezeichnet im Murtal",
    headingEmphasis: "ausgezeichnet",
    intro:
      "Mehrfach mit dem Camping.info Award prämiert — zweimal als bester Campingplatz für Senioren in Europa — dazu ACSI- und ADAC-Auszeichnung. Gäste schätzen die Ruhe, die Sauberkeit und das mutige Adults-only-Konzept.",
  },

  awards: [
    { label: "Camping.info Award", image: { src: `${IMG}/award-5df9c23609.png`, alt: "Camping.info Award" } },
    { label: "ACSI Award 2022", image: { src: `${IMG}/award-eaa1661150.png`, alt: "ACSI Award – Bester Campingplatz für Rad fahren und Wandern in Österreich" } },
    { label: "ADAC Camping Award 2022", image: { src: `${IMG}/award-4479c8cef8.png`, alt: "ADAC Camping Award 2022" } },
    { label: "Beyond Camping Award 2023", image: { src: `${IMG}/award-6f6b5f5b33.png`, alt: "Beyond Camping Award 2023" } },
  ],

  hero: {
    aerial: { src: `${IMG}/activity-baacee2cfa.webp`, alt: "Paar entspannt am Bio-Schwimmteich des 50plus Campingparks Fisching" },
  },

  breather: {
    image: { src: `${IMG}/accommodation-3d54eac5d0.webp`, alt: "Abendstimmung über den Stellplätzen des 50plus Campingparks Fisching" },
    line: "Wenn der Murtaler Sonnenuntergang den Platz in Gold taucht.",
  },

  camping: {
    heading: "Unser Campingpark für Erwachsene",
    intro:
      "Klein, ruhig und gepflegt: 65 Komfortstellplätze im breiten Murtal — für Zelt, Wohnwagen oder großes Wohnmobil, jeder mit Strom, Frisch- und Abwasser, Kabel-TV und WLAN.",
    features: [
      {
        title: "XXL-Stellplätze",
        text: "Komfortstellplätze mit 100 m² und XXL-Plätze mit 130 m² — auch das große Wohnmobil steht hier eben, ruhig und mit Blick ins Tal.",
        image: { src: `${IMG}/gallery-6cc86d8e42.webp`, alt: "XXL-Stellplatz für ein großes Wohnmobil am Campingpark Fisching" },
      },
      {
        title: "Kleiner Platz im Murtal",
        text: "Nur ein überschaubarer Kranz an Stellplätzen, viel Wiese und Bäume: Fisching liegt nah an der Mitte Österreichs — ideal als Ziel oder Etappe.",
        image: { src: `${IMG}/hero-bdf8ba5e94.webp`, alt: "Luftaufnahme des 50plus Campingparks Fisching im Murtal" },
      },
      {
        title: "Blumenwiese & Teich",
        text: "8.000 m² Blumenwiese stehen für die Natur — drumherum der Bio-Schwimmteich, ein Brunnen und stille Ecken zum Durchatmen.",
        image: { src: `${IMG}/activity-9aa4477f7a.webp`, alt: "Blumenwiese und Brunnen am Bio-Schwimmteich des Campingparks Fisching" },
      },
      {
        title: "Zeit zu Zweit",
        text: "Camping ohne Sorgen: Stell dein Rad ab, deck den Tisch und genieße die Zeit mit deinem Partner — um den Rest kümmern wir uns.",
        image: { src: `${IMG}/accommodation-867b4d3678.webp`, alt: "Paar genießt den Morgen am Stellplatz mit E-Bike am Campingpark Fisching" },
      },
      {
        title: "Ob Zelt oder Wohnwagen",
        text: "Egal ob Zelt, Wohnwagen oder Reisemobil: Bei uns hast du Platz. Mehrere Ver- und Entsorgungsstationen, nachts beleuchtet und mit Schranke gesichert.",
        image: { src: `${IMG}/accommodation-4075a0810a.webp`, alt: "Gäste vor ihrem Wohnwagen am 50plus Campingpark Fisching" },
      },
      {
        title: "Genuss aus der Region",
        text: "Unser Restaurant hat den ganzen Sommer geöffnet — und schon das Frühstück bringt Köstlichkeiten von regionalen Produzenten auf den Tisch.",
        image: { src: `${IMG}/gallery-32b5dca0b9.webp`, alt: "Frühstück mit regionalen Köstlichkeiten am Campingpark Fisching" },
      },
    ],
  },

  mobilheime: {
    heading: "Mehr als nur Stellplatz",
    intro:
      "Wer es fest mag, schläft im Zirbenholz: Bed-&-Bike-Bungalows und die Komfort-Appartements Zirbenland verbinden Camping-Freiheit mit echtem Wohlfühl-Komfort.",
    items: [
      {
        name: "Bed & Bike Glamping",
        kind: "Glamping-Bungalow",
        text: "Kleine, liebevoll dekorierte Bungalows — der perfekte Spagat zwischen Appartement und Campingplatz, mit allen Annehmlichkeiten direkt am Platz.",
        image: { src: `${IMG}/accommodation-750853d1e5.webp`, alt: "Bed & Bike Glamping-Bungalow am 50plus Campingpark Fisching" },
        features: ["Direkt am Campingpark", "Bed & Bike"],
      },
      {
        name: "Komfort-Appartements Zirbenland",
        kind: "Ferienappartement",
        text: "Geräumige Appartements mit Zirbenbett aus regionalem Holz — der Duft der Zirbe beruhigt, sodass du im Urlaub besonders gut schläfst.",
        image: { src: `${IMG}/gallery-cab670435a.webp`, alt: "Schlafzimmer mit Zirbenholz im Komfort-Appartement Zirbenland" },
        features: ["Zirbenbett", "40–110 m²"],
      },
      {
        name: "Appartement mit Terrasse",
        kind: "Ferienappartement",
        text: "Eigene Terrasse mit Blick Richtung Campingpark, dazu Küche und Badewanne: Hier richtest du dich für ein paar Tage ganz wie zu Hause ein.",
        image: { src: `${IMG}/amenity-d96e8f84d7.webp`, alt: "Appartement mit eigener Terrasse am Campingpark Fisching" },
        features: ["Eigene Terrasse", "Küche & Bad"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv im Murtal",
    intro:
      "Vom Frühstückstisch direkt in den Sattel oder auf den Berg: Das breite Murtal mit Österreichs erstem Radknotensystem liegt dir zu Füßen.",
    items: [
      {
        title: "Österreichs erstes Radknotensystem",
        text: "Von Knoten zu Knoten statt fixer Route: Du stellst dir die Tour nach Wetter, Lust und Kondition zusammen — der Einstieg ist direkt am Platz.",
        image: { src: `${IMG}/activity-d735ea5ca1.webp`, alt: "Wegweiser des Nimms-Radl-Radknotensystems im Murtal nahe Fisching" },
      },
      {
        title: "Radeln im breiten Tal",
        text: "Im flachen Murtal radelt es sich gemütlich. Leihräder und Gasthäuser zum Einkehren liegen am Weg — Radurlaub ganz ohne Stress.",
        image: { src: `${IMG}/activity-edcdd5e588.webp`, alt: "Radfahrer-Paar an einem See im Murtal" },
      },
      {
        title: "Wandern in den Bergen",
        text: "Rund um Fisching warten Almen, Gipfel und Bergseen. Nirgendwo schmeckt die Jause so gut wie auf der Hütte nach dem Aufstieg.",
        image: { src: `${IMG}/activity-4fd5c64539.webp`, alt: "Wanderer auf einem Bergkamm über einem Bergsee in der Steiermark" },
      },
      {
        title: "Bike & Hike",
        text: "Mit dem Rad ins Tal, zu Fuß auf den Berg: Die Kombination macht das Murtal zum Spielplatz für aktive Genießer.",
        image: { src: `${IMG}/activity-d44e9d5030.webp`, alt: "Paar mit E-Bikes macht Rast vor der Bergkulisse des Murtals" },
      },
      {
        title: "Bergseen & Almen",
        text: "Klare Bergseen wie der Ingeringsee und stille Almwege laden zu Tagesausflügen in die umliegende Steiermark ein.",
        image: { src: `${IMG}/activity-dc0d331b3d.webp`, alt: "Wandernde an einem klaren Bergsee in der Steiermark" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Murtal",
    modes: [
      { title: "Mit dem Auto", text: "Über die S36 Murtal Schnellstraße bis Weißkirchen, dann wenige Minuten nach Fisching — der Platz ist ausgeschildert." },
      { title: "Mit der Bahn", text: "Der Bahnhof Zeltweg liegt in der Nähe; die letzten Kilometer per Taxi oder nach Absprache mit Abholung." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Graz ist rund eine Autostunde entfernt." },
    ],
  },

  galerie: {
    heading: "Eindrücke aus Fisching",
    headingEmphasis: "Fisching",
    intro:
      "Zirbenholz, regionale Küche und stille Plätze im Grünen — ein paar Bilder, die zeigen, wie sich Urlaub bei uns anfühlt.",
    tag: "Murtal · Steiermark",
    moreCount: 30,
    images: [
      { src: `${IMG}/gallery-3ee96aa1c0.webp`, alt: "Luftaufnahme des Bio-Schwimmteichs mit Seerosen und Sonnenschirmen am Campingpark Fisching" },
      { src: `${IMG}/gallery-6a6dc946fd.webp`, alt: "Paar genießt den Sonnenuntergang in der Blumenwiese am 50plus Campingpark Fisching" },
      { src: `${IMG}/accommodation-964c7f39f6.webp`, alt: "Wohnküche eines Komfort-Appartements am Campingpark Fisching" },
      { src: `${IMG}/kids-7c8f70b7bb.webp`, alt: "Schlafkomfort im Zirbenbett der Komfort-Appartements Zirbenland" },
      { src: `${IMG}/gallery-42a7de9944.webp`, alt: "Paar zu zweit im Blumenmeer vor dem Steiermark-Herz nahe Fisching" },
      { src: `${IMG}/gallery-b4654b9bd1.webp`, alt: "Murtaler Bachlauf im Wald rund um Fisching" },
      { src: `${IMG}/accommodation-687da09960.webp`, alt: "Zirbenzapfen als Detail im Komfort-Appartement Zirbenland" },
    ],
  },

  booking: {
    heading: "Sichere dir deine Zeit zu zweit",
    headingEmphasis: "Zeit zu zweit",
    intro:
      "Wähle Zeitraum und Personen — Familie Pfandl meldet sich persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). Preise pro Nacht für 2 Personen, zzgl. Ortstaxe.",
    highlight: { title: "Nur für Erwachsene", text: "Kein Kinderlärm, keine Hunde — hier ist Urlaub von der ersten Minute an Erholung." },
    categories: [
      { id: "stellplatz", label: "Komfortstellplatz", perNight: 38, perExtraGuest: 9 },
      { id: "xxl", label: "XXL-Stellplatz", perNight: 46, perExtraGuest: 9 },
      { id: "glamping", label: "Bed & Bike Glamping", perNight: 95 },
      { id: "appartement", label: "Appartement Zirbenland", perNight: 130 },
    ],
  },

  kontakt: {
    coords: { lat: 47.163292, lng: 14.736742 },
    tel: "+43 3577 82284",
    telHref: "tel:+43357782284",
    mail: "info@camping50plus.com",
    facebook: "https://www.facebook.com/camping50plus/",
    adresse: "Fisching 9 · 8741 Weißkirchen · Steiermark",
  },

  languages: ["DE", "EN", "NL", "FR", "DA"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Schwimmteich", href: "#camping" },
    ]},
    { label: "Unterkünfte", href: "#mobilheime" },
    { label: "Aktiv", href: "#aktivitaeten", children: [
      { label: "Radknotensystem", href: "#aktivitaeten" },
      { label: "Wandern", href: "#aktivitaeten" },
    ]},
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default camping50plus;
