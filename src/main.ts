import { enableProdMode, provideZonelessChangeDetection } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app/app.component';
import { startRenderLoop } from './app/render-loop';

import {
  ClarityIcons,
  angleIcon,
  clockIcon,
  flaskIcon,
  helpInfoIcon,
  importIcon,
  libraryIcon,
  listIcon,
  rulerPencilIcon
} from '@clr/angular/icon';

ClarityIcons.addIcons(angleIcon, clockIcon, flaskIcon, importIcon, helpInfoIcon, libraryIcon, listIcon, rulerPencilIcon);

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    // Async variant: lazy-loads the animations engine. Clarity 18 still depends
    // on @angular/animations internally (modal, vertical-nav, tree-view), so the
    // provider is required; app code itself uses no animation triggers.
    provideAnimationsAsync()
  ]
})
  // The model mutates outside Angular (its own clock/setTimeout loop), so with
  // no zone we drive change detection from a requestAnimationFrame loop.
  .then(appRef => startRenderLoop(appRef))
  .catch(err => console.error(err));
