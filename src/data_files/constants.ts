import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "WordPress Girona - Your WordPress Dev from Girona",
  tagline: "WordPress Developer from Girona",
  description: "Experienced WordPress developer in Girona—specializing in creating, customizing, and optimizing engaging websites. Get expert WordPress solutions tailored to your needs. Let's make your online presence shine!",
  description_short: "Experienced WordPress developer in Girona—specializing in creating, customizing, and optimizing engaging websites. Get expert WordPress solutions tailored to your needs. Let's make your online presence shine!",
  url: "",
  author: "",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-ES",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_ES",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : WordPress Developer Girona`,
  description: "Experienced WordPress developer in Girona—specializing in creating, customizing, and optimizing engaging websites. Get expert WordPress solutions tailored to your needs. Let's make your online presence shine!",
  image: ogImageSrc,
};
