import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import { UnitsComponent } from './units.component';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import {provideMockStore} from "@ngrx/store/testing";
import {provideHttpClient} from "@angular/common/http";
import {By} from "@angular/platform-browser";

describe('UnitsComponent', () => {
  let component: UnitsComponent;
  let fixture: ComponentFixture<UnitsComponent>;
  let debugElement: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[
        provideMockStore({}),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      declarations: [UnitsComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(UnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });
  it('should enable slider ', () => {
    debugElement.query(By.css('mat-mdc-checkbox-1-input')).triggerEventHandler('change', {name: 'Wood', active: true, value: 0});
    fixture.detectChanges();
    const submitEl = fixture.debugElement.query(By.css('input#slide_1'));
    expect(submitEl.nativeElement.disabled).toBeFalsy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should first age be All', () => {
    // const value = debugElement.query(By.css('span.mdc-button__label span')).nativeElement.innerText;
    // expect(value).toEqual('Home');
  })
});
