import { NgModule } from '@angular/core';

import { CardsModule } from '../cards/cards.module';

import { CardBayWComponent } from './w/card_bay_w.component';
import { CardBayXComponent } from './x/card_bay_x.component';
import { CardBayYComponent } from './y/card_bay_y.component';
import { CardBayZComponent } from './z/card_bay_z.component';

@NgModule({
  declarations: [
    CardBayWComponent,
    CardBayXComponent,
    CardBayYComponent,
    CardBayZComponent,
  ],
  exports: [
    CardBayWComponent,
    CardBayXComponent,
    CardBayYComponent,
    CardBayZComponent,
  ],
  imports: [CardsModule],
})
export class CardBaysModule { }
