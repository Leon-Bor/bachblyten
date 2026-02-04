import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

interface CollagePhoto {
  src: string;
  alt: string;
  classes?: string[];
}

@Component({
  selector: 'app-photo-collage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-collage.component.html',
  styleUrl: './photo-collage.component.scss',
})
export class PhotoCollageComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() heading = 'Momente 2024';
  @Input() eyebrow = 'Gallery 2024';
  @Input() showHeading = false;
  @Input() start = 0;
  @Input() count = 12;
  @Input() mobileCount?: number;

  @ViewChild('strip', { static: true }) private stripRef?: ElementRef<HTMLDivElement>;

  protected activePhoto: CollagePhoto | null = null;
  private previousOverflow = '';
  protected isMobile = false;
  protected isHovering = false;
  private scrollTimer: number | null = null;

  protected readonly photos: CollagePhoto[] = [
    {
      src: 'gallery-2024/495580849_1243121454492817_8221676793542253220_n.jpg',
      alt: 'Freund*innen feiern',
    },
    {
      src: 'gallery-2024/496645689_1243122794492683_9098788555013854663_n.jpg',
      alt: 'Stage von weitem',
      classes: ['tilt-left'],
    },
    {
      src: 'gallery-2024/496819920_1243120431159586_1830377769474303828_n.jpg',
      alt: 'Crowd bei Nacht',
      classes: ['tall'],
    },
    {
      src: 'gallery-2024/496937420_1243121451159484_8375734755545608034_n.jpg',
      alt: 'Bühnenlicht',
      classes: ['tilt-right'],
    },
    {
      src: 'gallery-2024/496942558_1243121611159468_3229630521896710272_n.jpg',
      alt: 'Festivalbesucher*innen',
      classes: ['wide'],
    },
    {
      src: 'gallery-2024/497437154_1243121697826126_4972495269714563302_n.jpg',
      alt: 'Abendstimmung',
      classes: ['tilt-left'],
    },
    {
      src: 'gallery-2024/496943556_1243122787826017_5559518133444775713_n.jpg',
      alt: 'Lasershow',
      classes: ['wide', 'tilt-left'],
    },
    {
      src: 'gallery-2024/496946862_1243122831159346_4090556471236403551_n.jpg',
      alt: 'Bühnenblick',
    },
    {
      src: 'gallery-2024/496949718_1243121747826121_8477294946372455647_n.jpg',
      alt: 'Publikum mit Fahnen',
      classes: ['tilt-right'],
    },
    {
      src: 'gallery-2024/497106165_1243121831159446_1345806829098448002_n.jpg',
      alt: 'Crew Portrait',
      classes: ['wide'],
    },
    {
      src: 'gallery-2024/497440923_1243122861159343_6991732234675467554_n.jpg',
      alt: 'Lichtkegel',
      classes: ['tall'],
    },
    {
      src: 'gallery-2024/497447369_1243121751159454_2051238497692126238_n.jpg',
      alt: 'Publikum hebt Hände',
      classes: ['tall', 'tilt-right'],
    },
    {
      src: 'gallery-2024/497457623_1243122857826010_5840723699023006613_n.jpg',
      alt: 'DJ an Decks',
      classes: ['tilt-left'],
    },
    { src: 'gallery-2024/497459984_1243121444492818_2583418528447940071_n.jpg', alt: 'Rave Crowd' },
    {
      src: 'gallery-2024/497500295_1243122661159363_7806362733775765829_n.jpg',
      alt: 'Dancefloor',
      classes: ['tall'],
    },
    {
      src: 'gallery-2024/497464668_1243121754492787_7282065080842988531_n.jpg',
      alt: 'Freunde lachen',
      classes: ['tilt-right'],
    },
    {
      src: 'gallery-2024/497470379_1243120454492917_2838348218631298021_n.jpg',
      alt: 'Sonnenuntergang',
      classes: ['wide'],
    },
    {
      src: 'gallery-2024/497491642_1243121594492803_5565550846235201062_n.jpg',
      alt: 'Bunte Spots',
      classes: ['tilt-left'],
    },
    {
      src: 'gallery-2024/497519232_1243121731159456_8486272936926609055_n.jpg',
      alt: 'Menge mit Händen oben',
      classes: ['tilt-right'],
    },
    {
      src: 'gallery-2024/497519706_1243122867826009_654802962215824143_n.jpg',
      alt: 'Laserlinien',
      classes: ['tilt-left'],
    },
    {
      src: 'gallery-2024/497533697_1243121881159441_8281387432961022991_n.jpg',
      alt: 'DJ Close-up',
      classes: ['tall'],
    },
    {
      src: 'gallery-2024/497545020_1243121857826110_4217567429576880177_n.jpg',
      alt: 'Publikum im Licht',
      classes: ['wide', 'tilt-right'],
    },
    {
      src: 'gallery-2024/497548142_1243121544492808_6501387341948532745_n.jpg',
      alt: 'Stage warmes Licht',
      classes: ['wide'],
    },
    {
      src: 'gallery-2024/497550038_1243122777826018_4709600479253946780_n.jpg',
      alt: 'Bühnenfront',
      classes: ['tilt-left'],
    },
    {
      src: 'gallery-2024/497574493_1243121704492792_7496407834594206666_n.jpg',
      alt: 'Lichtshow vor Bühne',
      classes: ['wide', 'tilt-right'],
    },
    {
      src: 'gallery-2024/497588210_1243121507826145_2672713012335191644_n.jpg',
      alt: 'Smile im Publikum',
      classes: ['tilt-left'],
    },
    {
      src: 'gallery-2024/497589091_1243121791159450_4415413227755318814_n.jpg',
      alt: 'Crowd tanzt im Abendlicht',
      classes: ['big', 'tilt-left'],
    },
    {
      src: 'gallery-2024/497590849_1243121411159488_6853754916279143167_n.jpg',
      alt: 'Künstler*in am Deck',
      classes: ['wide', 'tilt-left'],
    },
    {
      src: 'gallery-2024/497593963_1243121431159486_4714972725275204217_n.jpg',
      alt: 'Handylicht Meer',
    },
    {
      src: 'gallery-2024/497652998_1243122874492675_1344441993594664029_n.jpg',
      alt: 'Menschenmenge im Neonlicht',
      classes: ['tilt-right'],
    },
    {
      src: 'gallery-2024/497727425_1243121851159444_2721468713989813647_n.jpg',
      alt: 'Freund*innen Selfie',
      classes: ['tall'],
    },
    {
      src: 'gallery-2024/497671917_1243123021159327_3181702123099847164_n.jpg',
      alt: 'Laser über Bühne',
      classes: ['wide'],
    },
    {
      src: 'gallery-2024/497710292_1243121527826143_5161392608031799812_n.jpg',
      alt: 'Lichtstrahlen über der Menge',
      classes: ['tilt-left'],
    },
    {
      src: 'gallery-2024/497761875_1243121724492790_348092209290367363_n.jpg',
      alt: 'Crowd bei Dämmerung',
      classes: ['tilt-left'],
    },
    {
      src: 'gallery-2024/497801178_1243122717826024_814622709646977712_n.jpg',
      alt: 'Bühnenfront Nacht',
      classes: ['tilt-right'],
    },
    {
      src: 'gallery-2024/497889852_1243121644492798_2720734868131202480_n.jpg',
      alt: 'Konfettimoment im Publikum',
      classes: ['tilt-left'],
    },
    {
      src: 'gallery-2024/497962080_1243123017825994_8572925138582384169_n.jpg',
      alt: 'Lasershow Finale',
      classes: ['wide', 'tilt-right'],
    },
  ];

  get displayPhotos(): CollagePhoto[] {
    const normalizedStart =
      ((this.start % this.photos.length) + this.photos.length) % this.photos.length;
    const ordered = [
      ...this.photos.slice(normalizedStart),
      ...this.photos.slice(0, normalizedStart),
    ];
    const limitDesktop = Math.max(1, Math.min(this.count, this.photos.length));
    const mobileLimit = this.mobileCount ?? Math.min(10, limitDesktop);
    const limit = this.isMobile ? mobileLimit : limitDesktop;
    return ordered.slice(0, limit);
  }

  protected open(photo: CollagePhoto): void {
    if (!this.activePhoto) {
      this.previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    this.activePhoto = photo;
  }

  protected close(): void {
    this.activePhoto = null;
    document.body.style.overflow = this.previousOverflow;
  }

  @HostListener('document:keydown.escape')
  protected onEsc(): void {
    if (this.activePhoto) {
      this.close();
    }
  }

  @HostListener('window:resize')
  protected onResize(): void {
    this.updateIsMobile();
    this.startAutoScroll();
  }

  ngOnInit(): void {
    this.updateIsMobile();
  }

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    if (this.activePhoto) {
      this.close();
    }
    this.stopAutoScroll();
  }

  private updateIsMobile(): void {
    this.isMobile = window.innerWidth < 768;
  }

  private startAutoScroll(): void {
    this.stopAutoScroll();
    const el = this.stripRef?.nativeElement;
    if (!el) return;
    this.scrollTimer = window.setInterval(() => {
      if (this.isHovering) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      const atEnd = el.scrollLeft >= maxScroll - 2;
      el.scrollLeft = atEnd ? 0 : el.scrollLeft + 0.6;
    }, 20);
  }

  private stopAutoScroll(): void {
    if (this.scrollTimer !== null) {
      window.clearInterval(this.scrollTimer);
      this.scrollTimer = null;
    }
  }
}
