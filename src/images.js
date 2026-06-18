// ============================================================
// IMAGE REGISTRY – High-quality Unsplash placeholder images
// organized by salon section and hairstyle type.
// ============================================================

// ── Logo (kept as local asset) ───────────────────────────────
import logoSrc from './assets/logo.png';
export const logoImg = logoSrc;

// ── Unsplash CDN helper ──────────────────────────────────────
const U = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

// ── Individual images by style ───────────────────────────────
// Knotless / box braids / protective styles
const h1  = U('1617791160536-598cf32026fb');       // beautiful curls & braids
const h2  = U('1589156280159-27698a70f29e');       // black woman elegant portrait
const h3  = U('1531746020798-e6953c6e8e04');       // beauty portrait close-up
const h4  = U('1526510747491-58f928ec870f');       // glamorous hair styling
const h5  = U('1596178065887-1198b6148b2b');       // woman with styled hair
const h6  = U('1611432579699-484f7990b127');       // natural hair beauty
const h7  = U('1602233158242-3ba0ac4d2167');       // black woman gorgeous hair
const h8  = U('1594744803329-e58b31de8bf5');       // young girl hairstyle
const h9  = U('1492106087820-71f1a00d2b11');       // beauty & hair portrait
const h10 = U('1534528741775-53994a69daeb');       // styled woman portrait
const h11 = U('1580501170888-80668882ca0c');       // hair salon chair
const h12 = U('1617791160536-598cf32026fb');       // beautiful curls & braids
const h13 = U('1524504388940-b1c1722653e1');       // glamour hair portrait
const h14 = U('1549236177-f9b0031756eb');          // confident beauty portrait
const h15 = U('1595152772835-219674b2a8a6');       // confident stylish woman
const h16 = U('1507003211169-0a1dd7228f2d');       // natural hair portrait
const h17 = U('1521590832167-7bcbfaa6381f');       // hair salon styling
const h18 = U('1560066984-138dadb4c035');          // luxury salon interior
const h19 = U('1562322140-8baeececf3df');          // salon detail shot
const h20 = U('1522337360788-8b13dee7a37e');       // salon tools & brushes
const h21 = U('1527799820374-dcf8d9d4a388');       // salon interior design
const h22 = U('1559599101-f09722fb4948');          // hairstyle close-up
const h23 = U('1605497788044-5a32c7078486');       // professional styling
const h24 = U('1544005313-94ddf0286df2');          // woman portrait clean
const h25 = U('1580618672591-eb180b1a973f');       // hairdresser at work
const h26 = U('1600948836101-f9ffda59d250');       // bridal hairstyling
const h27 = U('1531746020798-e6953c6e8e04');       // braids styling close-up

// ── Hero background ──────────────────────────────────────────
export const socialBannerImg = U('1560066984-138dadb4c035', 1920); // wide luxury salon interior
export const seoBannerImg    = U('1521590832167-7bcbfaa6381f', 1200);

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
