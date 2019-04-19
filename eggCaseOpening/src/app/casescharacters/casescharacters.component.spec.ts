import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasescharactersComponent } from './casescharacters.component';

describe('CasescharactersComponent', () => {
  let component: CasescharactersComponent;
  let fixture: ComponentFixture<CasescharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasescharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasescharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
