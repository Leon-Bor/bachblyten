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
  { path: '**', redirectTo: '' }
];
