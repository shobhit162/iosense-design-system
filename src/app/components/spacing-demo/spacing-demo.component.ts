import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface SpacingExample {
  className: string;
  text: string;
}

@Component({
  selector: 'app-spacing-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './spacing-demo.component.html',
  styleUrl: './spacing-demo.component.scss'
})
export class SpacingDemoComponent {
  manualClass = '';
  customText = '';
  examples: SpacingExample[] = [];
  defaultText = 'Spacing Example';
  
  commonPresets = [
    'global-m-00',
    'global-m-01',
    'global-m-02',
    'global-m-03',
    'global-m-04',
    'global-m-05',
    'global-m-06',
    'global-m-07',
    'global-m-08',
    'global-m-09',
    'global-m-10',
    'global-m-11',
    'global-p-00',
    'global-p-01',
    'global-p-02',
    'global-p-03',
    'global-p-04',
    'global-p-05',
    'global-p-06',
    'global-p-07',
    'global-p-08',
    'global-p-09',
    'global-p-10',
    'global-p-11',
    'global-gap-00',
    'global-gap-01',
    'global-gap-02',
    'global-gap-03',
    'global-gap-04',
    'global-gap-05',
    'global-gap-06',
    'global-gap-07',
    'global-gap-08',
    'global-gap-09',
    'global-gap-10',
    'global-gap-11'
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
