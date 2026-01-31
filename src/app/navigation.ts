export type NavPlacement = 'header' | 'footer';

export interface NavItem {
  label: string;
  path: string;
  order: number;
  placement: NavPlacement;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', order: 1, placement: 'header' },
  { label: 'Tickets', path: '/tickets', order: 2, placement: 'header' },
  { label: 'Line-Up', path: '/line-up', order: 3, placement: 'header' },
  { label: 'Gallery', path: '/gallery', order: 6, placement: 'header' },
  { label: 'FAQ', path: '/faq', order: 4, placement: 'header' },
  { label: 'Anfahrt', path: '/anfahrt', order: 5, placement: 'header' },
  { label: 'About Us', path: '/about', order: 1, placement: 'footer' },
  { label: 'Gallery', path: '/gallery', order: 2, placement: 'footer' },
  { label: 'Impressum', path: '/impressum', order: 3, placement: 'footer' },
  { label: 'Kontakt', path: '/kontakt', order: 4, placement: 'footer' },
  { label: 'Datenschutz', path: '/datenschutz', order: 5, placement: 'footer' }
];

export const HEADER_LINKS = NAV_ITEMS.filter((item) => item.placement === 'header').sort(
  (a, b) => a.order - b.order
);

export const FOOTER_LINKS = NAV_ITEMS.filter((item) => item.placement === 'footer').sort(
  (a, b) => a.order - b.order
);
