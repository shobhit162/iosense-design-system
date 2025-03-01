import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spacing-demo',
  imports: [CommonModule],
  templateUrl: './spacing-demo.component.html',
  styleUrl: './spacing-demo.component.scss'
})
export class SpacingDemoComponent {
  spacingSizes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'];
}
