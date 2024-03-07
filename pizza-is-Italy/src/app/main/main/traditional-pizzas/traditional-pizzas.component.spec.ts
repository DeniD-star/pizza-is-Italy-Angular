import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalPizzasComponent } from './traditional-pizzas.component';

describe('TraditionalPizzasComponent', () => {
  let component: TraditionalPizzasComponent;
  let fixture: ComponentFixture<TraditionalPizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraditionalPizzasComponent]
    });
    fixture = TestBed.createComponent(TraditionalPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
