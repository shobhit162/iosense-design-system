import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface BorderExample {
  className: string;
  text: string;
}

@Component({
  selector: 'app-borders-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './borders-demo.component.html',
  styleUrl: './borders-demo.component.scss'
})
export class BordersDemoComponent {
  manualClass = '';
  customText = '';
  examples: BorderExample[] = [];
  defaultText = 'Border Example';
  
  commonPresets = [
    // Border Width Classes
    'global-bw-none',
    'global-bw-thinner',
    'global-bw-thin',
    'global-bw-thick',
    'global-bw-thicker',
    'global-bw-t-thin',
    'global-bw-r-thin',
    'global-bw-b-thin',
    'global-bw-l-thin',
    
    // Border Style Classes
    'global-bs-solid',
    'global-bs-dashed',
    'global-bs-dotted',
    'global-bs-double',
    'global-bs-none',
    
    // Border Radius Classes
    'global-br-none',
    'global-br-xsmall',
    'global-br-small',
    'global-br-medium',
    'global-br-large',
    'global-br-xlarge',
    'global-br-2xlarge',
    'global-br-max',
    
    // Individual Corner Border Radius
    'global-br-tl-medium',
    'global-br-tr-medium',
    'global-br-bl-medium',
    'global-br-br-medium',
    
    // Combined Corner Border Radius
    'global-br-t-medium',
    'global-br-b-medium',
    'global-br-l-medium',
    'global-br-r-medium'
  ];

  addClass() {
    if (this.manualClass) {
      this.examples.unshift({
        className: this.manualClass,
        text: this.customText
      });
      this.manualClass = '';
      this.customText = '';
    }
  }

  addPreset(preset: string) {
    this.examples.unshift({
      className: preset,
      text: this.defaultText
    });
  }

  removeExample(index: number) {
    this.examples.splice(index, 1);
  }
}
