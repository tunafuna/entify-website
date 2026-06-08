import styles from './Logo.module.css';

import lightColorFull      from './assets/light-color-full.svg';
import lightGrayscaleFull  from './assets/light-grayscale-full.svg';
import lightKnockoutFull   from './assets/light-knockout-full.svg';
import darkColorFull       from './assets/dark-color-full.svg';
import darkGrayscaleFull   from './assets/dark-grayscale-full.svg';
import darkKnockoutFull    from './assets/dark-knockout-full.svg';

import lightColorMark      from './assets/light-color-mark.svg';
import lightGrayscaleMark  from './assets/light-grayscale-mark.svg';
import lightKnockoutMark   from './assets/light-knockout-mark.svg';
import darkColorMark       from './assets/dark-color-mark.svg';
import darkGrayscaleMark   from './assets/dark-grayscale-mark.svg';
import darkKnockoutMark    from './assets/dark-knockout-mark.svg';

import lightColorFavicon     from './assets/light-color-favicon.svg';
import lightGrayscaleFavicon from './assets/light-grayscale-favicon.svg';
import lightKnockoutFavicon  from './assets/light-knockout-favicon.svg';
import darkColorFavicon      from './assets/dark-color-favicon.svg';
import darkGrayscaleFavicon  from './assets/dark-grayscale-favicon.svg';
import darkKnockoutFavicon   from './assets/dark-knockout-favicon.svg';

export type LogoColor = 'color' | 'grayscale' | 'knockout';
export type LogoStyle = 'logo+text' | 'logo' | 'favicon';
export type LogoTheme = 'light' | 'dark';

interface LogoProps {
  color?: LogoColor;
  logoStyle?: LogoStyle;
  theme?: LogoTheme;
  className?: string;
}

const ASSETS = {
  'logo+text': {
    light: { color: lightColorFull,     grayscale: lightGrayscaleFull,  knockout: lightKnockoutFull  },
    dark:  { color: darkColorFull,      grayscale: darkGrayscaleFull,   knockout: darkKnockoutFull   },
  },
  'logo': {
    light: { color: lightColorMark,     grayscale: lightGrayscaleMark,  knockout: lightKnockoutMark  },
    dark:  { color: darkColorMark,      grayscale: darkGrayscaleMark,   knockout: darkKnockoutMark   },
  },
  'favicon': {
    light: { color: lightColorFavicon,  grayscale: lightGrayscaleFavicon, knockout: lightKnockoutFavicon },
    dark:  { color: darkColorFavicon,   grayscale: darkGrayscaleFavicon,  knockout: darkKnockoutFavicon  },
  },
} as const;

export function Logo({
  color = 'color',
  logoStyle = 'logo+text',
  theme = 'light',
  className,
}: LogoProps) {
  const src = ASSETS[logoStyle][theme][color];

  const sizeClass = logoStyle === 'logo+text' ? styles.full
    : logoStyle === 'logo'     ? styles.mark
    : styles.favicon;

  return (
    <img
      src={src}
      alt={logoStyle === 'favicon' ? 'Entify' : 'Entify logo'}
      className={[sizeClass, className].filter(Boolean).join(' ')}
    />
  );
}
