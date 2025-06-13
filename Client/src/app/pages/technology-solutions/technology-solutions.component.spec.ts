import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologySolutionsComponent } from './technology-solutions.component';

describe('TechnologySolutionsComponent', () => {
  let component: TechnologySolutionsComponent;
  let fixture: ComponentFixture<TechnologySolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologySolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
