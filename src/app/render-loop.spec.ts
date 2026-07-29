import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ApplicationRef } from '@angular/core';
import { MAX_CONSECUTIVE_ERRORS, startRenderLoop } from './render-loop';

// The loop drives change detection once per animation frame. A single throwing
// frame is caught and logged, but a sustained per-frame throw stops the loop
// after MAX_CONSECUTIVE_ERRORS. Fake timers drive requestAnimationFrame.
describe('startRenderLoop', () => {
  let detectChanges: ReturnType<typeof vi.fn>;
  let appRef: ApplicationRef;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    detectChanges = vi.fn();
    appRef = { components: [{ changeDetectorRef: { detectChanges } }] } as unknown as ApplicationRef;
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('runs change detection every frame and keeps scheduling', () => {
    startRenderLoop(appRef);
    vi.advanceTimersToNextFrame();
    expect(detectChanges).toHaveBeenCalledTimes(1);
    vi.advanceTimersToNextFrame();
    vi.advanceTimersToNextFrame();
    expect(detectChanges).toHaveBeenCalledTimes(3);
  });

  it('stops after MAX_CONSECUTIVE_ERRORS consecutive throws', () => {
    detectChanges.mockImplementation(() => {
      throw new Error('boom');
    });
    startRenderLoop(appRef);

    // Advance well past the threshold; the loop should stop scheduling frames.
    for (let i = 0; i < MAX_CONSECUTIVE_ERRORS + 5; i++) {
      vi.advanceTimersToNextFrame();
    }

    expect(detectChanges).toHaveBeenCalledTimes(MAX_CONSECUTIVE_ERRORS);
    expect(console.error).toHaveBeenCalledWith(
      `Render loop stopped after ${MAX_CONSECUTIVE_ERRORS} consecutive errors.`,
    );
  });

  it('resets the error streak on any successful frame', () => {
    let calls = 0;
    detectChanges.mockImplementation(() => {
      // Throw for the first few frames, then succeed forever after.
      if (++calls <= MAX_CONSECUTIVE_ERRORS - 1) {
        throw new Error('transient');
      }
    });
    startRenderLoop(appRef);

    const frames = MAX_CONSECUTIVE_ERRORS * 3;
    for (let i = 0; i < frames; i++) {
      vi.advanceTimersToNextFrame();
    }

    // Never hit MAX in a row, so it never stopped: every frame ran.
    expect(detectChanges).toHaveBeenCalledTimes(frames);
    expect(console.error).not.toHaveBeenCalledWith(
      `Render loop stopped after ${MAX_CONSECUTIVE_ERRORS} consecutive errors.`,
    );
  });
});
