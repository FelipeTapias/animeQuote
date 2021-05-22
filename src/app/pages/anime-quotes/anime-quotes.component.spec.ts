import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeQuotesComponent } from './anime-quotes.component';

describe('AnimeQuotesComponent', () => {
  let component: AnimeQuotesComponent;
  let fixture: ComponentFixture<AnimeQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
