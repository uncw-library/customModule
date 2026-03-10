import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncwHeaderComponent } from './uncw-header.component';

describe('UncwHeaderComponent', () => {
  let component: UncwHeaderComponent;
  let fixture: ComponentFixture<UncwHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UncwHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncwHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
