import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitOutComponent } from './unit-out.component';

describe('UnitOutComponent', () => {
  let component: UnitOutComponent;
  let fixture: ComponentFixture<UnitOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
