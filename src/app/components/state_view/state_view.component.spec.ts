import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateViewComponent } from './state_view.component';

// Memory paging clamps offset to [0, 0xFF00] (a 256-byte page over 64KB memory).
// The template stub avoids rendering the SVG, which reads the required computer
// input; the paging methods under test don't touch it.
describe('StateViewComponent paging', () => {
  let fixture: ComponentFixture<StateViewComponent>;
  let component: StateViewComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [StateViewComponent] })
      .overrideComponent(StateViewComponent, { set: { template: '' } });
    fixture = TestBed.createComponent(StateViewComponent);
    component = fixture.componentInstance;
  });

  it('advances a page at a time', () => {
    expect(component.offset).toBe(0);
    component.nextPage();
    expect(component.offset).toBe(0x100);
    component.nextPage();
    expect(component.offset).toBe(0x200);
  });

  it('steps back a page at a time', () => {
    component.offset = 0x300;
    component.prevPage();
    expect(component.offset).toBe(0x200);
  });

  it('clamps prevPage at zero (no negative offset)', () => {
    component.offset = 0;
    component.prevPage();
    expect(component.offset).toBe(0);
  });

  it('clamps nextPage at the last page (0xFF00)', () => {
    component.offset = 0xff00;
    component.nextPage();
    expect(component.offset).toBe(0xff00);
  });

  it('does not overshoot the ceiling from the penultimate page', () => {
    component.offset = 0xfe00;
    component.nextPage();
    expect(component.offset).toBe(0xff00);
    component.nextPage();
    expect(component.offset).toBe(0xff00);
  });
});
