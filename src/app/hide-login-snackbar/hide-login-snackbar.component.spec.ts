import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideLoginSnackbarComponent } from './hide-login-snackbar.component';

describe('HideLoginSnackbarComponent', () => {
  let component: HideLoginSnackbarComponent;
  let fixture: ComponentFixture<HideLoginSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HideLoginSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideLoginSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
