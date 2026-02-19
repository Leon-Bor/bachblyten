import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-anfahrt',
  standalone: true,
  imports: [],
  templateUrl: './anfahrt.component.html',
  styleUrl: './anfahrt.component.scss',
})
export class AnfahrtComponent {
  protected readonly venue = {
    name: 'Flugplatz Schwesing',
    address: 'Am Flugplatz 1, 25813 Schwesing',
    mapUrl: 'https://maps.google.com/?q=Flugplatz+Schwesing',
  };

  protected readonly mapEmbedUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    const embedUrl =
      'https://www.google.com/maps/embed/v1/place?key=AIzaSyAsNcyGv7shX6e1bNkuWbf4JNxxuBRSi7c&q=BACHBLYTEN®+FESTIVAL';
    this.mapEmbedUrl = sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
