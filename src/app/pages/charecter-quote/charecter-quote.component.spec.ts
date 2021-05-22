import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharecterQuoteComponent } from './charecter-quote.component';

describe('CharecterQuoteComponent', () => {
  let component: CharecterQuoteComponent;
  let fixture: ComponentFixture<CharecterQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharecterQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharecterQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
