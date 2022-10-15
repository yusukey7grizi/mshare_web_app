export const Color = {
  orange: '#ff9100',
} as const;

export const ScreenSize = {
  largerThanIpad: '(min-width:769px)',
  largerThanIphone: '(min-width:477px)',
} as const;

export const BasePixel = 4 as const;

export const IconButtonStyle = {
  width: BasePixel * 12,
  height: BasePixel * 12,
} as const;

export const FontSize = {
  xxs: '0.5rem',
  xs: '0.8rem',
  s: '1rem',
  m: '1.2rem',
  l: BasePixel * 5,
  xl: '1.8rem',
} as const;
