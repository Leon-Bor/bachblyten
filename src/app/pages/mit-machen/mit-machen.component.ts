import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface CrewRole {
  title: string;
  bullets: string[];
}

@Component({
  selector: 'app-mit-machen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mit-machen.component.html',
  styleUrl: './mit-machen.component.scss',
})
export class MitMachenComponent {
  protected readonly mail = 'jobs@bachblyten-festival.com';
  protected readonly mailLink = `mailto:${this.mail}?subject=${encodeURIComponent('Mitmachen Crew 2026')}`;
  protected readonly bookingMail = 'booking@bachblyten-festival.com';
  protected readonly bookingMailLink = `mailto:${this.bookingMail}?subject=${encodeURIComponent('DJ / Special Submission')}`;

  protected readonly roles: CrewRole[] = [
    {
      title: 'Tresen & Drinks',
      bullets: [
        'Getränke ausschenken, Kasse bedienen und gute Vibes am Counter halten.',
        'Teamarbeit im Schichtsystem – du bleibst freundlich, auch wenn es schnell gehen muss.',
      ],
    },
    {
      title: 'Parkplatz & Traffic',
      bullets: [
        'Anreisende lotsen, Flächen einteilen, Wege freihalten und freundlich erklären.',
        'Ruhiger Kopf bei An- und Abreise-Spitzen, Handschuhe & Funkgerät werden gestellt.',
      ],
    },
    {
      title: 'Catering & Backstage',
      bullets: [
        'Crew-Verpflegung vorbereiten, ausgeben und kühl lagern.',
        'Backstage auffüllen, sauber halten und kurze Wege sichern.',
      ],
    },
    {
      title: 'Auf- & Abbau',
      bullets: [
        'Floors, Deko und Infrastruktur auf- und abbauen – von Zäunen bis Lichttraversen.',
        'Sicherheitsbriefings beachten, Werkzeuge & Handschuhe bekommst du von uns.',
      ],
    },
    {
      title: 'Einlass & Bändchen',
      bullets: [
        'Tickets scannen, Bändchen anlegen und Besucher:innen willkommen heißen.',
        'Erster Kontakt zum Festival – klare Infos und Ruhe auch bei Andrang.',
      ],
    },
    {
      title: 'Kunst & Bauprojekte',
      bullets: [
        'Installationen, Deko oder Holz-/Upcycling-Projekte, die das Gelände schöner machen.',
        'Materialbudget und Aufbauzeiten klären wir mit dir; gern Skizzen oder Referenzen mitschicken.',
      ],
    },
  ];
}
