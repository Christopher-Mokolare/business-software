import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly dark = signal(false);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;
    const saved = localStorage.getItem('theme');
    const value = saved === 'dark';
    this.dark.set(value);
    this.apply(value);
  }

  toggle(): void {
    const value = !this.dark();
    this.dark.set(value);
    this.apply(value);
    localStorage.setItem('theme', value ? 'dark' : 'light');
  }

  private apply(value: boolean): void {
    this.document.documentElement.dataset['theme'] = value ? 'dark' : 'light';
  }
}
