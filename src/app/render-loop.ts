import { ApplicationRef } from '@angular/core';

/**
 * Drives change detection from a requestAnimationFrame loop.
 *
 * The relay-computer model is a plain, non-reactive object graph: components
 * read state directly (e.g. `card().stages.bit(0)`) on every check, which is
 * why the whole tree is ChangeDetectionStrategy.Eager (CheckAlways). The model
 * also runs its own clock via a self-perpetuating setTimeout loop
 * (see the model's clock.card / control-switches.card), mutating state entirely
 * outside Angular. Control switches and the clipboard loader use timers/promises
 * too.
 *
 * Under zone.js every one of those async callbacks implicitly triggered change
 * detection, so the view tracked the running machine. Going zoneless removes
 * that bridge, so we reinstate it explicitly: once per animation frame we force
 * change detection over the root view against the current model state. This
 * mirrors the previous behaviour while keeping bootstrap zone-free. rAF
 * naturally pauses when the tab is hidden, so no work happens off-screen.
 *
 * Note: we call ChangeDetectorRef.detectChanges() rather than
 * ApplicationRef.tick(). In zoneless mode tick() only refreshes views that have
 * been marked dirty, so it no-ops for our timer-driven model mutations (which
 * mark nothing dirty) and the view would freeze mid-run. detectChanges() forces
 * a synchronous check regardless, which is exactly what the non-reactive model
 * needs each frame.
 */
export function startRenderLoop(appRef: ApplicationRef): void {
  const tick = () => {
    // Force synchronous change detection over the root view (and its CheckAlways
    // children) every frame. detectChanges() bypasses the dirty gating that
    // ApplicationRef.tick() applies in zoneless mode, so timer-driven model
    // mutations (which mark nothing dirty) still reach the DOM.
    try {
      for (const c of appRef.components) {
        c.changeDetectorRef.detectChanges();
      }
    } catch (err) {
      console.error(err);
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
