import { Component, OnInit } from '@angular/core';

import { ComputerFactory, IComputer, IComputerFactory } from '@paul80nd/relay-computer-model';

@Component({
  selector: 'rc-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  computer!: IComputer;

  ngOnInit() {
    // Initially check if dark mode is enabled on system
    const darkModeOn =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    // If dark mode is enabled then directly switch to the dark-theme
    if (darkModeOn) {
      document.body.setAttribute("cds-theme", "dark");
    }

    const factory: IComputerFactory = new ComputerFactory();
    this.computer = factory.createComputer();
  }

  loadFromClipboard() {
    navigator.clipboard.readText().then(
      text => {
        if (/^[0-9a-f]*$/g.test(text)) {
          const parts = text.match(/.{1,2}/g)
          if (parts) {
            const values = parts.map(p => parseInt(p, 16));
            if (values.length > 2) {
              const offset = values[0] + (values[1] << 8);
              const prog = values.slice(2);
              this.computer.yBackplane.memory.loadProgram(offset, prog);
              return;
            }
          }
        }
        alert(`Did not recognise clipboard contents as an assembled program.`);
      }
    ).catch(error => {
      alert(`Cannot read clipboard text: ${error}`);
    });

  }

}
