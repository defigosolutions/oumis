// ============================================================
// IMAGE REGISTRY – uses Vite glob import so missing files
// fall back to a placeholder automatically.
// ============================================================
import placeholderSrc from './assets/placeholder.svg';

// Eagerly grab every image that actually exists in assets/
const _all = import.meta.glob(
  './assets/*.{jpg,jpeg,png,svg,webp}',
  { eager: true }
);

/** Returns the resolved URL for a given filename, or the placeholder. */
function img(filename) {
  const key = `./assets/${filename}`;
  const mod = _all[key];
  return mod ? mod.default : placeholderSrc;
}

// ── Exports ──────────────────────────────────────────────────
export const logoImg         = img('logo.jpg');
export const socialBannerImg = img('690521234_122225094818052396_3447165721860282448_n.jpg');
export const seoBannerImg    = img('Oumi Hair Salon - Knotless Braids, Box Braids & Protective Styles in Hamden CT.png');

// Individual hair images
const h1  = img('h1.jpg');
const h2  = img('h2.jpg');
const h3  = img('h3.jpg');
const h4  = img('h4.jpg');
const h5  = img('h5.jpg');
const h6  = img('h6.jpg');
const h7  = img('h7.jpg');
const h8  = img('h8.jpg');
const h9  = img('h9.jpg');
const h10 = img('h10.jpg');
const h11 = img('h11.jpg');
const h12 = img('h12.jpg');
const h13 = img('h13.jpg');
const h14 = img('h14.jpg');
const h15 = img('h15.jpg');
const h16 = img('h16.jpg');
const h17 = img('h17.jpg');
const h18 = img('h18.jpg');
const h19 = img('h19.jpg');
const h20 = img('h20.jpg');
const h21 = img('h21.jpg');
const h22 = img('h22.jpg');
const h23 = img('h23.jpg');
const h24 = img('h24.jpg');
const h25 = img('h25.jpg');
const h26 = img('h26.jpg');
const h27 = img('h27.jpg');

// Gallery images with category tags for filtering
export const galleryImages = [
  { src: h1,  id: 1,  alt: 'Knotless braids hairstyle',    tags: ['all','knotless'] },
  { src: h2,  id: 2,  alt: 'Box braids hairstyle',         tags: ['all','box'] },
  { src: h3,  id: 3,  alt: 'Cornrows hairstyle',           tags: ['all','cornrows'] },
  { src: h4,  id: 4,  alt: 'Boho knotless braids',         tags: ['all','boho','knotless'] },
  { src: h5,  id: 5,  alt: 'Passion twists style',         tags: ['all','twists'] },
  { src: h6,  id: 6,  alt: 'Faux locs hairstyle',          tags: ['all','locs'] },
  { src: h7,  id: 7,  alt: 'Knotless braids long',         tags: ['all','knotless'] },
  { src: h8,  id: 8,  alt: 'Kids braids style',            tags: ['all','kids'] },
  { src: h9,  id: 9,  alt: 'Color braids hairstyle',       tags: ['all','color','knotless'] },
  { src: h10, id: 10, alt: 'Senegalese twists',            tags: ['all','twists'] },
  { src: h11, id: 11, alt: 'Stitch braids cornrows',       tags: ['all','cornrows'] },
  { src: h12, id: 12, alt: 'Boho braids with curls',       tags: ['all','boho'] },
  { src: h13, id: 13, alt: 'Goddess locs hairstyle',       tags: ['all','locs'] },
  { src: h14, id: 14, alt: 'Tribal braids style',          tags: ['all','box'] },
  { src: h15, id: 15, alt: 'Lemonade braids',              tags: ['all','cornrows'] },
  { src: h16, id: 16, alt: 'Kinky twists hairstyle',       tags: ['all','twists'] },
  { src: h17, id: 17, alt: 'Long knotless braids',         tags: ['all','knotless'] },
  { src: h18, id: 18, alt: 'Butterfly locs',               tags: ['all','locs'] },
  { src: h19, id: 19, alt: 'Small knotless braids',        tags: ['all','knotless'] },
  { src: h20, id: 20, alt: 'Color highlighted braids',     tags: ['all','color'] },
  { src: h21, id: 21, alt: 'Boho knotless style',          tags: ['all','boho'] },
  { src: h22, id: 22, alt: 'Kids cornrows braids',         tags: ['all','kids','cornrows'] },
  { src: h23, id: 23, alt: 'Waist length braids',          tags: ['all','knotless'] },
  { src: h24, id: 24, alt: 'Passion twist long',           tags: ['all','twists'] },
  { src: h25, id: 25, alt: 'Dreadlocks retwist',           tags: ['all','locs'] },
  { src: h26, id: 26, alt: 'Box braids with color',        tags: ['all','box','color'] },
  { src: h27, id: 27, alt: 'Natural cornrows style',       tags: ['all','cornrows'] },
];

// Curated subsets used in Home & About pages
export const heroImages     = [h1, h4, h7, h12, h17, h21];
export const aboutImages    = [h2, h5, h8, h11, h14, h18, h22, h25, h3];
export const featuredImages = [h1, h5, h9, h12, h18, h23];
export const previewImages  = [h1, h4, h7, h12, h17, h21];
