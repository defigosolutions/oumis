import './RotatingLogoBadge.css';
import { logoImg } from '../images';

const BADGE_TEXT = 'Welcome ★ Hair Cutting ★ Color ★ Braids ★ Beauty ★ Style ★ ';

export default function RotatingLogoBadge({ size = 200 }) {
  const r    = (size / 2) * 0.74;   // text orbit radius
  const cx   = size / 2;
  const cy   = size / 2;
  const logoSize = size * 0.55;

  return (
    <div
      className="rotating-badge"
      style={{ width: size, height: size }}
      aria-label="Oumi's Haven Hair Braiding rotating badge"
    >
      {/* SVG rotating text ring */}
      <svg
        className="rotating-badge__svg"
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        aria-hidden="true"
      >
        <defs>
          <path
            id="textCircle"
            d={`M ${cx},${cy - r} A ${r},${r} 0 1,1 ${cx - 0.01},${cy - r}`}
          />
        </defs>
        <text
          className="rotating-badge__text"
          fill="url(#badgeGrad)"
          fontSize={size * 0.065}
          fontFamily="'Inter', sans-serif"
          fontWeight="600"
          letterSpacing="2"
        >
          <textPath href="#textCircle" startOffset="0%">
            {BADGE_TEXT}
          </textPath>
        </text>
        <defs>
          <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#f4a7c3" />
            <stop offset="50%"  stopColor="#9b5de5" />
            <stop offset="100%" stopColor="#e8207a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center logo */}
      <div
        className="rotating-badge__logo"
        style={{
          width:  logoSize,
          height: logoSize,
          top:    (size - logoSize) / 2,
          left:   (size - logoSize) / 2,
        }}
      >
        <img src={logoImg} alt="Oumi's Haven Hair Braiding" />
      </div>

      {/* Decorative ring */}
      <div
        className="rotating-badge__ring"
        style={{
          width:  size * 0.66,
          height: size * 0.66,
          top:    size * 0.17,
          left:   size * 0.17,
        }}
      />
    </div>
  );
}
