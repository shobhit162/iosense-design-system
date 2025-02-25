import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyExamplesComponent } from './typography-examples.component';

describe('TypographyExamplesComponent', () => {
  let component: TypographyExamplesComponent;
  let fixture: ComponentFixture<TypographyExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypographyExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
