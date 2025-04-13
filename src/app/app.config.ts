import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { appRoutes } from './app.routes';

import { providePrimeNG } from 'primeng/config';
import EdutechPreset from './edutech-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideRouter(appRoutes),
    providePrimeNG({
      theme: {
        preset: EdutechPreset
      },
      ripple: true,
    }),
  ],
};
