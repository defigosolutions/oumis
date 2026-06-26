// ============================================================
// IMAGE REGISTRY – Local assets from src/assets
// ============================================================

import logoSrc from './assets/logo.png';
export const logoImg = logoSrc;

import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';
import img9 from './assets/9.jpg';
import img10 from './assets/10.jpg';
import img11 from './assets/11.jpg';
import img12 from './assets/12.jpg';
import img13 from './assets/13.jpg';
import img14 from './assets/14.jpg';
import img15 from './assets/15.jpg';
import heroPng from './assets/hero.png';
import indoor from './assets/indoor.jpg';
import indoor1 from './assets/indoor1.jpg';
import owner from './assets/owner.jpg';

// ── Individual images by style ───────────────────────────────
export const h1  = img1;
export const h2  = img2;
export const h3  = img3;
export const h4  = img4;
export const h5  = img5;
export const h6  = img6;
export const h7  = img7;
export const h8  = img8;
export const h9  = img9;
export const h10 = img10;
export const h11 = img11;
export const h12 = img12;
export const h13 = img13;
export const h14 = img14;
export const h15 = img15;
export const h16 = heroPng;
export const h17 = indoor;
export const h18 = indoor1;
export const h19 = owner;

// Reuse to fulfill original 27 count
export const h20 = img1;
export const h21 = img2;
export const h22 = img3;
export const h23 = img4;
export const h24 = img5;
export const h25 = img6;
export const h26 = img7;
export const h27 = img8;

// ── Hero background ──────────────────────────────────────────
export const socialBannerImg = indoor1;
export const seoBannerImg    = indoor1;

// ── Gallery images with category tags for filtering ──────────
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

// ── Curated subsets used in Home & About pages ───────────────
export const heroImages     = [h1, h4, h7, h12, h17, h21];
export const aboutImages    = [h2, h5, h8, h11, h14, h18, h22, h25, h3];
export const featuredImages = [h1, h5, h9, h12, h18, h23];
export const previewImages  = [h1, h4, h7, h12, h17, h21];
