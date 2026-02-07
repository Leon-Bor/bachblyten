import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { LineUpComponent } from './pages/line-up/line-up.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AnfahrtComponent } from './pages/anfahrt/anfahrt.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { MitMachenComponent } from './pages/mit-machen/mit-machen.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, data: { background: 'sunrise' } },
  { path: 'tickets', component: TicketsComponent, data: { background: 'static' } },
  { path: 'line-up', component: LineUpComponent, data: { background: 'static' } },
  { path: 'faq', component: FaqComponent, data: { background: 'static' } },
  { path: 'anfahrt', component: AnfahrtComponent, data: { background: 'static' } },
  { path: 'gallery', component: GalleryComponent, data: { background: 'static' } },
  { path: 'about', component: AboutComponent, data: { background: 'static' } },
  { path: 'mit-machen', component: MitMachenComponent, data: { background: 'static' } },
  { path: 'impressum', component: ImpressumComponent, data: { background: 'static' } },
  { path: 'kontakt', component: KontaktComponent, data: { background: 'static' } },
  { path: 'datenschutz', component: DatenschutzComponent, data: { background: 'static' } },
  // Legacy slugs from alten Google-Listings → auf neue Seiten leiten
  { path: 'ueber-das-festival', redirectTo: 'about', pathMatch: 'full' },
  { path: 'uber-das-festival', redirectTo: 'about', pathMatch: 'full' },
  { path: 'infos-und-hinweise', redirectTo: 'faq', pathMatch: 'full' },
  { path: 'programm', redirectTo: 'line-up', pathMatch: 'full' },
  { path: 'Programm', redirectTo: 'line-up', pathMatch: 'full' },
  { path: 'anreise', redirectTo: 'anfahrt', pathMatch: 'full' },
  { path: 'imprint', redirectTo: 'impressum', pathMatch: 'full' },
  { path: 'projekte', redirectTo: 'about', pathMatch: 'full' },
  { path: 'Projekte', redirectTo: 'about', pathMatch: 'full' },
  { path: 'ein-letztes-mal-bachblyten', redirectTo: '', pathMatch: 'full' },
  { path: 'ein-letztes-mal-bachbl', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
