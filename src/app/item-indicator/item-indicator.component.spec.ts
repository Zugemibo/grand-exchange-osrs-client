import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIndicatorComponent } from './item-indicator.component';

describe('ItemIndicatorComponent', () => {
  let component: ItemIndicatorComponent;
  let fixture: ComponentFixture<ItemIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
