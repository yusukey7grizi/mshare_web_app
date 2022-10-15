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
  xxs: BasePixel * 1,
  xs: BasePixel * 2,
  s: BasePixel * 3,
  m: BasePixel * 4,
  l: BasePixel * 5,
  xl: BasePixel * 6,
} as const;
