import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwilioSMSComponent } from './twilio-sms.component';

describe('TwilioSMSComponent', () => {
  let component: TwilioSMSComponent;
  let fixture: ComponentFixture<TwilioSMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwilioSMSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwilioSMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
