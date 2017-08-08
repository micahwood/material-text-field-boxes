import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldBoxComponent } from './text-field-box.component';

describe('TextFieldBoxComponent', () => {
  let component: TextFieldBoxComponent;
  let fixture: ComponentFixture<TextFieldBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFieldBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
