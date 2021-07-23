import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighAlchemyComponent } from './high-alchemy.component';

describe('HighAlchemyComponent', () => {
  let component: HighAlchemyComponent;
  let fixture: ComponentFixture<HighAlchemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighAlchemyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighAlchemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
