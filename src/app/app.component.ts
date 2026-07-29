import { Component, OnInit, ChangeDetectionStrategy, DestroyRef, inject, signal } from '@angular/core';

import { ComputerFactory, IComputer, IComputerFactory } from '@paul80nd/relay-computer-model';
import { parseAssembledProgram } from './program-loader';
import { ClrIcon, ClrStopEscapePropagationDirective, ClrPopoverHostDirective, ClrDropdownModule, ClrConditionalModule, ClrTabsModule, ClrAlertModule } from '@clr/angular';
import { ComputerComponent } from './components/computer.component';
import { DocumentationComponent } from './components/docs/docs.component';
import { ArchitectureDiagramComponent } from './components/archdiag/archdiag.component';
import { InstructionSetComponent } from './components/instrset/instrset.component';

@Component({
    selector: 'rc-root',
    templateUrl: './app.component.html',
    styles: `
      .alert-dock {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
      }
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ClrIcon, ClrStopEscapePropagationDirective, ClrPopoverHostDirective, ClrDropdownModule, ClrConditionalModule, ComputerComponent, ClrTabsModule, DocumentationComponent, ArchitectureDiagramComponent, InstructionSetComponent, ClrAlertModule]
})
export class AppComponent implements OnInit {

  computer!: IComputer;

  // App-level alert banner shown in place of native alert(); null = hidden.
  // A signal so setting it from the async clipboard callback schedules change
  // detection under zoneless.
  readonly notification = signal<{ type: 'warning' | 'danger'; text: string } | null>(null);

  // Toast-style auto-dismiss timer for the banner above.
  private dismissTimer?: ReturnType<typeof setTimeout>;
  private static readonly DISMISS_MS = 6000;

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

    this.destroyRef.onDestroy(() => clearTimeout(this.dismissTimer));

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
          this.notify('warning', `Did not recognise clipboard contents as an assembled program.`);
        }
      }
    ).catch(error => {
      this.notify('danger', `Cannot read clipboard text: ${error}`);
    });

  }

  // Show a toast-style banner and (re)arm its auto-dismiss.
  private notify(type: 'warning' | 'danger', text: string): void {
    clearTimeout(this.dismissTimer);
    this.notification.set({ type, text });
    this.dismissTimer = setTimeout(() => this.notification.set(null), AppComponent.DISMISS_MS);
  }

  // Dismiss the banner now (the X button) and cancel the pending auto-dismiss so
  // a stale timer can't close a later message early.
  dismiss(): void {
    clearTimeout(this.dismissTimer);
    this.notification.set(null);
  }

}
