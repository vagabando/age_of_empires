import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeLibComponent } from './fe-lib.component';

describe('FeLibComponent', () => {
  let component: FeLibComponent;
  let fixture: ComponentFixture<FeLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
