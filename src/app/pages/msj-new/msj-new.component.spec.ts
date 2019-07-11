import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjNewComponent } from './msj-new.component';

describe('MsjNewComponent', () => {
  let component: MsjNewComponent;
  let fixture: ComponentFixture<MsjNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
