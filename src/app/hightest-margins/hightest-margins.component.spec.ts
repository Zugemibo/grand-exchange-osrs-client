import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightestMarginsComponent } from './hightest-margins.component';

describe('HightestMarginsComponent', () => {
  let component: HightestMarginsComponent;
  let fixture: ComponentFixture<HightestMarginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HightestMarginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HightestMarginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
