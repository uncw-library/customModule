import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibanswersChatComponent } from './libanswers-chat.component';

describe('LibanswersChatComponent', () => {
  let component: LibanswersChatComponent;
  let fixture: ComponentFixture<LibanswersChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibanswersChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibanswersChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
