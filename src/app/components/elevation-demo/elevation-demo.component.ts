import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ElevationExample {
  className: string;
  text: string;
}

@Component({
  selector: 'app-elevation-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './elevation-demo.component.html',
  styleUrl: './elevation-demo.component.scss'
})
export class ElevationDemoComponent {
  manualClass = '';
  customText = '';
  examples: ElevationExample[] = [];
  defaultText = 'Elevation Example';
  
  commonPresets = [
    'global-el-ultraLowRaised',
    'global-el-lowRaised',
    'global-el-midRaised',
    'global-el-highRaised',
    'global-el-ultraHighRaised',
    'global-el-ultraLowRaised-1',
    'global-el-ultraLowRaised-2',
    'global-el-ultraLowRaised-3',
    'global-el-lowRaised-1',
    'global-el-lowRaised-2',
    'global-el-lowRaised-3'
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
