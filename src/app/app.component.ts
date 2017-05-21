import { Component, OnInit } from '@angular/core';

import { IComputer, IComputerFactory, ComputerFactory } from './model/computer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public computer: IComputer;

    public ngOnInit() {
        let factory: IComputerFactory = new ComputerFactory();
        this.computer = factory.createComputer();
    }

}
