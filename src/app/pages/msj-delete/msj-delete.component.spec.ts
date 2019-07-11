import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjDeleteComponent } from './msj-delete.component';

describe('MsjDeleteComponent', () => {
  let component: MsjDeleteComponent;
  let fixture: ComponentFixture<MsjDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
