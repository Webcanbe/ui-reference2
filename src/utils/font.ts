import {
  IBM_Plex_Mono,
  Instrument_Serif,
  Inter_Tight,
  Manrope,
  Sora,
  Space_Grotesk,
} from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

/** All Google font CSS variables from variable.css. Funnel Display is not on Google Fonts — add via next/font/local if needed. */
export const fontVariables = [
  interTight.variable,
  ibmPlexMono.variable,
  instrumentSerif.variable,
  manrope.variable,
  sora.variable,
  spaceGrotesk.variable,
].join(' ');

export { ibmPlexMono, instrumentSerif, interTight, manrope, sora, spaceGrotesk };
