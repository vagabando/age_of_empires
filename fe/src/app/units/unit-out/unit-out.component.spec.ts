import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitOutComponent } from './unit-out.component';
import {provideMockStore} from "@ngrx/store/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('UnitOutComponent', () => {
  let component: UnitOutComponent;
  let fixture: ComponentFixture<UnitOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [UnitOutComponent],
      providers: [provideMockStore({})]
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
