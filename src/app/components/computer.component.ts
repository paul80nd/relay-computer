import { Component, Input } from '@angular/core';
import { IComputer } from '@paul80nd/relay-computer-model'

@Component({
  selector: 'rc-computer',
  templateUrl: './computer.component.svg'
})

export class ComputerComponent {

  @Input()
  computer!: IComputer;

}
