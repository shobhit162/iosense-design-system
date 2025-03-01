import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-elevation-demo',
  imports: [CommonModule],
  templateUrl: './elevation-demo.component.html',
  styleUrl: './elevation-demo.component.scss'
})
export class ElevationDemoComponent {
  elevationLevels = [
    'ultraLowRaised',
    'lowRaised',
    'midRaised',
    'highRaised',
    'ultraHighRaised'
  ];
}
