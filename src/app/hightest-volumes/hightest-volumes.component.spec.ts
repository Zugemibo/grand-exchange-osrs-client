import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightestVolumesComponent } from './hightest-volumes.component';

describe('HightestVolumesComponent', () => {
  let component: HightestVolumesComponent;
  let fixture: ComponentFixture<HightestVolumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HightestVolumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HightestVolumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
