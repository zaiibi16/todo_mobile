export interface IFontType {
  fontFamily: string;
  fontSize: number;
  color: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  letterSpacing: number;
  lineHeight?: number;
}

export interface IThemeFonts {
  dLarge: IFontType;
  dMedium: IFontType;
  dSmall: IFontType;
  dxSmall: IFontType;
  pLarge: IFontType;
  pMedium: IFontType;
  pSmall: IFontType;
  pxSmall: IFontType;
  bLarge: IFontType;
  bMedium: IFontType;
  bSmall: IFontType;
}
