export type UIVariant = 'filled' | 'outlined' | 'transparent';
export type UIColor = 'primary' | 'light' | 'dark' | 'adaptive';
export type UISize = 'sm' | 'md' | 'lg';
export type Route = {
  title: string;
  href: string;
  blank?: boolean;
  hidden?: boolean;
};
