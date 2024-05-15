export interface RawThemeModel {
  client?: string;
  clientDisplayName: string;
  customText: string;
  backgroundColor: string;
  primaryColor: string;
  textColor: string;
  contrastTextColor: string;
}

export interface ThemePreviewModel {
  clientLookupName?: string;
  customText: string;
  darkTheme?: boolean;
  backgroundColor: string;
  primaryColor: string;
  textColor: string;
  contrastTextColor: string;
  clientDisplayName: string;
  [key: string]: any;
}
