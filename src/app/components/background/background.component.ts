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
  ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type BackgroundMode = 'sunrise' | 'static';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() mode: BackgroundMode = 'static';

  @ViewChild('sunLayer', { static: false }) sunLayer?: ElementRef<HTMLImageElement>;
  @ViewChild('wiesel', { static: false }) wiesel?: ElementRef<HTMLImageElement>;
  @ViewChildren('cloud') clouds?: QueryList<ElementRef<HTMLImageElement>>;

  protected cloudCount = Array.from({ length: 4 });

  private sunTrigger?: ScrollTrigger;
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

  private setupSunAnimation(): void {
    if (!this.sunLayer) {
      return;
    }

    const sun = this.sunLayer.nativeElement;
    if (this.mode === 'sunrise') {
      gsap.set(sun, { y: 80, scale: 1.05, opacity: 1 });
      this.sunTrigger = ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: '+=1200',
        onUpdate: (self) => {
          const eased = gsap.utils.clamp(0, 1, self.progress);
          gsap.to(sun, {
            y: gsap.utils.interpolate(80, -50, eased),
            scale: gsap.utils.interpolate(1.05, 1.18, eased),
            duration: 0.2,
            ease: 'power1.out',
            overwrite: true
          });
        }
      });
    } else {
      gsap.set(sun, { y: 30, scale: 1.05, opacity: 0.95 });
    }
  }

  private resetSunAnimation(): void {
    this.sunTrigger?.kill();
    this.sunTrigger = undefined;
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
      const startX = direction === 1 ? -240 - index * 60 : viewportWidth + 240 + index * 60;
      const endX = direction === 1 ? viewportWidth + 280 : -260;
      const scale = 0.7 + Math.random() * 0.6;
      const y = 30 + index * 40 + Math.random() * 30;

      gsap.set(cloud.nativeElement, { x: startX, y, scale, opacity: 0.85 });

      const tween = gsap.to(cloud.nativeElement, {
        x: endX,
        duration: 18 + Math.random() * 10,
        ease: 'none',
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 3
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
      onRepeat: () => {
        const nextDelay = 6 + Math.random() * 10;
        this.wieselTween?.repeatDelay(nextDelay);
      },
      yoyo: true,
      rotation: () => gsap.utils.random(-6, 6, 1),
      delay: 2.5
    });
  }
}
