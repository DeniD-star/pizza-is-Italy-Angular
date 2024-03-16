import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPizzasComponent } from './user-pizzas.component';

describe('UserPizzasComponent', () => {
  let component: UserPizzasComponent;
  let fixture: ComponentFixture<UserPizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPizzasComponent]
    });
    fixture = TestBed.createComponent(UserPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
