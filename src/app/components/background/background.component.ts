import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';

type BackgroundMode = 'sunrise' | 'static';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss',
})
export class BackgroundComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() mode: BackgroundMode = 'static';

  @ViewChild('sunLayer', { static: false }) sunLayer?: ElementRef<HTMLImageElement>;
  @ViewChild('wiesel', { static: false }) wiesel?: ElementRef<HTMLImageElement>;
  @ViewChildren('cloud') clouds?: QueryList<ElementRef<HTMLImageElement>>;

  protected cloudCount = Array.from({ length: this.isMobile() ? 4 : 6 });

  private sunTween?: gsap.core.Tween;
  private cloudTweens: gsap.core.Tween[] = [];
  private wieselTween?: gsap.core.Tween;

  ngAfterViewInit(): void {
    this.setupClouds();
    this.setupWiesel();
    this.setupSunAnimation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mode'] && !changes['mode'].firstChange) {
      this.resetSunAnimation();
      this.setupSunAnimation();
    }
  }

  ngOnDestroy(): void {
    this.resetSunAnimation();
    this.cloudTweens.forEach((tween) => tween.kill());
    this.wieselTween?.kill();
  }

  protected isMobile(): boolean {
    return window.innerWidth <= 600;
  }

  private setupSunAnimation(): void {
    if (!this.sunLayer) {
      return;
    }

    const sun = this.sunLayer.nativeElement;
    this.sunTween?.kill();
    console.log(this.mode);
    if (this.mode === 'sunrise') {
      gsap.set(sun, { y: this.isMobile() ? '-20vh' : '0vh', scale: 1, opacity: 0.85 });
      this.sunTween = gsap.to(sun, {
        y: this.isMobile() ? '-90vh' : '-35vh',
        scale: this.isMobile() ? 2 : 1,
        opacity: 1,
        duration: 10,
        ease: 'power2.out',
        delay: 3,
      });
    } else {
      gsap.set(sun, { y: 30, scale: 1.05, opacity: 0.95 });
    }
  }

  private resetSunAnimation(): void {
    this.sunTween?.kill();
    this.sunTween = undefined;
  }

  private setupClouds(): void {
    if (!this.clouds) {
      return;
    }
    this.cloudTweens.forEach((tween) => tween.kill());
    this.cloudTweens = [];

    const viewportWidth = window.innerWidth;
    this.clouds.forEach((cloud, index) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const startX = Math.random() * viewportWidth;
      const endX = direction === 1 ? viewportWidth + 280 : -260;
      const scale = 0.7 + Math.random() * 0.6;
      const y = 50 + index * 40 + Math.random() * 400;

      cloud.nativeElement.style.transform = `scaleY(${Math.random() > 0.5 ? 1 : -1})`;

      gsap.set(cloud.nativeElement, { x: startX, y, scale, opacity: 0.85 });

      const tween = gsap.to(cloud.nativeElement, {
        x: endX,
        duration: 18 + Math.random() * 10,

        ease: 'none',
        repeat: -1,
        yoyo: true,
      });

      this.cloudTweens.push(tween);
    });
  }

  private setupWiesel(): void {
    if (!this.wiesel) {
      return;
    }

    const el = this.wiesel.nativeElement;
    gsap.set(el, { xPercent: 120, yPercent: 20, rotate: 0 });

    this.wieselTween = gsap.to(el, {
      xPercent: 0,
      yPercent: 0,
      duration: 1.2,
      ease: 'back.out(1.6)',
      repeat: -1,
      repeatDelay: 8,
      scale: 2,
      onRepeat: () => {
        const nextDelay = 6 + Math.random() * 10;
        this.wieselTween?.repeatDelay(nextDelay);
      },
      yoyo: true,
      rotation: () => gsap.utils.random(-6, 6, 1),
      delay: 2.5,
    });
  }
}
