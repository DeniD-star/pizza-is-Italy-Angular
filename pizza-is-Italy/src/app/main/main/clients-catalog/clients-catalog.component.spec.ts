import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCatalogComponent } from './clients-catalog.component';

describe('ClientsCatalogComponent', () => {
  let component: ClientsCatalogComponent;
  let fixture: ComponentFixture<ClientsCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsCatalogComponent]
    });
    fixture = TestBed.createComponent(ClientsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
