import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterBoxComponent } from './roster-box.component';

describe('RosterBoxComponent', () => {
  let component: RosterBoxComponent;
  let fixture: ComponentFixture<RosterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
