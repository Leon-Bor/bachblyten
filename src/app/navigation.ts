export type NavPlacement = 'header' | 'footer';

export interface NavItem {
  label: string;
  path: string;
  order: number;
  placement: NavPlacement;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Events', path: '/', order: 1, placement: 'header' },
  { label: 'Festival 2026', path: '/2026', order: 2, placement: 'header' },
  { label: 'Line-Up 2026', path: '/line-up', order: 3, placement: 'header' },
  { label: 'Gallery', path: '/gallery', order: 4, placement: 'header' },
  { label: 'About Us', path: '/about', order: 5, placement: 'header' },
  { label: 'About Us', path: '/about', order: 1, placement: 'footer' },
  { label: 'Festival 2026', path: '/2026', order: 2, placement: 'footer' },
  { label: 'Impressum', path: '/impressum', order: 3, placement: 'footer' },
  { label: 'Kontakt', path: '/kontakt', order: 4, placement: 'footer' },
  { label: 'Datenschutz', path: '/datenschutz', order: 5, placement: 'footer' },
];

export const HEADER_LINKS = NAV_ITEMS.filter((item) => item.placement === 'header').sort(
  (a, b) => a.order - b.order,
);

export const FOOTER_LINKS = NAV_ITEMS.filter((item) => item.placement === 'footer').sort(
  (a, b) => a.order - b.order,
);
