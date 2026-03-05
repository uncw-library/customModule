import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDebugComponent } from './state-debug.component';

describe('StateDebugComponent', () => {
  let component: StateDebugComponent;
  let fixture: ComponentFixture<StateDebugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateDebugComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
