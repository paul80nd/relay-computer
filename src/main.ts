import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

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
} from '@cds/core/icon';

ClarityIcons.addIcons(angleIcon, clockIcon, flaskIcon, importIcon, helpInfoIcon, libraryIcon, listIcon, rulerPencilIcon);

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
    provideAnimations()
]
})
  .catch(err => console.error(err));
