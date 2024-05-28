// types.ts

export interface INavItem {
  icon: string;
  Text: string;
}
export interface PostItem {
  icons: string[]; // Allow an array of icons
  Text: string;
  src: string;
}

export interface SortyItem {
  Text: string;

  src: string;
}

export interface SwitchAccountItem {
  src: string;
  Text: string;
}
