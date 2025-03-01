import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordersDemoComponent } from './borders-demo.component';

describe('BordersDemoComponent', () => {
  let component: BordersDemoComponent;
  let fixture: ComponentFixture<BordersDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BordersDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BordersDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
