import type { Product } from '@/src/types';

type ProductForIllustration = Pick<Product, 'id' | 'name' | 'category' | 'price'>;

type Theme = {
  start: string;
  end: string;
  accent: string;
  accentSoft: string;
  ink: string;
  badgeBg: string;
};

const themes: Record<string, Theme> = {
  Workspace: {
    start: '#dff8f3',
    end: '#8ee3cf',
    accent: '#0f766e',
    accentSoft: '#5eead4',
    ink: '#0f172a',
    badgeBg: '#ecfeff'
  },
  Home: {
    start: '#fff1dd',
    end: '#f6c27a',
    accent: '#9a3412',
    accentSoft: '#fdba74',
    ink: '#431407',
    badgeBg: '#ffedd5'
  },
  Audio: {
    start: '#e0f2fe',
    end: '#7dd3fc',
    accent: '#0c4a6e',
    accentSoft: '#38bdf8',
    ink: '#082f49',
    badgeBg: '#f0f9ff'
  },
  Travel: {
    start: '#ede9fe',
    end: '#c4b5fd',
    accent: '#5b21b6',
    accentSoft: '#a78bfa',
    ink: '#312e81',
    badgeBg: '#f5f3ff'
  },
  Wellness: {
    start: '#dcfce7',
    end: '#86efac',
    accent: '#166534',
    accentSoft: '#4ade80',
    ink: '#14532d',
    badgeBg: '#f0fdf4'
  },
  Kitchen: {
    start: '#ffe4e6',
    end: '#fda4af',
    accent: '#9f1239',
    accentSoft: '#fb7185',
    ink: '#4c0519',
    badgeBg: '#fff1f2'
  },
  Outdoors: {
    start: '#fef3c7',
    end: '#fcd34d',
    accent: '#92400e',
    accentSoft: '#fbbf24',
    ink: '#78350f',
    badgeBg: '#fffbeb'
  },
  Bedroom: {
    start: '#fce7f3',
    end: '#f9a8d4',
    accent: '#9d174d',
    accentSoft: '#f472b6',
    ink: '#831843',
    badgeBg: '#fdf2f8'
  },
  Decor: {
    start: '#f1f5f9',
    end: '#cbd5e1',
    accent: '#334155',
    accentSoft: '#94a3b8',
    ink: '#0f172a',
    badgeBg: '#ffffff'
  }
};

const fallbackTheme: Theme = {
  start: '#f8fafc',
  end: '#cbd5e1',
  accent: '#334155',
  accentSoft: '#94a3b8',
  ink: '#0f172a',
  badgeBg: '#ffffff'
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function hashString(value: string) {
  let hash = 0;

  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return hash;
}

function wrapText(value: string, maxLength: number) {
  const words = value.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length <= maxLength) {
      currentLine = nextLine;
      continue;
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    currentLine = word;
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.slice(0, 3);
}

function priceLabel(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
}

function glyphForCategory(category: string, theme: Theme) {
  const stroke = theme.accent;
  const fill = theme.accentSoft;

  switch (category) {
    case 'Workspace':
      return `<rect x="0" y="36" width="220" height="136" rx="26" fill="${fill}" opacity="0.82" />
        <rect x="26" y="0" width="168" height="110" rx="20" fill="#ffffff" opacity="0.96" />
        <rect x="52" y="138" width="116" height="22" rx="11" fill="${stroke}" opacity="0.92" />`;
    case 'Home':
      return `<path d="M110 8 214 88v110c0 18-14 32-32 32H38c-18 0-32-14-32-32V88L110 8Z" fill="#ffffff" opacity="0.94" />
        <rect x="88" y="128" width="44" height="102" rx="18" fill="${fill}" opacity="0.95" />
        <rect x="48" y="104" width="42" height="42" rx="14" fill="${fill}" opacity="0.8" />`;
    case 'Audio':
      return `<circle cx="110" cy="118" r="104" fill="#ffffff" opacity="0.94" />
        <circle cx="110" cy="118" r="64" fill="${fill}" opacity="0.82" />
        <circle cx="110" cy="118" r="24" fill="${stroke}" opacity="0.95" />`;
    case 'Travel':
      return `<rect x="32" y="34" width="156" height="182" rx="34" fill="#ffffff" opacity="0.95" />
        <rect x="68" y="0" width="84" height="58" rx="22" fill="${fill}" opacity="0.9" />
        <rect x="84" y="104" width="52" height="20" rx="10" fill="${stroke}" opacity="0.94" />`;
    case 'Wellness':
      return `<path d="M112 32c42 0 76 34 76 76 0 59-76 124-76 124S36 167 36 108c0-42 34-76 76-76Z" fill="#ffffff" opacity="0.94" />
        <path d="M112 74c18 0 32 14 32 32 0 26-32 56-32 56S80 132 80 106c0-18 14-32 32-32Z" fill="${fill}" opacity="0.86" />`;
    case 'Kitchen':
      return `<rect x="26" y="40" width="168" height="168" rx="42" fill="#ffffff" opacity="0.95" />
        <path d="M72 30c0-18 14-32 32-32s32 14 32 32v40H72V30Z" fill="${fill}" opacity="0.9" />
        <rect x="90" y="92" width="40" height="82" rx="20" fill="${stroke}" opacity="0.92" />`;
    case 'Outdoors':
      return `<path d="M16 200 94 34l78 166H16Z" fill="#ffffff" opacity="0.95" />
        <path d="M92 200 156 92l64 108H92Z" fill="${fill}" opacity="0.86" />
        <circle cx="184" cy="48" r="24" fill="${stroke}" opacity="0.9" />`;
    case 'Bedroom':
      return `<rect x="24" y="94" width="176" height="82" rx="24" fill="#ffffff" opacity="0.95" />
        <rect x="46" y="62" width="134" height="58" rx="22" fill="${fill}" opacity="0.88" />
        <rect x="44" y="166" width="20" height="54" rx="10" fill="${stroke}" opacity="0.88" />
        <rect x="156" y="166" width="20" height="54" rx="10" fill="${stroke}" opacity="0.88" />`;
    case 'Decor':
      return `<rect x="28" y="24" width="164" height="164" rx="26" fill="#ffffff" opacity="0.95" />
        <rect x="56" y="52" width="108" height="108" rx="18" fill="${fill}" opacity="0.84" />
        <circle cx="110" cy="106" r="22" fill="${stroke}" opacity="0.92" />`;
    default:
      return `<circle cx="110" cy="110" r="94" fill="#ffffff" opacity="0.95" />
        <circle cx="110" cy="110" r="54" fill="${fill}" opacity="0.82" />`;
  }
}

export function buildProductIllustration(product: ProductForIllustration) {
  const theme = themes[product.category] ?? fallbackTheme;
  const hash = hashString(product.id);
  const nameLines = wrapText(product.name, 18);
  const circleX = 840 + (hash % 140);
  const circleY = 240 + (hash % 180);
  const circleR = 150 + (hash % 80);
  const cardRotation = (hash % 10) - 5;
  const stripeOffset = hash % 60;

  const nameText = nameLines
    .map(
      (line, index) =>
        `<text x="600" y="${500 + index * 78}" font-size="64" font-weight="700" fill="${theme.ink}" font-family="Inter, Arial, sans-serif">${escapeXml(line)}</text>`
    )
    .join('');

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" role="img" aria-labelledby="title desc">
      <title id="title">${escapeXml(product.name)}</title>
      <desc id="desc">Illustrated product card for ${escapeXml(product.name)} in the ${escapeXml(product.category)} category.</desc>
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${theme.start}" />
          <stop offset="100%" stop-color="${theme.end}" />
        </linearGradient>
        <linearGradient id="card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.96" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.72" />
        </linearGradient>
      </defs>

      <rect width="1200" height="1200" rx="64" fill="url(#bg)" />
      <circle cx="${circleX}" cy="${circleY}" r="${circleR}" fill="${theme.accentSoft}" opacity="0.34" />
      <circle cx="220" cy="980" r="240" fill="#ffffff" opacity="0.16" />
      <path d="M0 ${900 - stripeOffset}C180 ${820 - stripeOffset}, 340 ${980 - stripeOffset}, 560 ${900 - stripeOffset}S980 ${820 - stripeOffset}, 1200 ${940 - stripeOffset}V1200H0Z" fill="#ffffff" opacity="0.22" />

      <g transform="translate(80 92) rotate(${cardRotation} 220 220)">
        <rect width="420" height="420" rx="44" fill="url(#card)" />
        <rect x="30" y="30" width="360" height="360" rx="34" fill="#ffffff" opacity="0.18" />
        <g transform="translate(100 94)">${glyphForCategory(product.category, theme)}</g>
      </g>

      <g>
        <rect x="600" y="116" width="204" height="52" rx="26" fill="${theme.badgeBg}" opacity="0.96" />
        <text x="702" y="150" text-anchor="middle" font-size="24" font-weight="700" letter-spacing="2" fill="${theme.accent}" font-family="Inter, Arial, sans-serif">${escapeXml(product.category.toUpperCase())}</text>
      </g>

      ${nameText}

      <text x="600" y="860" font-size="40" fill="${theme.ink}" fill-opacity="0.7" font-family="Inter, Arial, sans-serif">Designed for everyday use.</text>
      <text x="600" y="952" font-size="88" font-weight="800" fill="${theme.accent}" font-family="Inter, Arial, sans-serif">${priceLabel(product.price)}</text>
    </svg>
  `
    .trim()
    .replace(/\n\s+/g, ' ');
}
