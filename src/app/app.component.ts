import { Component, OnInit, ChangeDetectionStrategy, DestroyRef, inject } from '@angular/core';

import { ComputerFactory, IComputer, IComputerFactory } from '@paul80nd/relay-computer-model';
import { parseAssembledProgram } from './program-loader';
import { ClrIconModule, ClrStopEscapePropagationDirective, ClrPopoverHostDirective, ClrDropdownModule, ClrConditionalModule, ClrTabsModule } from '@clr/angular';
import { ComputerComponent } from './components/computer.component';
import { DocumentationComponent } from './components/docs/docs.component';
import { ArchitectureDiagramComponent } from './components/archdiag/archdiag.component';
import { InstructionSetComponent } from './components/instrset/instrset.component';

@Component({
    selector: 'rc-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ClrIconModule, ClrStopEscapePropagationDirective, ClrPopoverHostDirective, ClrDropdownModule, ClrConditionalModule, ComputerComponent, ClrTabsModule, DocumentationComponent, ArchitectureDiagramComponent, InstructionSetComponent]
})
export class AppComponent implements OnInit {

  computer!: IComputer;

  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    // Follow the OS colour scheme, and keep following it while the app is open
    // (toggling OS dark mode should flip the theme live, not only at load).
    if (window.matchMedia) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const applyTheme = (dark: boolean) =>
        document.body.setAttribute("cds-theme", dark ? "dark" : "light");
      applyTheme(mq.matches);
      const onChange = (e: MediaQueryListEvent) => applyTheme(e.matches);
      mq.addEventListener("change", onChange);
      this.destroyRef.onDestroy(() => mq.removeEventListener("change", onChange));
    }

    const factory: IComputerFactory = new ComputerFactory();
    this.computer = factory.createComputer();
  }

  loadFromClipboard() {
    navigator.clipboard.readText().then(
      text => {
        const program = parseAssembledProgram(text);
        if (program) {
          this.computer.yBackplane.memory.loadProgram(program.offset, program.prog);
        } else {
          alert(`Did not recognise clipboard contents as an assembled program.`);
        }
      }
    ).catch(error => {
      alert(`Cannot read clipboard text: ${error}`);
    });

  }

}
