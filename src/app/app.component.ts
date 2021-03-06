import { Component, OnInit } from '@angular/core';

import { ComputerFactory, IComputer, IComputerFactory } from './model/computer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    computer: IComputer;

    ngOnInit() {
        const factory: IComputerFactory = new ComputerFactory();
        this.computer = factory.createComputer();
    }

}
