import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBySearchComponent } from './store-by-search.component';

describe('StoreBySearchComponent', () => {
  let component: StoreBySearchComponent;
  let fixture: ComponentFixture<StoreBySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreBySearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreBySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
