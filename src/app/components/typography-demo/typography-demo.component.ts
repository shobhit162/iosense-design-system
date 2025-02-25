import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TypographyExample {
  className: string;
  text: string;
}

@Component({
  selector: 'app-typography-demo',
  imports: [FormsModule, CommonModule],
  templateUrl: './typography-demo.component.html',
  styleUrl: './typography-demo.component.scss'
})

export class TypographyDemoComponent {
  manualClass = '';
  customText = '';
  examples: TypographyExample[] = [];
  defaultText = 'Hello, Faclon!';
  
  commonPresets = [
    'DisplayXLargeRegular',
    'DisplayLargeMedium',
    'DisplayMediumSemibold',
    'HeadingLargeRegular',
    'BodyLargeRegular',
    'BodyMediumMedium',
    'BodySmallSemibold'
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
