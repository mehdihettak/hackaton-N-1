import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractersComponent } from './caracters.component';

describe('CaractersComponent', () => {
  let component: CaractersComponent;
  let fixture: ComponentFixture<CaractersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaractersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaractersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
