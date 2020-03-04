import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryComparasionComponent } from './country-comparasion.component';

describe('CountryComparasionComponent', () => {
  let component: CountryComparasionComponent;
  let fixture: ComponentFixture<CountryComparasionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryComparasionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComparasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
