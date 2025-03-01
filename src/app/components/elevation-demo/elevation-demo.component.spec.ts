import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationDemoComponent } from './elevation-demo.component';

describe('ElevationDemoComponent', () => {
  let component: ElevationDemoComponent;
  let fixture: ComponentFixture<ElevationDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElevationDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
