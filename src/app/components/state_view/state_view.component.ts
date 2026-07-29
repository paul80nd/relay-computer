import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { ConditionLines, IComputer } from '@paul80nd/relay-computer-model';
import { RegisterViewComponent } from './components/register_view.component';
import { DecPipe } from './dec.pipe';
import { HexPipe } from './hex.pipe';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-state-view]',
  templateUrl: './state_view.component.svg',
  styleUrls: ['./state_view.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RegisterViewComponent, DecPipe, HexPipe]
})

export class StateViewComponent {

  protected readonly ConditionLines = ConditionLines;

  // One page is 256 bytes (16x16). Memory is 64KB, so the last page starts at
  // 0xFF00. The template already hides the paging arrows at these bounds; the
  // clamp keeps offset valid regardless of how nextPage/prevPage are called.
  private static readonly PAGE = 0x100;
  private static readonly MAX_OFFSET = 0x10000 - StateViewComponent.PAGE;

  offset = 0;
  memoryDec = false;

  readonly computer = input.required<IComputer>();

  shift(value: number) {
    return value << 8;
  }

  nextPage() {
    this.offset = Math.min(this.offset + StateViewComponent.PAGE, StateViewComponent.MAX_OFFSET);
  }
  prevPage() {
    this.offset = Math.max(this.offset - StateViewComponent.PAGE, 0);
  }
}
