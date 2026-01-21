import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessingItem {
  title: string;
  detail: string;
}

interface Contact {
  label: string;
  value: string;
}

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {
  protected contacts: Contact[] = [
    { label: 'Verantwortlicher', value: 'Bachblyten Festival Kollektiv UG (haftungsbeschränkt)' },
    { label: 'Adresse', value: 'Am Flugplatz 1, 25813 Schwesing' },
    { label: 'Datenschutz', value: 'privacy@bachblyten-festival.com · +49 (0) 4841 123456' }
  ];

  protected processing: ProcessingItem[] = [
    {
      title: 'Ticketing (Paylogic)',
      detail: 'Zweck: Vertragsabwicklung und Einlass. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.'
    },
    {
      title: 'Newsletter / CRM',
      detail:
        'Double-Opt-In, nur nach Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Abmeldelink in jeder Mail.'
    },
    {
      title: 'Webtracking',
      detail:
        'Privacy-first Analytics (IP-Anonymisierung). Kein Profiling, keine Weitergabe an Dritte ohne Einwilligung.'
    },
    {
      title: 'Zahlungsdienstleister',
      detail:
        'Abhängig von gewählter Payment-Methode (z. B. Paylogic-Provider, PayPal). Daten werden nur für Zahlungsabwicklung genutzt.'
    }
  ];

  protected recipients: string[] = [
    'Ticketing- und Paymentdienstleister',
    'Newsletter-Provider (EU-Server, kein Drittlandtransfer ohne Einwilligung)',
    'Technik- und Hostingpartner nach Auftragsverarbeitung'
  ];

  protected rights: string[] = [
    'Auskunft, Berichtigung, Löschung, Einschränkung',
    'Widerspruch gegen Direktwerbung',
    'Datenübertragbarkeit',
    'Beschwerderecht bei der zuständigen Aufsichtsbehörde'
  ];

  protected cookies: string[] = [
    'Consent-Tool: aktiviert bei erstem Seitenaufruf',
    'Essenzielle Cookies für Session/Checkout',
    'Optionale Cookies nur nach Opt-In (Analytics, Embeds)'
  ];
}
