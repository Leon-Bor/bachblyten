import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProcessingItem {
  title: string;
  detail: string;
}

interface Contact {
  label: string;
  value: string;
}

interface Tool {
  name: string;
  detail: string;
  legal: string;
}

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss',
})
export class DatenschutzComponent {
  protected contacts: Contact[] = [
    { label: 'Verantwortlicher', value: 'Blytenstaub UG (haftungsbeschränkt)' },
    { label: 'Adresse', value: 'Lollfuß 5, 24837 Schleswig' },
    { label: 'Datenschutz', value: 'info@bachblyten-festival.com' },
  ];

  protected processing: ProcessingItem[] = [
    {
      title: 'Ticketing & Zahlungsabwicklung (Paylogic / See Tickets)',
      detail:
        'Zweck: Ticketkauf, Zahlungsabwicklung, Betrugsprävention im eingebetteten Paylogic-Shop. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO; für Betrugsabwehr Art. 6 Abs. 1 lit. f DSGVO.',
    },
    {
      title: 'Newsletter / CRM',
      detail:
        'Double-Opt-In, nur nach Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Abmeldelink in jeder Mail.',
    },
    {
      title: 'Webtracking (Google Analytics 4, gtag.js)',
      detail:
        'Zweck: Reichweitenmessung und Fehlersuche. IP-Anonymisierung aktiviert, keine Werbe- oder Signal-Funktionen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse); Opt-out über Browser-Add-on oder Do-Not-Track.',
    },
  ];

  protected recipients: string[] = [
    'See Tickets B.V. (Paylogic) inkl. angebundene Zahlungsdienstleister für Checkout (EU/UK/USA je nach Zahlungsmethode)',
    'Google Ireland Ltd. / Google LLC für Analytics, Maps, YouTube und Google Fonts',
    'Unsplash / Getty Images CDN für Bildauslieferung',
    'Hosting- und Technikpartner in der EU nach Auftragsverarbeitung',
  ];

  protected rights: string[] = [
    'Auskunft, Berichtigung, Löschung (Art. 17) – wir löschen auf Anfrage, sofern keine Aufbewahrungspflichten entgegenstehen',
    'Einschränkung der Verarbeitung und Widerspruch, insbesondere gegen Analytics',
    'Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft',
    'Datenübertragbarkeit',
    'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
  ];

  protected cookies: string[] = [
    'Essenzielle Cookies/Speicher: Session, Security und Paylogic-Checkout (Art. 6 Abs. 1 lit. b/f DSGVO)',
    'Analytics: Google Analytics 4 (gtag.js) mit IP-Anonymisierung; Cookies/Local Storage, Standard-Speicherdauer 14 Monate',
    'Embeds: YouTube-Videos und Google Maps setzen eigene Cookies, sobald die Seite mit dem Embed geladen wird',
    'Fonts & Media-CDN: Google Fonts und Unsplash liefern Assets ohne Cookies, aber mit Server-Logdaten beim Anbieter',
  ];

  protected tools: Tool[] = [
    {
      name: 'Google Analytics 4 (gtag.js)',
      detail:
        'Lädt von googletagmanager.com/google-analytics.com; verarbeitet pseudonyme Nutzungsdaten, setzt Cookies/Local Storage; IP-Anonymisierung aktiv, keine Google-Signals.',
      legal:
        'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO; Opt-out via Browser-Add-on oder Do-Not-Track.',
    },
    {
      name: 'YouTube Embed',
      detail:
        'Videos auf Landing- und Gallery-Seite werden von youtube.com geladen; Google erhält IP-Adresse, User-Agent und setzt ggf. Cookies auch ohne Play.',
      legal: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Darstellung des Aftermovies).',
    },
    {
      name: 'Google Maps Embed API',
      detail:
        'Anfahrt-Karte (maps.google.com / googleapis.com) nutzt API-Key; es werden Verbindungsdaten, ggf. Standort-/Geräteinfos verarbeitet.',
      legal:
        'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Bereitstellung der Anfahrtsbeschreibung).',
    },
    {
      name: 'Paylogic Ticketshop (See Tickets)',
      detail:
        'Checkout im iFrame (shop.paylogic.com); überträgt Browser- und Zahlungsdaten an See Tickets B.V. sowie angebundene Payment-Provider für Vertragsabwicklung.',
      legal: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Ticketkauf).',
    },
    {
      name: 'Google Fonts CDN',
      detail:
        'Schriften werden von fonts.googleapis.com / fonts.gstatic.com geladen; dabei fallen IP-Adresse und Geräte-Infos in Server-Logs an.',
      legal: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (einheitliches Erscheinungsbild).',
    },
    {
      name: 'Unsplash CDN',
      detail:
        'Galerie-Bilder kommen von images.unsplash.com; der Anbieter verarbeitet IP/User-Agent zur Auslieferung.',
      legal: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Bilddarstellung).',
    },
  ];
}
