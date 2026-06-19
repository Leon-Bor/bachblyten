import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { LINEUP_DATA } from '../../data/lineup';

const STAGE_ORDER = ['Parallelwald', 'Wurzelwerk', 'Blytenbau', 'Knospe'];

interface StageCard {
  stage: string;
  image: string;
  artist: string;
  tilt: number;
  pin: string;
  busy: boolean;
  pool: { name: string; image: string }[];
  deck: number[];
  last: number;
}

@Component({
  selector: 'app-lineup-pinboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lineup-pinboard.component.html',
  styleUrl: './lineup-pinboard.component.scss',
})
export class LineupPinboardComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('card') private cardRef!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('sway') private swayRef!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('swing') private swingRef!: QueryList<ElementRef<HTMLElement>>;

  private readonly pins = ['#ff7d1a', '#ff7d1a', '#ff7d1a', '#ff7d1a'];

  protected cards: StageCard[] = [];

  private swapTimers: number[] = [];
  private idleTweens: gsap.core.Tween[] = [];

  constructor() {
    this.cards = STAGE_ORDER.map((stage, i) => {
      const pool = LINEUP_DATA.artists
        .filter((a) => a.stage === stage && !!a.image)
        .map((a) => ({ name: a.name, image: a.image }));
      const card: StageCard = {
        stage,
        pool,
        deck: [],
        last: -1,
        image: '',
        artist: '',
        tilt: gsap.utils.random(-6, 6, 1),
        pin: this.pins[i % this.pins.length],
        busy: false,
      };
      const first = this.drawFrom(card);
      if (first) {
        card.image = first.image;
        card.artist = first.name;
      }
      return card;
    });
  }

  ngAfterViewInit(): void {
    // sway pivots at the pin (top), flip rotates around the card's own centre
    gsap.set(this.swayRef.map((e) => e.nativeElement), { transformOrigin: '50% 0%' });
    gsap.set(this.swingRef.map((e) => e.nativeElement), { transformOrigin: '50% 50%' });
    this.animateEntrance();
    this.cards.forEach((_, i) => this.scheduleSwap(i));
  }

  ngOnDestroy(): void {
    this.swapTimers.forEach((t) => window.clearTimeout(t));
    this.idleTweens.forEach((tween) => tween.kill());
    const els = [
      ...this.cardRef.map((e) => e.nativeElement),
      ...this.swayRef.map((e) => e.nativeElement),
      ...this.swingRef.map((e) => e.nativeElement),
    ];
    gsap.killTweensOf(els);
  }

  /** Draw the next artist for a stage from its reshuffled deck, avoiding back-to-back repeats. */
  private drawFrom(card: StageCard): { name: string; image: string } | undefined {
    if (card.pool.length === 0) {
      return undefined;
    }
    if (card.deck.length === 0) {
      card.deck = gsap.utils.shuffle([...card.pool.keys()]);
      if (card.deck.length > 1 && card.deck[0] === card.last) {
        card.deck.push(card.deck.shift() as number);
      }
    }
    const idx = card.deck.shift() as number;
    card.last = idx;
    return card.pool[idx];
  }

  private animateEntrance(): void {
    const cards = this.cardRef.map((e) => e.nativeElement);
    gsap.from(cards, {
      y: -90,
      opacity: 0,
      scale: 0.6,
      duration: 0.7,
      ease: 'back.out(1.7)',
      stagger: 0.12,
      onComplete: () => this.startIdleSway(),
    });
  }

  private startIdleSway(): void {
    this.swayRef.forEach((ref, i) => {
      this.idleTweens.push(
        gsap.fromTo(
          ref.nativeElement,
          { rotation: -1.6 },
          {
            rotation: 1.6,
            duration: gsap.utils.random(2.4, 3.8),
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: i * 0.2,
            transformOrigin: '50% 0%',
          },
        ),
      );
    });
  }

  /** Each card flips on its own randomized timer for an organic, non-synced cadence. */
  private scheduleSwap(i: number): void {
    this.swapTimers[i] = window.setTimeout(
      () => {
        this.swapCard(i);
        this.scheduleSwap(i);
      },
      gsap.utils.random(2400, 6500),
    );
  }

  private swapCard(i: number): void {
    const card = this.cards[i];
    const swing = this.swingRef.get(i)?.nativeElement;
    if (!card || !swing || card.busy || card.pool.length < 2) {
      return;
    }
    card.busy = true;
    const next = this.drawFrom(card);
    if (!next) {
      card.busy = false;
      return;
    }

    gsap
      .timeline({
        onComplete: () => {
          card.busy = false;
        },
      })
      .to(swing, {
        rotationY: 90,
        scale: 0.88,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        transformOrigin: '50% 50%',
      })
      .add(() => {
        card.image = next.image;
        card.artist = next.name;
      })
      .set(swing, { rotationY: -90 })
      .to(swing, { rotationY: 0, scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
  }
}
