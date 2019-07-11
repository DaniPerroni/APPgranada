import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjSentComponent } from './msj-sent.component';

describe('MsjSentComponent', () => {
  let component: MsjSentComponent;
  let fixture: ComponentFixture<MsjSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
