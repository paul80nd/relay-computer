import { Component, Input } from '@angular/core';

import { CardPart } from '@paul80nd/relay-computer-model';
import { DecPipe } from '../dec.pipe';
import { HexPipe } from '../hex.pipe';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-register-view]',
    templateUrl: './register_view.component.svg',
    styleUrls: ['./register_view.component.css'],
    imports: [DecPipe, HexPipe]
})

export class RegisterViewComponent {

  @Input() registerPart!: CardPart;
  @Input() registerName!: string;

}
