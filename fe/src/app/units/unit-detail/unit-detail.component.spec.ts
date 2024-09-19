import { ComponentFixture, TestBed } from '@angular/core/testing';
import {provideMockStore} from "@ngrx/store/testing";
import { UnitDetailComponent } from './unit-detail.component';
import {RouterTestingModule} from "@angular/router/testing";
import { MatCardModule } from "@angular/material/card";
describe('UnitDetailComponent', () => {
  let component: UnitDetailComponent;
  let fixture: ComponentFixture<UnitDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule, MatCardModule],
      declarations: [UnitDetailComponent],
      providers:[provideMockStore({})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
