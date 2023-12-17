import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFilmsComponent } from './customer-films.component';

describe('CustomerFilmsComponent', () => {
  let component: CustomerFilmsComponent;
  let fixture: ComponentFixture<CustomerFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
