import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitePizzasComponent } from './white-pizzas.component';

describe('WhitePizzasComponent', () => {
  let component: WhitePizzasComponent;
  let fixture: ComponentFixture<WhitePizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhitePizzasComponent]
    });
    fixture = TestBed.createComponent(WhitePizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
