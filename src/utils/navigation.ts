// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "WordPress Links",
    links: [
      { name: "WordPress Website", url: "https://wordpress.org/" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "Contact Me", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};