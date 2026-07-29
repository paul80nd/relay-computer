import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IControlSwitchesCard } from '@paul80nd/relay-computer-model';
import { ControlSwitchesComponent } from './control_switches.component';

// The front-panel momentary switches debounce for 500ms: a flip fires the model
// call, latches a transient signal, and re-arms only after a timeout. These tests
// drive the class directly (no template render) with fake timers + a mock card.
describe('ControlSwitchesComponent', () => {
  let fixture: ComponentFixture<ControlSwitchesComponent>;
  let component: ControlSwitchesComponent;
  let card: {
    deposit: ReturnType<typeof vi.fn>;
    depositNext: ReturnType<typeof vi.fn>;
    examine: ReturnType<typeof vi.fn>;
    examineNext: ReturnType<typeof vi.fn>;
    loadAddr: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    vi.useFakeTimers();
    card = {
      deposit: vi.fn(),
      depositNext: vi.fn(),
      examine: vi.fn(),
      examineNext: vi.fn(),
      loadAddr: vi.fn(),
    };

    // Stub the SVG template: this builder auto-detects changes, and the real
    // template renders child switches that need their own inputs. We only
    // exercise the component class (the debounce state machine).
    TestBed.configureTestingModule({ imports: [ControlSwitchesComponent] })
      .overrideComponent(ControlSwitchesComponent, { set: { template: '' } });
    fixture = TestBed.createComponent(ControlSwitchesComponent);
    fixture.componentRef.setInput('card', card as unknown as IControlSwitchesCard);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('deposit', () => {
    it('a down-flip fires deposit() and latches the deposit signal', () => {
      component.changeDeposit(false);

      expect(card.deposit).toHaveBeenCalledTimes(1);
      expect(card.depositNext).not.toHaveBeenCalled();
      expect(component.deposit()).toBe(true);
      expect(component.depositNext()).toBe(false);
    });

    it('an up-flip fires depositNext() and latches the depositNext signal', () => {
      component.changeDeposit(true);

      expect(card.depositNext).toHaveBeenCalledTimes(1);
      expect(card.deposit).not.toHaveBeenCalled();
      expect(component.deposit()).toBe(false);
      expect(component.depositNext()).toBe(true);
    });

    it('ignores a second flip while still latched (debounce)', () => {
      component.changeDeposit(false);
      component.changeDeposit(false); // repeat within the window
      component.changeDeposit(true);  // opposite direction, still within the window

      expect(card.deposit).toHaveBeenCalledTimes(1);
      expect(card.depositNext).not.toHaveBeenCalled();
    });

    it('re-arms after the 500ms window so a later flip fires again', () => {
      component.changeDeposit(false);
      vi.advanceTimersByTime(500);

      expect(component.deposit()).toBe(false);
      expect(component.depositNext()).toBe(false);

      component.changeDeposit(false);
      expect(card.deposit).toHaveBeenCalledTimes(2);
    });

    it('stays latched just before the window elapses', () => {
      component.changeDeposit(false);
      vi.advanceTimersByTime(499);

      expect(component.deposit()).toBe(true);
      component.changeDeposit(false);
      expect(card.deposit).toHaveBeenCalledTimes(1);
    });
  });

  describe('examine', () => {
    it('a down-flip fires examine() and an up-flip fires examineNext()', () => {
      component.changeExamine(false);
      expect(card.examine).toHaveBeenCalledTimes(1);
      expect(component.examine()).toBe(true);

      // Still latched, so the up-flip is ignored until the window elapses.
      component.changeExamine(true);
      expect(card.examineNext).not.toHaveBeenCalled();

      vi.advanceTimersByTime(500);
      component.changeExamine(true);
      expect(card.examineNext).toHaveBeenCalledTimes(1);
      expect(component.examineNext()).toBe(true);
    });
  });

  describe('loadAddr', () => {
    it('fires once, debounces a repeat, then re-arms after 500ms', () => {
      component.changeLoadAddr();
      component.changeLoadAddr();

      expect(card.loadAddr).toHaveBeenCalledTimes(1);
      expect(component.loadAddr()).toBe(true);

      vi.advanceTimersByTime(500);
      expect(component.loadAddr()).toBe(false);

      component.changeLoadAddr();
      expect(card.loadAddr).toHaveBeenCalledTimes(2);
    });
  });
});
