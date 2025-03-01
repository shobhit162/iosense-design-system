import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-borders-demo',
  imports: [CommonModule],
  templateUrl: './borders-demo.component.html',
  styleUrl: './borders-demo.component.scss'
})
export class BordersDemoComponent {
  borderWidths = ['none', 'thinner', 'thin', 'thick', 'thicker'];
  borderStyles = ['solid', 'dashed', 'dotted', 'double', 'none'];
  borderRadiuses = ['none', 'xsmall', 'small', 'medium', 'large', 'xlarge', '2xlarge', 'max'];
}
