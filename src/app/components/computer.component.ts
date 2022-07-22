import { Component, Input } from '@angular/core';
import { IComputer } from '../model/computer';

@Component({
  selector: 'rc-computer',
  templateUrl: './computer.component.svg'
})

export class ComputerComponent {

  @Input()
  computer!: IComputer;

}
